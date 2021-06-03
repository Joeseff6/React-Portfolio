import { useEffect, useState } from "react";
import Header from "../components/Header";
import Resume from "../assets/Files/ResumePDF.pdf";
import React from "react";

function Contact() {
  const [codewarsProfile, setCodeWarsProfile] = useState({});

  function getCodeWarsProfile() {
    fetch("https://www.codewars.com/api/v1/users/Joeseff6")
      .then((response) => response.json())
      .then((data) => setCodeWarsProfile(data));
  }

  useEffect(() => {
    try {
      getCodeWarsProfile();
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <>
      <Header heading="Contact Me" />
      <div className="row">
        <div className="col-5 linkBox m-auto mb-3">
          <h4 className="text-center mt-1">Ways to contact me:</h4>
          <p>
            <i className="fas fa-keyboard" /> Github:
            <a
              href="https://github.com/Joeseff6"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              https://github.com/Joeseff6
            </a>
          </p>
          <p>
            <i className="fas fa-user-tie"></i> LinkedIn:
            <a
              href="https://www.linkedin.com/in/joseph-soria-5a335845/"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              https://www.linkedin.com/in/joseph-soria-5a335845/
            </a>
          </p>
          <p>
            <i className="fas fa-envelope"></i> Email:
            <a href="mailto:josephsoria6@gmail.com"> josephsoria6@gmail.com</a>
          </p>
          <p>
            <i className="fas fa-phone"></i> Phone: (832) 657-9060
          </p>
        </div>
      </div>
      <Header heading="My Resume" />
      <div className="row">
        <div className="col-5 linkBox m-auto mt-2 mb-4 text-center">
          <a id="download" target="_blank" rel="noreferrer" href={Resume}>
            My Updated Resume
          </a>
        </div>
      </div>
      <Header heading="Code Wars!" />
      <div className="row">
        <div className="col-5 linkBox m-auto mb-3">
          <div className="row">
            <div className="col">
              <p className="mt-1 text-center">
                <i className="fas fa-shield-alt" /> Codewars Profile:
                <a
                  href="https://www.codewars.com/users/Joeseff6"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  https://www.codewars.com/users/Joeseff6
                </a>
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col text-center">
              <p>Username: Joeseff6</p>
              <p>Honor: {codewarsProfile.honor}</p>
              <p>
                Clan:{" "}
                {codewarsProfile.clan !== null
                  ? codewarsProfile.clan
                  : "Looking for a clan!"}
              </p>
              <p>
                {codewarsProfile.codeChallenges
                  ? "Kata completed: " +
                    codewarsProfile.codeChallenges.totalCompleted
                  : ""}
              </p>
            </div>
            <div className="col text-center">
              <p>My Ranks:</p>
              <p>
                {codewarsProfile.ranks
                  ? "Overall: " +
                    codewarsProfile.ranks.overall.name +
                    " / Score: " +
                    codewarsProfile.ranks.overall.score
                  : ""}
              </p>
              <p>
                {codewarsProfile.ranks
                  ? "Javascript: " +
                    codewarsProfile.ranks.languages.javascript.name +
                    " / Score: " +
                    codewarsProfile.ranks.languages.javascript.score
                  : ""}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;

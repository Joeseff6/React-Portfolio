import Header from "../components/Header";
import Resume from "../assets/Files/ResumePDF.pdf";

function Contact() {
  return (
    <>
      <Header heading="Contact Me" />
      <div className="row">
        <div className="col-5 linkBox m-auto mb-3">
          <h4 className="text-center">Ways to contact me:</h4>
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
        <div className="col-5 linkBox m-auto mb-3 text-center">
          <a id="download" target="_blank" rel="noreferrer" href={Resume}>
            My Updated Resume
          </a>
        </div>
      </div>
    </>
  );
}

export default Contact;

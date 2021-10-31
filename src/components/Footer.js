import "./Footer.css";
import Row from "react-bootstrap/Row";
import Resume from "../assets/files/JosephSoriaResume.pdf";

const Footer = () => {
  return (
    <Row className="footer align-items-center">
      <span className="text-center" style={{ fontWeight: "bolder" }}>
        Have an opportunity for me? Email me at{" "}
        <a href="mailto: josephsoria6@gmail.com" className="footer-link">josephsoria6@gmail.com</a>
        ,{" "}or download my resume{" "}
        <a href={Resume} target="_blank" rel="noreferrer" className="footer-link">
          here.
        </a>
      </span>
    </Row>
  );
};

export default Footer;

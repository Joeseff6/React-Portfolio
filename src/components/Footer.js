import Row from "react-bootstrap/Row";

const Footer = () => {
  return (
    <Row className="footer align-items-center">
      <span className="text-center" style={{fontWeight: "bolder"}}>
        Have an opportunity for me? Email me at{" "}
        <a href="mailto: josephsoria6@gmail.com">josephsoria6@gmail.com</a>!
      </span>
    </Row>
  );
};

export default Footer;

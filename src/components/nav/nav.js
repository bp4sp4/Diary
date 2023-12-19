import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import styles from "./nav.module.css";
function ColorSchemesExample() {
  return (
    <>
      <div className={styles.navbar}>
        <Navbar bg="light" data-bs-theme="light">
          <Navbar.Brand href="/">나의정보</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Navbar>
      </div>
    </>
  );
}

export default ColorSchemesExample;

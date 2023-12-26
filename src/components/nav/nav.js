import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import styles from "./nav.module.css";
function ColorSchemesExample() {
  return (
    <>
      <div className={styles.navbar}>
        <Navbar bg="light" data-bs-theme="light">
          <Navbar.Brand href="/LostArk-Open-API">나의정보</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/LostArk-Open-API/notice/notice">공지</Nav.Link>
            <Nav.Link href="#features">게임콘텐츠</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Navbar>
      </div>
    </>
  );
}

export default ColorSchemesExample;

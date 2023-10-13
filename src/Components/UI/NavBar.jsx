import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import logo from "../../assets/logo.png";

const NavBar = () => {
  //Returns NavBar when logged in
  //Need to look how to change links when not logged in
  return (
    <Navbar bg="light" className="d-flex justify-content-between px-3">
      <Navbar.Brand href="/">
        <img
          src={logo}
          className="h-25 d-inline-block"
          style={{ width: 100 }}
          alt="Logo"
        />{" "}
        Just Do It
      </Navbar.Brand>
      {/* Make color pill change depending on the active link */}
      <Nav variant="pills" defaultActiveKey="mylist">
        <Nav.Link href="/todolist" eventKey="mylist">
          My List
        </Nav.Link>
        <Nav.Item>
          <Nav.Link href="/pages/about" eventKey="about">
            About
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/pages/login" eventKey="login">
            Log In
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </Navbar>
  );
};

export default NavBar;

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


function Menu() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary" >
      <Container fluid style={{backgroundColor:"#f27" ,color:"#f00"}}>
        <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/" >Home</Nav.Link>
            <Nav.Link href="blogs" >Blog</Nav.Link>
            <Nav.Link href="contact" >Contact</Nav.Link>
            <Nav.Link href="Classcompone">Link</Nav.Link>
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="Classcomponent">Classcomponent</NavDropdown.Item>
              <NavDropdown.Item href="Counter">
                Counter
              </NavDropdown.Item>
              <NavDropdown.Item href="Functioncounter">
                Functioncounter
              </NavDropdown.Item>
              <NavDropdown.Item href="ExamplePoc">
                ExamplePoc
              </NavDropdown.Item>
              <NavDropdown.Item href="FunctionHook">
                FunctionHook
              </NavDropdown.Item>
              <NavDropdown.Item href="UseEffect">
                UseEffect
              </NavDropdown.Item>
              <NavDropdown.Item href="Layout">
                Layout
              </NavDropdown.Item>
              <NavDropdown.Item href="Myprops">
                Myprops
              </NavDropdown.Item>
              <NavDropdown.Item href="SampleLifecycleClass">
                SampleLifecycleClass
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="SampleReactClassComponent">
                SampleReactClassComponent
              </NavDropdown.Item>
              <NavDropdown.Item href="Usestate">
                Usestate
              </NavDropdown.Item>
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown> 
            <Nav.Link href="#" disabled>
              Link
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="/"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Menu;
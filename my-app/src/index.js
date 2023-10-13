import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import { Container, Image, Navbar, Nav, Row, Col } from 'react-bootstrap';

const TopMenu = () => (

  <Navbar bg="transparent" expand="lg" className="topMenu pt-3">

    <Container fluid className="justify-content-center">

      <Row className="justify-content-center">

        <Col>
          <Navbar.Brand href="#home" className="justify-content-end">
            <Image src={require('./logo.png')} width={200} />
          </Navbar.Brand>
        </Col>

        <Col>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-start">
            <Nav>
              <Nav.Link href="#" className="navText dottedBorder text-center">Store</Nav.Link>
              <Nav.Link href="#" className="navText dottedBorder text-center">Noio</Nav.Link>
              <Nav.Link href="#" className="navText dottedBorder text-center">Pueo</Nav.Link>
              <Nav.Link href="#" className="navText dottedBorder text-center">Ka&apos;iwa</Nav.Link>
              <Nav.Link href="#" className="navText dottedBorder text-center">Kikaha</Nav.Link>
              <Nav.Link href="#" className="navText dottedBorder text-center">&apos;Elepaio</Nav.Link>
              <Nav.Link href="#" className="navText dottedBorder text-center">About</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Col>

      </Row>

    </Container>

  </Navbar>

);

const BottomMenu = () => (

  <Container fluid className="bottomMenu mt-auto py-3 text-center justify-content-center">
      <h1 className="display-4 font-serif2" style={{fontFamily: "Domine, Times, serif"}}>
        We build canoes
      </h1>

      <p>
        ☝️This one is new. Click.
      </p>



  </Container>

);

const Kamanu = () => (
  <div className="d-flex flex-column min-vh-100">
    <TopMenu />
    <BottomMenu/>
  </div>
);

ReactDOM.render(<Kamanu />, document.getElementById('root'));

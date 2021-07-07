import logo from './cup.svg';
import './App.css';
import React, { useState } from 'react';
import { Container, Nav, Row, Col, Card, CardDeck, Carousel, Form, Button, Image, Alert, Modal } from 'react-bootstrap';
import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Cup } from 'react-bootstrap-icons';
import emailjs from 'emailjs-com';

function App() {



  return (
    <Router>
      <Container id="page-container">
        <Cup id="cup" height="50px" width="50px"></Cup>
        <Nav id="hauptmenu" className="justify-content-center mt-4 mb-4" defaultActiveKey="/home">
          <Nav.Item >
            <Nav.Link className="navlink" href="#startseite">Startseite</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className="navlink" href="#shop">Shop</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className="navlink" href="#uns">Über uns</Nav.Link>
          </Nav.Item>
        </Nav>

        <Switch>
          <Route exact path="/">
            <Startseite />
          </Route>
          <Route path="/startseite">
            <Startseite />
          </Route>
          <Route path="/shop">
            <Shop />
          </Route>
          <Route path="/uns">
            <Uns />
          </Route>
          <Route path="/minztee">
            <Formular />
          </Route>
          <Route path="/info">
            <Info />
          </Route>
        </Switch>
        <Footer></Footer>
      </Container>
    </Router>
  );
}
export default App;



function Startseite() {
  return (
    <Image src="1.png" fluid />

  );
}

function Shop() {
  return (
    <CardDeck>
      <Card>
        <Card.Img variant="top" src="1.png" />
        <Card.ImgOverlay>
          <Card.Title className="titleproduct"></Card.Title>
        </Card.ImgOverlay>
        <Card.Body>
          <Card.Title><h3>Preis:</h3> <br />
            <p class="productprice"> klein: 5.95 Fr. </p> <br />
            <p class="productprice">gross: 7.95 Fr. </p>
          </Card.Title>
          <Card.Text>

          </Card.Text>
          <Row>
            <Col></Col>
            <Col></Col>
            <Col></Col>
            <Col>
              <Button variant="outline-dark" class="buttonshop" href="#minztee">Kaufen</Button>
            </Col>
          </Row>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Erstellt von WinTea</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="2.png" />
        <Card.ImgOverlay>
          <Card.Title className="titleproduct"></Card.Title>
        </Card.ImgOverlay>
        <Card.Body>
          <Card.Title><h3>Preis:</h3> <br />
            <p class="productprice"> klein: 6.95 Fr. </p> <br />
            <p class="productprice">gross: 8.95 Fr. </p>
          </Card.Title>
          <Card.Text>

          </Card.Text>
          <Row>
            <Col></Col>
            <Col></Col>
            <Col></Col>
            <Col>
              <Button variant="outline-dark" class="buttonshop" href="#minztee">Kaufen</Button>
            </Col>
          </Row>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Erstellt von WinTea</small>
        </Card.Footer>
      </Card>
    </CardDeck>
  );
}

function Uns() {
  return (
    <h1>In Bearbeitung</h1>
    /*
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="hintergrund.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="hintergrund.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="hintergrund.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    */
  );
}

function Minztee() {
  return (
    <Row>
      <Col></Col>
      <Col>
        <Image src="TwintQRCode.PNG" rounded height="400px" width="300px" id="QRCode" />
      </Col>
      <Col></Col>
    </Row>


  );
}

function Formular() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_regywbn', 'contact_form', e.target, 'user_F7HWAWoHhe8o06LQVkabW')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  }

  return (
    <Form className="contact-form" onSubmit={sendEmail}>
      <Row>
        <Col>
          <h1>Bestellungsformular</h1>
        </Col>
      </Row>

      <Row>
        <Col>
          <Form.Group>
            <Form.Label>Vorname</Form.Label>
            <Form.Control type="text" name="vorname" placeholder="Normal text" />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group>
            <Form.Label>Nachname</Form.Label>
            <Form.Control type="text" name="nachname" placeholder="Normal text" />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Group>
            <Form.Label>Strasse mit Nr.</Form.Label>
            <Form.Control type="text" name="strasse" placeholder="Normal text" />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Group>
            <Form.Label>PLZ</Form.Label>
            <Form.Control type="text" name="plz" placeholder="Normal text" />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group>
            <Form.Label>Ortschaft</Form.Label>
            <Form.Control type="text" name="ortschaft" placeholder="Normal text" />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Tee wählen</Form.Label>
            <Form.Control name="tee" as="select">
              <option>Minztee</option>
              <option>Wintertee</option>
            </Form.Control>
          </Form.Group>
        </Col>
        <Col>
          <Form.Group controlId="exampleForm.SelectCustomHtmlSize">
            <Form.Label>Anzahl wählen</Form.Label>
            <Form.Control name="anzahl" as="select" htmlSize={3} custom>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Form.Control>
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Group as={Row}>
            <Form.Label as="legend" column sm={2}>
              Teepackung
      </Form.Label>
            <Col sm={10}>
              <Form.Check
                type="radio"
                label="gross"
                name="gross"
                id="formHorizontalRadios1"
              />
              <Form.Check
                type="radio"
                label="klein"
                name="klein"
                id="formHorizontalRadios2"
              />
            </Col>
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Group as={Row}>
            <Form.Label as="legend" column sm={2}>
              Zahlungsart
      </Form.Label>
            <Col sm={10}>
              <Form.Check
                type="radio"
                label="Twint"
                name="twint"
                id="formHorizontalRadios1"
              />
              <Form.Check
                type="radio"
                label="Auf Rechnung"
                name="rechnung"
                id="formHorizontalRadios2"
              />
            </Col>
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col>
          <input type="hidden" name="contact_number" />

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" name="user_email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
      </Form.Text>
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Bemerkung</Form.Label>
            <Form.Control as="textarea" name="message" rows={3} />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col>
          <Button variant="primary" type="submit" onClick={handleShow}>
            Absenden
    </Button>
        </Col>
      </Row>
      <Row>
        <p></p>
        <p></p>
        <p></p>
      </Row>
      <Row>
        <Col>
          <Alert variant="success">
            <Alert.Heading>Hallo Kunde</Alert.Heading>
            <p>
              Nach dem Sie auf Absenden gedrückt haben, wir Ihnen eine Bestätigungsmail geschickt.
              Bis die Mail ankommt, kann es einige Sekunden dauern. Je nach Zahlungsart, die Sie gewählt
              haben, wird Ihnen eine Email mit Rechnung oder TwintQR Code zugeschickt.Vielen Dank.
  </p>
            <hr />
            <p className="mb-0">
              Falls das Bestätigungsmail bei Ihnen nicht ankommt oder Sie sonstige Probleme haben,
              bitten wir Sie uns eine Mail an folgende Adresse zu schreiben: wintea8400@gmail.com
  </p>
          </Alert>
        </Col>
      </Row>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Lieber Kunde</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Ihre Bestellung wurde hiermit erfolgreich abgeschickt. Sie erhalten eine Bestätigung
          per Mail. Vielen Dank für ihren Einkauf und noch einen schönen Tag.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Okay</Button>
        </Modal.Footer>
      </Modal>

    </Form>
  );
}

function Info() {
  return (
    <Row>
      <Col>
        <Alert variant="success">
          <Alert.Heading>Hallo Kunde</Alert.Heading>
          <p>
            Nach dem Sie auf Absenden gedrückt haben, wir Ihnen eine Bestätigungsmail geschickt.
            Bis die Mail ankommt, kann es einige Sekunden dauern. Vielen Dank.
</p>
          <hr />
          <p className="mb-0">
            Falls das Bestätigungsmail bei Ihnen nicht ankommt oder Sie sonstige Probleme haben,
            bitten wir Sie uns eine Mail an folgende Adresse zu schreiben: wintea8400@gmail.com
</p>
        </Alert>
      </Col>
    </Row>
  );
}

function Footer() {

  return (
    <Row>
      <Col>
        <div>
          <div class="kontakt">
            <p></p>
            <label>Kontakt:</label>
            <ul>
              <li>wintea8400@gmail.com</li>
            </ul>

          </div>
        </div>
      </Col>
    </Row>
  )
}
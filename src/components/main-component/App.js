import './App.css';
import Navigation from '../navbar-component/navbar';
import Contact from '../contact-component/contact';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import { Button, Container, Row, Card, Col } from 'react-bootstrap';

function App() {
  let navigate = useNavigate();
  let isWindowSmall = (window.innerWidth < 600);
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Container fluid style={{ margin: '0', padding: '0' }} className='intro intro'>
              <div className='coverImage coverImage'>
                <a style={{ display: 'none' }} href='https://www.freepik.com/photos/ny'>Ny photo created by wirestock - www.freepik.com</a>
                <Row className='justify-content-center'>
                  <Col className='card-wrapper card-wrapper'>
                    <Card className='cover-card cover-card mr-auto'>
                      <Card.Title className='mb-3 firstTitle'>We Are Builders</Card.Title>
                      <Card.Title className='mb-3 secondTitle' style={{ fontSize: '40px' }}>We Will Build What You Desire</Card.Title>
                      <hr className='hr' />
                      <Button className='Intro-button' style={{ maxWidth: '200px' }} as={Link} to='contact' variant='dark'>Contact Us</Button>
                    </Card>
                  </Col>
                </Row>
              </div>
            </Container>
          }
        />
        <Route
          path="contact"
          element={<Contact onBackClick={() => navigate(-1)} />}
        />
      </Routes>
    </div>
  );
}

export default App;

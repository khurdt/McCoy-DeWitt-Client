import './App.css';
import Navigation from '../navbar-component/navbar';
import Contact from '../contact-component/contact';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import { Button, Container, Row, Card, Col } from 'react-bootstrap';

function App() {
  let navigate = useNavigate();
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Container fluid style={{ margin: '0', padding: '0' }} className='intro intro'>
              <div className='front-page-cover'>
                <Row className='justify-content-center'>
                  <Col className='card-wrapper card-wrapper' xs={6} sm={6} md={6}>
                    <Card className='cover-card cover-card m-auto'>
                      <Button style={{ maxWidth: '200px' }} as={Link} to='contact' variant='primary'>Contact Us</Button>
                    </Card>
                  </Col>
                  <Col></Col>
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

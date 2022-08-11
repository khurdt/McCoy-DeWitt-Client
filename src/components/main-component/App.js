import './App.css';
import Navigation from '../navbar-component/navbar';
import Contact from './contact-component/contact';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import { Button, Container, Row } from 'react-bootstrap';

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
            <Container fluid style={{ margin: '0', padding: '0' }}>
              <Row className='justify-content-center'>
                <Button style={{ maxWidth: '200px' }} as={Link} to='contact' variant='primary'>Contact Us</Button>
              </Row>
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

import React, { useState } from 'react';
import { Image } from 'cloudinary-react';
import { services } from '../servicesAPI';
import { InView } from 'react-intersection-observer';
import './App.css';
import Navigation from '../navbar-component/navbar';
import Contact from '../contact-component/contact';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import { Button, Container, Row, Card, Col } from 'react-bootstrap';

function App() {
  let navigate = useNavigate();
  const [pageActive, setPageActive] = useState('');
  const isWindowSmall = (window.innerWidth < 600);
  return (
    <div className="App">
      <Navigation pageActive={pageActive} setPageActive={setPageActive} />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Container fluid style={{ margin: '0', padding: '0' }} className='intro intro mb-5'>
              <div>
                <Image publicId='frontpage_omrxle' className='coverImage coverImage' />
                <Card className='cover-card cover-card mr-auto'>
                  <Card.Title className='mb-3 firstTitle'>Restoration</Card.Title>
                  <Card.Title className='mb-3 secondTitle' style={{ fontSize: '30px' }}>We Preserve What You Love <span><br /></span> With Honesty and Integrity</Card.Title>
                  <hr className='hr' />
                  <Button className='Intro-button' onClick={() => setPageActive('contact')} style={{ width: '200px' }} as={Link} to='contact' variant='dark'>Contact Us</Button>
                </Card>
              </div>
              <h3 className='m-4' style={{ textAlign: 'center' }}>Services</h3>
              <hr />
              <Row className='m-auto'>
                {services.map((s) => {
                  return (
                    <InView triggerOnce={true}>
                      {({ inView, ref, entry }) => (
                        <Col ref={ref} key={s._id} xs={12} sm={9} md={5} lg={4} className='m-auto'>
                          <Card className={`m-auto mb-4 mt-4 service-card service-card ${inView ? 'visible' : ''}`}>
                            <Image publicId={s.image} className='m-auto service-picture service-picture' />
                            <div className='service-title'>{s.title}</div>
                          </Card>
                        </Col>
                      )}
                    </InView>
                  )
                })}
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

import React, { useEffect, useState } from 'react';
import './App.css';
import Navigation from '../navbar-component/navbar';
import Contact from '../contact-component/contact';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import { Button, Container, Row, Card, Col } from 'react-bootstrap';
import Roof from '../../images/roof.jpg';
import Siding from '../../images/siding.jpg';
import Soffit from '../../images/soffit.jpg';
import Fascia from '../../images/fascia.jpg';
import Paint from '../../images/paint.jpg';
import Insurance from '../../images/insurance.jpg';
import Storm from '../../images/storm.jpg';
import Flooring from '../../images/flooring.jpg';


function App() {
  let navigate = useNavigate();
  const [pageActive, setPageActive] = useState('');
  const services = [
    {
      _id: 1,
      title: 'Storm Restoration',
      image: Storm,
      description: ''
    },
    {
      _id: 2,
      title: 'Insurance Negotiation',
      image: Insurance,
      description: ''
    },
    {

      _id: 3,
      title: 'Roofing',
      image: Roof,
      description: ''
    },
    {

      _id: 4,
      title: 'Flooring',
      image: Flooring,
      description: ''
    },
    {
      _id: 5,
      title: 'Siding',
      image: Siding,
      description: ''
    },
    {
      _id: 6,
      title: 'Soffit',
      image: Soffit,
      description: ''
    },
    {
      _id: 7,
      title: 'Fascia',
      image: Fascia,
      description: ''
    },
    {
      _id: 8,
      title: 'Paint',
      image: Paint,
      description: ''
    }
  ]
  const isWindowSmall = (window.innerWidth < 600);

  const frontPageLoading = services[7].image === undefined;

  return (
    <div className="App">
      <Navigation pageActive={pageActive} setPageActive={setPageActive} />
      {frontPageLoading ?
        <div className='load' style={{ marginTop: '200px' }}><div className='m-auto pt-5'><div className='loading'></div></div></div>
        :
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Container fluid style={{ margin: '0', padding: '0' }} className='intro intro mb-5'>
                <div className='coverImage coverImage'>
                  <a style={{ display: 'none' }} href='https://www.freepik.com/photos/ny'>Ny photo created by wirestock - www.freepik.com</a>
                  <Row className='justify-content-center'>
                    <Col style={isWindowSmall ? { marginTop: '150px' } : { marginTop: '250px' }}>
                      <Card className='cover-card cover-card mr-auto'>
                        <Card.Title className='mb-3 firstTitle'>We Restore</Card.Title>
                        <Card.Title className='mb-3 secondTitle' style={{ fontSize: '40px' }}>We Will Restore What You Love</Card.Title>
                        <hr className='hr' />
                        <Button className='Intro-button' onClick={() => setPageActive('contact')} style={{ maxWidth: '200px' }} as={Link} to='contact' variant='dark'>Contact Us</Button>
                      </Card>
                    </Col>
                  </Row>
                </div>
                <h3 className='m-4' style={{ textAlign: 'center' }}>Services</h3>
                <hr />
                <Row className='m-auto'>
                  {services.map((s) => {
                    return (
                      <Col key={s._id} xs={12} sm={9} md={5} lg={4} className='m-auto'>
                        <Card className='m-auto mb-2 mt-3 service-card' style={{ backgroundColor: 'black', color: 'white', width: '300px', height: '300px' }}>
                          <Card.Img className='m-auto service-picture service-picture' style={{ width: '290px', height: '290px' }} src={s.image} />
                          <div className='service-title'>{s.title}</div>
                        </Card>
                      </Col>
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
      }
    </div>
  );
}

export default App;

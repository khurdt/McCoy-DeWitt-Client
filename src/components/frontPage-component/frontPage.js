import React from 'react';
import './frontPage.css'
import { Image } from 'cloudinary-react';
import { services } from '../servicesAPI';
import { InView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';

import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';

import { ChevronsRight } from 'react-feather'

export default function FrontPage(props) {
  const { setPageActive, primaryColor, secondaryColor, setCreateProjectButton, setShowLogin, navigate, admin } = props;

  const handleCreateProject = () => {
    setCreateProjectButton(true);
    let user = localStorage.getItem('user');
    if (!user) {
      setShowLogin(true);
    } else if (user === admin) {
      navigate('admin');
      setPageActive('user');
    } else {
      navigate('profile');
      setPageActive('user');
    }
  }

  return (
    <>
      <Container fluid style={{ margin: '0', padding: '0' }} className='intro intro mb-5'>
        <div style={{ position: 'relative' }}>
          <div className='topfront-background'></div>
          <Image publicId='frontpage_omrxle' className='coverImage coverImage' />
          <Card className='cover-card cover-card mr-auto' style={{ borderColor: primaryColor }}>
            <div className='frontPage-cardBody'>
              <Card.Title className='mb-3 firstTitle'>Restoring Buildings in the South Plains <span>
                <ChevronsRight width={20} height={20} style={{ marginTop: '0px' }} color={primaryColor} />
              </span></Card.Title>
              <Card.Title className='mb-3 secondTitle' style={{ fontSize: '30px' }}>
                We Preserve What You Love
              </Card.Title>
              <Card.Title style={{ color: 'white' }}>With Honesty And Integrity</Card.Title>
              <hr className='hr' style={{ color: primaryColor }} />
              <Button
                className='Intro-button'
                // onClick={() => setPageActive('contact')} 
                onClick={handleCreateProject}
                style={{ width: '250px' }} variant='light'>Create A Project With Us</Button>
            </div>
          </Card>
        </div>
        <h3 className='m-4' style={{ textAlign: 'center' }}>Services</h3>
        <hr className='hr m-auto' style={{ color: primaryColor }} />
        <Row className='m-auto'>
          {services.map((s) => {
            return (
              <InView triggerOnce={true}>
                {({ inView, ref, entry }) => (
                  <Col ref={ref} key={s._id} xs={12} sm={9} md={5} lg={4} className='m-auto' style={{ minWidth: '300px', minHeight: '300px' }}>
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
    </>
  );
}


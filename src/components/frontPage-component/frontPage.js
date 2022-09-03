import React, { useState } from 'react';
import './frontPage.css'
import { Image } from 'cloudinary-react';
import { services } from '../servicesAPI';
import { InView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { Button, Container, Row, Card, Col } from 'react-bootstrap';
import { ChevronsRight } from 'react-feather'

export default function FrontPage(props) {
  const { setPageActive } = props;
  return (
    <>
      <Container fluid style={{ margin: '0', padding: '0' }} className='intro intro mb-5'>
        <div>
          <Image publicId='frontpage_omrxle' className='coverImage coverImage' />
          <Card className='cover-card cover-card mr-auto'>
            <Card.Title className='mb-3 firstTitle'>Restoration <span>
              <ChevronsRight width={20} height={20} color='white' />
            </span></Card.Title>
            <Card.Title className='mb-3 secondTitle' style={{ fontSize: '30px' }}>We Preserve What You Love With Honesty And Integrity</Card.Title>
            <hr className='hr' />
            <Button className='Intro-button' onClick={() => setPageActive('contact')} style={{ width: '200px' }} as={Link} to='contact' variant='light'>Contact Us</Button>
          </Card>
        </div>
        <h3 className='m-4' style={{ textAlign: 'center' }}>Services</h3>
        <hr style={{ marginRight: '20px', marginLeft: '20px' }} />
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

import React, { useState } from 'react';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Container, Row, Button, Col } from 'react-bootstrap';
import axios from 'axios';


export default function Contact() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const userInfo = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    message: message
  }

  const sendContactInfo = () => {
    const token = 'undefined';
    axios.post('https://mccoydewitt.herokuapp.com/contact', {
      name: (firstName + ' ' + lastName),
      email: email,
      message: message,
      headers: {
        'Access-Control-Allow-Headers': '*',
        'Access-Control-Allow-Methods': 'POST',
        'Access-Control-Allow-Origin': 'http://localhost:3000',
      }
    }).then((response) => {
      console.log(response);
    }).catch((error) => {
      console.log(error);
    });
  }

  return (
    <Container>
      <Row className='justify-content-center'>
        <Form style={{ maxWidth: '500px' }}>
          <FloatingLabel
            controlId="floatingInput"
            label='First Name'
            className="mb-3"
            onChange={(e) => setFirstName(e.target.value)}
          >
            < Form.Control type='text' placeholder='First Name' />
          </FloatingLabel >
          <FloatingLabel
            controlId="floatingInput"
            label='Last Name'
            className="mb-3"
            onChange={(e) => setLastName(e.target.value)}
          >
            < Form.Control type='text' placeholder='Last Name' />
          </FloatingLabel >
          <FloatingLabel
            controlId="floatingInput"
            label='Email Address'
            className="mb-3"
            onChange={(e) => setEmail(e.target.value)}
          >
            < Form.Control type='text' placeholder='Email Address' />
          </FloatingLabel >
          <Form.Group
            label='Message'
            className="mb-3"
            onChange={(e) => setMessage(e.target.value)}
          >
            <Form.Control as='textarea' rows={4} type='text' placeholder='Message' />
          </Form.Group>
          <Row className='justify-content-center'>
            <Button style={{ maxWidth: '300px' }} onClick={sendContactInfo} >Submit</Button>
          </Row>
        </Form>
      </Row>
    </Container>
  )
}

import React, { useState } from 'react';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Container, Row, Button, Col, Card } from 'react-bootstrap';
import axios from 'axios';


export default function Contact() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const sendContactInfo = () => {
    const token = 'undefined';
    axios.post('https://mccoydewitt.herokuapp.com/contact', {
      name: (firstName + ' ' + lastName),
      email: email,
      phone: phone,
      message: message
    }).then((response) => {
      console.log(response);
    }).catch((error) => {
      console.log(error);
    });
  }

  const handlePhoneInput = (e) => {
    const formattedPhoneNumber = formatPhoneNumber(e.target.value);
    setPhone(formattedPhoneNumber);
    console.log(formattedPhoneNumber);
  }

  const formatPhoneNumber = (value) => {
    if (!value) return value;
    const phoneNumber = value.replace(/[^\d]/g, '');
    const phoneNumberLength = phoneNumber.length;
    if (phoneNumberLength < 4) return phoneNumber;
    if (phoneNumberLength < 7) {
      return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
    }
    return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6, 10)}`
  }

  return (
    <Container>
      <Row className='justify-content-center'>
        <h5 className='m-2' style={{ textAlign: 'center', opacity: '0.7' }}>Drop us a line!</h5>
        <Form style={{ maxWidth: '500px' }}>
          <FloatingLabel
            controlId="floatingInput"
            label='First Name'
            className="mb-3">
            <Form.Control type='text' placeholder='First Name'
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)} />
          </FloatingLabel >
          <FloatingLabel
            controlId="floatingInput"
            label='Last Name'
            className="mb-3">
            <Form.Control
              type='text'
              placeholder='Last Name'
              value={lastName}
              onChange={(e) => setLastName(e.target.value)} />
          </FloatingLabel >
          <FloatingLabel
            controlId="floatingInput"
            label='Email Address'
            className="mb-3">
            < Form.Control
              type='text'
              placeholder='Email Address'
              value={email}
              onChange={(e) => setEmail(e.target.value)} />
          </FloatingLabel >
          <FloatingLabel
            controlId="floatingInput"
            label='Phone Number'
            className="mb-3">
            <Form.Control
              type='input'
              value={phone}
              onChange={(e) => handlePhoneInput(e)}
              placeholder='Phone Number' />
          </FloatingLabel >
          <Form.Group
            label='Message'
            className="mb-3">
            <Form.Control
              as='textarea'
              rows={4}
              placeholder='Message'
              value={message}
              onChange={(e) => setMessage(e.target.value)} />
          </Form.Group>
          <Row className='justify-content-center'>
            <Button style={{ maxWidth: '300px' }} onClick={sendContactInfo} >Submit</Button>
          </Row>
        </Form>
      </Row>
    </Container>
  )
}

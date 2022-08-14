import React, { useState } from 'react';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Container, Row, Button, FormGroup, InputGroup } from 'react-bootstrap';
import axios from 'axios';


export default function Contact() {
  const [validated, setValidated] = useState(false);
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  const setField = (field, value) => {
    setForm({
      ...form,
      [field]: value
    })
    if (!!errors[field]) {
      setErrors({
        ...errors,
        [field]: null
      })
    }
  }

  const sendContactInfo = () => {
    const { firstName, lastName, email, phone, message } = form
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

  const validateForm = () => {
    const { firstName, lastName, email, phone, message } = form
    const phoneNumberLength = phone.replace(/[^\d]/g, '').length
    const newErrors = {};

    if (!firstName || firstName === '') { newErrors.firstName = 'Please enter you first name' }
    else if (firstName.length > 15) { newErrors.firstName = 'Please enter shorter name' }
    if (!lastName || lastName === '') { newErrors.lastName = 'Please enter you last name' }
    else if (lastName.length > 15) { newErrors.lastName = 'Please enter shorter name' }
    if (!email || email === '') { newErrors.email = 'Please enter email' }
    else if (email.indexOf('@') === -1) { newErrors.email = 'Please enter valid email' }
    if (!phone || phone === '') { newErrors.phone = 'Please enter phone number' }
    else if (phoneNumberLength !== 10) { newErrors.phone = 'Please enter valid phone number' }
    if (!message || message === '') { newErrors.message = 'Please enter a message' }

    return newErrors

  }

  const handleSubmit = (event) => {
    let currentform = event.currentTarget;
    const formErrors = validateForm();
    if (currentform.checkValidity() === false || Object.keys(formErrors).length > 0) {
      event.preventDefault();
      event.stopPropagation();
      setErrors(formErrors);
    } else {
      event.preventDefault();
      setValidated(true);
      sendContactInfo();
    }
  };

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
        <Form noValidate validated={validated} onSubmit={handleSubmit} style={{ maxWidth: '500px' }}>
          {/* First Name */}
          <FormGroup controlId="firstName">
            <FloatingLabel
              controlId="floatingInput"
              label='First Name'
              className="mb-3">
              <Form.Control
                required
                value={form.firstName}
                isInvalid={!!errors.firstName}
                type='text'
                placeholder='First Name'
                onChange={(e) => setField('firstName', e.target.value)} />
              <Form.Control.Feedback type='invalid'>{errors.firstName}</Form.Control.Feedback>
            </FloatingLabel >
          </FormGroup>
          {/* Last Name */}
          <FormGroup controlId="lastName">
            <FloatingLabel
              controlId="floatingInput"
              label='Last Name'
              className="mb-3">
              <Form.Control
                required
                value={form.lastName}
                isInvalid={!!errors.lastName}
                type='text'
                placeholder='Last Name'
                onChange={(e) => setField('lastName', e.target.value)} />
              <Form.Control.Feedback type='invalid'>{errors.lastName}</Form.Control.Feedback>
            </FloatingLabel >
          </FormGroup>
          {/* Email */}
          <FormGroup controlId="email" >
            <FloatingLabel
              controlId="floatingInput"
              label='Email Address'
              className="mb-3">
              < Form.Control
                required
                value={form.email}
                isInvalid={!!errors.email}
                type='text'
                placeholder='Email Address'
                onChange={(e) => setField('email', e.target.value)} />
              <Form.Control.Feedback type='invalid'>{errors.email}</Form.Control.Feedback>
            </FloatingLabel >
          </FormGroup>
          {/* Phone Number */}
          <FormGroup controlId='phone'>
            <FloatingLabel
              controlId="floatingInput"
              label='Phone Number'
              className="mb-3">
              <Form.Control
                type='input'
                required
                value={form.phone}
                isInvalid={!!errors.phone}
                onChange={(e) => setField('phone', formatPhoneNumber(e.target.value))}
                placeholder='Phone Number' />
              <Form.Control.Feedback type='invalid'>{errors.phone}</Form.Control.Feedback>
            </FloatingLabel >
          </FormGroup>
          {/* Message */}
          <Form.Group
            label='Message'
            className="mb-3"
            controlId='message'>
            <Form.Control
              required
              value={form.message}
              isInvalid={!!errors.message}
              as='textarea'
              rows={4}
              placeholder='Message'
              onChange={(e) => setField('message', e.target.value)} />
            <Form.Control.Feedback type='invalid'>{errors.message}</Form.Control.Feedback>
          </Form.Group>
          <Row className='justify-content-center'>
            <Button type='submit' style={{ maxWidth: '300px' }}>Submit</Button>
          </Row>
        </Form>
      </Row>
    </Container>
  )
}

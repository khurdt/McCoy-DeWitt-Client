import './contact.css';
import { Image } from 'cloudinary-react';
import React, { useState } from 'react';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Container, Row, Button, FormGroup, Col, Card } from 'react-bootstrap';
import axios from 'axios';
import { Wind, Send } from 'react-feather';
// import Snackbar from '../snackbar-component/snackbar';


export default function Contact() {
    const [validated, setValidated] = useState(false);
    const [form, setForm] = useState({});
    const [errors, setErrors] = useState({});
    const [emailSent, setEmailSent] = useState(false);
    const [emailSending, setEmailSending] = useState(false);
    const [emailMessage, setEmailMessage] = useState({
        title: 'Email Sent!',
        message: 'Thank you for contacting us, we will get back to you shortly.',
        error: false
    })
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
        setEmailSending(true);
        const { firstName, lastName, email, phone, message } = form;

        axios.post(`https://polar-tor-24509.herokuapp.com/contact`, {
            name: (firstName + ' ' + lastName),
            email: email,
            phone: phone,
            message: message,
        })
            .then((response) => {
                console.log(response);
                setEmailSending(false);
                setEmailSent(true);
            })
            .catch(function (error) {
                console.log(error);
                setEmailSending(false);
                setEmailSent(true);
                setEmailMessage({
                    title: 'Email failed to send',
                    message: 'We apologize, Please try again at another time',
                    error: true
                })
            });
    };

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
        <>
            <div>
                <Card className='contactIntro contactIntro m-auto'>
                    <Card.Title className='m-auto' style={{ color: 'white' }}>Contact Us</Card.Title>
                </Card>
                <Image publicId='contact_bxwt4y' className='contactImage contactImage' />
            </div>
            <div className='mt-4 mb-5'>
                {(emailSent) ?
                    <Row className='justify-content-center mt-5 mb-5' style={{ height: '460px' }}>
                        <Card className='p-3' style={{ borderColor: '#2ab400', width: '300px', height: 'fit-content' }}>
                            {emailMessage.error ?
                                <Card.Title className='m-auto'>
                                    {emailMessage.title}
                                </Card.Title>
                                :
                                <Card.Title className='m-auto'>{emailMessage.title}
                                    <Wind
                                        style={{ width: '20px', height: '20px', paddingLeft: '5px' }}
                                        alt='wind icon'
                                    />
                                    <Send
                                        style={{ width: '20px', height: '20px' }}
                                        alt='send icon'
                                    />
                                </Card.Title>
                            }
                            <Card.Text className='p-4'>{emailMessage.message}</Card.Text>
                        </Card>
                    </Row>
                    :
                    (emailSending) ?
                        <div style={{ height: '460px' }}>
                            <div className='load'>
                                <div className='m-auto pt-5'>
                                    <div className='loading'>
                                    </div>
                                </div>
                            </div>
                        </div>
                        :
                        <Container>
                            <Row className='justify-content-center'>
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
                                        <Button type='submit' variant='dark' style={{ maxWidth: '300px' }}>
                                            Send <Send
                                                style={{ width: '20px', height: '20px' }}
                                                alt='send icon'
                                            /></Button>
                                    </Row>
                                </Form>
                            </Row>
                        </Container>
                }
            </div>
        </>
    )
}


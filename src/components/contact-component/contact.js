import './contact.css';
import { Image } from 'cloudinary-react';
import React, { useState } from 'react';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Container, Row, Button, FormGroup, Col, Card } from 'react-bootstrap';
import axios from 'axios';
import { Wind, Send, AlertCircle } from 'react-feather';
import Snackbar from '../snackbar-component/snackbar';


export default function Contact() {
    const [loading, setLoading] = useState(false);
    const [show, setShow] = useState('initial');
    const [emailMessage, setEmailMessage] = useState('');

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState(undefined);
    const [message, setMessage] = useState('');

    const [firstNameErr, setFirstNameErr] = useState('');
    const [lastNameErr, setLastNameErr] = useState('');
    const [emailErr, setEmailErr] = useState('');
    const [phoneErr, setPhoneErr] = useState('');
    const [messageErr, setMessageErr] = useState('');

    const validate = () => {
        const phoneNumberLength = phone.replace(/[^\d]/g, '').length
        let isReq = true;
        if (!firstName) {
            setFirstNameErr('required');
            isReq = false;
        }
        if (!lastName) {
            setLastNameErr('required');
            isReq = false;
        }
        if (!email) {
            setEmailErr('required');
            isReq = false;
        } else if (email.indexOf('@') === -1) {
            setEmailErr('invalid');
            isReq = false;
        }
        if (phoneNumberLength !== 10 || phone !== '' || phoneNumberLength !== 0) {
            setPhoneErr('invalid');
            isReq = false;
        }
        if (!message) {
            setMessageErr('enter a message');
            isReq = false;
        }
        return isReq;
    }

    const sendContactInfo = (e) => {
        const isReq = validate();
        console.log(isReq);
        if (isReq) {
            setLoading(true);
            setShow(true);
            axios.post(`https://polar-tor-24509.herokuapp.com/contact`, {
                name: (firstName + ' ' + lastName),
                email: email,
                phone: phone,
                message: message,
            })
                .then((response) => {
                    console.log(response);
                    setLoading(false);
                    setEmailMessage('Email Sent! Thank you.');
                })
                .catch(function (error) {
                    console.log(error);
                    setLoading(false);
                    setEmailMessage('Email failed to send. Please try another time.');
                });
        }
    };

    const handlePhoneNumber = (value) => {
        let formattedNumber = formatPhoneNumber(value);
        setPhone(formattedNumber)
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
        <>
            <div>
                <Card className='contactIntro contactIntro m-auto'>
                    <Card.Title className='m-auto' style={{ color: 'white' }}>Contact Us</Card.Title>
                </Card>
                <Image publicId='contact_bxwt4y' className='contactImage contactImage' />
            </div>
            <div className='mt-4 mb-5'>
                <Container className='mb-5'>
                    <Row className='justify-content-center'>
                        <Form style={{ maxWidth: '500px' }}>
                            {/* First Name */}
                            <Form.Group>
                                <FloatingLabel
                                    label='First Name'
                                    className="mb-3">
                                    <Form.Control value={firstName} placeholder='First Name' type='text' onChange={e => setFirstName(e.target.value)} />
                                    {firstNameErr && <p style={{ color: 'red', fontSize: '12px', position: 'absolute', right: '3%', top: '35%' }}><AlertCircle width={20} height={20} style={{ color: 'red' }} /></p>}
                                    {firstNameErr && <p style={{ color: 'red', fontSize: '12px', position: 'absolute', right: '1%', top: '75%' }}>{firstNameErr}</p>}
                                </FloatingLabel>
                            </Form.Group>
                            {/* Last Name */}
                            <Form.Group>
                                <FloatingLabel
                                    label='Last Name'
                                    className="mb-3">
                                    <Form.Control
                                        placeholder='Last Name'
                                        type='text'
                                        onChange={e => setLastName(e.target.value)}
                                        value={lastName}
                                    />
                                    {lastNameErr && <p style={{ color: 'red', fontSize: '12px', position: 'absolute', right: '3%', top: '35%' }}><AlertCircle width={20} height={20} style={{ color: 'red' }} /></p>}
                                    {lastNameErr && <p style={{ color: 'red', fontSize: '12px', position: 'absolute', right: '1%', top: '75%' }}>{lastNameErr}</p>}
                                </FloatingLabel>
                            </Form.Group>
                            {/* Email */}
                            <Form.Group >
                                <FloatingLabel
                                    label='Email Address'
                                    className="mb-3">
                                    <Form.Control
                                        value={email}
                                        type='text'
                                        placeholder='Email Address'
                                        onChange={(e) => setEmail(e.target.value)} />
                                    {emailErr && <p style={{ color: 'red', fontSize: '12px', position: 'absolute', right: '3%', top: '35%' }}><AlertCircle width={20} height={20} style={{ color: 'red' }} /></p>}
                                    {emailErr && <p style={{ color: 'red', fontSize: '12px', position: 'absolute', right: '1%', top: '75%' }}>{emailErr}</p>}
                                </FloatingLabel >
                            </Form.Group>
                            {/* Phone Number */}
                            <Form.Group >
                                <FloatingLabel
                                    label='Phone Number'
                                    className="mb-3">
                                    <Form.Control
                                        value={phone}
                                        type='input'
                                        onChange={(e) => handlePhoneNumber(e.target.value)}
                                        placeholder='Phone Number' />
                                    {phoneErr && <p style={{ color: 'red', fontSize: '12px', position: 'absolute', right: '3%', top: '35%' }}><AlertCircle width={20} height={20} style={{ color: 'red' }} /></p>}
                                    {phoneErr && <p style={{ color: 'red', fontSize: '12px', position: 'absolute', right: '1%', top: '75%' }}>{phoneErr}</p>}
                                </FloatingLabel >
                            </Form.Group>
                            {/* Message */}
                            <Form.Group className='mb-3'>
                                <Form.Control
                                    value={message}
                                    as='textarea'
                                    rows={4}
                                    placeholder='Message'
                                    onChange={(e) => setMessage(e.target.value)} />
                                <div>
                                    {messageErr && <p style={{ color: 'red', fontSize: '12px' }}>{messageErr}</p>}
                                </div>

                            </Form.Group>
                            <Button type='submit' onClick={sendContactInfo} variant='dark' style={{ width: '300px', position: 'absolute', left: '50%', transform: 'translateX(-50%)' }}>
                                Send <Send
                                    style={{ width: '20px', height: '20px' }}
                                    alt='send icon'
                                /></Button>
                        </Form>
                    </Row>
                </Container>
            </div >
            <div style={{ height: '40px' }}></div>
            <Snackbar message={emailMessage} show={show} setShow={setShow} loading={loading} />
        </>
    )

}


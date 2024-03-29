import './contact.css';
import { Image } from 'cloudinary-react';
import React, { useState, useEffect, useRef } from 'react';

import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';

import { Send } from 'react-feather';
import FormAlert from '../formAlert-component/formAlert';
import { sendContactInfo } from '../servicesAPI';

export default function Contact(props) {
    const { primaryColor, secondaryColor, setSnackBarInfo } = props;
    const formRef = useRef(null);
    const [form, setForm] = useState({});
    const [errors, setErrors] = useState({});

    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'instant'
        });
    }, []);

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

    const handleReset = () => {
        formRef.current.reset();
        setForm({
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            message: ''
        });
    }

    const validate = () => {
        let { firstName, lastName, email, phone, message } = form;

        const newErrors = {};
        let isReq = true;
        if (!firstName) {
            newErrors.firstName = 'required'
            isReq = false;
        }
        if (!lastName) {
            newErrors.lastName = 'required'
            isReq = false;
        }
        if (!email) {
            newErrors.email = 'required'
            isReq = false;
        } else if (email.indexOf('@') === -1) {
            newErrors.email = 'invalid'
            isReq = false;
        }
        if (phone !== undefined) {
            const phoneNumberLength = form.phone.replace(/[^\d]/g, '').length
            if (phoneNumberLength > 0 && phoneNumberLength < 10) {
                newErrors.phone = 'invalid'
                isReq = false;
            }
        }
        if (!message) {
            newErrors.message = 'required'
            isReq = false;
        }
        setErrors(newErrors);
        return isReq;
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
            <div style={{ position: 'relative' }}>
                <div className='topfront-background'></div>
                <Card className='contactIntro contactIntro m-auto' style={{ borderColor: primaryColor }}>
                    <div className='contactIntro-body'>
                        <Card.Title className='m-auto' style={{ color: 'white' }}>Contact Us</Card.Title>
                    </div>
                </Card>
                <Image publicId='contact_bxwt4y' className='contactImage contactImage' />
            </div>
            <div className='mt-4 mb-5'>
                <Container className='mb-5'>
                    <Row className='justify-content-center'>
                        <Form
                            ref={formRef}
                            style={{ maxWidth: '500px' }}>
                            {/* First Name */}
                            <Form.Group>
                                <FloatingLabel
                                    label='First Name'
                                    className="mb-3">
                                    <Form.Control
                                        value={form.firstName}
                                        placeholder='First Name *' type='text'
                                        onChange={e => { setField('firstName', e.target.value); (errors.firstName) && validate() }} />
                                    {(errors.firstName) && <FormAlert message={errors.firstName} type={'error'} />}
                                </FloatingLabel>
                            </Form.Group>
                            {/* Last Name */}
                            <Form.Group>
                                <FloatingLabel
                                    label='Last Name'
                                    className="mb-3">
                                    <Form.Control
                                        value={form.lastName}
                                        placeholder='Last Name'
                                        type='text'
                                        onChange={e => { setField('lastName', e.target.value); (errors.lastName) && validate() }}
                                    />
                                    {(errors.lastName) && <FormAlert message={errors.lastName} type={'error'} />}
                                </FloatingLabel>
                            </Form.Group>
                            {/* Email */}
                            <Form.Group >
                                <FloatingLabel
                                    label='Email Address'
                                    className="mb-3">
                                    <Form.Control
                                        value={form.email}
                                        type='text'
                                        placeholder='Email Address'
                                        onChange={(e) => { setField('email', e.target.value); (errors.email) && validate() }} />
                                    {(errors.email) && <FormAlert message={errors.email} type={'error'} />}
                                </FloatingLabel >
                            </Form.Group>
                            {/* Phone Number */}
                            <Form.Group >
                                <FloatingLabel
                                    label='Phone Number'
                                    className="mb-3">
                                    <Form.Control
                                        value={form.phone}
                                        type='input'
                                        onChange={(e) => { setField('phone', formatPhoneNumber(e.target.value)); (errors.phone) && validate() }}
                                        placeholder='Phone Number (optional)' />
                                    {(errors.phone) && <FormAlert message={errors.phone} type={'error'} />}
                                </FloatingLabel >
                            </Form.Group>
                            {/* Message */}
                            <Form.Group className='mb-3'>
                                <div style={{ position: 'relative' }}>
                                    <Form.Control
                                        style={{ padding: '20px' }}
                                        value={form.message}
                                        as='textarea'
                                        rows={4}
                                        placeholder='Message'
                                        onChange={(e) => { setField('message', e.target.value); (errors.message) && validate() }} />
                                    {(errors.message) && <FormAlert message={errors.message} type={'error'} />}
                                </div>
                            </Form.Group>
                            <Button
                                type='submit'
                                onClick={(event) => sendContactInfo(event, form, validate, handleReset, setSnackBarInfo)}
                                style={{ width: '300px', position: 'absolute', left: '50%', marginLeft: '-150px', backgroundColor: secondaryColor }}>
                                Send <Send
                                    style={{ width: '20px', height: '20px', color: primaryColor }}
                                    alt='send icon'
                                /></Button>
                        </Form>
                    </Row>
                </Container>
            </div >
            <div style={{ height: '40px' }}></div>
        </>
    )

}


import React, { useState, useRef } from 'react';
import { Container, Row, Button, Modal, Form, FloatingLabel, Col } from 'react-bootstrap';
import axios from 'axios';
import { LogIn, Send, UserPlus } from 'react-feather';
import FormAlert from '../formAlert-component/formAlert';
import './login.css';

export default function Login(props) {
    const { showLogin, setShowLogin, setSnackBarInfo, snackbarBarInfo, onLoggedIn } = props;
    const handleClose = () => setShowLogin(false);
    const [notRegistered, setNotRegistered] = useState(false);
    const formRef = useRef(null);
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

    const validate = () => {
        let { firstName, lastName, email, phone, username, password } = form;

        const newErrors = {};
        let isReq = true;
        if (notRegistered === true) {
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
                    newErrors.phone = '*invalid'
                    isReq = false;
                }
            }
            if (!username) {
                newErrors.username = 'required';
                isReq = false;
            } else if (username.length < 2) {
                newErrors.username = 'must be longer';
                isReq = false;
            }
            if (!password) {
                newErrors.password = 'required';
                isReq = false;
            } else if (password.length < 6) {
                newErrors.password = 'must be longer';
                isReq = false;
            }
        } else {
            if (!username) {
                newErrors.username = 'required';
                isReq = false;
            } else if (username.length < 2) {
                newErrors.username = 'must be longer';
                isReq = false;
            }
            if (!password) {
                newErrors.password = 'required';
                isReq = false;
            } else if (password.length < 6) {
                newErrors.password = 'must be longer';
                isReq = false;
            }
        }
        setErrors(newErrors);
        return isReq;
    }

    const login = () => {
        const { username, password } = form;
        const isReq = validate();
        console.log(isReq);
        if (isReq) {
            setSnackBarInfo({
                message: 'Attempting to Login',
                loading: true,
                show: 'true'
            });
            axios.post(`https://polar-tor-24509.herokuapp.com/login`, {
                username: username,
                password: password
            })
                .then((response) => {
                    const data = response.data;
                    onLoggedIn(data);
                    setSnackBarInfo({
                        show: true,
                        message: 'Success',
                        loading: false
                    });
                    setShowLogin(false);
                })
                .catch(function (error) {
                    console.log(error);
                    setSnackBarInfo({
                        show: true,
                        message: (error.message) ? error.message : 'Failed to Login',
                        loading: false
                    });
                });
        }
    };

    const register = () => {
        const { firstName, lastName, email, phone, username, password } = form;
        const isReq = validate();
        console.log(isReq);
        if (isReq) {
            setSnackBarInfo({
                message: 'Registering Your Account',
                loading: true,
                show: 'true'
            });
            axios.post(`https://polar-tor-24509.herokuapp.com/users`, {
                name: (firstName + ' ' + lastName),
                email: email,
                phone: phone,
                username: username,
                password: password
            })
                .then((response) => {
                    setSnackBarInfo({
                        show: true,
                        message: 'Success, now Logging in',
                        loading: false
                    });
                    login();
                })
                .catch(function (error) {
                    console.log(error);
                    setSnackBarInfo({
                        show: true,
                        message: (error.message) ? error.message : 'Failed to Register, Please Try Another Time',
                        loading: false
                    });
                });
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
            <Modal show={showLogin} onHide={handleClose} className='details-modal .modal-content'>
                <Modal.Header closeButton>
                    {notRegistered ?
                        <Modal.Title>Register</Modal.Title>
                        :
                        <Modal.Title>Login</Modal.Title>
                    }
                </Modal.Header>
                <Modal.Body>
                    <div className='mt-4 mb-5'>
                        <Container className='mb-5'>
                            <Row className='justify-content-center'>
                                {notRegistered ?
                                    <Form
                                        ref={formRef}
                                        style={{ maxWidth: '500px' }}>
                                        <div style={{ display: 'flex', gridGap: '5px' }}>
                                            <Form.Group>
                                                <FloatingLabel
                                                    label='First Name'
                                                    className="mb-3">
                                                    <Form.Control
                                                        value={form.firstName}
                                                        placeholder='First Name' type='text'
                                                        onChange={e => { setField('firstName', e.target.value); (errors.firstName) && validate() }} />
                                                    {(errors.firstName) && <FormAlert message={errors.firstName} type={'error'} />}
                                                </FloatingLabel>
                                            </Form.Group>
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
                                        </div>
                                        <Form.Group >
                                            <FloatingLabel
                                                label='Email Address'
                                                className="mb-3">
                                                <Form.Control
                                                    value={form.email}
                                                    type='email'
                                                    placeholder='Email Address'
                                                    onChange={(e) => { setField('email', e.target.value); (errors.email) && validate() }} />
                                                {(errors.email) && <FormAlert message={errors.email} type={'error'} />}
                                            </FloatingLabel >
                                        </Form.Group>
                                        <Form.Group >
                                            <FloatingLabel
                                                label='Phone (optional)'
                                                className="mb-3">
                                                <Form.Control
                                                    value={form.phone}
                                                    type='input'
                                                    onChange={(e) => { setField('phone', formatPhoneNumber(e.target.value)); (errors.phone) && validate() }}
                                                    placeholder='Phone (optional)' />
                                                {(errors.phone) && <FormAlert message={errors.phone} type={'error'} />}
                                            </FloatingLabel >
                                        </Form.Group>
                                        <Form.Group >
                                            <FloatingLabel
                                                label='Username'
                                                className="mb-3">
                                                <Form.Control
                                                    value={form.username}
                                                    type='text'
                                                    placeholder='Username'
                                                    onChange={(e) => { setField('username', e.target.value); (errors.username) && validate() }} />
                                                {(errors.username) && <FormAlert message={errors.username} type={'error'} />}
                                            </FloatingLabel >
                                        </Form.Group>
                                        <Form.Group >
                                            <FloatingLabel
                                                label='Password'
                                                className="mb-3">
                                                <Form.Control
                                                    value={form.password}
                                                    type='password'
                                                    placeholder='Password'
                                                    onChange={(e) => { setField('password', e.target.value); (errors.password) && validate() }} />
                                                {(errors.password) && <FormAlert message={errors.password} type={'error'} />}
                                            </FloatingLabel >
                                        </Form.Group>
                                    </Form>
                                    :
                                    <Form
                                        ref={formRef}
                                        style={{ maxWidth: '500px' }}>
                                        <Form.Group >
                                            <FloatingLabel
                                                label='Username'
                                                className="mb-3">
                                                <Form.Control
                                                    value={form.username}
                                                    type='text'
                                                    placeholder='Username'
                                                    onChange={(e) => { setField('username', e.target.value); (errors.username) && validate() }} />
                                                {(errors.username) && <FormAlert message={errors.username} type={'error'} />}
                                            </FloatingLabel >
                                        </Form.Group>
                                        <Form.Group >
                                            <FloatingLabel
                                                label='Password'
                                                className="mb-3">
                                                <Form.Control
                                                    value={form.password}
                                                    type='password'
                                                    placeholder='Password'
                                                    onChange={(e) => { setField('password', e.target.value); (errors.password) && validate() }} />
                                                {(errors.password) && <FormAlert message={errors.password} type={'error'} />}
                                            </FloatingLabel >
                                        </Form.Group>
                                    </Form>
                                }
                                <Row className='justify-content-md-center'>
                                    {notRegistered ?
                                        <Button onClick={register} variant='dark' style={{ width: '300px', textAlign: 'center' }}>
                                            Register <UserPlus
                                                style={{ width: '20px', height: '20px' }}
                                                alt='send icon'
                                            /></Button>
                                        :
                                        <Button onClick={login} variant='dark' style={{ width: '300px', textAlign: 'center' }}>
                                            Login <LogIn
                                                style={{ width: '20px', height: '20px' }}
                                                alt='send icon'
                                            /></Button>
                                    }
                                </Row>
                            </Row>
                        </Container>
                    </div >
                </Modal.Body>
                <Modal.Footer>
                    {notRegistered ?
                        <Button style={{ marginRight: 'auto' }} variant="dark" onClick={() => setNotRegistered(false)}>
                            Login
                        </Button>
                        :
                        <Button style={{ marginRight: 'auto' }} variant="dark" onClick={() => setNotRegistered(true)}>
                            Register
                        </Button>
                    }
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
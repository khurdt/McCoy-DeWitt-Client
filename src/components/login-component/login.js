import React, { useState, useRef } from 'react';
import { Container, Row, Button, Modal, Form, FloatingLabel, Col } from 'react-bootstrap';
import axios from 'axios';
import { ArrowLeft, ArrowRight, LogIn, Send, UserPlus } from 'react-feather';
import FormAlert from '../formAlert-component/formAlert';
import './login.css';
import Snackbar from '../snackbar-component/snackbar';

export default function Login(props) {
    const { showLogin, setShowLogin, setSnackBarInfo, snackBarInfo, onLoggedIn, setShowNavBar, primaryColor, secondaryColor, navigate } = props;
    const [pageNumber, setPageNumber] = useState(0);
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
        let { firstName, lastName, email, phone, username, password, company } = form;

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
                show: 'true',
                message: 'Logging In',
                loading: true
            });
            axios.post(`https://polar-tor-24509.herokuapp.com/login`, {
                username: username,
                password: password
            })
                .then((response) => {
                    const data = response.data;
                    onLoggedIn(data);
                    setSnackBarInfo({
                        show: 'true',
                        message: 'Successfully Logged In',
                        loading: false
                    });
                    setShowLogin(false);
                    setShowNavBar(false);
                    navigate('profile');
                })
                .catch(function (error) {
                    console.log(error);
                    setSnackBarInfo({
                        show: 'true',
                        message: (error.message.includes('400')) ? 'incorrect credentials' : 'Failed to Login',
                        loading: false
                    });
                });
        }
    };

    const register = () => {
        if (errors.firstName || errors.lastName || errors.email) {
            setPageNumber(0);
        } else if (errors.address || errors.phone || errors.company) {
            setPageNumber(1);
        } else if (errors.username || errors.password) {
            setPageNumber(2);
        }
        const { firstName, lastName, email, phone, username, password, company } = form;
        const isReq = validate();
        console.log(isReq);
        if (isReq) {
            setSnackBarInfo({
                show: 'true',
                message: 'Registering Account',
                loading: true
            });
            axios.post(`https://polar-tor-24509.herokuapp.com/users`, {
                firstName: firstName,
                lastName: lastName,
                email: email,
                phone: phone,
                username: username,
                password: password,
                company: company
            })
                .then((response) => {
                    setSnackBarInfo({
                        show: 'true',
                        message: 'Successfully Registered, Logging in',
                        loading: false
                    });
                    login();
                    setShowLogin(false);
                })
                .catch(function (error) {
                    console.log(error);
                    setSnackBarInfo({
                        show: 'true',
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
            {(showLogin && snackBarInfo.show !== 'initial') &&
                <Snackbar snackBarInfo={snackBarInfo} setSnackBarInfo={setSnackBarInfo} primaryColor={primaryColor} secondaryColor={secondaryColor} />
            }
            <Modal show={showLogin} onHide={handleClose} className='details-modal .modal-content'>
                <Modal.Header closeButton>
                    {notRegistered ?
                        <Modal.Title>Register</Modal.Title>
                        :
                        <Modal.Title>Sign In</Modal.Title>
                    }
                </Modal.Header>
                <Modal.Body>
                    <div className='mt-4 mb-5'>
                        <Container className='mb-5'>
                            <Row className='justify-content-center'>
                                {notRegistered &&
                                    <>
                                        {pageNumber === 0 ?
                                            <>
                                                <Form
                                                    ref={formRef}
                                                    style={{ maxWidth: '500px' }}>
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
                                                    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                                                        <Button style={{ width: '100px', margin: 'auto', backgroundColor: secondaryColor }} onClick={() => setPageNumber(1)}>
                                                            Next
                                                            <ArrowRight style={{ width: '20px', height: '20px', paddingLeft: '5px', color: primaryColor }} />
                                                        </Button>
                                                    </div>
                                                </Form>
                                            </>
                                            :
                                            (pageNumber === 1) ?
                                                <>
                                                    <Form
                                                        ref={formRef}
                                                        style={{ maxWidth: '500px' }}>
                                                        <Form.Group >
                                                            <FloatingLabel
                                                                label='Company Name (optional)'
                                                                className="mb-3">
                                                                <Form.Control
                                                                    value={form.company}
                                                                    type='input'
                                                                    onChange={(e) => { setField('company', e.target.value); (errors.company) && validate() }}
                                                                    placeholder='Company Name (optional)' />
                                                                {(errors.company) && <FormAlert message={errors.company} type={'error'} />}
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
                                                                label='Address (optional)'
                                                                className="mb-3">
                                                                <Form.Control
                                                                    value={form.address}
                                                                    type='text'
                                                                    placeholder='Address (optional)'
                                                                    onChange={(e) => { setField('address', e.target.value); (errors.address) && validate() }} />
                                                                {(errors.address) && <FormAlert message={errors.address} type={'error'} />}
                                                            </FloatingLabel >
                                                        </Form.Group>
                                                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                                            <Button style={{ backgroundColor: secondaryColor }} onClick={() => setPageNumber(0)} >
                                                                <ArrowLeft style={{ width: '20px', height: '20px', paddingRight: '5px', color: 'red' }} />
                                                                Back
                                                            </Button>
                                                            <Button style={{ backgroundColor: secondaryColor }} onClick={() => setPageNumber(2)}>
                                                                Next
                                                                <ArrowRight style={{ width: '20px', height: '20px', paddingLeft: '5px', color: primaryColor }} />
                                                            </Button>

                                                        </div>
                                                    </Form>
                                                </>
                                                :
                                                (pageNumber === 2) &&
                                                <>
                                                    <Form
                                                        ref={formRef}
                                                        style={{ maxWidth: '500px' }}>
                                                        <Form.Group >
                                                            <FloatingLabel
                                                                label='New Username'
                                                                className="mb-3">
                                                                <Form.Control
                                                                    value={form.username}
                                                                    type='text'
                                                                    placeholder='New Username'
                                                                    onChange={(e) => { setField('username', e.target.value); (errors.username) && validate() }} />
                                                                {(errors.username) && <FormAlert message={errors.username} type={'error'} />}
                                                            </FloatingLabel >
                                                        </Form.Group>
                                                        <Form.Group >
                                                            <FloatingLabel
                                                                label='New Password'
                                                                className="mb-3">
                                                                <Form.Control
                                                                    value={form.password}
                                                                    type='password'
                                                                    placeholder='New Password'
                                                                    onChange={(e) => { setField('password', e.target.value); (errors.password) && validate() }} />
                                                                {(errors.password) && <FormAlert message={errors.password} type={'error'} />}
                                                            </FloatingLabel >
                                                        </Form.Group>
                                                    </Form>
                                                </>
                                        }
                                    </>
                                }
                                {!notRegistered &&
                                    <>
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
                                    </>
                                }
                                <Row className='justify-content-md-center'>
                                    {(notRegistered && pageNumber === 2) &&
                                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                            <Button style={{ backgroundColor: secondaryColor }} onClick={() => setPageNumber(1)} >
                                                <ArrowLeft style={{ width: '20px', height: '20px', paddingRight: '5px', color: 'red' }} />
                                                Back
                                            </Button>
                                            <Button onClick={register} style={{ textAlign: 'center', backgroundColor: secondaryColor }}>
                                                Register <UserPlus
                                                    style={{ width: '20px', height: '20px', color: primaryColor }}
                                                    alt='send icon'
                                                /></Button>
                                        </div>
                                    }
                                    {!notRegistered &&
                                        <Button onClick={login} style={{ width: '300px', textAlign: 'center', backgroundColor: secondaryColor }}>
                                            Sign In <LogIn
                                                style={{ width: '20px', height: '20px', color: primaryColor }}
                                                alt='send icon'
                                            /></Button>
                                    }
                                </Row>
                            </Row>
                        </Container>
                    </div >
                </Modal.Body >
                <Modal.Footer>
                    {notRegistered ?
                        <Button style={{ marginRight: 'auto', backgroundColor: secondaryColor }} onClick={() => setNotRegistered(false)}>
                            Sign In
                        </Button>
                        :
                        <Button style={{ marginRight: 'auto', backgroundColor: secondaryColor }} onClick={() => setNotRegistered(true)}>
                            Register
                        </Button>
                    }
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal >
        </>
    );
}
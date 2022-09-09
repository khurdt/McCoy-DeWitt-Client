import React, { useState, useEffect, useRef } from 'react';
import './profile.css';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import { Image } from 'cloudinary-react';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import axios from 'axios';
import { Send } from 'react-feather';
import FormAlert from '../formAlert-component/formAlert';
import Badge from 'react-bootstrap/Badge';
import { services } from '../servicesAPI';
import Loading from '../loading-component/loading';

export default function Profile(props) {
    const { projects, onBackClick, userData, callDispatch, setSnackBarInfo, snackbarBarInfo } = props;
    const [username, setUsername] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [typeOfClient, setTypeOfClient] = useState({})

    const [errors, setErrors] = useState({});

    useEffect(() => {
        setUsername(userData.username);
        setEmail(userData.email);
        setFirstName(userData.firstName);
        setLastName(userData.lastName);
        setTypeOfClient(userData.typeOfClient);
        (userData.phone) && setPhone(userData.phone);
        (userData.address) && setAddress(userData.address);
    }, [projects, userData]);

    if (!firstName || !projects) {
        return <Loading />
    }

    // const updateUser = (e) => {
    //     e.preventDefault();
    //     const username = localStorage.getItem('user');
    //     const token = localStorage.getItem('token');
    //     const isReq = validate();
    //     if (isReq) {
    //         axios.put(`https://kh-movie-app.herokuapp.com/users/${username}`, userInfo,
    //             {
    //                 headers: { Authorization: `Bearer ${token}` },
    //             })
    //             .then((response) => {
    //                 localStorage.setItem('user', username);
    //                 callDispatch();
    //                 setUpdateSuccess('update successfull!');
    //             })
    //             .catch(function (error) {
    //                 console.log(error);
    //                 setUpdateFail('update failed');

    //             });
    //     }
    // };

    // const onDeleteAccount = () => {
    //     const username = localStorage.getItem('user');
    //     const token = localStorage.getItem('token');
    //     axios.delete(`https://kh-movie-app.herokuapp.com/users/${username}`,
    //         {
    //             headers: { Authorization: `Bearer ${token}` },
    //         })
    //         .then((response) => {
    //             console.log(response);
    //             alert('user unregisterd');
    //             localStorage.removeItem('user');
    //             localStorage.removeItem('token');
    //             window.open('/', '_self');
    //         })
    //         .catch(function (error) {
    //             console.log(error);
    //         });
    // }

    const validate = () => {
        const newErrors = {};
        let isReq = true;
        if (!firstName) {
            newErrors.firstName = '*required'
            isReq = false;
        }
        if (!lastName) {
            newErrors.lastName = '*required'
            isReq = false;
        }
        if (!email) {
            newErrors.email = '*required'
            isReq = false;
        } else if (email.indexOf('@') === -1) {
            newErrors.email = '*invalid'
            isReq = false;
        }
        if (phone !== undefined) {
            const phoneNumberLength = phone.replace(/[^\d]/g, '').length
            if (phoneNumberLength > 0 && phoneNumberLength < 10) {
                newErrors.phone = '*invalid'
                isReq = false;
            }
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

    const userInitials = (firstName.slice(0, 1) + lastName.slice(0, 1));

    return (
        <>
            <div className='profile-badge'>{userInitials}</div>
            <div style={{ position: 'relative' }}>
                <div className='profile-background'></div>
                <Image publicId='cld-sample-2' className='profileImage profileImage' />
            </div>
            <div className='mt-4 mb-5'>
                <Card className='profileIntro profileIntro ml-auto'>
                    <Card.Title className='profile-name'>{firstName} {lastName}</Card.Title>
                    <Card.Title className='company-name'>{typeOfClient.title}</Card.Title>
                </Card>
                <Card className='m-auto profile-card' style={{ maxWidth: '1128px', color: 'black', border: 'none', paddingTop: '30px' }}>
                    <Row>
                        {/* <Col className='m-3' xs={10} md={4}>
                            <Form>
                                <Form.Group className='m-1'>
                                    <div style={{ position: 'relative' }}>
                                        <Form.Control
                                            type='text'
                                            placeholder='First Name'
                                            value={firstName}
                                            onChange={(e) => setFirstName(e.target.value)} />
                                        {(errors.firstName) && <FormAlert message={errors.firstName} type={'error'} />}
                                    </div>
                                </Form.Group>
                                <Form.Group className='m-1'>
                                    <div style={{ position: 'relative' }}>
                                        <Form.Control
                                            type='text'
                                            placeholder='Last Name'
                                            value={lastName}
                                            onChange={(e) => setLastName(e.target.value)} />
                                        {(errors.lastName) && <FormAlert message={errors.lastName} type={'error'} />}
                                    </div>
                                </Form.Group>
                                <Form.Group className='m-1'>
                                    <div style={{ position: 'relative' }}>
                                        <Form.Control
                                            type='text'
                                            placeholder='Username'
                                            value={username}
                                            onChange={(e) => setUsername(e.target.value)} />
                                        {(errors.username) && <FormAlert message={errors.username} type={'error'} />}
                                    </div>
                                </Form.Group>
                                <Form.Group className='m-1'>
                                    <div style={{ position: 'relative' }}>
                                        <Form.Control
                                            type='text'
                                            placeholder='Email'
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)} />
                                        {(errors.email) && <FormAlert message={errors.email} type={'error'} />}
                                    </div>
                                </Form.Group>
                                <Form.Group className='m-1'>
                                    <div style={{ position: 'relative' }}>
                                        <Form.Control
                                            type='text'
                                            name='password'
                                            placeholder='New Password'
                                            onChange={(e) => setPhone(formatPhoneNumber(e.target.value))} />
                                        {(errors.phone) && <FormAlert message={errors.phone} type={'error'} />}
                                    </div>
                                </Form.Group>
                                <Form.Group className='m-1'>
                                    <div style={{ position: 'relative' }}>
                                        <Form.Control
                                            type='address'
                                            value={address}
                                            placeholder='Address'
                                            onChange={(e) => setAddress(e.target.value)} />
                                        {(errors.address) && <FormAlert message={errors.address} type={'error'} />}
                                    </div>
                                </Form.Group>
                            </Form>
                        </Col>  */}
                        <Col className='my-1 mx-1'>
                            <Card style={{ color: 'black', borderColor: '#2ab400' }}>
                                <Card.Title className='m-3'>Projects</Card.Title>
                                <Row className='m-auto'>
                                    {projects.length === 0 && (
                                        <div style={{ height: '50vh' }} className='text-center'>You Don't Have Any Projects</div>
                                    )}
                                    {projects.length > 0 && projects.map((project) => {
                                        return (
                                            <Card className='mb-2' style={{ width: '18rem' }}>
                                                <Image variant='top' style={{ objectFit: 'cover', paddingTop: '5px' }} publicId='roof' />
                                                <Card.Body>
                                                    <Card.Title>{project.service}</Card.Title>
                                                    <Card.Text>
                                                        {project.description}
                                                    </Card.Text>
                                                    <Button variant="primary">See Project</Button>
                                                </Card.Body>
                                            </Card>
                                        )
                                    })}
                                </Row>
                            </Card>
                        </Col>
                    </Row>
                </Card >
            </div>
        </>
    );
}
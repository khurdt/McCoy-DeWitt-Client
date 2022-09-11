import React, { useState, useEffect, useRef } from 'react';
import './profile.css';
import { Container, Row, Col, Form, Button, Card, Dropdown } from 'react-bootstrap';
import { Image } from 'cloudinary-react';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import axios from 'axios';
import { Check, Edit, MoreVertical, Send, X } from 'react-feather';
import FormAlert from '../formAlert-component/formAlert';
import Badge from 'react-bootstrap/Badge';
import { services } from '../servicesAPI';
import Loading from '../loading-component/loading';

export default function Profile(props) {
    const { projects, onBackClick, userData, getUserData, setSnackBarInfo, snackbarBarInfo } = props;
    const [username, setUsername] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [company, setCompany] = useState('');
    const [editing, setEditing] = useState(false);

    const [errors, setErrors] = useState({});

    useEffect(() => {
        setUsername(userData.username);
        setEmail(userData.email);
        setFirstName(userData.firstName);
        setLastName(userData.lastName);
        setCompany(userData.company);
        (userData.phone) && setPhone(userData.phone);
        (userData.address) && setAddress(userData.address);
    }, [projects, userData]);

    const updateUser = () => {
        const username = localStorage.getItem('user');
        const token = localStorage.getItem('token');
        const isReq = validate();
        const updatedData = {
            username: username,
            email: email,
            firstName: firstName,
            lastName: lastName,
            company: company,
            phone: phone,
            address: address
        }
        if (isReq) {
            setSnackBarInfo({
                show: true,
                message: 'Updating Information',
                loading: true
            });
            axios.put(`https://polar-tor-24509.herokuapp.com/users/${username}`, updatedData,
                {
                    headers: { Authorization: `Bearer ${token}` },
                })
                .then((response) => {
                    localStorage.setItem('user', username);
                    setEditing(false);
                    getUserData();
                    setSnackBarInfo({
                        show: true,
                        message: 'Update Successful',
                        loading: false
                    });
                })
                .catch(function (error) {
                    console.log(error);
                    setSnackBarInfo({
                        show: true,
                        message: 'Update Failed',
                        loading: false
                    });

                });
        }
    };

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
                    <Card.Title className='company-name'>{company}</Card.Title>
                    {!editing ?
                        <Dropdown className='editButton'>
                            <Dropdown.Toggle as={MoreVertical} style={{ cursor: 'pointer', width: '30px', height: '30px' }} id="dropdown-basic" />

                            <Dropdown.Menu>
                                <Dropdown.Item onClick={() => setEditing(true)}>Edit Profile</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        :
                        <>
                            <Check onClick={() => updateUser()} className='editButton' style={{ color: 'green' }} />
                            <X className='cancelButton' onClick={() => { setEditing(false); getUserData() }} />
                        </>
                    }
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
                            <Card style={{ color: 'black', border: 'none' }}>
                                <Card.Title className='m-1'>Projects</Card.Title>
                                <hr />
                                <Row className='m-auto'>
                                    {projects.length === 0 && (
                                        <div style={{ height: '50vh' }} className='text-center'>You Don't Have Any Projects</div>
                                    )}
                                    {projects.length > 0 && projects.map((project) => {
                                        return (
                                            <Card className='mb-2' style={{ width: '18rem', margin: '0', padding: '0' }}>
                                                <Card.Img as={Image} publicId='roof' />
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
import React, { useState, useEffect, useRef } from 'react';
import './profile.css';
import { Container, Row, Col, Form, Button, Card, Dropdown } from 'react-bootstrap';
import { Image } from 'cloudinary-react';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import axios from 'axios';
import { AtSign, Check, Edit, MapPin, MoreVertical, Phone, Send, User, X } from 'react-feather';
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
        (userData.company) ? setCompany(userData.company) : setCompany('Individual Client');
        (userData.phone) && setPhone(userData.phone);
        (userData.address) && setAddress(userData.address);
    }, [projects, userData]);

    const updateUser = () => {
        const localStorageUsername = localStorage.getItem('user');
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
            axios.put(`https://polar-tor-24509.herokuapp.com/users/${localStorageUsername}`, updatedData,
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
        } else { newErrors.firstName = '' }

        if (!lastName) {
            newErrors.lastName = '*required'
            isReq = false;
        } else { newErrors.lastName = '' }

        if (!username) {
            newErrors.username = '*required'
            isReq = false;
        } else { newErrors.username = '' }

        if (!email) {
            newErrors.email = '*required'
            isReq = false;
        } else if (email.indexOf('@') === -1) {
            newErrors.email = '*invalid'
            isReq = false;
        } else { newErrors.email = '' }

        if (phone !== undefined) {
            const phoneNumberLength = phone.replace(/[^\d]/g, '').length
            if (phoneNumberLength > 0 && phoneNumberLength < 10) {
                newErrors.phone = '*invalid'
                isReq = false;
            }
        } else { newErrors.phone = '' }

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
            <div style={{ position: 'relative' }}>
                <div className='profile-background'></div>
                <Image publicId='cld-sample-2' className='profileImage profileImage' />
                <div className='profile-badge'>{userInitials}</div>
            </div>
            <div className='mt-4 mb-5'>
                <Card className='profileIntro profileIntro ml-auto'>
                    {editing ?
                        <>
                            <Form style={{ display: 'flex', maxWidth: '200px' }}>
                                <Form.Group className='m-1'>
                                    <div style={{ position: 'relative' }}>
                                        <Form.Control
                                            type='text'
                                            placeholder='First Name'
                                            value={firstName}
                                            onChange={(e) => { setFirstName(e.target.value); (errors.firstName) && validate() }} />
                                        {(errors.firstName) && <FormAlert message={errors.firstName} type={'error'} profile={true} />}
                                    </div>
                                </Form.Group>
                                <Form.Group className='m-1'>
                                    <div style={{ position: 'relative' }}>
                                        <Form.Control
                                            type='text'
                                            placeholder='Last Name'
                                            value={lastName}
                                            onChange={(e) => { setLastName(e.target.value); (errors.lastName) && validate() }} />
                                        {(errors.lastName) && <FormAlert message={errors.lastName} type={'error'} profile={true} />}
                                    </div>
                                </Form.Group>
                            </Form>
                            <Form style={{ maxWidth: '200px' }}>
                                <Form.Group className='m-1'>
                                    <div style={{ position: 'relative' }}>
                                        <Form.Control
                                            type='text'
                                            placeholder='Company'
                                            value={company}
                                            onChange={(e) => { setCompany(e.target.value); (errors.company) && validate() }} />
                                        {(errors.company) && <FormAlert message={errors.company} type={'error'} profile={true} />}
                                    </div>
                                </Form.Group>
                            </Form>
                        </>
                        :
                        <>
                            <Card.Title className='profile-name'>{firstName} {lastName}</Card.Title>
                            <Card.Title className='company-name'>{company}</Card.Title>
                        </>
                    }
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
                <Card className='secondaryInfo'>
                    <Row className='justify-content-md-center mt-3'>
                        {editing ?
                            <Form>
                                <Row className='justify-content-md-center'>
                                    <Col className='formSecondaryInfo'>
                                        <Form.Group className='m-1 form_item'>
                                            <div style={{ position: 'relative' }}>
                                                <Form.Control
                                                    type='text'
                                                    placeholder='Username'
                                                    value={username}
                                                    onChange={(e) => { setUsername(e.target.value); (errors.username) && validate() }} />
                                                {(errors.username) && <FormAlert message={errors.username} type={'error'} profile={true} />}
                                            </div>
                                        </Form.Group>
                                        <Form.Group className='m-1 form_item'>
                                            <div style={{ position: 'relative' }}>
                                                <Form.Control
                                                    type='text'
                                                    placeholder='Email'
                                                    value={email}
                                                    onChange={(e) => { setEmail(e.target.value); (errors.email) && validate() }} />
                                                {(errors.email) && <FormAlert message={errors.email} type={'error'} profile={true} />}
                                            </div>
                                        </Form.Group>
                                        <Form.Group className='m-1 form_item'>
                                            <div style={{ position: 'relative' }}>
                                                <Form.Control
                                                    type='text'
                                                    placeholder='Phone'
                                                    value={phone}
                                                    onChange={(e) => { setPhone(formatPhoneNumber(e.target.value)); (errors.phone) && validate() }} />
                                                {(errors.phone) && <FormAlert message={errors.phone} type={'error'} profile={true} />}
                                            </div>
                                        </Form.Group>
                                        <Form.Group className='m-1 form_item'>
                                            <div style={{ position: 'relative' }}>
                                                <Form.Control
                                                    type='text'
                                                    placeholder='Address'
                                                    value={address}
                                                    onChange={(e) => { setAddress(e.target.value); (errors.address) && validate() }} />
                                                {(errors.address) && <FormAlert message={errors.address} type={'error'} profile={true} />}
                                            </div>
                                        </Form.Group>
                                    </Col>
                                </Row>
                            </Form>
                            :
                            <>
                                <Col className='m-2 notEditingSecondaryInfo'>
                                    <Card.Title style={{ fontSize: '17px' }}>
                                        <User style={{ width: '17px', height: '17px', color: 'grey', marginRight: '10px' }} />
                                        {username}
                                    </Card.Title>
                                    <Card.Title style={{ fontSize: '17px' }}>
                                        <AtSign style={{ width: '17px', height: '17px', color: 'grey', marginRight: '10px' }} />
                                        {email}
                                    </Card.Title>
                                    <Card.Title style={{ fontSize: '17px' }}>
                                        <Phone style={{ width: '17px', height: '17px', color: 'grey', marginRight: '10px' }} />
                                        {(!phone) ? 'none' : phone}
                                    </Card.Title>
                                    <Card.Title style={{ fontSize: '17px' }}>
                                        <MapPin style={{ width: '17px', height: '17px', color: 'grey', marginRight: '10px' }} />
                                        {(!address) ? 'no address' : address}
                                    </Card.Title>
                                </Col>
                            </>
                        }
                    </Row>
                </Card>
                <Row style={{ maxWidth: '1000px' }} className='justify-content-center m-auto'>
                    <Col className='m-auto'>
                        <Card style={{ color: 'black', border: 'none' }}>
                            <Card.Title className='m-1'>Projects</Card.Title>
                            <hr />
                            <Row className='m-auto'>
                                {projects.length === 0 && (
                                    <div style={{ height: '50vh' }} className='text-center'>You Don't Have Any Projects</div>
                                )}
                                {projects.length > 0 && projects.map((project, index) => {
                                    return (
                                        <Card key={index} className='mb-2' style={{ width: '18rem', margin: '0', padding: '0' }}>
                                            <Card.Img as={Image} publicId='custom' />
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
            </div>
        </>
    );
}
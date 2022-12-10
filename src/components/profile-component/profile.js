import React, { useState, useEffect } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import { Image } from 'cloudinary-react'
import { Check, Edit, Mail, MapPin, Minus, MoreHorizontal, Phone, Plus, User, X } from 'react-feather';
import FormAlert from '../formAlert-component/formAlert';
import { services, updateUser, getUserData, getProjects, removeProject, onDeleteAccount } from '../servicesAPI';
import CreateProject from '../createProject component/createProject';
import CustomButton from '../button-component/customButton';
import Confirmation from '../confirmation-component/confirmation';
import './profile.css';


export default function Profile(props) {
    const { projects,
        userData,
        primaryColor,
        secondaryColor,
        createProjectButton,
        setCreateProjectButton,
        navigate,
        setSnackBarInfo,
        setUserData,
        setProjects } = props;

    const [username, setUsername] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    // const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [company, setCompany] = useState('');
    const [editing, setEditing] = useState(false);
    const [deleteProject, setDeleteProject] = useState(false);
    const [myColor, setMyColor] = useState('');
    const [showCreateProject, setShowCreateProject] = useState(false);
    const [showConfirmation, setShowConfirmation] = useState(false);
    const [confirmationInfo, setConfirmationInfo] = useState({
        title: null,
        action: null,
        _id: null
    });

    const [errors, setErrors] = useState({});

    useEffect(() => {
        if (createProjectButton) {
            setShowCreateProject(true);
            setCreateProjectButton(false);
            window.scrollTo(0, 0);
        }
        setUsername(userData.username);
        setEmail(userData.email);
        setFirstName(userData.firstName);
        setLastName(userData.lastName);
        (userData.company) ? setCompany(userData.company) : setCompany('Individual Client');
        (userData.phone) && setPhone(userData.phone);
        (userData.address) && setAddress(userData.address);
        (userData.color) && setMyColor(userData.color);
    }, [projects, userData]);

    const updatedData = {
        username: username,
        email: email,
        firstName: firstName,
        lastName: lastName,
        company: company,
        phone: phone,
        address: address,
        color: myColor
    }

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

    const handleRemoveProject = (projectId) => { removeProject(projectId, setShowCreateProject, setSnackBarInfo, setProjects); getProjects(); }
    const handleUpdateProfile = () => { updateUser(validate, updatedData, setEditing, setSnackBarInfo, setUserData) }
    const handleRemoveAccount = (username) => { onDeleteAccount(setSnackBarInfo, navigate) }

    const userInitials = (firstName.slice(0, 1) + lastName.slice(0, 1));

    const optionsIcon = () => {
        return (
            <MoreHorizontal width={30} height={30}
                // style={{
                //     cursor: 'pointer',
                //     border: `3px solid ${myColor}`,
                //     borderRadius: '50%'
                // }} 
                alt='options icon' />
        );
    }

    return (
        <div>
            {showCreateProject &&
                <CreateProject setShowCreateProject={setShowCreateProject} username={username} primaryColor={primaryColor} setSnackBarInfo={setSnackBarInfo} setProjects={setProjects} />
            }
            {showConfirmation &&
                <Confirmation setShowConfirmation={setShowConfirmation} showConfirmation={showConfirmation} confirmationInfo={confirmationInfo} primaryColor={primaryColor} />
            }
            <div style={{ position: 'relative' }}>
                <div className='profile-background'></div>
                <Image publicId='cld-sample-2' className='profileImage profileImage' />
                <div style={{ position: 'relative' }}>
                    <div style={{ backgroundColor: myColor }} className='profile-badge'>{userInitials}
                        {editing &&
                            <input className='colorInput' type='color' value={myColor} onChange={(e) => setMyColor(e.target.value)} />
                        }
                    </div>
                </div>
            </div>
            <div className={(showCreateProject) ? 'hideProfile' : 'mt-4 mb-5'} style={{ position: 'relative' }}>
                <div style={{ position: '-webkit-sticky', position: 'sticky', top: '10px', zIndex: '1000' }}>
                    {!editing ?
                        <div className="editPosition">
                            <Dropdown className='profileEditButton'>
                                <Dropdown.Toggle as={MoreHorizontal} id="dropdown-basic"
                                    style={{
                                        width: '30px',
                                        height: '30px',
                                        cursor: 'pointer',
                                        border: `3px solid ${myColor}`,
                                        borderRadius: '50%'
                                    }}
                                    alt='options icon' />
                                <Dropdown.Menu>
                                    <Dropdown.Item onClick={() => { setEditing(true); }}>
                                        <div className='text-center p-3'>
                                            Edit Profile
                                        </div>
                                    </Dropdown.Item>
                                    <Dropdown.Item onClick={() => { }}>
                                        <div className='text-center p-3'>
                                            Reset Password
                                        </div>
                                    </Dropdown.Item>
                                    <Dropdown.Item onClick={() => {
                                        setShowConfirmation(true);
                                        setConfirmationInfo({
                                            title: 'Remove your account?',
                                            action: handleRemoveAccount,
                                            _id: username
                                        })
                                    }}>
                                        <div className='text-center p-3' style={{ color: 'red' }}>
                                            Delete Account
                                        </div>
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                        :
                        <div className="editPosition">
                            <Button style={{ backgroundColor: 'green', width: '50px', marginRight: '10px' }} onClick={() => handleUpdateProfile()} className='profileEditButton'>
                                <Check color='white' />
                            </Button>
                            <Button style={{ backgroundColor: 'red', color: 'white', width: '50px' }} onClick={() => { setEditing(false); getUserData(setUserData) }} className='profileCancelButton'>
                                <X color="white" />
                            </Button>
                        </div>
                    }
                </div>
                <Card className='profileIntro profileIntro ml-auto'>
                    {editing ?
                        <div className='mt-5'>
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
                        </div>
                        :
                        <>
                            <Card.Title className='profile-name'>{firstName} {lastName}</Card.Title>
                            <Card.Title className='company-name'>{company}</Card.Title>
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
                                        <User style={{ width: '17px', height: '17px', color: myColor, marginRight: '10px' }} />
                                        {username}
                                    </Card.Title>
                                    <Card.Title style={{ fontSize: '17px' }}>
                                        <Mail style={{ width: '17px', height: '17px', color: myColor, marginRight: '10px' }} />
                                        {email}
                                    </Card.Title>
                                    <Card.Title style={{ fontSize: '17px' }}>
                                        <Phone style={{ width: '17px', height: '17px', color: myColor, marginRight: '10px' }} />
                                        {(!phone) ? 'none' : phone}
                                    </Card.Title>
                                    <Card.Title style={{ fontSize: '17px' }}>
                                        <MapPin style={{ width: '17px', height: '17px', color: myColor, marginRight: '10px' }} />
                                        {(!address) ? 'no address' : address}
                                    </Card.Title>
                                </Col>
                            </>
                        }
                    </Row>
                </Card>
                <Row style={{ maxWidth: '1200px' }} className='justify-content-center m-auto'>
                    <Col className='m-4'>
                        <Card style={{ color: 'black', border: 'none' }}>
                            <div style={{ display: 'flex' }}>
                                <Card.Title>Projects</Card.Title>
                                <div>
                                    {!deleteProject ?
                                        <Dropdown style={{ marginLeft: '10px' }}>
                                            <Dropdown.Toggle as={MoreHorizontal} style={{ cursor: 'pointer', width: '25px', height: '25px' }} id="dropdown-basic" />
                                            <Dropdown.Menu>
                                                <Dropdown.Item onClick={() => { setShowCreateProject(true); window.scrollTo(0, 0); }}>
                                                    <div className='text-center p-3' style={{ color: 'green' }}>
                                                        Add Project
                                                    </div>
                                                </Dropdown.Item>
                                                <Dropdown.Item onClick={() => { setDeleteProject(true); }}>
                                                    <div className='text-center p-3' style={{ color: 'red' }}>
                                                        Remove Project
                                                    </div>
                                                </Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                        :
                                        <>
                                            <Check onClick={() => { setDeleteProject(false); getProjects(); }} style={{ color: 'green', cursor: 'pointer', marginLeft: '10px' }} />
                                        </>
                                    }
                                </div>
                            </div>
                            <hr />
                            <Row className='m-auto' style={{ justifyContent: 'center' }}>
                                {projects.length === 0 && (
                                    <div style={{ height: '50vh' }} className='text-center'>You Don't Have Any Projects</div>
                                )}
                                {projects.length > 0 && projects.map((project, index) => {
                                    let service = services.find((s) => project.service.toLowerCase().includes(s.image));
                                    return (
                                        <Card key={index} className='m-3' style={{ width: '18rem', margin: '0', padding: '0' }}>
                                            <div style={{ position: 'relative' }}>
                                                <Card.Img style={{ height: '190px' }} as={Image} publicId={(service) ? service.image : 'custom'} />
                                                <div className='service-title'>{project.service}</div>
                                            </div>
                                            <Card.Body>
                                                <Card.Text>Status: <Badge className='p-2'>{project.status.title}</Badge></Card.Text>
                                                <Card.Text className='text-center' style={{ fontSize: '14px' }}>
                                                    {project.description}
                                                </Card.Text>
                                                <Card.Footer>
                                                    <Row className='justify-content-center'>
                                                        {deleteProject ?
                                                            <Button variant='danger' onClick={() => {
                                                                setShowConfirmation(true);
                                                                setConfirmationInfo({
                                                                    title: 'Remove this project?',
                                                                    action: handleRemoveProject,
                                                                    _id: project._id
                                                                })
                                                            }}
                                                            >remove</Button>
                                                            :
                                                            <CustomButton primaryColor={primaryColor}
                                                                onClickFunction={function () {
                                                                    navigate('project', {
                                                                        state: { selectedProject: project, selectedService: service }
                                                                    });
                                                                }}
                                                                text={'See Project'} login={true} submitButton={true} />
                                                        }

                                                    </Row>
                                                </Card.Footer>
                                            </Card.Body>
                                        </Card>
                                    )
                                })}
                            </Row>
                        </Card>
                    </Col>
                </Row >
            </div >
        </div >
    );
}
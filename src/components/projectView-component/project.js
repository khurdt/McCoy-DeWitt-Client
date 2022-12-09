import React, { useEffect, useState } from "react";

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

import { Image } from 'cloudinary-react';
import './project.css';
import { useLocation } from "react-router-dom";
import { Check, MapPin, MoreVertical, User, X, DollarSign, FolderMinus, Key, Copy, Eye, EyeOff, Edit, Camera } from 'react-feather';
import FormAlert from '../formAlert-component/formAlert';
import CloudinaryUploadWidget from "./CloudinaryUploadWidget";
import CustomButton from "../button-component/customButton";
import Confirmation from '../confirmation-component/confirmation';
import { updateProject, getProject, removeFiles, updateFiles } from "../servicesAPI";

export default function Project(props) {
  const location = useLocation();
  const { primaryColor, secondaryColor, admin, setSnackBarInfo } = props;
  const [project, setProject] = useState(location.state.selectedProject);
  const [service, setService] = useState(location.state.selectedService);
  const [editing, setEditing] = useState(false);
  const [copied, setCopied] = useState(false);
  const [deleteFiles, setDeleteFiles] = useState(false);
  const [seeClaimNumber, setSeeClaimNumber] = useState(false);
  const [currentChoice, setCurrentChoice] = useState({});
  const [errors, setErrors] = useState({});
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [confirmationInfo, setConfirmationInfo] = useState({
    title: null,
    _id: null
  });

  let updateProjectData = {
    description: project.description,
    location: project.location,
    insuranceClaim: project.insuranceClaim,
    status: project.status,
    users: project.users
  }

  const bootstrapColors = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'dark']

  const formattedDateOfDamage = () => {
    let date = (project.insuranceClaim.dateOfDamage !== null) ? project.insuranceClaim.dateOfDamage.slice(0, 10) : 'none';
    return date;
  }
  const formattedDateOfInspection = () => {
    let date = (project.insuranceClaim.dateOfInspection !== null) ? project.insuranceClaim.dateOfInspection.slice(0, 10) : 'none';
    return date;
  }

  useEffect(() => {
    window.scrollTo(0, 0);
    getProject(setProject, setEditing, project._id);
  }, []);

  const validate = () => {
    let { description, location, status } = project;
    // let { claimNumber, dateOfDamage, dateOfInspection } = project.insuranceClaim;
    let isValid = true;
    let newErrors = {};
    if (!description || description === '' || description === ' ') {
      newErrors.description = '*required';
      isValid = false;
    }
    if (!location) {
      newErrors.location = '*required';
      isValid = false;
    }
    if (!status.title) {
      newErrors.statusTitle = '*required';
      isValid = false;
    }
    if (!status.title) {
      newErrors.statusDescription = '*required';
      isValid = false;
    }
    setErrors(newErrors);
    return isValid;
  }

  const handleUpdate = () => { updateProject(validate, updateProjectData, setProject, setEditing, project._id, setSnackBarInfo) }
  const handleGetProject = () => { getProject(setProject, setEditing, project._id); }
  const handleRemoveFiles = (file) => { removeFiles(file, setProject, setEditing, project._id, setSnackBarInfo); }
  const handleUpdateFiles = (file) => { updateFiles(file, setProject, setEditing, project._id, setSnackBarInfo); }

  const renderTooltip = (message) => (
    <Tooltip id="button-tooltip">
      {message}
    </Tooltip>
  );

  const copyText = (text) => {
    navigator.clipboard.writeText(text);
  }

  return (
    <div>
      {showConfirmation &&
        <Confirmation setShowConfirmation={setShowConfirmation} showConfirmation={showConfirmation} confirmationInfo={confirmationInfo} handleRemove={handleRemoveFiles} primaryColor={primaryColor} />
      }
      <div style={{ position: 'relative' }}>
        <div className='project-background'></div>
        <Card className='projectTitleCard projectTitleCard m-auto' style={{ borderColor: primaryColor }}>
          <div className='projectTitleCard-body'>
            <Card.Title className='m-auto text-center' style={{ color: 'white' }}>{project.service} Project</Card.Title>
          </div>
        </Card>
        <Image publicId={(service) ? service.image : 'custom'} className='projectImage projectImage' />
      </div>
      <div className='mt-4 mb-5' style={{ position: 'relative' }}>
        <div style={{ position: '-webkit-sticky', position: 'sticky', top: '10px', zIndex: '1000' }}>
          {!editing ?
            <Button className="editPosition">
              <div className='projectEditButton'>
                <Edit color='black' as={MoreVertical} onClick={() => setEditing(true)} style={{ cursor: 'pointer', width: '25px', height: '25px', color: secondaryColor }} id="dropdown-basic" />
              </div>
            </Button>
            :
            <div className="editPosition">
              <Button style={{ backgroundColor: 'green', width: '50px', marginRight: '10px' }} onClick={() => handleUpdate()} className='projectEditButton'>
                <Check color='white' />
              </Button>
              <Button style={{ backgroundColor: 'red', color: 'white', width: '50px' }} onClick={() => { handleGetProject() }} className='projectCancelButton'>
                <X color="white" />
              </Button>
            </div>
          }
        </div>
        <Card className='projectIntro projectIntro ml-auto'>
          {/* OVERVIEW ----------------------------------------------------------------------------------------------------------- */}
          <div style={{ marginRight: '45px' }}>
            <Card.Title className='project-overview' style={{ fontSize: '21px', padding: '10px' }}>Overview:
              {editing ?
                <Form style={{ width: 'auto', maxWidth: '350px' }}>
                  <Form.Group className='m-1'>
                    <div style={{ position: 'relative' }}>
                      <Form.Control
                        type='text'
                        placeholder='Overview'
                        value={project.description}
                        onChange={(e) => {
                          setProject({
                            ...project,
                            description: e.target.value
                          });
                          (errors.description) && validate();
                        }}
                      />
                      {(errors.description) && <FormAlert message={errors.description} type={'error'} profile={true} />}
                    </div>
                  </Form.Group>
                </Form>
                :
                <div style={{ fontSize: '15px', marginLeft: '30px', paddingTop: '5px' }}>{project.description}</div>
              }
            </Card.Title>
            <div style={{ width: 'fit-content', padding: '10px' }}>
              {/* STATUS ----------------------------------------------------------------------------------------------------------- */}
              {editing && (admin === (localStorage.getItem('user'))) ?
                <>
                  <Form style={{ width: 'auto', maxWidth: '350px' }}>
                    <Form.Group className='m-1'>
                      <div style={{ position: 'relative' }}>
                        <Card.Title>Status</Card.Title>
                        <Form.Control
                          type='text'
                          placeholder='Current Status'
                          value={project.status.title}
                          onChange={(e) => {
                            setProject({
                              ...project,
                              status: { ...project.status, title: e.target.value }
                            });
                          }}
                        />
                        {(errors.statusTitle) && <FormAlert message={errors.statusTitle} type={'error'} profile={true} />}
                      </div>
                    </Form.Group>
                    <Card.Title>Status Description</Card.Title>
                    <Form.Group className='m-1'>
                      <div style={{ position: 'relative' }}>
                        <Form.Control
                          type='text'
                          placeholder='Description'
                          value={project.status.description}
                          onChange={(e) => {
                            setProject({
                              ...project,
                              status: { ...project.status, description: e.target.value }
                            });
                          }}
                        />
                        {(errors.statusDescription) && <FormAlert message={errors.statusDescription} type={'error'} profile={true} />}
                      </div>
                    </Form.Group>
                  </Form>
                  <Row className="justify-content-center">
                    {bootstrapColors.map((color) => {
                      return (
                        <Col className='m-2' style={{ cursor: 'pointer' }}>
                          <Card.Title style={(color === project.status.color) ? { border: '2px solid black', borderRadius: '5px', padding: '5px' } : { border: '2px solid white', padding: '5px' }}
                            onClick={() => { setProject({ ...project, status: { ...project.status, color: color } }) }}>
                            <Badge style={{ width: '100px', height: '30px', margin: 'auto' }} bg={color}>
                              <span >{color}</span>
                            </Badge>
                          </Card.Title>
                        </Col>
                      );
                    })}
                  </Row>
                </>
                :
                <>
                  <Card.Title className='status'><span style={{ marginRight: '5px' }}>Status:</span>
                    <Badge bg={(project.status.color) ? project.status.color : 'primary'} className='p-2'>{project.status.title}</Badge>
                  </Card.Title>
                  <Card.Title style={{ fontSize: '15px', fontWeight: '200', marginLeft: '30px' }}>{project.status.description}</Card.Title>
                </>
              }
            </div>
          </div>
        </Card >
        {/* SECONDARY INFORMATION FOR PROJECT */}
        < Card style={{ border: 'none' }
        }>
          <Row className='justify-content-center m-auto align-items-center' style={{ maxWidth: '1000px' }}>
            {/* PROJECT KEY ----------------------------------------------------------------------------------------------------------- */}
            <Col className="secondaryInfo-item">
              <label className='secondaryInfo-label'>
                <Card.Title style={{ fontSize: '20px' }}>
                  <Key className="icons" />
                  Project Key:
                </Card.Title>
              </label>
              <Card.Title style={{ fontSize: '17px', marginLeft: '50px', WebkitTextSecurity: 'disc' }}>
                {project._id}
                <OverlayTrigger
                  placement="bottom"
                  delay={{ show: 250, hide: 400 }}
                  overlay={(copied) ? renderTooltip('Copied') : renderTooltip('Copy')}
                >
                  <Copy
                    style={{ marginLeft: '10px', marginBottom: '5px', width: '16px', height: '16px', cursor: 'pointer' }}
                    onClick={() => { copyText(project._id); setCopied(true); }}
                  />
                </OverlayTrigger>
              </Card.Title>
            </Col>
            {/* LOCATION ----------------------------------------------------------------------------------------------------------------*/}
            <Col className="secondaryInfo-item">
              <label className='secondaryInfo-label'>
                <Card.Title style={{ fontSize: '20px' }}>
                  <MapPin className="icons" />
                  Location:
                </Card.Title>
              </label>
              {editing ?
                <Form style={{ width: 'auto', maxWidth: '350px' }}>
                  <Form.Group className='m-1'>
                    <div style={{ position: 'relative' }}>
                      <Form.Control
                        type='text'
                        placeholder='Overview'
                        value={project.location}
                        onChange={(e) => {
                          setProject({
                            ...project, location: e.target.value
                          });
                        }}
                      />
                      {/* {(errors.project.location) && <FormAlert message={errors.project.location} type={'error'} profile={true} />} */}
                    </div>
                  </Form.Group>
                </Form>
                :
                <Card.Title style={{ fontSize: '17px', marginLeft: '50px' }}>
                  {project.location}
                </Card.Title>
              }
            </Col>
            {/* USERS INVOLVED --------------------------------------------------------------------------------------------------------------*/}
            <Col className="secondaryInfo-item">
              <label className='secondaryInfo-label'>
                <Card.Title style={{ fontSize: '20px' }}>
                  <User className="icons" />
                  Users Involved:
                </Card.Title>
              </label>
              <Row className="justify-content-center align-items-center" style={{ fontSize: '17px', marginLeft: '50px' }}>
                {project.users.map((a, e, i) => {
                  return (
                    (a === admin) ?
                      <div></div>
                      :
                      <>
                        <Col className="m-1">
                          <Card.Title><Badge className='p-2' bg='secondary'>{a}</Badge></Card.Title>
                        </Col>
                      </>
                  )
                })}
              </Row>
            </Col>

            {/* INSURANCE CLAIM ------------------------------------------------------------------------------------------------------------*/}
            <div className="secondaryInfo-item">
              <label className='secondaryInfo-label' style={{ display: 'flex' }}>
                <Card.Title style={{ fontSize: '20px' }}>
                  <DollarSign className="icons" />
                  Insurance Claim:
                </Card.Title>
              </label>
              {editing &&
                <div style={{ display: 'flex', margin: '5px' }}>
                  <div style={{ fontSize: '15px', margin: 'auto', textAlign: 'center' }}>Still using?</div>
                  <CustomButton
                    primaryColor={primaryColor}
                    onClickFunction={function () {
                      setProject({
                        ...project, insuranceClaim: { ...project.insuranceClaim, using: true }
                      });
                    }}
                    currentChoice={currentChoice} setCurrentChoice={setCurrentChoice}
                    text={'Yes'} small={true} />
                  <CustomButton
                    primaryColor={primaryColor}
                    onClickFunction={function () {
                      setProject({
                        ...project, insuranceClaim: { ...project.insuranceClaim, using: false }
                      });
                    }}
                    currentChoice={currentChoice} setCurrentChoice={setCurrentChoice}
                    text={'No'} small={true} />
                </div>
              }
              {(project.insuranceClaim.using === true) ?
                <>
                  <ul>
                    <li>
                      <Card.Title style={{ fontSize: '16px', marginLeft: '20px' }}>
                        Claim Number:
                      </Card.Title>
                    </li>
                    <div>
                      {editing ?
                        <Form style={{ width: 'auto', maxWidth: '350px' }}>
                          <Form.Group className='m-1'>
                            <div style={{ position: 'relative' }}>
                              <Form.Control
                                type='text'
                                placeholder='Claim Number'
                                value={project.insuranceClaim.claimNumber}
                                style={(seeClaimNumber) ? { WebkitTextSecurity: 'none' } : { WebkitTextSecurity: 'disc' }}
                                onChange={(e) => {
                                  setProject({
                                    ...project, insuranceClaim: { ...project.insuranceClaim, claimNumber: e.target.value }
                                  });
                                }}
                              />
                              <div style={{ position: 'absolute', top: '10px', right: '20px' }}>
                                {(seeClaimNumber) ?
                                  <Eye className="icons" style={{ cursor: 'pointer' }} onClick={() => setSeeClaimNumber(false)} />
                                  :
                                  <EyeOff className="icons" style={{ cursor: 'pointer' }} onClick={() => setSeeClaimNumber(true)} />
                                }
                              </div>
                              {/* {(errors.project.insuranceClaim.claimNumber) && <FormAlert message={errors.project.insuranceClaim.claimNumber} type={'error'} profile={true} />} */}
                            </div>
                          </Form.Group>
                        </Form>
                        :
                        <div style={{ display: 'flex' }}>
                          <Card.Title className='claimNumber' style={(seeClaimNumber) ? { WebkitTextSecurity: 'none', fontSize: '16px' } : { WebkitTextSecurity: 'disc' }}>
                            {project.insuranceClaim.claimNumber}
                          </Card.Title>
                          {(seeClaimNumber) ?
                            <Eye className="icons" style={{ cursor: 'pointer' }} onClick={() => setSeeClaimNumber(false)} />
                            :
                            <EyeOff className="icons" style={{ cursor: 'pointer' }} onClick={() => setSeeClaimNumber(true)} />
                          }
                        </div>
                      }
                    </div>
                    <li>
                      <Card.Title style={{ fontSize: '16px', marginLeft: '20px' }}>
                        Date of damage done:
                      </Card.Title>
                    </li>
                    {editing ?
                      <Form style={{ width: 'auto', maxWidth: '350px' }}>
                        <Form.Group className='m-1'>
                          <div style={{ position: 'relative' }}>
                            <Form.Control
                              type='date'
                              value={formattedDateOfDamage()}
                              onChange={(e) => {
                                setProject({
                                  ...project, insuranceClaim: { ...project.insuranceClaim, dateOfDamage: e.target.value }
                                });
                              }}
                            />
                            {/* {(errors.project.insuranceClaim.dateOfDamage) && <FormAlert message={errors.project.insuranceClaim.dateOfDamage} type={'error'} profile={true} />} */}
                          </div>
                        </Form.Group>
                      </Form>
                      :
                      <Card.Title style={{ fontSize: '16px', marginLeft: '50px' }}>
                        {formattedDateOfDamage()}
                      </Card.Title>
                    }
                    <li>
                      <Card.Title style={{ fontSize: '16px', marginLeft: '20px' }}>
                        Date of inspection:
                      </Card.Title>
                    </li>
                    {editing ?
                      <Form style={{ width: 'auto', maxWidth: '350px' }}>
                        <Form.Group className='m-1'>
                          <div style={{ position: 'relative' }}>
                            <Form.Control
                              type='date'
                              value={formattedDateOfInspection()}
                              onChange={(e) => {
                                setProject({
                                  ...project, insuranceClaim: { ...project.insuranceClaim, dateOfInspection: e.target.value }
                                });
                              }}
                            />
                            {/* {(errors.project.insuranceClaim.dateOfInspection) && <FormAlert message={errors.project.insuranceClaim.dateOfInspection} type={'error'} profile={true} />} */}
                          </div>
                        </Form.Group>
                      </Form>
                      :
                      <Card.Title style={{ fontSize: '16px', marginLeft: '50px' }}>
                        {formattedDateOfInspection()}
                      </Card.Title>
                    }
                  </ul>
                </>
                :
                <Card.Title style={{ fontSize: '17px', marginLeft: '50px' }}>
                  None
                </Card.Title>
              }
            </div>
            <div style={{ margin: '10px' }}>
              <label style={{ display: 'flex', justifyContent: 'center', borderBottom: `1px solid ${primaryColor}`, maxWidth: '350px', margin: 'auto' }}>
                <Card.Title style={{ fontSize: '20px' }}>
                  <Camera className="icons" />
                  Images:
                </Card.Title>
                {(!deleteFiles) ?
                  <div style={{ display: 'flex', paddingTop: '2px' }}>
                    <CloudinaryUploadWidget renderTooltip={renderTooltip} handleUpdateFiles={handleUpdateFiles} />
                    <OverlayTrigger
                      placement="right"
                      delay={{ show: 250, hide: 400 }}
                      overlay={renderTooltip('Delete Images')}
                    >
                      <FolderMinus onClick={() => setDeleteFiles(true)} style={{ color: 'red', cursor: 'pointer', marginLeft: '80px' }} />
                    </OverlayTrigger>
                  </div>
                  :
                  <>
                    <Check onClick={() => { setDeleteFiles(false); }} style={{ color: 'green', cursor: 'pointer', marginLeft: '17px', marginTop: '3px' }} />
                  </>
                }
              </label>
            </div>
          </Row>
        </Card >
        <Row className='justify-content-center'>
          {project.files.map((file) => {
            return (
              <Col style={{ display: 'flex', flexDirection: 'column', marginBottom: '10px' }}>
                <Image publicId={file.name} style={{ width: '200px', height: '200px', objectFit: 'cover', margin: 'auto' }} />
                {(deleteFiles) &&
                  <Button variant='danger' style={{ width: '200px', margin: 'auto' }} onClick={() => {
                    setShowConfirmation(true);
                    setConfirmationInfo({
                      title: 'Remove this file?',
                      _id: file.name
                    })
                  }}>delete</Button>
                }
              </Col>
            )
          })}
        </Row>
      </div >
    </div >
  )
}
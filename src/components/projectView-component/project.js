import React, { useEffect, useState } from "react";
import { Row, Col, Form, Button, Card, Dropdown, Badge, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { Image } from 'cloudinary-react';
import './project.css';
import { useLocation } from "react-router-dom";
import axios from 'axios';
import { Check, Mail, MapPin, Minus, MoreVertical, Phone, Plus, User, X, DollarSign, FilePlus, Folder, FolderPlus, FolderMinus, Key, Copy, Eye, EyeOff, Edit, Edit2, Edit3, Camera } from 'react-feather';
import FormAlert from '../formAlert-component/formAlert';
import CloudinaryUploadWidget from "./CloudinaryUploadWidget";

export default function Project(props) {
  const location = useLocation();
  const { primaryColor, setSnackBarInfo, secondaryColor } = props;
  const [project, setProject] = useState(location.state.selectedProject);
  const [service, setService] = useState(location.state.selectedService);
  const [editing, setEditing] = useState(false);
  const [deleteFiles, setDeleteFiles] = useState(false);
  const [seeClaimNumber, setSeeClaimNumber] = useState(false);
  const [currentOption, setCurrentOption] = useState({});
  const [errors, setErrors] = useState({});

  const formattedDateOfDamage = () => {
    let date = (project.insuranceClaim.dateOfDamage !== '') ? project.insuranceClaim.dateOfDamage.slice(0, 10) : '';
    return date;
  }
  const formattedDateOfInspection = () => {
    let date = (project.insuranceClaim.dateOfInspection !== '') ? project.insuranceClaim.dateOfInspection.slice(0, 10) : '';
    return date;
  }

  useEffect(() => {
    window.scrollTo(0, 0);
    getProject();
  }, []);

  const handleChoice = (event) => {
    if (currentOption) {
      currentOption.backgroundColor = '';
      currentOption.color = 'black';
    }
    setCurrentOption(event.target.style);
    event.target.style.backgroundColor = primaryColor;
    event.target.style.color = 'black';
  }

  const updateFiles = (fileName) => {
    const token = localStorage.getItem('token');
    setSnackBarInfo({
      message: 'Updating Files',
      loading: true,
      show: 'true'
    });
    axios.post(`https://polar-tor-24509.herokuapp.com/files/${fileName}/projects/${project._id}`, { jwt: 'token' },
      {
        headers: { Authorization: `Bearer ${token}` },
      }).then((response) => {
        console.log(response);
        setSnackBarInfo({
          message: 'Update Successful',
          loading: false,
          show: 'true'
        });
        getProject();
      }).catch((error) => {
        setSnackBarInfo({
          message: 'Failed to Update',
          loading: false,
          show: 'true'
        });
        console.log(error);
      })
  }

  const validate = () => {
    let { description, location } = project;
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
    setErrors(newErrors);
    return isValid;
  }

  const updateProject = () => {
    const token = localStorage.getItem('token');
    let updateProjectData = {
      description: project.description,
      location: project.location,
      insuranceClaim: project.insuranceClaim,
      status: project.status,
      users: project.users
    }
    let isValid = validate();
    if (isValid) {
      setSnackBarInfo({
        show: 'true',
        message: 'Updating Project',
        loading: true
      });
      axios.put(`https://polar-tor-24509.herokuapp.com/projects/${project._id}`, updateProjectData,
        {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => {
          setEditing(false);
          getProject();
          setSnackBarInfo({
            show: 'true',
            message: 'Update Successful',
            loading: false
          });
        })
        .catch(function (error) {
          console.log(error);
          setSnackBarInfo({
            show: 'true',
            message: 'Update Failed',
            loading: false
          });

        });
    }
  };

  const removeFiles = (fileName) => {
    const token = localStorage.getItem('token');
    setSnackBarInfo({
      message: 'Updating Files',
      loading: true,
      show: 'true'
    });
    axios.delete(`https://polar-tor-24509.herokuapp.com/files/${fileName}/projects/${project._id}`,
      {
        headers: { Authorization: `Bearer ${token}` },
      }).then((response) => {
        console.log(response);
        setSnackBarInfo({
          message: 'Files Updated',
          loading: false,
          show: 'true'
        });
        getProject();
      }).catch((error) => {
        setSnackBarInfo({
          message: 'Failed to Update',
          loading: false,
          show: 'true'
        });
        console.log(error);
      })
  }

  const getProject = () => {
    const token = localStorage.getItem('token');
    axios.get(`https://polar-tor-24509.herokuapp.com/oneProject/${project._id}`,
      {
        headers: { Authorization: `Bearer ${token}` },
      }).then((response) => {
        setProject(response.data);
        setEditing(false);
      }).catch((error) => {
        console.log(error);
      })
  }

  const renderTooltip = (message) => (
    <Tooltip id="button-tooltip">
      {message}
    </Tooltip>
  );

  const copyText = (text) => {
    navigator.clipboard.writeText(text);
  }

  return (
    <>
      <div style={{ position: 'relative' }}>
        <div className='project-background'></div>
        <Card className='projectTitleCard projectTitleCard m-auto' style={{ borderColor: primaryColor }}>
          <div className='projectTitleCard-body'>
            <Card.Title className='m-auto' style={{ color: 'white' }}>{project.service} Project</Card.Title>
          </div>
        </Card>
        <Image publicId={service.image} className='projectImage projectImage' />
      </div>
      <div className='mt-4 mb-5'>
        <Card className='projectIntro projectIntro ml-auto'>
          {!editing ?
            <div className='projectEditButton'>
              <Edit as={MoreVertical} onClick={() => setEditing(true)} style={{ cursor: 'pointer', width: '25px', height: '25px', color: secondaryColor }} id="dropdown-basic" />
            </div>
            :
            <>
              <Check onClick={() => updateProject()} className='projectEditButton' style={{ color: 'green' }} />
              <X className='projectCancelButton' onClick={() => { getProject(); }} />
            </>
          }
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
              <Card.Title className='status'>Status: <Badge className='p-2'>{project.status.title}</Badge></Card.Title>
              <Card.Title style={{ fontSize: '15px', fontWeight: '200', marginLeft: '30px' }}>{project.status.description}</Card.Title>
            </div>
          </div>
        </Card>
        {/* SECONDARY INFORMATION FOR PROJECT */}
        <Card style={(window.innerWidth < 500) ? { border: 'none' } : { border: 'none' }}>
          <Row className='justify-content-center m-auto align-items-center' style={{ maxWidth: '1200px' }}>
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
                  overlay={(navigator.clipboard.read === project._id) ? renderTooltip('Copy') : renderTooltip('Copied')}
                >
                  <Copy
                    style={{ marginLeft: '10px', marginBottom: '5px', width: '16px', height: '16px', cursor: 'pointer' }}
                    onClick={() => { copyText(project._id); }}
                  />
                </OverlayTrigger>
              </Card.Title>
            </Col>
            {/* Location ----------------------------------------------------------------------------------------------------------------*/}
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
                    (a === 'khurdt') ?
                      <div></div>
                      :
                      <Col>
                        <Card.Title><Badge className='p-2' bg='secondary'>{a}</Badge></Card.Title>
                      </Col>
                  )
                })}
              </Row>
            </Col>

            {/* INSURANCE CLAIM ------------------------------------------------------------------------------------------------------------*/}
            <div className="secondaryInfo-item">
              {(project.insuranceClaim.using === true) ?
                <>
                  <label className='secondaryInfo-label' style={{ display: 'flex' }}>
                    <Card.Title style={{ fontSize: '20px' }}>
                      <DollarSign className="icons" />
                      Insurance Claim:
                    </Card.Title>
                  </label>
                  {editing &&
                    <div style={{ display: 'flex', margin: '5px' }}>
                      <div style={{ fontSize: '15px', margin: 'auto', textAlign: 'center' }}>Still using?</div>
                      <Button
                        variant="light"
                        onClick={(e) => {
                          handleChoice(e);
                          setProject({
                            ...project, insuranceClaim: { ...project.insuranceClaim, using: true }
                          });
                        }}
                        style={{ color: 'black', borderColor: primaryColor, width: '100px', fontSize: '15px', marginRight: '2px' }}>Yes</Button>
                      <Button
                        variant="light"
                        onClick={(e) => {
                          handleChoice(e);
                          setProject({
                            ...project, insuranceClaim: { ...project.insuranceClaim, using: false }
                          });
                        }}
                        style={{ color: 'black', borderColor: primaryColor, width: '100px', fontSize: '15px' }}>No</Button>
                    </div>
                  }
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
                <>
                  <label className='secondaryInfo-label'>
                    <Card.Title style={{ fontSize: '20px' }}>
                      <DollarSign className="icons" />
                      Insurance Claim:
                    </Card.Title>
                  </label>
                  {editing ?
                    <div style={{ display: 'flex', margin: '5px' }}>
                      <div style={{ fontSize: '15px', margin: 'auto', textAlign: 'center' }}>Still using?</div>
                      <Button
                        variant="light"
                        onClick={(e) => {
                          handleChoice(e);
                          setProject({
                            ...project, insuranceClaim: { ...project.insuranceClaim, using: true }
                          });
                        }}
                        style={{ color: 'black', borderColor: primaryColor, width: '100px', fontSize: '15px', marginRight: '2px' }}>Yes</Button>
                      <Button
                        variant="light"
                        onClick={(e) => {
                          handleChoice(e);
                          setProject({
                            ...project, insuranceClaim: { ...project.insuranceClaim, using: false }
                          });
                        }}
                        style={{ color: 'black', borderColor: primaryColor, width: '100px', fontSize: '15px' }}>No</Button>
                    </div>
                    :
                    <Card.Title style={{ fontSize: '17px', marginLeft: '50px' }}>
                      None
                    </Card.Title>
                  }
                </>
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
                    <CloudinaryUploadWidget renderTooltip={renderTooltip} updateFiles={updateFiles} project={project} />
                    <OverlayTrigger
                      placement="right"
                      delay={{ show: 250, hide: 400 }}
                      overlay={renderTooltip('Delete Files')}
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
        </Card>
        <Row className='justify-content-center'>
          {project.files.map((file) => {
            return (
              <Col style={{ display: 'flex', flexDirection: 'column', marginBottom: '10px' }}>
                <Image publicId={file.name} style={{ width: '200px', height: '200px', objectFit: 'cover', margin: 'auto' }} />
                {(deleteFiles) &&
                  <Button variant='danger' style={{ width: '200px', margin: 'auto' }} onClick={() => { removeFiles(file.name) }}>delete</Button>
                }
              </Col>
            )
          })}
        </Row>
      </div>
    </>
  )
}
import React, { useEffect, useState } from "react";
import { Row, Col, Form, Button, Card, Dropdown, Badge, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { Image } from 'cloudinary-react';
import './project.css';
import { useLocation } from "react-router-dom";
import axios from 'axios';
import { Check, Mail, MapPin, Minus, MoreVertical, Phone, Plus, User, X, DollarSign, FilePlus, Folder, FolderPlus, FolderMinus, Key } from 'react-feather';
import FormAlert from '../formAlert-component/formAlert';
import CloudinaryUploadWidget from "./CloudinaryUploadWidget";

export default function Project(props) {
  const location = useLocation();
  const { primaryColor, setSnackBarInfo } = props;
  const [project, setProject] = useState(location.state.selectedProject);
  const [service, setService] = useState(location.state.selectedService);
  const [editing, setEditing] = useState(false);
  const [formattedDateOfDamage, setFormmattedDateOfDamage] = useState('');
  const [formattedDateOfInspection, setFormmattedDateOfInspection] = useState('');
  const [usingInsuranceClaim, setUsingInsuranceClaim] = useState(false);
  const [deleteFiles, setDeleteFiles] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    window.scrollTo(0, 0);
    getProject();
    if (!project.insuranceClaim) {
      setProject({
        ...project,
        insuranceClaim: {
          using: false,
          claimNumber: '',
          dateOfDamage: '',
          dateOfInspection: ''
        }
      })
    } else if (project.insuranceClaim.using) {
      setUsingInsuranceClaim(true);
      setFormmattedDateOfDamage((project.insuranceClaim.dateOfDamage !== '') ? new Date(project.insuranceClaim.dateOfDamage).toString().slice(0, 15) : 'none');
      setFormmattedDateOfInspection((project.insuranceClaim.dateOfInspection !== '') ? new Date(project.insuranceClaim.dateOfInspection).toString().slice(0, 15) : 'none');
    }
  }, [])

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
    let isReq = true;
    let newErrors = {};
    if (!description) {
      newErrors.description = '*required';
      isReq = false;
    }
    if (!location) {
      newErrors.location = '*required';
      isReq = false;
    }
    setErrors(newErrors);
    return isReq;
  }

  const updateProject = () => {
    const token = localStorage.getItem('token');
    // const isReq = validate();
    // if (isReq) {
    setSnackBarInfo({
      show: 'true',
      message: 'Updating Project',
      loading: true
    });
    axios.put(`https://polar-tor-24509.herokuapp.com/project/${project._id}`, project,
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
    // }
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
    const projectID = project._id;
    console.log(projectID);
    const token = localStorage.getItem('token');
    axios.get(`https://polar-tor-24509.herokuapp.com/oneProject/${projectID}`,
      {
        headers: { Authorization: `Bearer ${token}` },
      }).then((response) => {
        console.log(response);
        setProject(response.data);
      }).catch((error) => {
        console.log(error);
      })
  }

  function getExtension(fileName) {
    return fileName.split('.').pop()
  }

  const renderTooltip = (message) => (
    <Tooltip id="button-tooltip">
      {message}
    </Tooltip>
  );

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
            <div className='editButton'>
              <Dropdown>
                <Dropdown.Toggle as={MoreVertical} style={{ cursor: 'pointer', width: '30px', height: '30px' }} id="dropdown-basic" />

                <Dropdown.Menu>
                  <Dropdown.Item onClick={() => setEditing(true)}>Edit Project</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            :
            <>
              <Check onClick={() => setEditing(false)} className='editButton' style={{ color: 'green' }} />
              <X className='cancelButton' onClick={() => { setEditing(false); }} />
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
                            ...project, description: e.target.value
                          });
                        }}
                      />
                      {(errors.project.description) && <FormAlert message={errors.project.description} type={'error'} profile={true} />}
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
        <Card className='projectSecondaryInfo' style={{ border: 'none', marginLeft: '10%' }}>
          <Row className='justify-content-md-center mt-3'>
            <Col className='m-2 notEditingProjectSecondaryInfo'>
              <label>
                <Card.Title style={{ fontSize: '20px' }}>
                  <Key className="icons" />
                  Project Key:
                </Card.Title>
              </label>
              <Card.Title style={{ fontSize: '17px', marginLeft: '50px' }}>
                {project._id}
              </Card.Title>
              <label>
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
                      {(errors.project.location) && <FormAlert message={errors.project.location} type={'error'} profile={true} />}
                    </div>
                  </Form.Group>
                </Form>
                :
                <Card.Title style={{ fontSize: '17px', marginLeft: '50px' }}>
                  {project.location}
                </Card.Title>
              }
              <label>
                <Card.Title style={{ fontSize: '20px' }}>
                  <User className="icons" />
                  Users Involved:
                </Card.Title>
              </label>
              <Card.Title style={{ fontSize: '17px', marginLeft: '50px' }}>
                {project.users.map((a, e, i) => {
                  return (
                    (a === 'khurdt') ?
                      <Card.Title><Badge className='p-2' bg='secondary'></Badge></Card.Title>
                      :
                      <Card.Title><Badge className='p-2' bg='secondary'>{a}</Badge></Card.Title>
                  )
                })}
              </Card.Title>
              {(usingInsuranceClaim === true) ?
                <>
                  <label>
                    <Card.Title style={{ fontSize: '20px' }}>
                      <DollarSign className="icons" />
                      Insurance Claim:
                    </Card.Title>
                  </label>
                  <ul>
                    <li>
                      <Card.Title style={{ fontSize: '16px', marginLeft: '20px' }}>
                        Claim Number:
                      </Card.Title>
                    </li>
                    {editing ?
                      <Form style={{ width: 'auto', maxWidth: '350px' }}>
                        <Form.Group className='m-1'>
                          <div style={{ position: 'relative' }}>
                            <Form.Control
                              type='text'
                              placeholder='Overview'
                              value={project.insuranceClaim.claimNumber}
                              onChange={(e) => {
                                setProject({
                                  ...project, insuranceClaim: { claimNumber: e.target.value }
                                });
                              }}
                            />
                            {(errors.project.insuranceClaim.claimNumber) && <FormAlert message={errors.project.insuranceClaim.claimNumber} type={'error'} profile={true} />}
                          </div>
                        </Form.Group>
                      </Form>
                      :
                      <Card.Title style={{ fontSize: '16px', marginLeft: '50px' }}>
                        {project.insuranceClaim.claimNumber}
                      </Card.Title>
                    }
                    <li>
                      <Card.Title style={{ fontSize: '16px', marginLeft: '20px' }}>
                        Date of Damage Done To Property:
                      </Card.Title>
                    </li>
                    {editing ?
                      <Form style={{ width: 'auto', maxWidth: '350px' }}>
                        <Form.Group className='m-1'>
                          <div style={{ position: 'relative' }}>
                            <Form.Control
                              type='date'
                              placeholder='Overview'
                              value={project.insuranceClaim.dateOfDamage}
                              onChange={(e) => {
                                setProject({
                                  ...project, insuranceClaim: { dateOfDamage: e.target.value }
                                });
                              }}
                            />
                            {(errors.project.insuranceClaim.dateOfDamage) && <FormAlert message={errors.project.insuranceClaim.dateOfDamage} type={'error'} profile={true} />}
                          </div>
                        </Form.Group>
                      </Form>
                      :
                      <Card.Title style={{ fontSize: '16px', marginLeft: '50px' }}>
                        {formattedDateOfDamage}
                      </Card.Title>
                    }
                    <li>
                      <Card.Title style={{ fontSize: '16px', marginLeft: '20px' }}>
                        Date of Inspection Of Damaged Property:
                      </Card.Title>
                    </li>
                    {editing ?
                      <Form style={{ width: 'auto', maxWidth: '350px' }}>
                        <Form.Group className='m-1'>
                          <div style={{ position: 'relative' }}>
                            <Form.Control
                              type='text'
                              placeholder='Overview'
                              value={project.insuranceClaim.dateOfInspection}
                              onChange={(e) => {
                                setProject({
                                  ...project, insuranceClaim: { dateOfInspection: e.target.value }
                                });
                              }}
                            />
                            {(errors.project.insuranceClaim.dateOfInspection) && <FormAlert message={errors.project.insuranceClaim.dateOfInspection} type={'error'} profile={true} />}
                          </div>
                        </Form.Group>
                      </Form>
                      :
                      <Card.Title style={{ fontSize: '16px', marginLeft: '50px' }}>
                        {formattedDateOfInspection}
                      </Card.Title>
                    }
                  </ul>
                </>
                :
                <>
                  <label>
                    <Card.Title style={{ fontSize: '20px' }}>
                      <DollarSign className="icons" />
                      Insurance Claim:
                    </Card.Title>
                  </label>
                  <Card.Title style={{ fontSize: '17px', marginLeft: '50px' }}>
                    None
                  </Card.Title>
                </>
              }
              <label style={{ display: 'flex' }}>
                <Card.Title style={{ fontSize: '20px' }}>
                  <Folder className="icons" />
                  Files:
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
            </Col>
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
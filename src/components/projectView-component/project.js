import React, { useEffect, useState } from "react";
import { Row, Col, Form, Button, Card, Dropdown, Badge, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { Image } from 'cloudinary-react'
import './project.css';
import { useParams, useLocation } from "react-router-dom"
import axios from 'axios';
import { Check, Mail, MapPin, Minus, MoreVertical, Phone, Plus, User, X, DollarSign, FilePlus, Folder, FolderPlus, FolderMinus } from 'react-feather';
import FormAlert from '../formAlert-component/formAlert';
import CloudinaryUploadWidget from "./CloudinaryUploadWidget";

export default function Project(props) {
  const location = useLocation();
  const { primaryColor } = props;
  const [project, setProject] = useState(location.state.selectedProject);
  const [service, setService] = useState(location.state.selectedService);
  const [editing, setEditing] = useState(false);
  const [formattedDateOfDamage, setFormmattedDateOfDamage] = useState('');
  const [formattedDateOfInspection, setFormmattedDateOfInspection] = useState('');
  const [usingInsuranceClaim, setUsingInsuranceClaim] = useState(false);
  const [deleteDocumentsAndPictures, setDeleteDocumentsAndPictures] = useState(false);
  const [cloudinaryWidget, setCloudinaryWidget] = useState(false);

  useEffect(() => {
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
      setFormmattedDateOfDamage(new Date(project.insuranceClaim.dateOfDamage).toString().slice(0, 15));
      setFormmattedDateOfInspection(new Date(project.insuranceClaim.dateOfInspection).toString().slice(0, 15));
      setUsingInsuranceClaim(true);
    }
  }, [project, service, location])

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
                  <Dropdown.Item onClick={() => setEditing(true)}>Edit Profile</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            :
            <>
              <Check onClick={() => setEditing(false)} className='editButton' style={{ color: 'green' }} />
              <X className='cancelButton' onClick={() => { setEditing(false); }} />
            </>
          }
          {editing ?
            <>
              <Form style={{ display: 'flex', maxWidth: '200px' }}>
                <Form.Group className='m-1'>
                  <div style={{ position: 'relative' }}>
                    <Form.Control
                      type='text'
                      placeholder='First Name'
                    // value={firstName}
                    // onChange={(e) => { setFirstName(e.target.value); (errors.firstName) && validate() }}
                    />
                    {/* {(errors.firstName) && <FormAlert message={errors.firstName} type={'error'} profile={true} />} */}
                  </div>
                </Form.Group>
                <Form.Group className='m-1'>
                  <div style={{ position: 'relative' }}>
                    <Form.Control
                      type='text'
                      placeholder='Last Name'
                    // value={lastName}
                    // onChange={(e) => { setLastName(e.target.value); (errors.lastName) && validate() }} 
                    />
                    {/* {(errors.lastName) && <FormAlert message={errors.lastName} type={'error'} profile={true} />} */}
                  </div>
                </Form.Group>
              </Form>
              <Form style={{ maxWidth: '200px' }}>
                <Form.Group className='m-1'>
                  <div style={{ position: 'relative' }}>
                    <Form.Control
                      type='text'
                      placeholder='Company'
                    // value={company}
                    // onChange={(e) => { setCompany(e.target.value); (errors.company) && validate() }} 
                    />
                    {/* {(errors.company) && <FormAlert message={errors.company} type={'error'} profile={true} />} */}
                  </div>
                </Form.Group>
              </Form>
            </>
            :
            <div style={{ marginRight: '45px' }}>
              <Card.Title className='project-overview' style={{ fontSize: '21px', padding: '10px' }}>Overview:
                <div style={{ fontSize: '15px', marginLeft: '30px', paddingTop: '5px' }}>{project.description}</div>
              </Card.Title>
              <div style={{ width: 'fit-content', padding: '10px' }}>
                <Card.Title className='status'>Status: <Badge className='p-2'>{project.status.title}</Badge></Card.Title>
                <Card.Title style={{ fontSize: '15px', fontWeight: '200', marginLeft: '30px' }}>{project.status.description}</Card.Title>
              </div>
            </div>
          }
        </Card>
        <Card className='projectSecondaryInfo' style={{ border: 'none', marginLeft: '10%' }}>
          <Row className='justify-content-md-center mt-3'>
            {editing ?
              <Form>
                <Row className='justify-content-md-center'>
                  <Col className='formProjectSecondaryInfo'>
                    <Form.Group className='m-1 form_item'>
                      <div style={{ position: 'relative' }}>
                        <Form.Control
                          type='text'
                          placeholder='Username'
                        // value={username}
                        // onChange={(e) => { setUsername(e.target.value); (errors.username) && validate() }} 
                        />
                        {/* {(errors.username) && <FormAlert message={errors.username} type={'error'} profile={true} />} */}
                      </div>
                    </Form.Group>
                    <Form.Group className='m-1 form_item'>
                      <div style={{ position: 'relative' }}>
                        <Form.Control
                          type='text'
                          placeholder='Email'
                        // value={email}
                        // onChange={(e) => { setEmail(e.target.value); (errors.email) && validate() }} 
                        />
                        {/* {(errors.email) && <FormAlert message={errors.email} type={'error'} profile={true} />} */}
                      </div>
                    </Form.Group>
                    <Form.Group className='m-1 form_item'>
                      <div style={{ position: 'relative' }}>
                        <Form.Control
                          type='text'
                          placeholder='Phone'
                        // value={phone}
                        // onChange={(e) => { setPhone(formatPhoneNumber(e.target.value)); (errors.phone) && validate() }} 
                        />
                        {/* {(errors.phone) && <FormAlert message={errors.phone} type={'error'} profile={true} />} */}
                      </div>
                    </Form.Group>
                    <Form.Group className='m-1 form_item'>
                      <div style={{ position: 'relative' }}>
                        <Form.Control
                          type='text'
                          placeholder='Address'
                        // value={address}
                        // onChange={(e) => { setAddress(e.target.value); (errors.address) && validate() }} 
                        />
                        {/* {(errors.address) && <FormAlert message={errors.address} type={'error'} profile={true} />} */}
                      </div>
                    </Form.Group>
                  </Col>
                </Row>
              </Form>
              :
              <>
                <Col className='m-2 notEditingProjectSecondaryInfo'>
                  <label>
                    <Card.Title id='location' style={{ fontSize: '20px' }}>
                      <MapPin className="icons" />
                      Location:
                    </Card.Title>
                  </label>
                  <Card.Title id='location' style={{ fontSize: '17px', marginLeft: '50px' }}>
                    {project.location}
                  </Card.Title>
                  <label>
                    <Card.Title id='location' style={{ fontSize: '20px' }}>
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
                        <Card.Title id='location' style={{ fontSize: '20px' }}>
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
                        <Card.Title style={{ fontSize: '16px', marginLeft: '50px' }}>
                          {project.insuranceClaim.claimNumber}
                        </Card.Title>
                        <li>
                          <Card.Title style={{ fontSize: '16px', marginLeft: '20px' }}>
                            Date of Damage Done To Property:
                          </Card.Title>
                        </li>
                        <Card.Title style={{ fontSize: '16px', marginLeft: '50px' }}>
                          {formattedDateOfDamage}
                        </Card.Title>
                        <li>
                          <Card.Title style={{ fontSize: '16px', marginLeft: '20px' }}>
                            Date of Inspection Of Damaged Property:
                          </Card.Title>
                        </li>
                        <Card.Title style={{ fontSize: '16px', marginLeft: '50px' }}>
                          {formattedDateOfInspection}
                        </Card.Title>
                      </ul>
                    </>
                    :
                    <>
                      <label>
                        <Card.Title id='location' style={{ fontSize: '20px' }}>
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
                    <Card.Title id='location' style={{ fontSize: '20px' }}>
                      <Folder className="icons" />
                      Pictures and Documents:
                    </Card.Title>
                    {(cloudinaryWidget) ?
                      <div style={{ display: 'flex' }}>
                        <Button onClick={() => { setCloudinaryWidget(false); }} variant="dark" style={{ margin: '10px' }}>
                          <div style={{ marginTop: '2px', display: 'flex' }}>
                            <Check style={{ color: 'green' }} />
                            <div>Finished</div>
                          </div>
                        </Button>
                        <CloudinaryUploadWidget />
                      </div>
                      :
                      (!deleteDocumentsAndPictures) ?
                        <Dropdown style={{ marginLeft: '10px' }}>
                          <Dropdown.Toggle as={MoreVertical} style={{ cursor: 'pointer', width: '25px', height: '25px' }} id="dropdown-basic" />
                          <Dropdown.Menu>
                            <Dropdown.Item onClick={() => { setCloudinaryWidget(true); console.log(cloudinaryWidget); }} style={{ margin: 'auto', display: 'flex' }}>
                              <FolderPlus
                                width={20}
                                height={20}
                                style={{ color: 'green', marginBottom: '3px', marginRight: '5px' }} />
                              <div>
                                Add Pictures or Documents
                              </div>
                            </Dropdown.Item>
                            <Dropdown.Item onClick={() => { setDeleteDocumentsAndPictures(true); }} style={{ display: 'flex', margin: 'auto' }}>
                              <div>
                                <FolderMinus
                                  width={20}
                                  height={20}
                                  style={{ color: 'red', marginBottom: '3px', marginRight: '5px' }} />
                              </div>
                              <div>
                                Remove Pictures or Documents
                              </div>
                            </Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                        :
                        <>
                          <Check onClick={() => { setDeleteDocumentsAndPictures(false); }} style={{ color: 'green', cursor: 'pointer', marginLeft: '10px' }} />
                        </>
                    }
                  </label>
                </Col>
              </>
            }
          </Row>
        </Card>
      </div>
    </>
  )
}
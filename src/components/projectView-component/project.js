import React from "react";
import { Row, Col, Form, Button, Card, Dropdown, Badge, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { Image } from 'cloudinary-react'
import axios from 'axios';
import { Check, Mail, MapPin, Minus, MoreVertical, Phone, Plus, User, X } from 'react-feather';
import FormAlert from '../formAlert-component/formAlert';

export default function Project() {

  return (
    <>
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
      <div className={(showCreateProject) ? 'hideProfile' : 'mt-4 mb-5'}>
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
                    <Mail style={{ width: '17px', height: '17px', color: 'grey', marginRight: '10px' }} />
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
      </div>
    </>
  )
}
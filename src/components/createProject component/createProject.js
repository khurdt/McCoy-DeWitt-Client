import React, { useEffect, useState } from 'react';
import './createProject.css';
import { ArrowLeft, X } from 'react-feather';
import { services } from '../servicesAPI';
import { FloatingLabel, Row, Card, Form } from 'react-bootstrap';
import CustomButton from '../button-component/customButton';
import axios from 'axios';
import FormAlert from '../formAlert-component/formAlert';

export default function CreateProject(props) {
  const { setShowCreateProject, primaryColor, setSnackBarInfo, getProjects } = props;
  const [custom, setCustom] = useState(false);
  const [currentChoice, setCurrentChoice] = useState({});
  const [addExistiingProject, setAddExistingProject] = useState(false);
  const [page, setPage] = useState(0);
  const [errors, setErrors] = useState({});
  const windowSmall = (window.innerWidth < 700);

  const [serviceType, setServiceType] = useState('');
  const [projectId, setProjectId] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');

  const [insuranceClaim, setInsuranceClaim] = useState({
    using: false,
    claimNumber: '',
    dateOfDamage: '',
    dateOfInspection: ''
  });

  const validate = () => {
    let isReq = true;
    let newErrors = {};
    if (!serviceType) {
      newErrors.serviceType = '*required';
      isReq = false;
    }
    if (!description) {
      newErrors.description = '*required';
      isReq = false;
    }
    if (!location) {
      newErrors.location = '*required';
      isReq = false;
    }
    (newErrors.serviceType) ? setPage(1) : (newErrors.description) ? setPage(2) : (newErrors.location) && setPage(3);
    setErrors(newErrors);
    return isReq;
  }

  const createProject = () => {
    const user = localStorage.getItem('user');
    const token = localStorage.getItem('token');
    let users = [user];
    let status = { title: 'pending review', description: 'we have not yet reviewed your submitted project, thank you for waiting' };
    const projectData = {
      service: serviceType,
      description: description,
      location: location,
      insuranceClaim: insuranceClaim,
      users: users,
      status: status
    }
    const isReq = validate();
    if (isReq) {
      setSnackBarInfo({
        message: 'Creating Project',
        loading: true,
        show: 'true'
      });
      axios.post(`https://polar-tor-24509.herokuapp.com/projects`, projectData,
        {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => {
          console.log(response);
          setSnackBarInfo({
            show: 'true',
            message: 'Project Created!',
            loading: false,
          });
          setShowCreateProject(false);
          getProjects();
        })
        .catch(function (error) {
          console.log(error);
          setSnackBarInfo({
            show: 'true',
            message: (error.message) ? error.message : 'Failed to Create Project',
            loading: false
          });
        });
    }
  }

  const projectIdValidaton = () => {
    if (!projectId) {
      setErrors({
        ...errors,
        projectId: '*required'
      });
      return false;
    } else {
      setErrors({
        ...errors,
        projectId: ''
      });
      return true;
    }
  }

  const addProject = () => {
    const username = localStorage.getItem('user');
    const token = localStorage.getItem('token');
    if (projectIdValidaton()) {
      setSnackBarInfo({
        message: 'Adding Project',
        loading: true,
        show: 'true'
      });
      axios.post(`https://polar-tor-24509.herokuapp.com/users/${username}/projects/${projectId}`, { 'jwt': token },
        {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => {
          console.log(response);
          setSnackBarInfo({
            show: 'true',
            message: 'Project Added!',
            loading: false,
          });
          setShowCreateProject(false);
          getProjects();
        })
        .catch(function (error) {
          console.log(error);
          setSnackBarInfo({
            show: 'true',
            message: 'Failed to Add Project',
            loading: false
          });
        });
    }
  }


  return (
    <div className='createProjectContainer' style={{ position: 'absolute', minHeight: '500px' }}>
      <div className='createProjectContent' style={{ position: 'absolute', minHeight: '500px' }}>
        <Row className='justify-content-end' style={{ width: '100%' }}>
          <X className='createProject-closeButton' onClick={() => setShowCreateProject(false)} />
        </Row>
        <Row className='justify-content-center text-center mb-3' style={{ height: (page === 1 && !custom && windowSmall) && '900px' }}>
          {page > 0 &&
            <div style={{ display: 'flex', justifyContent: 'center', marginRight: '60px' }}>
              <div style={{ width: '50px' }}>
                {(insuranceClaim.using && page === 4) ?
                  <ArrowLeft style={{ cursor: 'pointer' }}
                    width={17}
                    height={17}
                    onClick={() => setInsuranceClaim({ ...insuranceClaim, using: false })} />
                  :
                  <ArrowLeft style={{ cursor: 'pointer' }}
                    width={17}
                    height={17}
                    onClick={() => setPage(page - 1)} />
                }
              </div>
              <div style={{ width: '20px' }}>{page} -</div>
            </div>
          }
          {page === 0 &&
            <div>
              <Card style={{ border: 'none' }}>
                {!addExistiingProject ?
                  <>
                    <Card.Title className='m-4'>
                      Would You Like To Create A Project Or Add An Existing Project?
                    </Card.Title>
                    <Row className='m-auto justify-content-center' style={{ width: '70%' }}>
                      <div style={{ width: '200px', margin: '10px' }}>
                        <CustomButton primaryColor={primaryColor} onClickFunction={function () { setPage(page + 1) }} currentChoice={currentChoice} setCurrentChoice={setCurrentChoice} text={'Create Project'} />
                      </div>
                      <div style={{ width: '200px', margin: '10px' }}>
                        <CustomButton primaryColor={primaryColor} onClickFunction={function () { setAddExistingProject(true) }} currentChoice={currentChoice} setCurrentChoice={setCurrentChoice} text={'Add Existing Project'} />
                      </div>
                    </Row>
                  </>
                  :
                  <>
                    <Card.Title className='m-4'>
                      Add Your Project ID
                    </Card.Title>
                    <Row className='justify-content-center'>
                      <Form style={{ maxWidth: '500px', paddingRight: '15px', paddingLeft: '15px' }}>
                        <Form.Group>
                          <FloatingLabel
                            label='Project ID'
                            className="mb-3">
                            <Form.Control
                              value={projectId}
                              placeholder='Project ID' type='text'
                              onChange={e => { setProjectId(e.target.value); (errors.projectId) && projectIdValidaton() }} />
                            {(errors.projectId) && <FormAlert message={errors.projectId} type={'error'} />}
                          </FloatingLabel>
                        </Form.Group>
                      </Form>
                      <ArrowLeft
                        style={{ cursor: 'pointer' }}
                        className='mt-3'
                        width={30}
                        height={30}
                        onClick={() => setAddExistingProject(false)} />
                    </Row>
                  </>
                }
              </Card>
            </div>
          }
          {page === 1 &&
            <div>
              <Card style={{ border: 'none' }}>
                <Card.Title className='m-4'>
                  What Type Of Service Would You Like To Employ?
                </Card.Title>
                {!custom ?
                  <Row className='m-auto justify-content-center' style={{ width: '70%' }}>
                    {services.map((s, i) => {
                      return (
                        <div key={s._id} style={{ width: '200px', margin: '10px' }}>
                          <CustomButton primaryColor={primaryColor} onClickFunction={function () { setServiceType(s.title) }} currentChoice={currentChoice} setCurrentChoice={setCurrentChoice} text={s.title} />
                        </div>
                      )
                    })}
                    <div style={{ width: '200px', margin: '10px' }}>
                      <CustomButton primaryColor={primaryColor} onClickFunction={function () { setCustom(true) }} currentChoice={currentChoice} setCurrentChoice={setCurrentChoice} text={'Custom'} />
                    </div>
                  </Row>
                  :
                  <Row className='justify-content-center'>
                    <Form style={{ maxWidth: '500px', paddingRight: '15px', paddingLeft: '15px' }}>
                      <Form.Group>
                        <FloatingLabel
                          label='Custom Service Type'
                          className="mb-3">
                          <Form.Control
                            value={serviceType}
                            placeholder='Custom Service Type' type='text'
                            onChange={e => { setServiceType(e.target.value); }} />
                          {(errors.serviceType) && <FormAlert message={errors.serviceType} type={'error'} />}
                        </FloatingLabel>
                      </Form.Group>
                    </Form>
                    <ArrowLeft
                      style={{ cursor: 'pointer' }}
                      className='mt-3'
                      width={30}
                      height={30}
                      onClick={() => setCustom(false)} />
                  </Row>
                }
              </Card>
            </div>
          }
          {page === 2 &&
            <div>
              <Card style={{ border: 'none' }}>
                <Card.Title className='m-4'>
                  Write A Brief Description Of You Want Done
                </Card.Title>
                <Row className='justify-content-center'>
                  <Form style={{ maxWidth: '700px', paddingRight: '15px', paddingLeft: '15px' }}>
                    <Form.Group className='mb-3'>
                      <div style={{ position: 'relative' }}>
                        <Form.Control
                          style={{ padding: '20px' }}
                          value={description}
                          as='textarea'
                          rows={4}
                          placeholder='Description'
                          onChange={(e) => { setDescription(e.target.value); }} />
                        {(errors.description) && <FormAlert message={errors.description} type={'error'} />}
                      </div>
                    </Form.Group>
                  </Form>
                </Row>
              </Card>
            </div>
          }
          {page === 3 &&
            <div>
              <Card style={{ border: 'none' }}>
                <Card.Title className='m-4'>
                  Where Is The Location Of This Project?
                </Card.Title>
                <Row className='justify-content-center'>
                  <Form style={{ maxWidth: '700px', paddingRight: '15px', paddingLeft: '15px' }}>
                    <Form.Group>
                      <FloatingLabel
                        label='Location'
                        className="mb-3">
                        <Form.Control
                          value={location}
                          placeholder='Location' type='text'
                          onChange={e => { setLocation(e.target.value); }} />
                        {(errors.location) && <FormAlert message={errors.location} type={'error'} />}
                      </FloatingLabel>
                    </Form.Group>
                  </Form>
                </Row>
              </Card>
            </div>
          }
          {page === 4 &&
            <Card style={{ border: 'none' }}>
              {!insuranceClaim.using ?
                <>
                  <Card.Title className='m-4'>
                    Would You Like To Add A Insurance Claim Right Now?
                  </Card.Title>
                  <Row className='m-auto justify-content-center' style={{ width: '70%' }}>
                    <div style={{ width: '200px', margin: '10px' }}>
                      <CustomButton primaryColor={primaryColor} onClickFunction={function () { setPage(page + 1); setInsuranceClaim({ ...insuranceClaim, using: false }) }} currentChoice={currentChoice} setCurrentChoice={setCurrentChoice} text={'No'} />
                    </div>
                    <div style={{ width: '200px', margin: '10px' }}>
                      <CustomButton primaryColor={primaryColor} onClickFunction={function () { setInsuranceClaim({ ...insuranceClaim, using: true }) }} currentChoice={currentChoice} setCurrentChoice={setCurrentChoice} text={'Yes'} />
                    </div>
                  </Row>
                </>
                :
                <>
                  <Card.Title className='m-4'>
                    Please Provide Your Insurance Claim Information
                  </Card.Title>
                  <Row className='justify-content-center'>
                    <Form style={{ maxWidth: '700px', paddingRight: '15px', paddingLeft: '15px' }}>
                      <Form.Group>
                        <FloatingLabel
                          label='Claim Number'
                          className="mb-3">
                          <Form.Control

                            placeholder='Claim Number' type='text'
                            onChange={e => { setInsuranceClaim({ ...insuranceClaim, claimNumber: e.target.value }); }} />
                        </FloatingLabel>
                      </Form.Group>
                      <Form.Group>
                        <FloatingLabel
                          label='Date of when the damage occured'
                          className="mb-3">
                          <Form.Control

                            placeholder='Date of when the damage occured' type='date'
                            onChange={e => { setInsuranceClaim({ ...insuranceClaim, dateOfDamage: e.target.value }); }} />

                        </FloatingLabel>
                      </Form.Group>
                      <Form.Group>
                        <FloatingLabel
                          label='Date of the inspection'
                          className="mb-3">
                          <Form.Control

                            placeholder='Date of the inspection' type='date'
                            onChange={e => { setInsuranceClaim({ ...insuranceClaim, dateOfInspection: e.target.value }); }} />
                        </FloatingLabel>
                      </Form.Group>
                    </Form>
                    <div>
                      <CustomButton primaryColor={primaryColor} onClickFunction={function () { setPage(page + 1) }} submitButton={true} currentChoice={currentChoice} setCurrentChoice={setCurrentChoice} text={'OK'} />
                    </div>
                  </Row>
                </>
              }
            </Card>
          }
          {page === 5 &&
            <Card style={{ border: 'none' }}>
              <Card.Title className='m-5'>
                Ready To Submit?
              </Card.Title>
            </Card>
          }
          <Row className='justify-content-end' style={{ width: '100%' }}>
            <div style={{ width: '200px', marginTop: '30px', marginLeft: 'auto', marginRight: 'auto' }}>
              {addExistiingProject ?
                <CustomButton primaryColor={primaryColor} onClickFunction={function (e) { (e.detail === 1) && addProject() }} submitButton={true} currentChoice={currentChoice} setCurrentChoice={setCurrentChoice} text={'Add Project'} />
                :
                (page === 5) ?
                  <CustomButton primaryColor={primaryColor} onClickFunction={function (e) { (e.detail === 1) && createProject() }} submitButton={true} currentChoice={currentChoice} setCurrentChoice={setCurrentChoice} text={'Create Project'} />
                  :
                  (page !== 0 && page !== 4) &&
                  <CustomButton primaryColor={primaryColor} onClickFunction={function () { setPage(page + 1) }} submitButton={true} currentChoice={currentChoice} setCurrentChoice={setCurrentChoice} text={'OK'} />
              }
            </div>
          </Row>
        </Row>
      </div >
    </div >
  )
}
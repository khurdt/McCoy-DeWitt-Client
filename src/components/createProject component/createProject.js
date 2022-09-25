import React, { useRef, createRef, useState } from 'react';
import './createProject.css';
import { ArrowLeft, X } from 'react-feather';
import { services } from '../servicesAPI';
import { FloatingLabel, Row, Card, Button, Form } from 'react-bootstrap';

export default function CreateProject(props) {
  const { setShowCreateProject, primaryColor } = props;
  const [currentOption, setCurrentOption] = useState({});
  const [custom, setCustom] = useState(false);
  const [page, setPage] = useState(1);

  const [serviceType, setServiceType] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');

  const handleChoice = (event) => {
    if (currentOption) {
      currentOption.backgroundColor = '';
      currentOption.color = primaryColor;
    }
    setCurrentOption(event.target.style);
    event.target.style.backgroundColor = primaryColor;
    event.target.style.color = 'black';
  }

  const validate = () => {
    let isReq = true;
    if (!serviceType) {
      isReq = false;
      setPage(1);
    }
    if (!description) {
      isReq = false;
      setPage(2);
    }
    if (!location) {
      isReq = false;
      setPage(3);
    }
    return isReq;
  }

  const createProject = () => {
    const user = localStorage.getItem('user');
    const token = localStorage.getItem('token');
    let users = [{ username: user }];
    let status = { title: 'pending review', description: 'we have not yet reviewed your submitted project, thank you for waiting' };
    const projectData = {
      service: serviceType,
      description: description,
      location: location,
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
      axios.post(`https://polar-tor-24509.herokuapp.com/project`, projectData,
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


  return (
    <div className='createProjectContainer' style={{ position: 'absolute', minHeight: '1000px' }}>
      <div className='createProjectContent' style={{ position: 'absolute', minHeight: '1000px' }}>
        <Row className='justify-content-end' style={{ width: '100%' }}>
          <X className='createProject-closeButton' onClick={() => setShowCreateProject(false)} />
        </Row>
        <Row className='justify-content-center text-center'>
          {page > 1 &&
            <ArrowLeft style={{ cursor: 'pointer' }}
              width={17}
              height={17}
              onClick={() => setPage(page - 1)} />
          }
          <div>{page} -</div>
          {page === 1 &&
            <div>
              <Card style={{ border: 'none' }}>
                <Card.Title className='m-3'>
                  What Type Of Service Would You Like To Employ?
                </Card.Title>
                {!custom ?
                  <Row className='m-auto justify-content-center' style={{ width: '70%' }}>
                    {services.map((s, i) => {
                      return (
                        <div key={s._id} style={{ width: '200px', margin: '10px' }}>
                          <Button
                            variant="outline-secondary"
                            onClick={(e) => { handleChoice(e); setServiceType(s.title); }}
                            style={{ color: primaryColor, borderColor: primaryColor, width: '200px' }}>{s.title}</Button>
                        </div>
                      )
                    })}
                    <div style={{ width: '200px', margin: '10px' }}>
                      <Button
                        variant="outline-secondary"
                        onClick={(e) => { handleChoice(e); setCustom(true); }}
                        style={{ color: primaryColor, borderColor: primaryColor, width: '200px' }}>Custom</Button>
                    </div>
                  </Row>
                  :
                  <Row className='justify-content-center'>
                    <Form style={{ maxWidth: '500px' }}>
                      <Form.Group>
                        <FloatingLabel
                          label='Custom Service Type'
                          className="mb-3">
                          <Form.Control
                            value={serviceType}
                            placeholder='Custom Service Type' type='text'
                            onChange={e => { setServiceType(e.target.value) }} />
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
                <Card.Title className='m-3'>
                  Write A Brief Description Of You Want Done
                </Card.Title>
                <Row className='justify-content-center'>
                  <Form>
                    <Form.Group className='mb-3'>
                      <div style={{ position: 'relative' }}>
                        <Form.Control
                          style={{ padding: '20px' }}
                          value={description}
                          as='textarea'
                          rows={4}
                          placeholder='Description'
                          onChange={(e) => { setDescription(e.target.value); }} />
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
                <Card.Title className='m-3'>
                  Where Is The Location Of This Project?
                </Card.Title>
                <Row className='justify-content-center'>
                  <Form>
                    <Form.Group>
                      <FloatingLabel
                        label='Location'
                        className="mb-3">
                        <Form.Control
                          value={location}
                          placeholder='Location' type='text'
                          onChange={e => { setLocation(e.target.value) }} />
                      </FloatingLabel>
                    </Form.Group>
                  </Form>
                </Row>
              </Card>
            </div>
          }
          <Row className='justify-content-end' style={{ width: '100%' }}>
            <div style={{ width: '200px', margin: '10px' }}>
              {page === 3 ?
                <Button
                  style={{ color: 'black', backgroundColor: primaryColor, borderColor: primaryColor, width: '100px' }}
                  onClick={() => { createProject() }}
                >Create Project</Button>
                :
                <Button
                  style={{ color: 'black', backgroundColor: primaryColor, borderColor: primaryColor, width: '100px' }}
                  onClick={() => { setPage(page + 1); }}
                >OK</Button>
              }
            </div>
          </Row>
        </Row>
      </div >
    </div >
  )
}
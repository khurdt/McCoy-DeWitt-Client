import React, { useState, useEffect } from "react";
import { services } from "../servicesAPI";
import { Image } from "cloudinary-react";
import { Row, Col, Form, Button, Card, Dropdown, Badge, OverlayTrigger, Tooltip } from 'react-bootstrap';
import axios from 'axios';
import { InView } from 'react-intersection-observer';
import './adminView.css';
import CustomButton from '../button-component/customButton';

export default function AdminView(props) {
  const {
    adminClients,
    adminProjects,
    primaryColor,
    secondaryColor,
    navigate,
    setSnackBarInfo
  } = props;

  const [deleteProject, setDeleteProject] = useState(false);
  const [projectsInView, setProjectsInView] = useState(true);

  const removeProject = (project) => {
    const token = localStorage.getItem('token');
    setSnackBarInfo({
      message: 'Removing Project',
      loading: true,
      show: 'true'
  });
    axios.delete(`https://polar-tor-24509.herokuapp.com/projects/${project._id}`, {
      headers: {Authorization: `Bearer ${token}`}
    }).then((response) => {
      setSnackBarInfo({
        show: 'true',
        message: 'Project Removed!',
        loading: false,
    });
    }).catch((error) => {
      console.log(error);
      setSnackBarInfo({
        show: 'true',
        message: 'Failed to Remove Project',
        loading: false
    });
    })
  }

  return (
    <>
      <Row  >
        <Col className='justify-content-center align-items-center' style={{ display: 'flex', margin: 'auto' }}>
          {!deleteProject ?
          <>
        <div className='m-2' style={(projectsInView) ? {} : { backgroundColor: primaryColor }} >
            <CustomButton primaryColor={'red'}
              onClickFunction={function () {
                setDeleteProject(true);
              }}
              text={'Delete Project'} />
          </div>
          <div className='m-2' style={(projectsInView) ? { backgroundColor: primaryColor } : {}}>
            <CustomButton primaryColor={primaryColor}
              onClickFunction={function () {
                setProjectsInView(true);
              }}
              text={'Your Projects'} />
          </div>
          <div className='m-2' style={(projectsInView) ? {} : { backgroundColor: primaryColor }} >
            <CustomButton primaryColor={primaryColor}
              onClickFunction={function () {
                setProjectsInView(false);
              }}
              text={'Your Clients'} />
          </div>
          </>
          :
          <div className='m-2' style={(projectsInView) ? {} : { backgroundColor: primaryColor }} >
          <CustomButton primaryColor={primaryColor}
            onClickFunction={function () {
              setDeleteProject(false);
            }}
            text={'Done'} />
        </div>
          }
        </Col>
      </Row>
      {
        projectsInView ?
          <Row className='m-auto' style={{ justifyContent: 'center' }}>
            {adminProjects.length === 0 && (
              <div style={{ height: '50vh' }} className='text-center'>You Don't Have Any Projects</div>
            )}
            {adminProjects.length > 0 && adminProjects.map((project, index) => {
              let service = services.find((s) => project.service.toLowerCase().includes(s.image));
              return (
                <InView triggerOnce={true}>
                  {({ inView, ref, entry }) => (
                    <Card ref={ref} key={index} className='m-3' style={{ width: '18rem', margin: '0', padding: '0' }}>
                      <div style={{ position: 'relative' }}>
                        {inView &&
                          <Card.Img style={{ height: '190px' }} as={Image} publicId={(service) ? service.image : 'custom'} />
                        }
                        <div className='service-title'>{project.service}</div>
                      </div>
                      <Card.Body>
                        <Card.Text>Status: <Badge className='p-2'>{project.status.title}</Badge></Card.Text>
                        <Card.Text className='text-center'>
                          {project.description}
                        </Card.Text>
                        <Card.Footer>
                          <Row className='justify-content-center'>
                            {deleteProject ?
                              <Button variant='danger' onClick={() => { removeProject(project); }}>remove</Button>
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
                  )}
                </InView>
              )
            })}
          </Row>
          :
          <Row>
          {adminClients.map((client, index) => {
            const userInitials = (client.firstName.slice(0, 1) + client.lastName.slice(0, 1));
            return (
              <Card key={index} className='m-3' style={{ width: '18rem', margin: '0', padding: '0' }}>
                <div style={{ backgroundColor: client.color }} className='client-badge'>
                  {userInitials}
                </div>
                <Card.Text className='text-center'>
                  {client.firstName} {client.lastName}
                </Card.Text>
                <Card.Body>
                  <Card.Text>Username: <Badge className='p-2'>{client.username}</Badge></Card.Text>
                  <Card.Text className='text-center'>
                    {client.company}
                  </Card.Text>
                  <Card.Text className='text-center'>
                    {client.phone}
                  </Card.Text>
                  <Card.Text className='text-center'>
                    {client.address}
                  </Card.Text>
                  <Card.Footer>
                  </Card.Footer>
                </Card.Body>
              </Card>
            )
          })}
          </Row>
      }
    </>
  );
}
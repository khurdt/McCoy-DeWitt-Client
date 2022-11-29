import React, { useEffect, useState } from "react";
import { getAllUsers, services, setAdminProjects } from "../servicesAPI";
import { Image } from "cloudinary-react";
import { Row, Col, Button, Card, Badge } from 'react-bootstrap';
import { InView } from 'react-intersection-observer';
import './adminView.css';
import CustomButton from '../button-component/customButton';
import { removeAdminProject } from "../servicesAPI";

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
  const [currentChoice, setCurrentChoice] = useState({});

  // useEffect(() => {
  // }, [])

  return (
    <>
      <Row className='m-auto' style={{ justifyContent: 'center' }}  >
        {!deleteProject ?
          <Col className='m-auto justify-content-center'>
            {/* <Col className='m-2' >
              <CustomButton submitButton={true} primaryColor={'red'}
                onClickFunction={function () {
                  setDeleteProject(true);
                }}
                text={'Delete Project'} />
            </Col> */}
            <div className='m-2'>
              <CustomButton primaryColor={primaryColor}
                onClickFunction={function () { setProjectsInView(true) }}
                currentChoice={currentChoice} setCurrentChoice={setCurrentChoice}
                text={'Your Projects'} />
            </div>
            <div className='m-2'>
              <CustomButton primaryColor={primaryColor} currentChoice={currentChoice} setCurrentChoice={setCurrentChoice}
                onClickFunction={function () {
                  setProjectsInView(false);
                }}
                text={'Your Clients'} />
            </div>
          </Col>
          :
          <Col className='m-2' style={(projectsInView) ? {} : { backgroundColor: primaryColor }} >
            <CustomButton submitButton={true} primaryColor={primaryColor}
              onClickFunction={function () {
                setDeleteProject(false);
              }}
              text={'Done'} />
          </Col>
        }
      </Row>
      {(projectsInView) ?
        <Row className='m-auto' style={{ justifyContent: 'center' }}>
          {adminProjects.length === 0 && (
            <div style={{ height: '80vh' }} className='text-center'>You Don't Have Any Projects</div>
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
                            <Button variant='danger' onClick={() => { removeAdminProject(project._id, setSnackBarInfo); }}>remove</Button>
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
        <Row className='m-auto' style={{ justifyContent: 'center' }}>
          {adminClients.map((client, index) => {
            const userInitials = (client.firstName.slice(0, 1) + client.lastName.slice(0, 1));
            return (
              <Card key={index} className='m-3' style={{ width: '18rem', margin: '0', padding: '0' }}>
                <div style={{ display: 'flex' }}>
                  <div style={{ backgroundColor: client.color }} className='client-badge'>
                    {userInitials}
                  </div>
                  <Card.Text className='m-auto text-center' style={{ fontSize: '20px' }}>
                    {client.firstName} {client.lastName}
                  </Card.Text>
                </div>
                <Card.Body>
                  <Card.Text><span>Username: </span><Badge bg='secondary' className='p-2'>{client.username}</Badge></Card.Text>
                  <Card.Text>
                    <span style={{ color: secondaryColor }}>Company: </span>{client.company}
                  </Card.Text>
                  <Card.Text>
                    <span style={{ color: secondaryColor }}>Address: </span>{client.address}
                  </Card.Text>
                  <Card.Footer>
                    <Card.Text>
                      <span style={{ color: secondaryColor }}>Email: </span>{client.email}
                    </Card.Text>
                    <Card.Text >
                      <span style={{ color: secondaryColor }}>Phone: </span>{client.phone}
                    </Card.Text>
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
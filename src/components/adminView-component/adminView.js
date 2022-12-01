import React, { useEffect, useState } from "react";
import { Image } from "cloudinary-react";
import { Row, Col, Button, Card, Badge, Dropdown } from 'react-bootstrap';
import { InView } from 'react-intersection-observer';
import './adminView.css';
import CustomButton from '../button-component/customButton';
import { removeAdminProject, services } from "../servicesAPI";
import { Check, Plus, Minus, MoreVertical } from "react-feather";
import CreateProject from "../createProject component/createProject";
import SearchBar from "../searchBar-component/searchBar";

export default function AdminView(props) {
  const {
    adminClients,
    adminProjects,
    primaryColor,
    secondaryColor,
    navigate,
    setSnackBarInfo,
    username,
    setAdminProjects,
    setCreateProjectButton,
    createProjectButton
  } = props;

  const [deleteProject, setDeleteProject] = useState(false);
  const [projectsInView, setProjectsInView] = useState(true);
  const [currentChoice, setCurrentChoice] = useState({});
  const [showCreateProject, setShowCreateProject] = useState(false);
  const [filter, setFilter] = useState('');
  let filteredClients = adminClients;
  let filteredProjects = adminProjects;

  if (filter !== '' && !projectsInView) {
    let firstNameClients = adminClients.filter(c => c.firstName.toLowerCase().includes(filter.toLowerCase()));
    let lastNameClients = adminClients.filter(c => c.lastName.toLowerCase().includes(filter.toLowerCase()));
    let usernameClients = adminClients.filter(c => c.username.toLowerCase().includes(filter.toLowerCase()));
    let companyClients = adminClients.filter(c => c.company.toLowerCase().includes(filter.toLowerCase()));
    let combinedClients = firstNameClients.concat(lastNameClients).concat(usernameClients).concat(companyClients);
    filteredClients = [...new Set(combinedClients)];
  }

if (filter !== '' && projectsInView) {
    let serviceProjects = adminProjects.filter(p => p.service.toLowerCase().includes(filter.toLowerCase()));
    let locationProjects = adminProjects.filter(p => p.location.toLowerCase().includes(filter.toLowerCase()));
    let statusProjects = adminProjects.filter(p => p.status.title.toLowerCase().includes(filter.toLowerCase()));
    let userProjects = adminProjects.filter(p => p.users.includes(filter.toLowerCase()));
    let combinedProjects = serviceProjects.concat(locationProjects).concat(statusProjects).concat(userProjects);
    filteredProjects = [...new Set(combinedProjects)];
  }

  useEffect(() => {
    if (createProjectButton) {
      setShowCreateProject(true);
      setCreateProjectButton(false);
      window.scrollTo(0, 0);
  }
  }, [adminProjects]);

  const handleRemoveAdminProject = (projectId) => { removeAdminProject(projectId, setSnackBarInfo, setAdminProjects); }

  return (
    <>
      {showCreateProject &&
        <CreateProject setShowCreateProject={setShowCreateProject} username={username} primaryColor={primaryColor} setSnackBarInfo={setSnackBarInfo} setAdminProjects={setAdminProjects} />
      }
      <Row className='justify-content-center m-auto p-3'>
        <Col style={{ display: 'flex', justifyContent: 'center' }}>
          <CustomButton primaryColor={primaryColor}
            onClickFunction={function () { setProjectsInView(true) }}
            currentChoice={currentChoice} setCurrentChoice={setCurrentChoice}
            text={'Your Projects'} submitButton={projectsInView} />
        </Col>
        <Col style={{ display: 'flex', justifyContent: 'center' }}>
          <CustomButton primaryColor={primaryColor} currentChoice={currentChoice} setCurrentChoice={setCurrentChoice}
            onClickFunction={function () {
              setProjectsInView(false);
            }}
            text={'Your Clients'} />
        </Col>
      </Row>
      <Row>
        <SearchBar projectsInView={projectsInView} filter={filter} setFilter={setFilter} primaryColor={primaryColor} />
      </Row>
      <div style={{ position: 'relative', minHeight: '80vh' }}>
        <div style={{ position: '-webkit-sticky', position: 'sticky', top: '10px', zIndex: '1000' }}>
          {!deleteProject ?
            <div className="adminEditPosition">
              <Dropdown style={{ marginLeft: '10px' }}>
                <Dropdown.Toggle as={MoreVertical} style={{ cursor: 'pointer', width: '35px', height: '35px' }} id="dropdown-basic" />
                <Dropdown.Menu>
                  <Dropdown.Item onClick={() => { setShowCreateProject(true); window.scrollTo(0, 0); }} style={{ display: 'flex', margin: 'auto' }}>
                    <div>
                      <Plus
                        width={20}
                        height={20}
                        style={{ color: 'green', marginRight: '5px' }} />
                    </div>
                    <div className='text-center'>
                      Add Project
                    </div>
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => { setDeleteProject(true); }} style={{ display: 'flex', margin: 'auto' }}>
                    <div>
                      <Minus
                        width={20}
                        height={20}
                        style={{ color: 'red', marginRight: '5px' }} />
                    </div>
                    <div className='text-center'>
                      Remove Project
                    </div>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            :
            <div className="adminEditPosition">
              <Button style={{ backgroundColor: 'green', width: '50px', marginRight: '10px' }} onClick={() => setDeleteProject(false)} className='projectEditButton'>
                <Check color='white' />
              </Button>
            </div>
          }
        </div>
        <div className={(showCreateProject) ? 'hideProjects' : ''}>
          {(projectsInView) ?
            <Row className='m-auto' style={{ justifyContent: 'center', position: 'relative' }}>
              {filteredProjects.length === 0 && (
                <div style={{ height: '80vh' }} className='text-center p-5'>Didn't Find Any Projects</div>
              )}
              {filteredProjects.length > 0 && filteredProjects.map((project, index) => {
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
                          <Card.Text className='text-center' style={{ fontSize: '14px' }}>
                            {project.description}
                          </Card.Text>
                          <Card.Footer>
                            <Row className='justify-content-center'>
                              {deleteProject ?
                                <Button variant='danger' onClick={() => { handleRemoveAdminProject(project._id); }}>remove</Button>
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
              {filteredClients.length === 0 && (
                <div style={{ height: '80vh' }} className='text-center p-5'>Didn't Find Any Clients</div>
              )}
              {filteredClients.map((client, index) => {
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
        </div>
      </div>
    </>
  );
}
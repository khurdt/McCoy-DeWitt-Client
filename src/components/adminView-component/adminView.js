import React, { useEffect, useState } from "react";
import { Image } from "cloudinary-react";

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import Dropdown from 'react-bootstrap/Dropdown';

import { InView } from 'react-intersection-observer';
import './adminView.css';
import CustomButton from '../button-component/customButton';
import { removeAdminProject, services } from "../servicesAPI";
import { Check, MoreHorizontal, MapPin, User } from "react-feather";
import CreateProject from "../createProject component/createProject";
import SearchBar from "../searchBar-component/searchBar";
import Confirmation from "../confirmation-component/confirmation";

export default function AdminView(props) {
  const {
    adminClients,
    adminProjects,
    primaryColor,
    secondaryColor,
    setPrimaryColor,
    setSecondaryColor,
    navigate,
    setSnackBarInfo,
    username,
    setAdminProjects,
    setCreateProjectButton,
    createProjectButton,
    admin
  } = props;

  const [deleteProject, setDeleteProject] = useState(false);
  const [projectsInView, setProjectsInView] = useState(true);
  const [currentChoice, setCurrentChoice] = useState({});
  const [showCreateProject, setShowCreateProject] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [confirmationInfo, setConfirmationInfo] = useState({
    title: null,
    action: null,
    _id: null
  });
  const [filter, setFilter] = useState('');
  const windowSmall = (window.innerWidth < 700);
  let filteredClients = adminClients;
  let filteredProjects = adminProjects;

  if (filter !== '' && !projectsInView) {
    let firstNameClients = adminClients.filter(c => c.firstName.toLowerCase().includes(filter.toLowerCase()));
    let lastNameClients = adminClients.filter(c => c.lastName.toLowerCase().includes(filter.toLowerCase()));
    let usernameClients = adminClients.filter(c => c.username.toLowerCase().includes(filter.toLowerCase()));
    let companyClients = adminClients.filter(c => (c.compnay) && c.company.toLowerCase().includes(filter.toLowerCase()));
    let combinedClients = firstNameClients.concat(lastNameClients).concat(usernameClients).concat(companyClients);
    filteredClients = [...new Set(combinedClients)];
  }

  if (filter !== '' && projectsInView) {
    let serviceProjects = adminProjects.filter(p => p.service.toLowerCase().includes(filter.toLowerCase()));
    let locationProjects = adminProjects.filter(p => p.location.toLowerCase().includes(filter.toLowerCase()));
    let statusProjects = adminProjects.filter(p => p.status.title.toLowerCase().includes(filter.toLowerCase()));
    let userProjects = adminProjects.filter(p => p.users.some((a, e, i) => a.toLowerCase().includes(filter.toLowerCase())));
    // let dateProjects = adminProjects.filter(p => new Date(p.createdAt).toString().slice(4, 16).toLowerCase().includes(filter.toLowerCase()));
    let combinedProjects = serviceProjects.concat(locationProjects).concat(statusProjects).concat(userProjects);
    filteredProjects = [...new Set(combinedProjects)];
  }

  useEffect(() => {
    if (createProjectButton) {
      setShowCreateProject(true);
      setCreateProjectButton(false);
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'instant'
      });
    }
  }, [adminProjects]);

  const handleRemoveAdminProject = (projectId) => { removeAdminProject(projectId, setSnackBarInfo, setAdminProjects); }

  return (
    <>
      {showConfirmation &&
        <Confirmation setShowConfirmation={setShowConfirmation} showConfirmation={showConfirmation} confirmationInfo={confirmationInfo} primaryColor={primaryColor} />
      }
      {showCreateProject &&
        <CreateProject setShowCreateProject={setShowCreateProject} username={username} primaryColor={primaryColor} setSnackBarInfo={setSnackBarInfo} setAdminProjects={setAdminProjects} />
      }
      <input className='colorInput m-2' style={{ position: 'relative' }} type='color' value={primaryColor} onChange={(e) => setPrimaryColor(e.target.value)} />
      <input className='colorInput m-2' style={{ position: 'relative' }} type='color' value={secondaryColor} onChange={(e) => setSecondaryColor(e.target.value)} />
      <div style={showCreateProject ? { minHeight: '20vh' } : { position: 'relative', minHeight: '100vh', paddingTop: '10px' }}>
        <div style={{ position: '-webkit-sticky', position: 'sticky', top: '10px', zIndex: '1000' }}>
          {!deleteProject ?
            <div className="adminEditPosition">
              <Dropdown>
                <Dropdown.Toggle as={MoreHorizontal} id="dropdown-basic"
                  style={{
                    width: '30px',
                    height: '30px',
                    cursor: 'pointer',
                    border: `3px solid ${primaryColor}`,
                    borderRadius: '50%'
                  }}
                  alt='options icon' />
                <Dropdown.Menu>
                  <Dropdown.Item onClick={() => { setShowCreateProject(true); window.scrollTo(0, 0); }}>
                    <div className='text-center p-3' style={{ color: 'green' }}>
                      Add Project
                    </div>
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => { setDeleteProject(true); }}>
                    <div className='text-center p-3' style={{ color: 'red' }}>
                      Remove Project
                    </div>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            :
            <div className="adminEditPosition" style={{ right: '6%' }}>
              <Button style={{ backgroundColor: 'green', width: '50px' }} onClick={() => setDeleteProject(false)} className='projectEditButton'>
                <Check color='white' />
              </Button>
            </div>
          }
        </div>
        <Row className='justify-content-center m-auto p-4'>
          <Col style={{ display: 'flex', justifyContent: 'center' }}>
            <CustomButton primaryColor={primaryColor}
              onClickFunction={function () { setProjectsInView(true) }}
              currentChoice={currentChoice} setCurrentChoice={setCurrentChoice}
              text={'Projects'} submitButton={projectsInView} small={windowSmall} />
          </Col>
          <Col style={{ display: 'flex', justifyContent: 'center' }}>
            <CustomButton primaryColor={primaryColor} currentChoice={currentChoice} setCurrentChoice={setCurrentChoice}
              onClickFunction={function () {
                setProjectsInView(false);
              }}
              text={'Clients'} small={windowSmall} />
          </Col>
        </Row>
        <Row>
          <SearchBar projectsInView={projectsInView} filter={filter} setFilter={setFilter} primaryColor={primaryColor} />
        </Row>
        <div className={(showCreateProject) ? 'hideProjects' : ''}>
          {(projectsInView) ?
            <Row className='m-auto pt-4' style={{ justifyContent: 'center', position: 'relative' }}>
              {filteredProjects.length === 0 && (
                <div style={{ height: '80vh' }} className='text-center p-5'>Didn't Find Any Projects</div>
              )}
              {filteredProjects.length > 0 && filteredProjects.map((project, index) => {
                let service = services.find((s) => project.service.toLowerCase().includes(s.image));
                return (
                  <InView triggerOnce={true}>
                    {({ inView, ref, entry }) => (
                      <Card ref={ref} key={index} className='project-card'>
                        <div style={{ position: 'relative' }}>
                          {inView &&
                            <Card.Img className='project-image' as={Image} publicId={(service) ? service.image : 'custom'} />
                          }
                          <div className='project-title'>{project.service}</div>
                        </div>
                        <Card.Body>
                          <div style={{ minHeight: '120px' }}>
                            <Card.Text className='project-status'>Status: <Badge bg={project.status.color} className='p-2'>{project.status.title}</Badge></Card.Text>
                            <Card.Text><MapPin width={20} height={20} className='mb-1' /> {project.location}</Card.Text>
                            <Row style={{ display: 'flex' }}>
                              <Col xs={2} sm={2} md={2} ><User width={20} height={20} /></Col>
                              {project.users.map((a, e, i) => {
                                return (
                                  (admin.includes(a)) ?
                                    <></>
                                    :
                                    <Col xs={3} sm={3} md={3} style={{ display: 'flex', justifyContent: 'left' }}>
                                      <Card.Title style={{ fontSize: '14px' }}><Badge className='p-2' bg='secondary'>{a}</Badge></Card.Title>
                                    </Col>
                                )
                              })}
                            </Row>
                          </div>
                          <Card.Footer>
                            <Row className='justify-content-center'>
                              {deleteProject ?
                                <Button variant='danger' onClick={() => {
                                  setShowConfirmation(true);
                                  setConfirmationInfo({
                                    title: 'Remove this project?',
                                    action: handleRemoveAdminProject,
                                    _id: project._id
                                  })
                                }}
                                >remove</Button>
                                :
                                <Button className='project-button' style={{ backgroundColor: primaryColor, color: 'black' }}
                                  onClick={() => {
                                    navigate('project', {
                                      state: { selectedProject: project, selectedService: service }
                                    });
                                  }}>
                                  See Project
                                </Button>
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
            <Row className='m-auto pt-4' style={{ justifyContent: 'center' }}>
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
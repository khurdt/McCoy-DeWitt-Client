import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Mail, Home, LogIn, User, ChevronRight } from 'react-feather';
import Logo from '../../images/logo3.png';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './navbar.css';

export default function Navigation(props) {
  const { pageActive,
    setPageActive,
    setShowLogin,
    primaryColor,
    secondaryColor,
    setPrimaryColor,
    setSecondaryColor,
    admin,
    navigate } = props;

  const [showNavBar, setShowNavBar] = useState('initial');

  const isAuth = localStorage.getItem('token');
  const user = localStorage.getItem('user');

  const handleClose = () => setShowNavBar('false');
  const handleShow = () => setShowNavBar('true');

  const windowSmall = (window.innerWidth < 700);

  const highlightHome = (!(window.location.href.includes('profile' || 'contact' || 'project')) && pageActive === 'home');
  const highlightUser = (pageActive === 'user' || window.location.href.includes('profile') || window.location.href.includes('project') || window.location.href.includes('admin'));
  const highlightContact = (pageActive === 'login' || window.location.href.includes('contact'));
  useEffect(() => {
    (highlightUser) && setPageActive('user');
    (highlightContact) && setPageActive('contact');
    (highlightHome) && setPageActive('home');
  }, []);

  const onLoggedOut = () => {
    localStorage.clear();
    navigate('/');
  }

  let homeTab = {
    borderBottom: (highlightHome && !windowSmall) ? `1px solid  ${primaryColor}` : 'none',
    color: (highlightHome && windowSmall) ? `${primaryColor}` : 'white',
  };
  let userTab = {
    borderBottom: (highlightUser && !windowSmall) ? `1px solid ${primaryColor}` : 'none',
    color: (highlightUser && windowSmall) ? `${primaryColor}` : 'white',
    zIndex: '10000'
  };
  let contactTab = {
    borderBottom: (highlightContact && !windowSmall) ? `1px solid  ${primaryColor}` : 'none',
    color: (highlightContact && windowSmall) ? `${primaryColor}` : 'white',
  };

  const UserIcon = () => {
    return (
      <>
        {windowSmall ?
          <div style={userTab}>
            <User width={20} height={20} alt='user icon' />
            <div className='offcanvas-item-title'>{user}</div>
          </div>
          :
          <>
            <User style={{ width: '20px', height: '20px', paddingBottom: '2px', paddingRight: '3px', cursor: 'pointer' }} />
            <span>{user}</span>
          </>
        }
      </>
    );
  }

  return (
    <>
      <Navbar style={{ backgroundColor: secondaryColor }} variant="dark">
        <Container>
          <Navbar.Brand as={Link} style={{ color: 'white' }} to="/">
            <img
              alt="logo"
              src={Logo}
              width="45"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            McCoy DeWitt LLC
          </Navbar.Brand>
          {windowSmall ?
            <Nav className="ml-auto">
              <Nav.Link>
                {(showNavBar === 'false' || showNavBar === 'initial') &&
                  <Menu
                    color='white'
                    style={{ width: '30px', height: '30px' }}
                    onClick={handleShow}
                    alt='menu icon' />
                }
              </Nav.Link>
            </Nav>
            :
            <>
              <Nav className="me-auto">
                <Nav.Link as={Link} style={homeTab} to='/' onClick={() => setPageActive('home')}>
                  <Home
                    className='mb-1'
                    style={{ width: '20px', height: '20px', paddingBottom: '2px' }}
                    alt='contact icon'
                  /> Home</Nav.Link>
                <Nav.Link as={Link} style={contactTab} to='contact' onClick={() => setPageActive('contact')}>
                  <Mail
                    style={{ width: '20px', height: '20px', paddingBottom: '2px' }}
                    alt='contact icon'
                  /> Contact</Nav.Link>
              </Nav>
              {/* <Nav.Link href="#pricing">Pricing</Nav.Link> */}
              {(user && isAuth) ?
                <>
                  <Nav className='ml-auto'>
                    <Nav.Link>
                      <NavDropdown style={userTab} title={<UserIcon />} id="basic-nav-dropdown">
                        <NavDropdown.Item as={Link} to={(user === admin) ? 'admin' : 'profile'} onClick={() => { setPageActive('user') }}>Account</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item onClick={onLoggedOut}>
                          <div>Sign Out</div>
                        </NavDropdown.Item>
                        {user === admin &&
                          <>
                            <NavDropdown.Divider />
                            <div className='pt-2'>
                              <div style={{ display: 'flex', color: 'white', margin: 'auto' }}>Color
                                <div>
                                  <input className='colorInput m-2' style={{ position: 'relative' }} type='color' value={primaryColor} onChange={(e) => setPrimaryColor(e.target.value)} />
                                </div>
                                <div>
                                  <input className='colorInput m-2' style={{ position: 'relative' }} type='color' value={secondaryColor} onChange={(e) => setSecondaryColor(e.target.value)} />
                                </div>
                              </div>
                            </div>
                          </>
                        }
                      </NavDropdown>
                    </Nav.Link>
                  </Nav>
                </>
                :
                <>
                  <Nav className='ml-auto'>
                    <Nav.Link onClick={() => { setShowLogin(true); }}>
                      <LogIn
                        style={{ width: '20px', height: '20px', paddingBottom: '2px', paddingRight: '3px', cursor: 'pointer' }}
                        alt='contact icon'
                      /> Sign In</Nav.Link>
                  </Nav>
                </>
              }
            </>
          }
        </Container>
      </Navbar>
      {windowSmall &&
        <>
          <div className={(showNavBar === 'initial') ? 'off-canvas-container' :
            (showNavBar === 'true') ? 'off-canvas-container show' :
              (showNavBar === 'false') && 'off-canvas-container hide'}>
            <div className='off-canvas-body' style={{ backgroundColor: secondaryColor }}>
              <Nav>
                <Nav.Link className='offcanvas_item' style={homeTab} as={Link} to='/' onClick={() => { handleClose(); setPageActive('home') }}>
                  <Home width={20} height={20} alt='home icon' />
                  <div className='offcanvas-item-title'>Home</div>
                </Nav.Link>
                <Nav.Link className='offcanvas_item' style={contactTab} as={Link} to='contact' onClick={() => { handleClose(); setPageActive('contact') }}>
                  <Mail width={20} height={20} alt='contact icon' />
                  <div className='offcanvas-item-title'>Contact</div>
                </Nav.Link>
              </Nav>
              {(user && isAuth) ?
                <Nav>
                  <Nav.Link className='offcanvas_item'>
                    <NavDropdown style={userTab} title={<UserIcon />} id="basic-nav-dropdown">
                      <NavDropdown.Item as={Link} to={(user === admin) ? 'admin' : 'profile'} onClick={() => { handleClose(); setPageActive('user') }}>Account</NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item onClick={() => { handleClose(); onLoggedOut() }} style={{ display: 'flex' }}>
                        <div>Sign Out</div>
                      </NavDropdown.Item>
                    </NavDropdown>
                  </Nav.Link>
                </Nav>
                :
                <>
                  <Nav>
                    <Nav.Link style={userTab} className='offcanvas_item' onClick={() => { setShowLogin(true); setShowNavBar('false') }}>
                      <LogIn width={20} height={20} alt='sign in icon' />
                      <div className='offcanvas-item-title'>Sign In</div>
                    </Nav.Link>
                  </Nav>
                </>
              }
              <ChevronRight
                color='white'
                style={{ width: '30px', height: '30px', marginTop: '20px', marginBottom: '15px' }}
                onClick={handleClose}
                alt='exit icon' />
            </div>
          </div>
        </>
      }
    </>

  )

}

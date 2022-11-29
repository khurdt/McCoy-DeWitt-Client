import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Mail, Home, LogIn, User, LogOut } from 'react-feather';
import './navbar.css';
import Logo from '../../images/logo3.png';
import { Offcanvas, Button, Nav, Container, Navbar, NavDropdown } from 'react-bootstrap';

export default function Navigation(props) {
  const { pageActive,
    setPageActive,
    setShowLogin,
    showNavBar,
    setShowNavBar,
    primaryColor,
    secondaryColor,
    setPrimaryColor,
    setSecondaryColor,
    admin } = props;
  // const [navOpen, setNavOpen] = useState('hidden');
  const isAuth = localStorage.getItem('token');
  const user = localStorage.getItem('user');

  const handleClose = () => setShowNavBar(false);
  const handleShow = () => setShowNavBar(true);

  const windowSmall = (window.innerWidth < 700);

  useEffect(() => {
    ((window.location.href.includes('user') || window.location.href.includes('admin'))) ? setPageActive('user') :
      (window.location.href.includes('contact')) ? setPageActive('contact') :
        (window.location.href.includes('project')) ? setPageActive('user') : setPageActive('home');
  }, []);

  const onLoggedOut = () => {
    localStorage.clear();
    window.open('/', '_self');
  }

  let homeTab = {
    borderBottom: (!(window.location.href.includes('profile' || 'contact' || 'project')) && pageActive === 'home') ? `1px solid  ${primaryColor}` : 'none',
    color: (windowSmall) && secondaryColor
  };
  let userTab = {
    borderBottom: (pageActive === 'user' || window.location.href.includes('profile') || window.location.href.includes('project')) ? `1px solid ${primaryColor}` : 'none',
    color: (windowSmall) && secondaryColor
  };
  let contactTab = {
    borderBottom: (pageActive === 'login' || window.location.href.includes('contact')) ? `1px solid  ${primaryColor}` : 'none',
    color: (windowSmall) && secondaryColor
  };

  const UserIcon = () => {
    return (
      <>
        <User
          style={{ width: '20px', height: '20px', paddingBottom: '2px' }}
          alt='contact icon'
        />
        <span>{user}</span>
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
                <Menu
                  color='white'
                  style={{ width: '30px', height: '30px' }}
                  onClick={handleShow}
                  alt='menu icon' />
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
                    <NavDropdown style={userTab} title={<UserIcon />} id="basic-nav-dropdown">
                      <NavDropdown.Item as={Link} to={(user === admin) ? 'admin' : 'profile'} onClick={() => { setPageActive('user') }}>Account</NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item onClick={onLoggedOut}>
                        <LogOut
                          style={{ width: '20px', height: '20px', paddingBottom: '2px', paddingRight: '3px', cursor: 'pointer' }}
                          alt='contact icon'
                        />
                        Sign Out
                      </NavDropdown.Item>
                      {user === 'khurdt' &&
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
                  </Nav>
                </>
                :
                <>
                  <Nav className='ml-auto'>
                    <Nav.Link onClick={() => { setShowLogin(true) }}>
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
          <Offcanvas style={{ backgroundColor: 'white', color: secondaryColor }} show={showNavBar} onHide={handleClose} responsive="lg">
            <Offcanvas.Header closeButton>
              <Offcanvas.Title></Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              {(user && isAuth) ?
                <Navbar bg='inherit' className='mb-3'>
                  <Container>
                    <Nav.Link style={{ color: secondaryColor }}>
                      <NavDropdown style={userTab} title={<UserIcon />} id="basic-nav-dropdown">
                        <NavDropdown.Item as={Link} to={(user === admin) ? 'admin' : 'profile'} onClick={() => { handleClose(); setPageActive('user') }}>Account</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item onClick={() => { handleClose(); onLoggedOut() }}>
                          <LogOut
                            style={{ width: '20px', height: '20px', paddingBottom: '2px', cursor: 'pointer' }}
                            alt='contact icon'
                          />Sign Out
                        </NavDropdown.Item>
                      </NavDropdown>
                    </Nav.Link>
                    {user === 'khurdt' &&
                      <div style={{ paddingLeft: '20px', paddingTop: '10px' }}>
                        <div style={{ display: 'flex', color: 'white' }}>Color
                          <input className='colorInput' type='color' value={primaryColor} onChange={(e) => setPrimaryColor(e.target.value)} />
                          <input className='colorInput' type='color' value={secondaryColor} onChange={(e) => setSecondaryColor(e.target.value)} />
                        </div>
                      </div>
                    }
                  </Container>
                </Navbar>
                :
                <>
                  <Nav>
                    <Nav.Link style={{ color: secondaryColor }} className='offcanvas_item' onClick={() => { setShowLogin(true) }}>
                      <LogIn
                        style={{ width: '20px', height: '20px' }}
                        alt='contact icon'
                      /> Sign In</Nav.Link>
                  </Nav>
                </>
              }
              <Nav>
                <Nav.Link className='offcanvas_item' style={homeTab} as={Link} to='/' onClick={() => { handleClose(); setPageActive('home') }}>
                  Home
                  <Home
                    className='mb-1'
                    style={{ width: '20px', height: '20px', position: 'absolute', top: '12px', right: '5px' }}
                    alt='contact icon'
                  /></Nav.Link>
                <Nav.Link className='offcanvas_item' style={contactTab} as={Link} to='contact' onClick={() => { handleClose(); setPageActive('contact') }}>
                  Contact
                  <Mail
                    className='ml-auto'
                    style={{ width: '20px', height: '20px', position: 'absolute', top: '12px', right: '5px' }}
                    alt='contact icon'
                  /></Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Offcanvas>
        </>
      }
    </>

  )

}

{/* <header className="page-header">
<h4 className="page-header__item">
  <span><img className='logo' src={Logo} /></span>
  <span className='title'>McCoy DeWitt LLC</span>
</h4>
{/* <img className="page-header__item" src="" alt="logo with title name Kevin Hurdt" /> */}
{/* <nav className="page-header__item navBar">
  <div className="nav decor">
    <ul role="menubar" className="navigation-list">
      <li className="navigation-list__item">
        <Link style={homeTab} as={Link} to='/' onClick={() => setPageActive('home')}>
          <Home
            className='mb-1'
            style={{ width: '20px', height: '20px', paddingBottom: '2px' }}
            alt='contact icon'
          /> Home</Link>
      </li>
      <li className="navigation-list__item">
        <Link style={contactTab} as={Link} to='contact' onClick={() => setPageActive('contact')}>
          <Mail
            style={{ width: '20px', height: '20px', paddingBottom: '2px' }}
            alt='contact icon'
          /> Contact</Link>
      </li>
      {(user && isAuth) ?
        <>
          <li className="navigation-list__item">
            <Nav.Link style={userTab} as={Link} to='profile' onClick={() => { setPageActive('user') }}>
              <User
                style={{ width: '20px', height: '20px', paddingBottom: '2px' }}
                alt='contact icon'
              />{user}</Nav.Link>
            <div style={{ marginLeft: '20px' }} onClick={() => { onLoggedOut() }}>
              <LogOut
                style={{ width: '20px', height: '20px', paddingBottom: '2px', cursor: 'pointer' }}
                alt='contact icon'
              />Logout</div>
          </li>
        </>
        :
        <li className="navigation-list__item">
          <div onClick={() => { setShowLogin(true) }}>
            <LogIn
              style={{ width: '20px', height: '20px', paddingBottom: '2px', cursor: 'pointer' }}
              alt='contact icon'
            /> Login</div>
        </li>
      }
    </ul>
  </div>
</nav> */}

{/* <div className={(navOpen === 'open') ? "menu-drop-down open" : (navOpen === 'close') ? 'menu-drop-down close' : 'menu-drop-down hidden'}>
<ul className="menu-drop-down-grid">
  <li className="drop-down-item">
    <Link style={homeTab} as={Link} to='/' onClick={() => { handleClose(); setPageActive('home') }}>
      <Home
        className='mb-1'
        style={{ width: '20px', height: '20px' }}
        alt='contact icon'
      /> Home</Link>
  </li>
  <li className="drop-down-item">
    <Link style={contactTab} as={Link} to='contact' onClick={() => { setNavOpen('close'); setPageActive('contact') }}>
      <Mail
        style={{ width: '20px', height: '20px' }}
        alt='contact icon'
      /> Contact</Link>
  </li>
  {(user && isAuth) ?
    <>
      <li className="drop-down-item">
        <Link style={userTab} as={Link} to='profile' onClick={() => { setNavOpen('close'); setPageActive('user') }}>
          <User
            style={{ width: '20px', height: '20px' }}
            alt='contact icon'
          />{user}</Link>
      </li>
      <li className="drop-down-item">
        <div onClick={() => { onLoggedOut() }}>
          <LogOut
            style={{ width: '20px', height: '20px', paddingBottom: '2px' }}
            alt='contact icon'
          />Logout</div>
      </li>
    </>
    :
    <li className="drop-down-item">
      <div onClick={() => { setShowLogin(true) }}>
        <LogIn
          style={{ width: '20px', height: '20px' }}
          alt='contact icon'
        /> Login</div>
    </li>
  }
</ul>
</div> */}


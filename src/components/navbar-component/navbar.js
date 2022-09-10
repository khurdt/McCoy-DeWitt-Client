import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Mail, Home, LogIn, User, LogOut } from 'react-feather';
import './navbar.css';
import Logo from '../../images/logo3.png';
import { Offcanvas, Button, Nav, Container, Navbar, NavDropdown } from 'react-bootstrap';

export default function Navigation(props) {
  const { pageActive, setPageActive, setShowLogin } = props;
  const [navOpen, setNavOpen] = useState('hidden');
  const isAuth = localStorage.getItem('token');
  const user = localStorage.getItem('user');
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const windowSmall = (window.innerWidth < 700);

  useEffect(() => {
    (window.location.href.includes('user')) ? setPageActive('user') :
      (window.location.href.includes('contact')) ? setPageActive('contact') : setPageActive('home');
  }, []);

  const onLoggedOut = () => {
    localStorage.clear();
    window.open('/', '_self');
  }

  let homeTab = {
    borderBottom: (!(window.location.href.includes('profile' || 'contact')) && pageActive === 'home') ? '1px solid #2ab400' : 'none'
  };
  let userTab = {
    borderBottom: (pageActive === 'user' || window.location.href.includes('profile')) ? '1px solid #2ab400' : 'none',
  };
  let contactTab = {
    borderBottom: (pageActive === 'login' || window.location.href.includes('contact')) ? '1px solid #2ab400' : 'none'
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
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand style={{ color: 'white' }} href="#home">
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
                      <NavDropdown.Item as={Link} to='profile' onClick={() => { setPageActive('user') }}>Account</NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item onClick={onLoggedOut}>
                        <LogOut
                          style={{ width: '20px', height: '20px', paddingBottom: '2px', cursor: 'pointer' }}
                          alt='contact icon'
                        />Logout
                      </NavDropdown.Item>
                    </NavDropdown>
                  </Nav>
                </>
                :
                <>
                  <Nav className='ml-auto'>
                    <Nav.Link onClick={() => { setShowLogin(true) }}>
                      <LogIn
                        style={{ width: '20px', height: '20px', paddingBottom: '2px', cursor: 'pointer' }}
                        alt='contact icon'
                      /> Login</Nav.Link>
                  </Nav>
                </>
              }
            </>
          }
        </Container>
      </Navbar>
      {windowSmall &&
        <>
          <Offcanvas style={{ backgroundColor: '#262626', color: 'white' }} show={show} onHide={handleClose} responsive="lg">
            <Offcanvas.Header closeButton>
              <Offcanvas.Title></Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              {(user && isAuth) ?
                <Navbar bg='inherit' className='mb-3'>
                  <Container>
                    <Nav.Link bg='dark' style={{ color: 'white' }}>
                      <NavDropdown bg='dark' className='offcanvas_item offcanvas_item' style={userTab} title={<UserIcon />} id="basic-nav-dropdown">
                        <NavDropdown.Item as={Link} to='profile' onClick={() => { setPageActive('user') }}>Account</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item onClick={onLoggedOut}>
                          <LogOut
                            style={{ width: '20px', height: '20px', paddingBottom: '2px', cursor: 'pointer' }}
                            alt='contact icon'
                          />Logout
                        </NavDropdown.Item>
                      </NavDropdown>
                    </Nav.Link>
                  </Container>
                </Navbar>
                :
                <>
                  <Nav>
                    <Nav.Link className='offcanvas_item' onClick={() => { setShowLogin(true) }}>
                      <LogIn
                        style={{ width: '20px', height: '20px' }}
                        alt='contact icon'
                      /> Login</Nav.Link>
                  </Nav>
                </>
              }
              <Nav>
                <Nav.Link className='offcanvas_item' style={homeTab} as={Link} to='/' onClick={() => { handleClose(); setPageActive('home') }}>
                  <Home
                    className='mb-1'
                    style={{ width: '20px', height: '20px' }}
                    alt='contact icon'
                  /> Home</Nav.Link>
                <Nav.Link className='offcanvas_item' style={contactTab} as={Link} to='contact' onClick={() => { handleClose(); setPageActive('contact') }}>
                  <Mail
                    style={{ width: '20px', height: '20px' }}
                    alt='contact icon'
                  /> Contact</Nav.Link>
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


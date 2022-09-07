import React, { useEffect, useState } from 'react';
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { Menu, X, Mail, Home, LogIn, User, LogOut } from 'react-feather';
import './navbar.css';
import Logo from '../../images/logo3.png';

export default function Navigation(props) {
  const { pageActive, setPageActive, setShowLogin } = props;
  const [navOpen, setNavOpen] = useState('hidden');
  const isAuth = localStorage.getItem('token');
  const user = localStorage.getItem('user');

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
    borderBottom: (pageActive === 'user' || window.location.href.includes('profile')) ? '1px solid #2ab400' : 'none'
  };
  let contactTab = {
    borderBottom: (pageActive === 'login' || window.location.href.includes('contact')) ? '1px solid #2ab400' : 'none'
  };

  return (
    <>
      <header className="page-header">
        <h4 className="page-header__item">
          <span><img className='logo' src={Logo} /></span>
          <span className='title'>McCoy DeWitt LLC</span>
        </h4>
        {/* <img className="page-header__item" src="" alt="logo with title name Kevin Hurdt" /> */}
        <nav className="page-header__item navBar">
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
                    <Link style={userTab} as={Link} to='profile' onClick={() => { setPageActive('user') }}>
                      <User
                        style={{ width: '20px', height: '20px', paddingBottom: '2px' }}
                        alt='contact icon'
                      />{user}</Link>
                  </li>
                  <li className="navigation-list__item">
                    <div onClick={() => { onLoggedOut() }}>
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
        </nav>
        {(navOpen === 'open') ?
          <X
            color='white'
            className='menu-close-icon'
            onClick={() => setNavOpen('close')}
            style={{ width: '40px', height: '40px' }}
            alt='close icon' /> :
          <Menu
            color='white'
            className='hamburger'
            style={{ width: '40px', height: '40px' }}
            onClick={() => setNavOpen('open')}
            alt='menu icon' />
        }
      </header>
      <div className={(navOpen === 'open') ? "menu-drop-down open" : (navOpen === 'close') ? 'menu-drop-down close' : 'menu-drop-down hidden'}>
        <ul className="menu-drop-down-grid">
          <li className="drop-down-item">
            <Link style={homeTab} as={Link} to='/' onClick={() => { setNavOpen('close'); setPageActive('home') }}>
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
      </div>
    </>
  )


}

  // <Navbar bg="light" expand="lg" fluid style={{ margin: '0', padding: '0', height: '50px' }}>
  //   <Container>
  //     <Navbar.Brand>McCoy DeWitt LLC</Navbar.Brand>
  //     <Navbar.Toggle aria-controls="basic-navbar-nav" />
  //     <Navbar.Collapse id="basic-navbar-nav">
  //       <Nav style={{ backgroundColor: 'white' }} className="me-auto">
  //         <Nav.Link className='m-auto' as={Link} to='/'>Home</Nav.Link>
  //         <Nav.Link className='m-auto' as={Link} to='contact'>Contact</Nav.Link>
  //       </Nav>
  //     </Navbar.Collapse>
  //   </Container>
  // </Navbar>


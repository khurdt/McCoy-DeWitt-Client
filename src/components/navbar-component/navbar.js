import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

import Hamburger from '../../images/hamburger.svg';
import CloseIcon from '../../images/close-icon.png';
import './navbar.css';

export default function Navigation() {
  const [navOpen, setNavOpen] = useState('hidden');
  return (
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
    <>
      <header className="page-header">
        <h4 className="page-header__item">McCoy DeWitt LLC</h4>
        {/* <img className="page-header__item" src="" alt="logo with title name Kevin Hurdt" /> */}
        <nav className="page-header__item navBar">
          <div className="nav decor">
            <ul role="menubar" className="navigation-list">
              <li className="navigation-list__item" role="presentation">
                <Link as={Link} to='/' role="menuitem">Home</Link>
              </li>
              <li className="navigation-list__item" role="presentation">
                <Link as={Link} to='contact' role="menuitem">Contact</Link>
              </li>
            </ul>
          </div>
        </nav>
        {(navOpen === 'open') ?
          <img className="menu-close-icon" src={CloseIcon} onClick={() => setNavOpen('close')} /> :
          <img className="hamburger" src={Hamburger} onClick={() => setNavOpen('open')} />
        }
      </header>
      <div className={(navOpen === 'open') ? "menu-drop-down open" : (navOpen === 'close') ? 'menu-drop-down close' : 'menu-drop-down hidden'}>
        <ul className="menu-drop-down-grid">
          <li className="drop-down-item" role="presentation">
            <Link as={Link} to='/' onClick={() => setNavOpen('close')} role="menuitem">Home</Link>
          </li>
          <li className="drop-down-item" role="presentation">
            <Link as={Link} to='contact' onClick={() => setNavOpen('close')} role="menuitem">Contact</Link>
          </li>
        </ul>
      </div>
    </>
  )
}


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
    // <Navbar bg="light" expand="lg" fluid style={{ margin: '0', padding: '0' }}>
    //   <Container>
    //     <Navbar.Brand>McCoy DeWitt LLC</Navbar.Brand>
    //     <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //     <Navbar.Collapse id="basic-navbar-nav">
    //       <Nav className="me-auto">
    //         <Nav.Link as={Link} to='/'>Home</Nav.Link>
    //         <Nav.Link as={Link} to='contact'>Contact</Nav.Link>
    //       </Nav>
    //     </Navbar.Collapse>
    //   </Container>
    // </Navbar>
    <>
      <header class="page-header">
        <h4 class="page-header__item">McCoy DeWitt LLC</h4>
        {/* <img class="page-header__item" src="" alt="logo with title name Kevin Hurdt" /> */}
        <nav class="page-header__item navBar">
          <div class="nav decor">
            <ul role="menubar" class="navigation-list">
              <li class="navigation-list__item" role="presentation">
                <Link as={Link} to='/' role="menuitem">Home</Link>
              </li>
              <li class="navigation-list__item" role="presentation">
                <Link as={Link} to='contact' role="menuitem">Contact</Link>
              </li>
            </ul>
          </div>
        </nav>
        {(navOpen === 'open') ?
          <img class="menu-close-icon" src={CloseIcon} onClick={() => setNavOpen('close')} /> :
          <img class="hamburger" src={Hamburger} onClick={() => setNavOpen('open')} />
        }
      </header>
      <div class={(navOpen === 'open') ? "menu-drop-down open" : (navOpen === 'close') ? 'menu-drop-down close' : 'menu-drop-down hidden'}>
        <ul class="menu-drop-down-grid">
          <li class="drop-down-item" role="presentation">
            <Link as={Link} to='/' onClick={() => setNavOpen('close')} role="menuitem">Home</Link>
          </li>
          <li class="drop-down-item" role="presentation">
            <Link as={Link} to='contact' onClick={() => setNavOpen('close')} role="menuitem">Contact</Link>
          </li>
        </ul>
      </div>
    </>
  )
}


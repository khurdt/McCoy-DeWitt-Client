import React, { useEffect } from "react";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";
import './footer.css';
import Logo from '../../images/default-monochrome-white.svg';
import { Home, Mail, User } from 'react-feather';

export default function Footer(props) {
  const { primaryColor, secondaryColor, pageActive, setPageActive, admin } = props;
  const windowSmall = (window.innerWidth < 1000);
  const user = localStorage.getItem('user');

  useEffect(() => {
    ((window.location.href.includes('user') || window.location.href.includes('admin'))) ? setPageActive('user') :
      (window.location.href.includes('contact')) ? setPageActive('contact') :
        (window.location.href.includes('project')) ? setPageActive('user') : setPageActive('home');
  }, []);

  let homeTab = {
    color: (!(window.location.href.includes('profile' || 'contact' || 'project')) && pageActive === 'home') ? primaryColor : 'white'
  };
  let userTab = {
    color: (pageActive === 'user' || window.location.href.includes('profile') || window.location.href.includes('project')) ? primaryColor : 'white'
  };
  let contactTab = {
    color: (pageActive === 'login' || window.location.href.includes('contact')) ? primaryColor : 'white'
  };

  return (
    <div className="footer-container" style={{ backgroundColor: secondaryColor }}>
      <Row>
        <div className="logo">
          <h3>
            <img
              alt="logo"
              src={Logo}
              width="300"
              height="38"
            />{' '}
          </h3>
        </div>
      </Row>
      <hr className='m-auto' style={{ color: primaryColor, maxWidth: (windowSmall ? (window.innerWidth - 30) : '1000px'), borderWidth: '2px' }} />
      <Row className='mt-3'>
        <div className='bottom-side'>
          <Link to='/' onClick={() => { window.scrollTo(0, 0); setPageActive('home'); }} style={homeTab}>
            <Home className="m-2 footer-icon" width={25} height={25} />
          </Link>
          <Link to='contact' onClick={() => { window.scrollTo(0, 0); setPageActive('contact'); }} style={contactTab}>
            <Mail className="m-2 footer-icon" width={25} height={25} />
          </Link>
          {user &&
            <Link to={(user === admin) ? 'admin' : 'profile'} onClick={() => { window.scrollTo(0, 0); setPageActive('user'); }} style={userTab}>
              <User className="m-2 footer-icon" width={25} height={25} />
            </Link>
          }
        </div>
        <div style={{ textAlign: 'center', color: 'white', fontSize: '12px' }}>@Copyright. All rights reserved.</div>
        <div style={{ textAlign: 'center', color: 'white', fontSize: '12px' }}>
          <a href='termsConditions.html' target="_blank">Terms & Conditions</a>
          <span>    </span>
          <a href='privacy.html' target="_blank">Privacy Policy</a>
        </div>
      </Row>
    </div>
  );
}
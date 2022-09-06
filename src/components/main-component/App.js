import React, { useEffect, useState } from 'react';
import './App.css';
import Navigation from '../navbar-component/navbar';
import Contact from '../contact-component/contact';
import FrontPage from '../frontPage-component/frontPage';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Login from '../login-component/login';
import Snackbar from '../snackbar-component/snackbar';
import { isJwtExpired } from 'jwt-check-expiration';
import { Profile } from '../profile-component/profile';
import axios from 'axios';


function App() {
  let navigate = useNavigate();
  const [pageActive, setPageActive] = useState('');
  const [showLogin, setShowLogin] = useState(false);
  const [snackBarInfo, setSnackBarInfo] = useState({
    message: '',
    loading: false,
    show: 'initial'
  });
  const [userData, setUserData] = useState({});

  useEffect(() => {
    let accessToken = localStorage.getItem('token');
    if ((accessToken) && !(isJwtExpired(accessToken))) {
      getUserData(accessToken);
    } else {
      localStorage.clear();
    }
  }, [])

  //When a user successfully logs in, this function updates the 'user' property from null to particular user
  const onLoggedIn = (authData) => {
    localStorage.setItem('token', authData.token);
    localStorage.setItem('user', authData.user.username);
    getUserData(authData.token);
  }

  const getUserData = (token) => {
    const username = localStorage.getItem('user');
    axios.get(`https://polar-tor-24509.herokuapp.com/user/${username}`, {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then((response) => {
        let userData = response.data;
        setUserData({ userData });
        console.log(userData);
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  return (
    <>
      <div className="App">
        <Navigation pageActive={pageActive} setPageActive={setPageActive} setShowLogin={setShowLogin} />
        <Login showLogin={showLogin} setShowLogin={setShowLogin} setSnackBarInfo={setSnackBarInfo} snackBarInfo={snackBarInfo} onLoggedIn={onLoggedIn} />
        {snackBarInfo.show !== 'initial' &&
          <Snackbar snackBarInfo={snackBarInfo} setSnackBarInfo={setSnackBarInfo} />
        }
        <Routes>
          <Route
            exact
            path="/"
            element={
              <FrontPage setPageActive={setPageActive} />
            }
          />
          <Route
            path="contact"
            element={<Contact onBackClick={() => navigate(-1)} setSnackBarInfo={setSnackBarInfo} snackBarInfo={snackBarInfo} />}
          />
          <Route
            path="profile"
            element={<Profile onBackClick={() => navigate(-1)} setSnackBarInfo={setSnackBarInfo} snackBarInfo={snackBarInfo} userData={userData} />}
          />
        </Routes>
      </div>
    </>
  );
}

export default App;

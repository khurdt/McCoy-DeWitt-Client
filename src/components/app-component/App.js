import React, { useEffect, useState, lazy, Suspense } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { isJwtExpired } from 'jwt-check-expiration';
import axios from 'axios';
import './App.css';

import Login from '../login-component/login';
import Snackbar from '../snackbar-component/snackbar';
import Navigation from '../navbar-component/navbar';
import Loading from '../loading-component/loading';
const Contact = lazy(() => import("../contact-component/contact"));
const FrontPage = lazy(() => import("../frontPage-component/frontPage"));
const Profile = lazy(() => import("../profile-component/profile"));


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
  const [projects, setProjects] = useState();

  useEffect(() => {
    let accessToken = localStorage.getItem('token');
    if ((accessToken) && !(isJwtExpired(accessToken))) {
      getUserData(accessToken);
      getProjects(accessToken);
      console.log(projects, userData.firstName);
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
    axios.get(`https://polar-tor-24509.herokuapp.com/users/${username}`, {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then((response) => {
        let userData = response.data;
        setUserData(userData);
        console.log(userData);
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  const getProjects = (token) => {
    const username = localStorage.getItem('user');
    axios.get(`https://polar-tor-24509.herokuapp.com/projects/${username}`, {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then((response) => {
        let incomingProjects = response.data;
        setProjects(projects);
        console.log(incomingProjects, projects);
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
        {((snackBarInfo.show !== 'initial') || (showLogin === false)) &&
          <Snackbar snackBarInfo={snackBarInfo} setSnackBarInfo={setSnackBarInfo} showLogin={showLogin} />
        }
        <Suspense fallback={<Loading />}>
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
              element={
                <Contact onBackClick={() => navigate(-1)} setSnackBarInfo={setSnackBarInfo} snackBarInfo={snackBarInfo} />
              }
            />
            <Route
              path="profile"
              element={
                (projects && userData) ?
                  <Profile
                    onBackClick={() => navigate(-1)}
                    setSnackBarInfo={setSnackBarInfo}
                    snackBarInfo={snackBarInfo}
                    userData={userData} projects={projects} />
                  :
                  null
              }
            />
          </Routes>
        </Suspense>
      </div>
    </>
  );
}

export default App;

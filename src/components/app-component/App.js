import React, { useEffect, useState, lazy, Suspense } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { isJwtExpired } from 'jwt-check-expiration';
import axios from 'axios';
import './App.css';

import Login from '../login-component/login';
import Snackbar from '../snackbar-component/snackbar';
import Navigation from '../navbar-component/navbar';
import Loading from '../loading-component/loading';
import Footer from '../footer-component/footer';

// const Contact = lazy(() => import("../contact-component/contact"));
// const FrontPage = lazy(() => import("../frontPage-component/frontPage"));
import Contact from '../contact-component/contact';
import FrontPage from '../frontPage-component/frontPage';
import Project from '../projectView-component/project';
const Profile = lazy(() => import("../profile-component/profile"));


function App() {
  let navigate = useNavigate();
  // primary color options #22d1da #2ab400 #ef2922
  // secondary color options #262626
  const [primaryColor, setPrimaryColor] = useState('#22d1da');
  const [secondaryColor, setSecondaryColor] = useState('#262626');
  const [pageActive, setPageActive] = useState('');
  const [showNavBar, setShowNavBar] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [snackBarInfo, setSnackBarInfo] = useState({
    message: '',
    loading: false,
    show: 'initial',
  });
  const [userData, setUserData] = useState({});
  const [projects, setProjects] = useState([]);
  const [noProjects, setNoProjects] = useState(false);
  const [createProjectButton, setCreateProjectButton] = useState(false);

  useEffect(() => {
    let accessToken = localStorage.getItem('token');
    if ((accessToken) && !(isJwtExpired(accessToken))) {
      getUserData();
      getProjects();
    } else {
      localStorage.clear();
      // window.open('/', '_self');
    }
  }, [])

  //When a user successfully logs in, this function updates the 'user' property from null to particular user
  const onLoggedIn = (authData) => {
    localStorage.setItem('token', authData.token);
    localStorage.setItem('user', authData.user.username);
    getUserData();
    getProjects();
  }

  const getUserData = () => {
    let token = localStorage.getItem('token');
    const username = localStorage.getItem('user');
    axios.get(`https://polar-tor-24509.herokuapp.com/users/${username}`, {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then((response) => {
        let userData = response.data;
        setUserData(userData);
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  const getProjects = () => {
    let token = localStorage.getItem('token');
    const username = localStorage.getItem('user');
    axios.get(`https://polar-tor-24509.herokuapp.com/projects/${username}`, {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then((response) => {
        let incomingProjects = response.data;
        if (incomingProjects.length > 0) {
          setProjects(incomingProjects);
        } else {
          setNoProjects(true);
        }
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  return (
    <>
      <div className="App">
        <Navigation
          pageActive={pageActive}
          setPageActive={setPageActive}
          setShowLogin={setShowLogin}
          setShowNavBar={setShowNavBar}
          showNavBar={showNavBar}
          primaryColor={primaryColor}
          secondaryColor={secondaryColor}
          setPrimaryColor={setPrimaryColor}
          setSecondaryColor={setSecondaryColor} />
        <Login
          showLogin={showLogin}
          setShowLogin={setShowLogin}
          setSnackBarInfo={setSnackBarInfo}
          snackBarInfo={snackBarInfo}
          onLoggedIn={onLoggedIn}
          setShowNavBar={setShowNavBar}
          primaryColor={primaryColor}
          secondaryColor={secondaryColor}
          navigate={navigate}
          createProjectButton={createProjectButton} />
        {((showLogin === false)) &&
          <Snackbar
            snackBarInfo={snackBarInfo}
            setSnackBarInfo={setSnackBarInfo}
            showLogin={showLogin}
            primaryColor={primaryColor}
            secondaryColor={secondaryColor}
          />
        }
        <Suspense fallback={<Loading primaryColor={primaryColor} />}>
          <Routes>
            <Route
              exact
              path="/"
              element={
                <FrontPage setPageActive={setPageActive}
                  primaryColor={primaryColor}
                  secondaryColor={secondaryColor}
                  setCreateProjectButton={setCreateProjectButton}
                  setShowLogin={setShowLogin}
                  navigate={navigate} />
              }
            />
            <Route
              path="contact"
              element={
                <Contact
                  onBackClick={() => navigate(-1)}
                  setSnackBarInfo={setSnackBarInfo}
                  snackBarInfo={snackBarInfo}
                  primaryColor={primaryColor}
                  secondaryColor={secondaryColor} />
              }
            />
            <Route
              path="profile"
              element={
                (noProjects && userData.firstName) ?
                  <Profile
                    onBackClick={() => navigate(-1)}
                    setSnackBarInfo={setSnackBarInfo}
                    snackBarInfo={snackBarInfo}
                    getUserData={getUserData}
                    getProjects={getProjects}
                    userData={userData}
                    projects={projects}
                    primaryColor={primaryColor}
                    secondaryColor={secondaryColor}
                    createProjectButton={createProjectButton}
                    setCreateProjectButton={setCreateProjectButton}
                    navigate={navigate} />
                  :
                  ((!noProjects && projects.length > 0) && userData.firstName) ?
                    <Profile
                      onBackClick={() => navigate(-1)}
                      setSnackBarInfo={setSnackBarInfo}
                      snackBarInfo={snackBarInfo}
                      getUserData={getUserData}
                      getProjects={getProjects}
                      userData={userData}
                      projects={projects}
                      primaryColor={primaryColor}
                      secondaryColor={secondaryColor}
                      createProjectButton={createProjectButton}
                      setCreateProjectButton={setCreateProjectButton}
                      navigate={navigate} />
                    :
                    <Loading primaryColor={primaryColor} />
              }
            />
            {/* <Route
              path="project/:id"
              element={
                <Project
                  onBackClick={() => navigate(-1)}
                  setSnackBarInfo={setSnackBarInfo}
                  snackBarInfo={snackBarInfo}
                  primaryColor={primaryColor}
                  secondaryColor={secondaryColor} />
              }
            /> */}
          </Routes>
        </Suspense>
        <Footer
          primaryColor={primaryColor}
          secondaryColor={secondaryColor}
          pageActive={pageActive}
          setPageActive={setPageActive} />
      </div>
    </>
  );
}

export default App;

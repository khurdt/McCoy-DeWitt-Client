import React, { useEffect, useState, lazy, Suspense } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { isJwtExpired } from 'jwt-check-expiration';
import './App.css';

import {
  getProjects,
  getUserData,
  getAllUsers,
  getAllProjects
} from '../servicesAPI';

import Login from '../login-component/login';
import Snackbar from '../snackbar-component/snackbar';
import Navigation from '../navbar-component/navbar';
import Loading from '../loading-component/loading';
import Footer from '../footer-component/footer';

// const Contact = lazy(() => import('../contact-component/contact'));
// const FrontPage = lazy(() => import('../frontPage-component/frontPage'));
import Contact from '../contact-component/contact';
import FrontPage from '../frontPage-component/frontPage';
import PasswordReset from '../passwordReset-component/passwordReset';
// import Project from '../projectView-component/project';
const Project = lazy(() => import('../projectView-component/project'));
// import AdminView from '../adminView-component/adminView';
// import Profile from '../profile-component/profile';
const Profile = lazy(() => import('../profile-component/profile'));
const AdminView = lazy(() => import('../adminView-component/adminView'));


function App() {
  let navigate = useNavigate();
  // primary color options #22d1da #2ab400 #ef2922
  // secondary color options #262626
  const admin = 'khurdt';
  const [primaryColor, setPrimaryColor] = useState('#22d1da');
  const [secondaryColor, setSecondaryColor] = useState('#262626');
  const [pageActive, setPageActive] = useState('');
  const [showLogin, setShowLogin] = useState(false);
  const [forgotPassword, setForgotPassword] = useState(false);
  const [createProjectButton, setCreateProjectButton] = useState(false);
  const [userData, setUserData] = useState({});
  const [projects, setProjects] = useState([]);
  const [adminProjects, setAdminProjects] = useState([]);
  const [adminClients, setAdminClients] = useState([]);
  const [snackBarInfo, setSnackBarInfo] = useState({
    message: '',
    loading: false,
    show: 'initial',
  })

  useEffect(() => {
    let accessToken = localStorage.getItem('token');
    if ((accessToken) && !(isJwtExpired(accessToken))) {
      getClientInfo();
    } else {
      localStorage.clear();
    }
  }, []);

  const getClientInfo = () => {
    getUserData(setUserData, getAdminInfo);
    getProjects(setProjects);
  }

  const getAdminProjects = () => {
    getAllProjects(setAdminProjects);
  }

  const getAdminClients = () => {
    getAllUsers(setAdminClients);
  }

  const getAdminInfo = () => {
    getAdminProjects();
    getAdminClients();
  }

  //When a user successfully logs in, this function updates the 'user' property from null to particular user
  const onLoggedIn = (token, username) => {
    if (username === admin) {
      getUserData(setUserData, getAdminInfo);
      navigate('admin');
    } else {
      getClientInfo();
      navigate('profile');
    }
  }

  return (
    <>
      <div className='App'>
        <Navigation
          pageActive={pageActive}
          setPageActive={setPageActive}
          setShowLogin={setShowLogin}
          primaryColor={primaryColor}
          secondaryColor={secondaryColor}
          setPrimaryColor={setPrimaryColor}
          setSecondaryColor={setSecondaryColor}
          admin={admin}
          navigate={navigate} />
        <Login
          showLogin={showLogin}
          setShowLogin={setShowLogin}
          onLoggedIn={onLoggedIn}
          primaryColor={primaryColor}
          secondaryColor={secondaryColor}
          createProjectButton={createProjectButton}
          admin={admin}
          setSnackBarInfo={setSnackBarInfo}
          forgotPassword={forgotPassword}
          setForgotPassword={setForgotPassword} />
        <Snackbar
          showLogin={showLogin}
          primaryColor={primaryColor}
          secondaryColor={secondaryColor}
          snackBarInfo={snackBarInfo}
          setSnackBarInfo={setSnackBarInfo}
        />
        <Suspense fallback={<Loading primaryColor={primaryColor} />}>
          <Routes>
            <Route
              exact
              path='/'
              element={
                <FrontPage
                  setPageActive={setPageActive}
                  primaryColor={primaryColor}
                  secondaryColor={secondaryColor}
                  setCreateProjectButton={setCreateProjectButton}
                  setShowLogin={setShowLogin}
                  navigate={navigate}
                  admin={admin} />
              }
            />
            <Route
              path='contact'
              element={
                <Contact
                  onBackClick={() => navigate(-1)}
                  primaryColor={primaryColor}
                  secondaryColor={secondaryColor}
                  setSnackBarInfo={setSnackBarInfo} />
              }
            />
            <Route
              path='profile'
              element={
                (projects && userData.firstName) ?
                  <Profile
                    onBackClick={() => navigate(-1)}
                    userData={userData}
                    projects={projects}
                    primaryColor={primaryColor}
                    secondaryColor={secondaryColor}
                    createProjectButton={createProjectButton}
                    setCreateProjectButton={setCreateProjectButton}
                    navigate={navigate}
                    setSnackBarInfo={setSnackBarInfo}
                    setUserData={setUserData}
                    setProjects={setProjects}
                    setShowLogin={setShowLogin}
                    setForgotPassword={setForgotPassword}
                  />
                  :
                  ((projects && projects.length > 0) && userData.firstName) ?
                    <Profile
                      onBackClick={() => navigate(-1)}
                      userData={userData}
                      projects={projects}
                      primaryColor={primaryColor}
                      secondaryColor={secondaryColor}
                      createProjectButton={createProjectButton}
                      setCreateProjectButton={setCreateProjectButton}
                      navigate={navigate}
                      setSnackBarInfo={setSnackBarInfo}
                      setUserData={setUserData}
                      setProjects={setProjects}
                      setShowLogin={setShowLogin}
                      setForgotPassword={setForgotPassword}
                    />
                    :
                    <Loading primaryColor={primaryColor} />
              }
            />
            <Route
              path='project'
              element={
                <Project
                  onBackClick={() => navigate(-1)}
                  primaryColor={primaryColor}
                  secondaryColor={secondaryColor}
                  admin={admin}
                  setSnackBarInfo={setSnackBarInfo}
                />
              }
            />
            <Route
              path='admin'
              element={
                ((adminProjects.length > 0) && adminClients.length > 0) ?
                  <AdminView
                    primaryColor={primaryColor}
                    secondaryColor={secondaryColor}
                    navigate={navigate}
                    adminClients={adminClients}
                    adminProjects={adminProjects}
                    setSnackBarInfo={setSnackBarInfo}
                    username={userData.username}
                    setAdminProjects={setAdminProjects}
                    setCreateProjectButton={setCreateProjectButton}
                    createProjectButton={createProjectButton}
                    admin={admin}
                  />
                  :
                  <Loading primaryColor={primaryColor} />
              }
            />
            <Route
              path='resetpassword/:id/token/:resetString'
              element={
                <PasswordReset
                  setSnackBarInfo={setSnackBarInfo}
                  navigate={navigate}
                  primaryColor={primaryColor}
                />
              }
            />
          </Routes>
        </Suspense>
        <Footer
          primaryColor={primaryColor}
          secondaryColor={secondaryColor}
          pageActive={pageActive}
          setPageActive={setPageActive}
          admin={admin} />
      </div>
    </>
  );
}

export default App;

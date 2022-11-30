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
  const [showNavBar, setShowNavBar] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
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
    const username = localStorage.getItem('user');
    if ((accessToken) && !(isJwtExpired(accessToken))) {
      getClientInfo(username);
    } else {
      localStorage.clear();
    }
  }, []);

  const getClientInfo = (username) => {
    getUserData(getAdminInfo).then(data => {
      setUserData(data, getAdminInfo);
      console.log(data);
    }).catch(error => {
      console.log(error)
    });

    getProjects(username).then(data => {
      setProjects(data);
    }).catch(error => {
      console.log(error);
    });
  }

  const getAdminInfo = () => {
    getAllProjects().then(data => {
      setAdminProjects(data);
      console.log(data);
    }).catch(error => {
      console.log(error)
    });

    getAllUsers().then(data => {
      setAdminClients(data);
    }).catch(error => {
      console.log(error);
    });
  }

  //When a user successfully logs in, this function updates the 'user' property from null to particular user
  const onLoggedIn = (token, username) => {
    if (username === admin) {
      getUserData(getAdminInfo).then(data => {
        setUserData(data);
      }).catch(error => {
        console.log(error)
      });
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
          setShowNavBar={setShowNavBar}
          showNavBar={showNavBar}
          primaryColor={primaryColor}
          secondaryColor={secondaryColor}
          setPrimaryColor={setPrimaryColor}
          setSecondaryColor={setSecondaryColor}
          admin={admin} />
        <Login
          showLogin={showLogin}
          setShowLogin={setShowLogin}
          onLoggedIn={onLoggedIn}
          setShowNavBar={setShowNavBar}
          primaryColor={primaryColor}
          secondaryColor={secondaryColor}
          createProjectButton={createProjectButton}
          admin={admin}
          setSnackBarInfo={setSnackBarInfo} />
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
                  navigate={navigate} />
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
                  />
                  :
                  <Loading primaryColor={primaryColor} />
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

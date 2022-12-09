import axios from 'axios';
const admin = 'khurdt';

export const services = [
  {
    _id: 1,
    title: 'Storm Restoration',
    image: 'storm',
    description: ''
  },
  {
    _id: 2,
    title: 'Insurance Negotiation',
    image: 'insurance',
    description: ''
  },
  {

    _id: 3,
    title: 'Roofing',
    image: 'roof',
    description: ''
  },
  {

    _id: 4,
    title: 'Flooring',
    image: 'flooring',
    description: ''
  },
  {
    _id: 5,
    title: 'Siding',
    image: 'siding',
    description: ''
  },
  {
    _id: 6,
    title: 'Soffit',
    image: 'soffit',
    description: ''
  },
  {
    _id: 7,
    title: 'Fascia',
    image: 'fascia',
    description: ''
  },
  {
    _id: 8,
    title: 'Paint',
    image: 'paint',
    description: ''
  }
]

// APP PAGE ----------------------------------------------------------------------------------------------------------------------------------------------

export const getAllProjects = (setAdminProjects) => {
  let token = localStorage.getItem('token');
  axios.get('https://polar-tor-24509.herokuapp.com/projects', {
    headers: { Authorization: `Bearer ${token}` }
  }).then((response) => {
    console.log(response);
    let allProjects = response.data;
    setAdminProjects(allProjects);
  }).catch(function (error) {
    console.log(error);
  })
}

export const getAllUsers = (setAdminClients) => {
  let token = localStorage.getItem('token');
  axios.get('https://polar-tor-24509.herokuapp.com/users', {
    headers: { Authorization: `Bearer ${token}` }
  }).then((response) => {
    console.log(response);
    let allUsers = response.data;
    setAdminClients(allUsers);
  }).catch((error) => {
    console.log(error);
  })
}

export const getUserData = (setUserData, getAdminInfo) => {
  let username = localStorage.getItem('user');
  let token = localStorage.getItem('token');
  axios.get(`https://polar-tor-24509.herokuapp.com/users/${username}`, {
    headers: { Authorization: `Bearer ${token}` }
  }).then((response) => {
    console.log(response);
    let userData = response.data;
    if (userData.username === admin) { getAdminInfo() }
    setUserData(userData);
  })
    .catch(function (error) {
      console.log(error);
    });
}

export const getProjects = (setProjects) => {
  let username = localStorage.getItem('user');
  let token = localStorage.getItem('token');
  axios.get(`https://polar-tor-24509.herokuapp.com/projects/${username}`, {
    headers: { Authorization: `Bearer ${token}` }
  }).then((response) => {
    console.log(response);
    let projects = response.data;
    setProjects(projects);
  }).catch(function (error) {
    console.log(error);
  })
}

// PROJECT PAGE -------------------------------------------------------------------------------------------------------------------------------------------

export const updateProject = (validate, updateProjectData, setProject, setEditing, projectId, setSnackBarInfo) => {
  let token = localStorage.getItem('token');
  let isValid = validate();
  if (isValid) {
    setSnackBarInfo({
      show: 'true',
      message: 'Updating Project',
      loading: true
    });
    axios.put(`https://polar-tor-24509.herokuapp.com/projects/${projectId}`, updateProjectData,
      {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        setEditing(false);
        getProject(setProject, setEditing, projectId);
        setSnackBarInfo({
          show: 'true',
          message: 'Update Successful',
          loading: false
        });
      })
      .catch(function (error) {
        console.log(error);
        setSnackBarInfo({
          show: 'true',
          message: 'Update Failed',
          loading: false
        });

      });
  }
};

export const removeFiles = (fileName, setProject, setEditing, projectId, setSnackBarInfo) => {
  let token = localStorage.getItem('token');
  setSnackBarInfo({
    message: 'Updating Files',
    loading: true,
    show: 'true'
  });
  axios.delete(`https://polar-tor-24509.herokuapp.com/files/${fileName}/projects/${projectId}`,
    {
      headers: { Authorization: `Bearer ${token}` },
    }).then((response) => {
      console.log(response);
      setSnackBarInfo({
        message: 'Files Updated',
        loading: false,
        show: 'true'
      });
      getProject(setProject, setEditing, projectId);
    }).catch((error) => {
      setSnackBarInfo({
        message: 'Failed to Update',
        loading: false,
        show: 'true'
      });
      console.log(error);
    })
}

export const getProject = (setProject, setEditing, projectId) => {
  let token = localStorage.getItem('token');
  axios.get(`https://polar-tor-24509.herokuapp.com/oneProject/${projectId}`,
    {
      headers: { Authorization: `Bearer ${token}` },
    }).then((response) => {
      setProject(response.data);
      setEditing(false);
    }).catch((error) => {
      console.log(error);
    })
}

export const updateFiles = (fileName, setProject, setEditing, projectId, setSnackBarInfo) => {
  let token = localStorage.getItem('token');
  setSnackBarInfo({
    message: 'Updating Files',
    loading: true,
    show: 'true'
  });
  axios.post(`https://polar-tor-24509.herokuapp.com/files/${fileName}/projects/${projectId}`, { jwt: 'token' },
    {
      headers: { Authorization: `Bearer ${token}` },
    }).then((response) => {
      console.log(response);
      setSnackBarInfo({
        message: 'Update Successful',
        loading: false,
        show: 'true'
      });
      getProject(setProject, setEditing, projectId);
    }).catch((error) => {
      setSnackBarInfo({
        message: 'Failed to Update',
        loading: false,
        show: 'true'
      });
      console.log(error);
    })
}

// CONTACT PAGE ---------------------------------------------------------------------------------------------------------------------------------------------------

export const sendContactInfo = (event, form, validate, handleReset, setSnackBarInfo) => {
  event.preventDefault()
  const { firstName, lastName, email, phone, message } = form;
  const isReq = validate();
  if (isReq) {
    setSnackBarInfo({
      message: 'Sending Email',
      loading: true,
      show: 'true'
    });
    axios.post(`https://polar-tor-24509.herokuapp.com/contact`, {
      name: (firstName + ' ' + lastName),
      email: email,
      phone: phone,
      message: message,
    })
      .then((response) => {
        console.log(response);
        setSnackBarInfo({
          show: 'true',
          message: 'Email Sent! Thank You',
          loading: false,
        });
        handleReset();
      })
      .catch(function (error) {
        console.log(error);
        setSnackBarInfo({
          show: 'true',
          message: (error.message) ? error.message : 'Failed to Send Email, Please Try Another Time',
          loading: false
        });
      });
  }
};

// LOGIN/REGISTER --------------------------------------------------------------------------------------------------------------------------------------------------

export const login = (form, validate, setShowLogin, onLoggedIn, setSnackBarInfo) => {
  const { username, password } = form;
  const isValidated = validate();
  if (isValidated) {
    setSnackBarInfo({
      show: 'true',
      message: 'Logging In',
      loading: true
    });
    axios.post(`https://polar-tor-24509.herokuapp.com/login`, {
      username: username,
      password: password
    }).then((response) => {
      const data = response.data;
      localStorage.setItem('token', data.token);
      localStorage.setItem('user', data.user.username);
      setSnackBarInfo({
        show: 'true',
        message: 'Successfully Logged In',
        loading: false
      });
      setShowLogin(false);
      onLoggedIn(data.token, data.user.username);
    }).catch(function (error) {
      console.log(error);
      setSnackBarInfo({
        show: 'true',
        message: (error.message.includes('400')) ? 'incorrect credentials' : 'Failed to Login',
        loading: false
      });
    });
  }
};

export const register = (errors, setPageNumber, form, validate, handleLogin, setShowLogin, setSnackBarInfo) => {
  let token = localStorage.getItem('token');
  if (errors.firstName || errors.lastName || errors.email) {
    setPageNumber(0);
  } else if (errors.address || errors.phone || errors.company) {
    setPageNumber(1);
  } else if (errors.username || errors.password) {
    setPageNumber(2);
  }
  const { firstName, lastName, email, phone, username, password, company } = form;
  const isReq = validate();
  if (isReq) {
    setSnackBarInfo({
      show: 'true',
      message: 'Registering Account',
      loading: true
    });
    axios.post(`https://polar-tor-24509.herokuapp.com/users`, {
      firstName: firstName,
      lastName: lastName,
      email: email,
      phone: phone,
      username: username,
      password: password,
      company: company
    })
      .then((response) => {
        setSnackBarInfo({
          show: 'true',
          message: 'Successfully Registered, Logging in',
          loading: false
        });
        handleLogin();
        setShowLogin(false);
      })
      .catch(function (error) {
        console.log(error);
        setSnackBarInfo({
          show: 'true',
          message: (error.message) ? error.message : 'Failed to Register, Please Try Another Time',
          loading: false
        });
      });
  }
};

// ADMIN PAGE -------------------------------------------------------------------------------------------------------------------------------------------------------

export const removeAdminProject = (projectId, setSnackBarInfo, setAdminProjects) => {
  let token = localStorage.getItem('token');
  setSnackBarInfo({
    message: 'Removing Project',
    loading: true,
    show: 'true'
  });
  axios.delete(`https://polar-tor-24509.herokuapp.com/projects/${projectId}`, {
    headers: { Authorization: `Bearer ${token}` }
  }).then((response) => {
    setSnackBarInfo({
      show: 'true',
      message: 'Project Removed!',
      loading: false,
    });
    getAllProjects(setAdminProjects);
  }).catch((error) => {
    console.log(error);
    setSnackBarInfo({
      show: 'true',
      message: 'Failed to Remove Project',
      loading: false
    });
  })
}

// PROFILE PAGE --------------------------------------------------------------------------------------------------------------------------------------------------------------

export const updateUser = (validate, updatedData, setEditing, setSnackBarInfo, setUserData) => {
  let username = localStorage.getItem('user');
  let token = localStorage.getItem('token');
  const isReq = validate();
  if (isReq) {
    setSnackBarInfo({
      show: 'true',
      message: 'Updating Information',
      loading: true
    });
    axios.put(`https://polar-tor-24509.herokuapp.com/users/${username}`, updatedData,
      {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        localStorage.setItem('user', username);
        setEditing(false);
        getUserData(setUserData);
        setSnackBarInfo({
          show: 'true',
          message: 'Update Successful',
          loading: false
        });
      })
      .catch(function (error) {
        console.log(error);
        setSnackBarInfo({
          show: 'true',
          message: 'Update Failed',
          loading: false
        });

      });
  }
};

export const removeProject = (projectId, setShowCreateProject, setSnackBarInfo, setProjects) => {
  let username = localStorage.getItem('user');
  let token = localStorage.getItem('token');
  setSnackBarInfo({
    message: 'Removing Project',
    loading: true,
    show: 'true'
  });
  axios.delete(`https://polar-tor-24509.herokuapp.com/users/${username}/projects/${projectId}`,
    {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((response) => {
      setSnackBarInfo({
        show: 'true',
        message: 'Project Removed!',
        loading: false,
      });
      setShowCreateProject(false);
      getProjects(setProjects);
    })
    .catch(function (error) {
      console.log(error);
      setSnackBarInfo({
        show: 'true',
        message: 'Failed to Remove Project',
        loading: false
      });
    });
}

// CREATE PROJECT PAGE ---------------------------------------------------------------------------------------------------------------------------------------------------------

export const createProject = (validate, projectData, setShowCreateProject, setSnackBarInfo, setAdminProjects, setProjects) => {
  let username = localStorage.getItem('user');
  let token = localStorage.getItem('token');
  const isReq = validate();
  if (isReq) {
    setSnackBarInfo({
      message: 'Creating Project',
      loading: true,
      show: 'true'
    });
    axios.post(`https://polar-tor-24509.herokuapp.com/projects`, projectData,
      {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        setSnackBarInfo({
          show: 'true',
          message: 'Project Created!',
          loading: false,
        });
        if (username === admin) {
          getAllProjects(setAdminProjects);
        } else {
          getProjects(setProjects);
        }
        setShowCreateProject(false);
      })
      .catch(function (error) {
        console.log(error);
        setSnackBarInfo({
          show: 'true',
          message: (error.message) ? error.message : 'Failed to Create Project',
          loading: false
        });
      });
  }
}

export const addProject = (projectIdValidaton, projectId, setShowCreateProject, setSnackBarInfo, setAdminProjects, setProjects) => {
  let username = localStorage.getItem('user');
  let token = localStorage.getItem('token');
  if (projectIdValidaton()) {
    setSnackBarInfo({
      message: 'Adding Project',
      loading: true,
      show: 'true'
    });
    axios.post(`https://polar-tor-24509.herokuapp.com/users/${username}/projects/${projectId}`, { 'jwt': token },
      {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        console.log(response);
        setSnackBarInfo({
          show: 'true',
          message: 'Project Added!',
          loading: false,
        });
        if (username === admin) {
          getAllProjects(setAdminProjects);
        } else {
          getProjects(setProjects);
        }
        setShowCreateProject(false);
      })
      .catch(function (error) {
        console.log(error);
        setSnackBarInfo({
          show: 'true',
          message: 'Failed to Add Project',
          loading: false
        });
      });
  }
}

    // const onDeleteAccount = () => {
    //     const username = localStorage.getItem('user');
    //     const token = localStorage.getItem('token');
    //     axios.delete(`https://kh-movie-app.herokuapp.com/users/${username}`,
    //         {
    //             headers: { Authorization: `Bearer ${token}` },
    //         })
    //         .then((response) => {
    //             console.log(response);
    //             alert('user unregisterd');
    //             localStorage.removeItem('user');
    //             localStorage.removeItem('token');
    //             window.open('/', '_self');
    //         })
    //         .catch(function (error) {
    //             console.log(error);
    //         });
    // }


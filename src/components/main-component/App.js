import React, { useState } from 'react';
import './App.css';
import Navigation from '../navbar-component/navbar';
import Contact from '../contact-component/contact';
import FrontPage from '../frontPage-component/frontPage';
import { Routes, Route, useNavigate } from 'react-router-dom';

function App() {
  let navigate = useNavigate();
  const [pageActive, setPageActive] = useState('');
  // const isWindowSmall = (window.innerWidth < 600);
  return (
    <div className="App">
      <Navigation pageActive={pageActive} setPageActive={setPageActive} />
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
          element={<Contact onBackClick={() => navigate(-1)} />}
        />
      </Routes>
    </div>
  );
}

export default App;

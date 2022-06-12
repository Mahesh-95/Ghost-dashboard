import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


import './App.css';
import Dashboard from './pages/Dashboard';
import Posts from './pages/Posts';
import Links from './pages/Links';
import NavMenu from './components/NavMenu';

function App() {

  return (
    <Router>
      <NavMenu/>
      <Routes>
       <Route path="/" element={<Dashboard />} />
        <Route path="posts" element={<Posts />} />
        <Route path="links" element={<Links />}/>
      </Routes>
    </Router>
  );
}

export default App;

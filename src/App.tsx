import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Home';
import About from './pages/About';
import Sidenav from './components/Sidenav/Sidenav';
import TopBar from './components/TopBar/TopBar';

function App() {
  return (
    <BrowserRouter>
      <TopBar />
      <Sidenav>
        <Routes>
          <Route path="/" element={<Dashboard />}/>
          <Route path="/About" element={<About />}/>
        </Routes>
      </Sidenav>
    </BrowserRouter>
  );
}

export default App;

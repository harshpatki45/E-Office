/*
import './App.css';
import indore from './Assets/downloadindore.png'
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import department from './department';

function App() {
  return (
    
    <div className="App">
      <BrowserRouter>
      <Navbar /> 
      <div style={{
        backgroundImage: `url(${indore})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: "100vh",
        width: "100vw",
        position: "absolute",
        marginLeft: "-8px",
        marginTop: "150px",
        
        
        }}>
         <div style={{ paddingTop: '64px', color:"white" }}>
          <Home />
        </div>
        <Footer />
        
        </div>
        </BrowserRouter>
    </div>
  );
}

export default App;export const images = [
    '/Rajwada.png',
    '/Foodhub.png',
    '/image1.png',
];

*/

import React from 'react';
import './App.css';
import indore from './Assets/downloadindore.png';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import Department from './components/Department';
import Login from './components/Login';
import NewsandEvents from './components/NewsandEvents';
import Help from './components/Help';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <div className="brightness-75" style={{
              backgroundImage: `url(${indore})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              height: "100vh",
              width: "100vw",
              position: "absolute",
              marginLeft: "-8px",
              marginTop: 150,
            }}>
              <div style={{ paddingTop: '64px', color: "white" }}>
                <Home />
              </div>
              <Footer />
            </div>
          } />
          <Route path="/department" element={<Department />} />
          <Route path="/login" element={<Login />} />
          <Route path="/NewsandEvents" element={<NewsandEvents />} />
          <Route path="/Help" element={<Help />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

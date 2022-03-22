
import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import About from './pages/About';
import Bucket from './pages/Bucket';
import Register from './pages/Register';
import Login from './pages/Login';
import Blog from './pages/Blog';
import Team from './pages/Team';
import Recommended from './pages/Recommended';

function App() {
  return (
    <Router>
    <div>
      <Navbar/>
      <Routes>
        <Route path='/'  element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/bucket' element={<Bucket/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/blog' element={<Blog/>} />
        <Route path='/team' element={<Team/>} />
        <Route path='/recommended' element={<Recommended/>} />
      </Routes>

    </div>
    <Footer/>
  </Router>

    


  );
}

export default App;


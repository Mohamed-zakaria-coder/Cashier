import React from 'react';
import './store.css'; 
import Nav from './Nav';
import Sales from './Sales';
import Home from './Home';
import Statistics from './Statistics';
import { Routes, Route } from "react-router-dom";

function App() {
  
  return ( 
    <div className='container'>
      <Nav/>
      <Routes>
        <Route path="/Home" element={< Home />}></Route>
        <Route path="/Sales" element={< Sales />}></Route>
        <Route path="/Stats" element={< Statistics />}></Route>
        <Route path="*" element={< Home />}></Route>
      </Routes>
    </div>
  )
}

export default App;

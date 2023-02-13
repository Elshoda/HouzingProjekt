import React from 'react';
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import navbar from '../utils/navbar';
import ErrorPage from '../pages/Error/'
import Navbar from '../components/Navbar';
const Root = () => {
  return (
    <Router>
      
        <Routes>
        
        <Route path='/' element={<Navigate to={'/home'}/> }/>
        <Route path='*' element={<ErrorPage/>}/>
        <Route element={<Navbar/>}>
            {
              navbar.map(({path,element,id})=>{
                return <Route key={id} path={path} element={element}/>
              })
            }
          </Route>
        </Routes>
       
    </Router>
  );
}

export default Root;

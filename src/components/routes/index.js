import React from 'react'
import { Route, Routes } from "react-router-dom";
import Dashboard from '../../pages/dashboard';
import Works from '../../pages/works';

const Router = () => {
  return (
    <div>
        <Routes >
        <Route path="/" element={<Dashboard />} />
        <Route path="/works" element={<Works/>} />
        </Routes>
    </div>
  )
}

export default Router
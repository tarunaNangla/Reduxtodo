import React from 'react';
import { Route, Routes } from "react-router-dom";
import Input from './Input';
import Edit from './Edit';

const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Input/>} ></Route>
        <Route path="/:id" element={<Edit/>} ></Route>
      </Routes>
    </div>
  )
}

export default MainRoutes

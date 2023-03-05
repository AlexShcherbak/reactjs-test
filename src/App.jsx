import React from 'react';
import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { Users } from './components/Users/Users';
import { Posts } from './components/Posts/Posts';

export const App = () => {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="/users" element={<Navigate to="/" replace />} />
        <Route path="/posts" element={<Posts />} />
      </Routes>
    </div>
  );
};

export default App;

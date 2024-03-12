import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import "./App.css"
import Home from './components/Home';
import About from './components/About';
import Cart from './components/Cart';
import UserProfile from './components/UserProfile';
import NavigationMenu from "./components/NavigationMenu";
import ProtectedRoute from './ProtectedRoute';
import Login from "./components/login.js";
import Register from "./components/Register.js";
function App() {


  return (
    <Router>
      <NavigationMenu />
      <Routes>
        {/* Public routes accessible to everyone */}
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
        {/* Protected routes accessible only to authenticated users */}
        <Route
          path="/cart"
          element={<ProtectedRoute element={<Cart />} />}
        />
        <Route
          path="/user"
          element={<ProtectedRoute element={<UserProfile />} />}
        />
      </Routes>
    </Router>
  );
}

export default App;

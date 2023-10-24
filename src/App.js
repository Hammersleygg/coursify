import Home from "./pages/home/Home";
import TopBar from "./components/topbar/TopBar";
import Single from "./pages/home/single/Single";
import Account from "./pages/home/account/Account";
import Settings from "./pages/home/settings/Settings";
import Login from "./pages/home/login/Login";
import Register from "./pages/register/Register";
import './app.css'; 

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import {auth} from "./firebase-config"



function App() {
  

  
 
  return (
    <Router>
      <TopBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Account" element={<Register />} />
        <Route path="/Account2" element={<Account />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/post/:postId" element={<Single />} />
      </Routes>
    </Router>
  );
}

export default App;

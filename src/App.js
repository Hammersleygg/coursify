import Home from "./pages/home/Home";
import TopBar from "./components/topbar/TopBar";
import About from "./pages/about/About";
import Single from "./pages/home/single/Single";
import DashBoard from "./pages/home/dashboard/DashBoard";
import Settings from "./pages/home/settings/Settings";
import Login from "./pages/home/login/Login";
import Register from "./pages/register/Register";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const user = false;
  return (
    <Router>
      <TopBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/register" element={user ? <Home/> : <Register />} />
        <Route path="/login" element={user ? <Home/> : <Login />} />
        <Route path="/dashboard" element={user ? <DashBoard/> : <Register />} />
        <Route path="/settings" element={user ? <Settings/> : <Register />} />
        <Route path="/post/:postId" element={<Single />} />
      </Routes>
    </Router>
  );
}

export default App;

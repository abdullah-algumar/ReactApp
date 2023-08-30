import React from "react";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import KurulusList from "./components/KurulusFilter";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Authentication and Kurulus List Example</h1>
        <nav>
          <ul>
            <li>
              <Link to="/register">Register</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/kurulus-list">Kurulus List</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/kurulus-list" element={<KurulusList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

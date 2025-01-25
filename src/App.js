import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Shop from "./components/Shop";
import Skills from "./components/Skills";
import Stores from "./components/Stores";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Header from "./components/Header";
import "./App.css";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <div className="app">
        {/* Conditional Rendering Based on Authentication */}
        {!isAuthenticated ? (
          <Routes>
            <Route
              path="/signin"
              element={<SignIn setAuth={setIsAuthenticated} />}
            />
            <Route path="/signup" element={<SignUp />} />
            <Route path="*" element={<Navigate to="/signin" replace />} />
          </Routes>
        ) : (
          <div>
            <Header />
            <Routes>
              <Route path="/shop" element={<Shop />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/stores" element={<Stores />} />
              <Route path="/about" element={<About />} />
              <Route path="/contactus" element={<ContactUs />} />
              <Route path="*" element={<Navigate to="/shop" replace />} />
            </Routes>
          </div>
        )}
      </div>
    </Router>
  );
};

export default App;

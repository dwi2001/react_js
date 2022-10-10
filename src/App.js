import React from "react";
import {
  BrowserRouter as Router,
  // Switch,
  Route,
  // Link,
  Routes
} from "react-router-dom";
import Navigation from './components/Navigation';
import Home from "./components/Home";
import Profile from "./components/Profile";
import About from './components/About';

export default function App() {
  return (
    <Router>

      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <Navigation />
      <Routes>
        <Route path="home" element={<Home />} />
        <Route path="Profile" element={<Profile />} />
        <Route path="About" element={<About />} />
      </Routes>
    </Router>
  );
}



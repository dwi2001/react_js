// import React from "react";

// const Home = () => {

//     return (
//         <div style={{ textAlign: 'center' }}>
//             <h1>Home</h1>
//         </div>
//     )
// }

// export default Home;

import React from "react";
import {
    BrowserRouter as Router,
    // Switch,
    Route,
    // Link,
    Routes
} from "react-router-dom";
// import Navigation from './components/Navigation';
// import Home from "./components/Home";
import Profile from "./Profile";
import About from './About';

export default function App() {
    return (
        <Router>

            {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
            {/* <Navigation /> */}
            <Routes>
                {/* <Route path="/" element={<Home />} /> */}
                <Route path="Profile" element={<Profile />} />
                <Route path="About" element={<About />} />
            </Routes>
        </Router>
    );
}



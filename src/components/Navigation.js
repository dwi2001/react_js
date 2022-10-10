import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {

    return (
        <div style={{ textAlign: 'center' }}>
            <h1 style={{ color: 'red' }}>
                Belajar Routing
            </h1>
            <nav>
                <div style={{ height: 50, justifyContent: 'center', }}>
                    <div style={{ borderWidth: 10, borderColor: 'green' }}>
                        <Link to='home' > Home</Link> | {''}
                        <Link to='profile' > profile</Link> | {''}
                        <Link to='about' > about</Link>
                    </div>
                </div>

            </nav>
        </div>
    )
}

export default Navigation;
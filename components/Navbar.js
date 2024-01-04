import React, { useState, useEffect } from 'react';

export default function Navbar() {
    const [navBackground, setNavBackground] = useState("#333");

    useEffect(() => {
        const handleScroll = () => {
            const show = window.scrollY > 50;
            setNavBackground(show ? "#333a" : "#333"); // "#333a" is slightly transparent
        };
        document.addEventListener("scroll", handleScroll);
        return () => {
            document.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <nav style={{ backgroundColor: navBackground, padding: ".5rem", position: "fixed", top: 0, width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", transition: "background-color 0.3s ease" }}>
            <div style={{ marginLeft: "1rem" }}>
                <img src="/images/Little-Bat-Games-logowide.svg" alt="LBG Logo" style={{ height: "50px" }} />
            </div>
            <ul style={{ listStyleType: "none", display: "flex", marginRight: "1rem" }}>
                <li style={{ margin: "0 1rem" }}>
                    <a href="https://twitter.com/YOUR_USERNAME" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-twitter"></i>
                    </a>
                </li>
                <li style={{ margin: "0 1rem" }}>
                    <a href="https://www.facebook.com/YOUR_USERNAME" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-facebook"></i>
                    </a>
                </li>
                {/* Add other social media links here */}
            </ul>
        </nav>
    );
}
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
                <a href="https://littlebat.games"><img src="/images/Little-Bat-Games-logowide.svg" alt="LBG Logo" style={{ height: "50px" }} /></a>
            </div>
            <ul style={{ listStyleType: "none", display: "flex", marginRight: "1rem" }}>
                <li style={{ margin: "0 1rem" }}>
                    <a href="https://twitter.com/vamptherapist" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-twitter social-icon"></i>
                    </a>
                </li>
                <li style={{ margin: "0 1rem" }}>
                    <a href="https://bsky.app/profile/vampiretherapist.bsky.social" target="_blank" rel="noopener noreferrer">
                        <img src="/images/bskyiconw.png" height="16" />
                    </a>
                </li>
                <li style={{ margin: "0 1rem" }}>
                    <a href="https://tiktok.com/vampire.therapist" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-tiktok social-icon"></i>
                    </a>
                </li>
                <li style={{ margin: "0 1rem" }}>
                    <a href="https://discord.gg/zc47bfxD" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-discord social-icon"></i>
                    </a>
                </li>
                <li style={{ margin: "0 1rem" }}>
                    <a href="https://store.steampowered.com/" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-steam social-icon"></i>
                    </a>
                </li>

                {/* Add other social media links here */}
            </ul>
        </nav>
    );
}
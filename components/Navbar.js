// components/Navbar.js

export default function Navbar() {
    return (
        <nav style={{ backgroundColor: "#333", padding: "1rem", position: "fixed", top: 0, width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
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
// components/Footer.js
import styles from './Footer.module.css'
import Link from 'next/link'

export default function Footer() {
    return (
        <footer style={{ padding: '.5rem', backgroundColor: '#333', color: 'white', textAlign: 'center' }}>
            <p>&copy; {new Date().getFullYear()} Little Bat Games. All rights reserved. | &nbsp; 
                <Link href="/impressum" style={{ color: '#61dafb' }}>Impressum</Link> | &nbsp;
                <Link href="/press" style={{ color: '#61dafb' }}>Press</Link> | &nbsp;
                <Link href="/" style={{ color: '#61dafb' }}>Home</Link>
            </p>
            {/* Add more content here as needed */}
        </footer>
    );
}

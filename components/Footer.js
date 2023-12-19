import styles from './Footer.module.css'

export default function Footer() {
    return (
        <footer style={{ padding: '2rem', backgroundColor: '#333', color: 'white', textAlign: 'center' }}>
            <p>&copy; {new Date().getFullYear()} Little Bat Games. All rights reserved.</p>
            {/* Add more content here as needed */}
        </footer>
    );
}

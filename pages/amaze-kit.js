import Head from 'next/head';
import Navbar from '@components/Navbar';
import Footer from '@components/Footer';
import CookieConsent from '@components/CookieConsent';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Home() {
    const [password, setPassword] = useState('');
    const [accessGranted, setAccessGranted] = useState(false);
    const [offsetY, setOffsetY] = useState(0);

    const handlePasswordSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/auth', { password });
            if (response.data.success) {
                setAccessGranted(true);
            } else {
                alert('Wrong password, try again!');
            }
        } catch (error) {
            console.error('Authentication error:', error);
            alert('Oops, something went wrong!');
        }
    };

    const handleScroll = () => setOffsetY(window.pageYOffset);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Password protection form
    if (!accessGranted) {
        return (
            <div>
                <form onSubmit={handlePasswordSubmit}>
                    <input 
                        type="password" 
                        placeholder="Enter password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                    />
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }

    // Content of your page
    return (
        <>
            <Head>
                <title>Vampire Therapist - Amaze</title>
                <meta name="description" content="Amaze Submission kit for Vampire Therapist" />
                <link rel="icon" href="/favicon.ico" />
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
            </Head>
            <Navbar />
            <main className="main-container">
                <div className="header-image-container">
                    <div 
                        className="parallax-image"
                        style={{ 
                            backgroundImage: `url('/images/VT_Sitebanner.png')`,
                            transform: `translateY(${offsetY * 0.5}px)` 
                        }}
                    ></div>
                </div>
                <div className="content-container">
                    <h1>AMAZE Submission Kit</h1>
                    <p><em>Vampire Therapist</em> is designed to be played by anyone. It is a fully-voiced, fully-subtitled, single-button game. You should not have any difficulties, but if so, please email cyrus@littlebat.games.</p>
                    <p>Here is a link to a review build. Be aware that the game is in heavy development right now. It will be releasing in June of 2024, so this is not indicative of the final experience.</p>
                    <p>AMAZE BUILD: <a href="https://drive.google.com/file/d/1rauK_wKCC__4CkR_BZ-7dldPUE1p23JS/view?usp=drive_link">Windows</a></p>
                </div>
            </main>
            <Footer />
            <CookieConsent />
        </>
    );
}

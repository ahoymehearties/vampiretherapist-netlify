import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Navbar from '@components/Navbar'
import CookieConsent from '@components/CookieConsent'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react';

export default function Home() {

    const [offsetY, setOffsetY] = useState(0);
    const handleScroll = () => setOffsetY(window.pageYOffset);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <Head>
                <title>Vampire Therapist</title>
                <meta name="description" content="Vampire Therapist is a video game about finding yourself and drinking blood. Coming to Steam June 2024." />
                <link rel="icon" href="/favicon.ico" />
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
                <meta property="og:title" content="Vampire Therapist" />
                <meta property="og:description" content="Vampire Therapist is a video game about finding yourself and drinking blood. Coming to Steam June 2024." />
                <meta property="og:image" content="/images/VT_LargeCapsule.png" />
                <meta property="og:url" content="https://vampiretherapist.com" />
                <meta property="og:type" content="website" />
                <meta name="robots" content="index, follow" />
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
                    <div className="video-responsive">
                        <iframe
                            src="https://www.youtube.com/embed/8nk-l_Txdt0" // Replace VIDEO_ID
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            title="Embedded youtube"
                        ></iframe>
                    </div>
                </div>
                <div className="content-container">
                    <p style={{ color: '#fff' }}>Embark on a journey of healing and discovery as a Vampire Therapist, where you unravel centuries of emotional turmoil, dispel decades of delusions, and confront the complexities of self-loathing. Utilizing authentic cognitive behavioral therapy techniques, this groundbreaking game invites you to guide vampires from various epochs through their psychological struggles. Experience the transformative power of therapy as you help these timeless beings navigate their psyches and find peace.    </p>
                    
                
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <a href="https://store.steampowered.com/app/2481020/Vampire_Therapist/" target="_blank" rel="noopener noreferrer">
                      <Image
                        src="/images/steam-wishlist-button.webp" // Path to your image in the public folder
                        alt="Steam Wishlist Button"
                        width={400}  // Adjust the width as needed
                        height={100}  // Adjust the height as needed
                        layout="fixed"
                      />
                    </a>
                </div>
                <div className="quotes">
                    <p><em>…Vampire Therapist, there's no way you don't want to know more about that—but the underlying concept looks genuinely interesting too.</em> — <a href="https://www.pcgamer.com/vampire-therapist-is-a-game-about-helping-the-living-dead-come-to-terms-with-their-centuries-old-emotional-hangups">PC Gamer</a></p>
                    <p><em>Vampire Therapist from Little Bat Games is one of our most anticipated games of 2024. —  <a href="https://gaymingmag.com/2024/01/vampire-therapist-is-a-thrilling-mix-of-what-we-do-in-the-shadows-and-horrible-histories/">Gayming Magazine</a></em></p>
                    <p><em>…Vampire Therapist is shaking a lot of things up in one very elegant bag…</em> — <a href="https://www.rockpapershotgun.com/upcoming-visual-novel-vampire-therapist-mixes-vampires-and-dark-humour-with-cbt">Rock, Paper, Shotgun</a></p>
                    </div>
                </div>
            {/* Features */}

            <div className="feature-section">
                    {/* Column 1 */}
                    <div className="feature-column">
                        
                        <Image src="/images/vtshot2.png" alt="Feature 1 Image" width={500} height={300} layout="responsive" />
                        <h1 className="feature-header">Explore an Enigmatic Gothic Universe</h1>
                        <p>Step into an unique gothic universe set in a European vampire-run goth club. As a reformed cowboy vampire, you'll navigate a world of dark European nightlife, encountering ancient vampires and a diverse array of clubgoers. Immerse yourself in a setting where humor and memorable characters bring the shadows to life.</p>
                    </div>

                    {/* Column 2 */}
                    <div className="feature-column">
                        
                        <Image src="/images/vtshot6.png" alt="Feature 1 Image" width={500} height={300} layout="responsive" />
                        <h1 className="feature-header">Discover Therapy Concepts Through Gameplay</h1>
                        <p>Dive into the mechanics of cognitive behavioral therapy, intricately woven into gameplay. Understand the psychological depths of both the living and the undead. Engage with concepts and methodologies that are not only game-centric but also vetted by professional therapists, offering a unique blend of entertainment and real-world insight.</p>
                    </div>

                    {/* Column 3 */}
                    <div className="feature-column">
                        
                        <Image src="/images/VampireTherapist_7.png" alt="Feature 1 Image" width={500} height={300} layout="responsive" />
                        <h1 className="feature-header">Address Historical Issues</h1>
                        <p>Embrace the role of a vampire therapist, guiding a wide range of patients from the Bronze Age to modern times towards mental well-being. Through your interactions, uncover and address distorted thinking patterns, gaining insights that bridge the supernatural and the human condition. Your therapeutic journey is not just about healing others, but also about discovering universal truths.</p>
                    </div>
                </div>
            <div className="content-container">
            <div className="discord-cta-container">
                <Link href="https://discord.gg/yTfcZgXC"><Image src="/images/littlebat-discord-cta-small.png" alt="Discord link" width={600} height={133}  /></Link>
                </div>

            </div>

            {/* New Email Signup Section */}
                <div className="email-signup-section">
                    <form action="https://vampiretherapist.us13.list-manage.com/subscribe/post?u=2409a1e292ef73584f49e82d5&amp;id=0a1126812f&amp;f_id=00140de4f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" target="_blank">
                        <span>Sign up for Email Updates</span>
                        <input type="email" name="EMAIL" id="mce-EMAIL" placeholder="Enter your email" required />
                        <button type="submit" name="subscribe" id="mc-embedded-subscribe">Subscribe</button>
                        <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true">
                            {/* Hidden field for bot protection */}
                            <input type="text" name="b_2409a1e292ef73584f49e82d5_0a1126812f" tabIndex="-1" value="" readOnly />
                        </div>
                    </form>
                </div>

            </main>
            <Footer />
            <CookieConsent />
        </>
    );
}
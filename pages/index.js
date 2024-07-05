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

        const steamButton = document.querySelector('a[href="https://store.steampowered.com/app/2481020?utm_source=website&utm_medium=web&utm_campaign=steam_wishlist_gen"]');
        const gogButton = document.querySelector('a[href="https://www.gog.com/en/game/vampire_therapist?utm_source=website&utm_medium=web&utm_campaign=gog_wishlist_gen"]');

        if (steamButton) {
            steamButton.addEventListener('click', () => {
                fbq('track', 'AddToWishlist', {
                    content_ids: ['steam_2481020'],
                    content_name: 'Steam Wishlist',
                    value: 0,
                    currency: 'USD'
                });
            });
        }

        if (gogButton) {
            gogButton.addEventListener('click', () => {
                fbq('track', 'AddToWishlist', {
                    content_ids: ['gog_vampire_therapist'],
                    content_name: 'GOG Wishlist',
                    value: 0,
                    currency: 'USD'
                });
            });
        }

        return () => {
            window.removeEventListener('scroll', handleScroll);
            if (steamButton) steamButton.removeEventListener('click', () => {});
            if (gogButton) gogButton.removeEventListener('click', () => {});
        };
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
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <iframe src="https://store.steampowered.com/widget/2481020/?utm_source_website&utm_campaign=wishlistgen" frameborder="0" width="646" height="190"></iframe>
                        <a href="https://www.gog.com/en/game/vampire_therapist?utm_source=website&utm_medium=web&utm_campaign=gog_wishlist_gen" target="_blank" rel="noopener noreferrer">
              <Image
            src="/images/gogbutton.png"
            alt="Gog Wishlist Button"
            width={400}
            height={100}
            layout="fixed"
             />
            </a>
            </div>
                </div>
                <div className="content-container">
                    <div className="video-responsive">
                        <iframe
                            src="https://www.youtube.com/embed/wqQsV-tMHRA" // Replace VIDEO_ID
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            title="Embedded youtube"
                        ></iframe>
                    </div>
                </div>
                <div className="content-container">
                    <p style={{ color: '#fff' }}>Embark on a journey of healing and discovery as a Vampire Therapist, where you unravel centuries of emotional turmoil, dispel decades of delusions, and confront the complexities of self-loathing. Utilizing authentic cognitive behavioral therapy techniques, this groundbreaking game invites you to guide vampires from various epochs through their psychological struggles. Experience the transformative power of therapy as you help these timeless beings navigate their psyches and find peace.    </p>
                    
                

                <div className="quotes">
                    <p><em>…Vampire Therapist, there's no way you don't want to know more about that—but the underlying concept looks genuinely interesting too.</em> — <a href="https://www.pcgamer.com/vampire-therapist-is-a-game-about-helping-the-living-dead-come-to-terms-with-their-centuries-old-emotional-hangups">PC Gamer</a></p>
                    <p><em>Vampire Therapist from Little Bat Games is one of our most anticipated games of 2024. —  <a href="https://gaymingmag.com/2024/01/vampire-therapist-is-a-thrilling-mix-of-what-we-do-in-the-shadows-and-horrible-histories/">Gayming Magazine</a></em></p>
                    <p><em>…Vampire Therapist is shaking a lot of things up in one very elegant bag…</em> — <a href="https://www.rockpapershotgun.com/upcoming-visual-novel-vampire-therapist-mixes-vampires-and-dark-humour-with-cbt">Rock, Paper, Shotgun</a></p>
            <p><em>Vampire Therapist promises to be one of the best games of the summer and personally, one of the best games that I’ve ever played.</em> — <a href="https://www.thefandomentals.com/vampire-therapist-demo-review/">The Fandomentals</a></p>
            <p><em>This unique new vampire therapy RPG is exactly what I’m looking for.</em> — <a href="https://www.pcgamesn.com/vampire-therapist/demo-interview">PCGamesN</a></p>
            <p><em>Rarely have a game’s characters and writing grabbed me so quickly, and I genuinely feel interested to keep learning what it’s teaching me.</em> — <a href="https://nickbait.com/previews/hands-on-preview-vampire-therapist/">Nickbait.com</a></p>
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
                        
                        <Image src="/images/VampireTherapist_4.png" alt="Feature 1 Image" width={500} height={300} layout="responsive" />
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
                <Link href="https://discord.gg/JM7Xr3zp7V"><Image src="/images/littlebat-discord-cta-small.png" alt="Discord link" width={600} height={133}  /></Link>
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

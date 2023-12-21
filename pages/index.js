import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Navbar from '@components/Navbar'
import CookieConsent from '@components/CookieConsent'
import Image from 'next/image'
import Link from 'next/link';

export default function Home() {
    return (
        <>
            <Navbar />
            <main className="main-container">
                <div className="section">
                {/* Left Column */}
                <div style={{ flex: 1, padding: '1rem' }}>
                    <Image
                        src="/images/VTLogoWhite.png" // Path to your image in the public folder
                        alt="Vampire Therapist Logo"
                        width={500}  // Adjust the width as needed
                        height={50}  // Adjust the height as needed
                        layout="responsive"
                      />
                    <p style={{ color: '#fff' }}>Guide vampires through centuries of emotional baggage, decades of delusions, and the odd bout of self-loathing with real cognitive behavioral therapy concepts and become a Vampire Therapist! In this innovative game, you'll use actual therapy techniques to help vampires from across history figure themselves out.</p>

                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <a href="https://store.steampowered.com/steamlist" target="_blank" rel="noopener noreferrer">
                      <Image
                        src="/images/steam-wishlist-button.webp" // Path to your image in the public folder
                        alt="Steam Wishlist Button"
                        width={200}  // Adjust the width as needed
                        height={50}  // Adjust the height as needed
                        layout="fixed"
                      />
                    </a>
                </div>
                </div>

                {/* Right Column - Video */}
                <div className="column">
                    <div className="video-responsive">
                        <iframe
                            src="https://www.youtube.com/embed/4cjdUo7MEqU" // Replace VIDEO_ID
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            title="Embedded youtube"
                        ></iframe>
                    </div>
                </div>
            </div>
            {/* Features */}

            <div className="feature-section">
                    {/* Column 1 */}
                    <div className="feature-column">
                        
                        <Image src="/images/vtshot2.png" alt="Feature 1 Image" width={500} height={300} />
                        <h3 className="feature-header">Gothic World</h3>
                        <p>Enter a unique gothic world with hilarious, memorable characters.</p>
                    </div>

                    {/* Column 2 */}
                    <div className="feature-column">
                        
                        <Image src="/images/vtshot6.png" alt="Feature 1 Image" width={500} height={300} />
                        <h3 className="feature-header">Therapeutic Principles</h3>
                        <p>Learn how humans alive and undead think themselves into dark places, and how to crawl back out again using real therapeutic principles.</p>
                    </div>

                    {/* Column 3 */}
                    <div className="feature-column">
                        
                        <Image src="/images/vtshot5.png" alt="Feature 1 Image" width={500} height={300} />
                        <h3 className="feature-header">Be a Therapist</h3>
                        <p>Be the therapist! Help vampires from the Bronze Age up to the present find their inner peace, and maybe find yours along the way.</p>
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
import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Navbar from '@components/Navbar'
import Link from 'next/link';

export default function Home() {
    return (
        <>
            <Navbar />
            <main style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
            <div className="section" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem 0' }}>
                {/* Left Column */}
                <div style={{ flex: 1, padding: '1rem' }}>
                    <img src="/path/to/game-logo.png" alt="Vampire Therapist logo" style={{ maxWidth: '100%' }} />
                    <p style={{ color: '#fff' }}>Boilerplate information about how awesome vampire therapist is and how there are much worse ways to spend 14.99.</p>
                    <Link href="/steamlist" passHref> {/* Using passHref for proper <a> tag handling */}
                        <a style={{ backgroundColor: '#61dafb', color: '#000', padding: '0.5rem 1rem', borderRadius: '5px', textDecoration: 'none' }}>Wishlist button</a>
                    </Link>
                </div>

                {/* Right Column - Video */}
                <div style={{ flex: 1, padding: '1rem' }}>
                    <iframe width="100%" height="315" src="YOUR_VIDEO_URL" frameBorder="0" allowFullScreen></iframe>
                </div>
            </div>
            {/* Features */}

            <div className="feature-section">
                    {/* Column 1 */}
                    <div className="feature-column">
                        <img src="/path/to/feature1.jpg" alt="Feature 1 Image" />
                        <p>Feature 1 Description</p>
                    </div>

                    {/* Column 2 */}
                    <div className="feature-column">
                        <img src="/path/to/feature2.jpg" alt="Feature 2 Image" />
                        <p>Feature 2 Description</p>
                    </div>

                    {/* Column 3 */}
                    <div className="feature-column">
                        <img src="/path/to/feature3.jpg" alt="Feature 3 Image" />
                        <p>Feature 3 Description</p>
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
                            <input type="text" name="b_2409a1e292ef73584f49e82d5_0a1126812f" tabindex="-1" value="" />
                        </div>
                    </form>
                </div>

            </main>
        </>
    );
}
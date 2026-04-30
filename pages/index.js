import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Navbar from '@components/Navbar'
import CookieConsent from '@components/CookieConsent'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react';

const QUOTES = [
    { text: "I'm being a bit kinder to myself, and it's nice. It's positive. And it's remarkable how quickly and subtly a game can have that effect.", source: "Eurogamer", url: "https://www.eurogamer.net/vampire-therapist-asks-can-a-game-really-teach-the-fundamentals-of-therapy" },
    { text: "Letting yourself get lost in this world is a must, and you'll probably find something you really needed along the way.", source: "Ginx.tv", url: "https://www.ginx.tv/en/video-games/tony-hawk-pro-skater-3-4-remake-july-2025-release-announced" },
    { text: "It's simultaneously earnest and winningly ridiculous – but it's a labour of love, and an original one at that.", source: "The Spectator", url: "https://www.spectator.co.uk/article/completely-batty-vampire-therapist-reviewed/" },
    { text: "Vampire Therapist is a true gem from a mental health standpoint and a successful educational game.", source: "Screenrant", url: "https://screenrant.com/vampire-therapist-review-a-surprisingly-educational-therapy-session/" },
    { text: "…Vampire Therapist, there's no way you don't want to know more about that—but the underlying concept looks genuinely interesting too.", source: "PC Gamer", url: "https://www.pcgamer.com/vampire-therapist-is-a-game-about-helping-the-living-dead-come-to-terms-with-their-centuries-old-emotional-hangups" },
    { text: "Vampire Therapist from Little Bat Games is one of our most anticipated games of 2024.", source: "Gayming Magazine", url: "https://gaymingmag.com/2024/01/vampire-therapist-is-a-thrilling-mix-of-what-we-do-in-the-shadows-and-horrible-histories/" },
    { text: "…Vampire Therapist is shaking a lot of things up in one very elegant bag…", source: "Rock, Paper, Shotgun", url: "https://www.rockpapershotgun.com/upcoming-visual-novel-vampire-therapist-mixes-vampires-and-dark-humour-with-cbt" },
    { text: "Vampire Therapist promises to be one of the best games of the summer and personally, one of the best games that I've ever played.", source: "The Fandomentals", url: "https://www.thefandomentals.com/vampire-therapist-demo-review/" },
    { text: "This unique new vampire therapy RPG is exactly what I'm looking for.", source: "PCGamesN", url: "https://www.pcgamesn.com/vampire-therapist/demo-interview" },
    { text: "Rarely have a game's characters and writing grabbed me so quickly, and I genuinely feel interested to keep learning what it's teaching me.", source: "Nickbait.com", url: "https://nickbait.com/previews/hands-on-preview-vampire-therapist/" },
];

export default function Home() {

    const [quoteIndex, setQuoteIndex] = useState(0);
    const [quoteVisible, setQuoteVisible] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setQuoteVisible(false);
            setTimeout(() => {
                setQuoteIndex(i => (i + 1) % QUOTES.length);
                setQuoteVisible(true);
            }, 600);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const trackStore = (store) => {
        if (typeof fbq !== 'undefined') {
            fbq('track', 'InitiateCheckout', { content_name: store, content_category: 'Game' });
        }
    };

    return (
        <>
            <Head>
                <title>Vampire Therapist — BAFTA-Nominated Game About Therapy, Vampires & Self-Discovery</title>
                <meta name="description" content="Vampire Therapist is the BAFTA-nominated game that uses real cognitive behavioral therapy to help vampires — and maybe you — find inner peace. Featuring Matthew Mercer and an all-star cast. Available now on Steam, GOG, PlayStation, Xbox, and Nintendo Switch." />
                <link rel="icon" href="/favicon.ico" />
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
                <link rel="canonical" href="https://vampiretherapist.com/" />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "VideoGame",
                        "name": "Vampire Therapist",
                        "description": "BAFTA-nominated dark comedy game about giving therapy to vampires from throughout history. Uses real cognitive behavioral therapy techniques, vetted by licensed therapists.",
                        "url": "https://vampiretherapist.com",
                        "image": "https://vampiretherapist.com/images/VT_LargeCapsule.webp",
                        "genre": ["Visual Novel", "Educational Game", "Dark Comedy"],
                        "gamePlatform": ["Steam", "GOG", "PlayStation 4", "PlayStation 5", "Xbox", "Nintendo Switch"],
                        "datePublished": "2024-07-18",
                        "inLanguage": "en",
                        "publisher": {
                            "@type": "Organization",
                            "name": "Little Bat Games",
                            "url": "https://littlebat.games"
                        },
                        "author": {
                            "@type": "Person",
                            "name": "Cyrus Nemati"
                        },
                        "offers": [
                            {
                                "@type": "Offer",
                                "price": "14.99",
                                "priceCurrency": "USD",
                                "url": "https://store.steampowered.com/bundle/50334/Vampire_Therapist_Complete_Edition/"
                            }
                        ],
                        "award": [
                            "BAFTA Games Award Nominee 2025",
                            "Indie X Award Winner 2024",
                            "German Developer Prize Winner 2024",
                            "German Computer Games Prize Winner 2025",
                            "Games for Change Award Winner 2025"
                        ],
                        "actor": [
                            { "@type": "Person", "name": "Matthew Mercer" },
                            { "@type": "Person", "name": "Cyrus Nemati" },
                            { "@type": "Person", "name": "Sarah Grayson" },
                            { "@type": "Person", "name": "Francesca Meaux" },
                            { "@type": "Person", "name": "Kylie Clark" },
                            { "@type": "Person", "name": "Kit Chen" }
                        ]
                    })}}
                />
                <meta property="og:title" content="Vampire Therapist — BAFTA-Nominated Game About Therapy & Self-Discovery" />
                <meta property="og:description" content="The award-winning game that uses real cognitive behavioral therapy to help vampires — and maybe you — find inner peace. Available now on Steam, GOG, PlayStation, Xbox, and Nintendo Switch." />
                <meta property="og:image" content="https://vampiretherapist.com/images/VT_LargeCapsule.png" />
                <meta property="og:url" content="https://vampiretherapist.com" />
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="Vampire Therapist" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Vampire Therapist — BAFTA-Nominated Game About Therapy & Self-Discovery" />
                <meta name="twitter:description" content="The award-winning game that uses real cognitive behavioral therapy to help vampires — and maybe you — find inner peace. Available now." />
                <meta name="twitter:image" content="https://vampiretherapist.com/images/VT_LargeCapsule.png" />
                <meta name="robots" content="index, follow" />
            </Head>
            <Navbar />
            <div className="hero-video-container">
                <video
                    className="hero-video"
                    autoPlay
                    muted
                    loop
                    playsInline
                >
                    <source src="/video/VT-AmbientVG4k.mp4" type="video/mp4" />
                </video>
                <img
                    src="/images/VTLogoWhite_Shadow.webp"
                    alt="Vampire Therapist"
                    className="hero-logo"
                />
                <div className="hero-overlay">
                    <h1 className="hero-title">
                        <span>AWARD-WINNING</span>
                        <span>DARK COMEDY</span>
                        <span>THERAPY GAME</span>
                    </h1>
                    <p className="hero-description">You're an expat cowboy giving therapy to vampires from throughout history above a European goth nightclub.<br /><br />Yes, this is a real game, vetted by licensed therapists.</p>
                </div>
                <div className="hero-bottom-bar">
                    <div className="hero-bar-left">
                        <div className="bar-label">THIS IS WHERE YOU BUY IT</div>
                        <a href="https://store.steampowered.com/app/2481020/Vampire_Therapist/?utm_source=vtcom&utm_medium=web&utm_campaign=gen" target="_blank" rel="noopener noreferrer" onClick={() => trackStore('Steam')}>
                            <img src="/images/Steam.svg" alt="Steam" />
                        </a>
                        <a href="https://www.gog.com/en/game/vampire_therapist_complete_edition?utm_source=vtcom&utm_medium=web&utm_campaign=gen" target="_blank" rel="noopener noreferrer" onClick={() => trackStore('GOG')}>
                            <img src="/images/gog.svg" alt="GOG" />
                        </a>
                        <a href="https://store.playstation.com/en-us/concept/10014497" target="_blank" rel="noopener noreferrer" onClick={() => trackStore('PlayStation')}>
                            <img src="/images/Playstation-Store.svg" alt="PlayStation Store" />
                        </a>
                        <a href="https://www.nintendo.com/us/store/products/vampire-therapist-switch/" target="_blank" rel="noopener noreferrer" onClick={() => trackStore('Nintendo Switch')}>
                            <img src="/images/nintendo-switch-logo.svg" alt="Nintendo Switch" />
                        </a>
                        <a href="https://www.xbox.com/en-us/games/store/vampire-therapist/9phx2nf7bvcb" target="_blank" rel="noopener noreferrer" onClick={() => trackStore('Xbox')}>
                            <img src="/images/xbox-logo.svg" alt="Xbox" />
                        </a>
                    </div>
                    <div className="hero-bar-center">
                        <img src="/images/Little-Bat-Games-logo-justbat.svg" alt="Little Bat Games" />
                    </div>
                    <div className="hero-bar-right">
                        <div className="bar-label">THIS IS WHERE YOU OOH AND AHH</div>
                        <img src="/images/bafta_badge.webp" alt="BAFTA Nominee" />
                        <img src="/images/DCP2025_Signet_Beste-Story.webp" alt="DCP 2025 Beste Story" />
                        <img src="/images/award-indiex.webp" alt="IndiEx Award" />
                        <img src="/images/award-dep.webp" alt="DEP 2024 Award" />
                        <img src="/images/g4cTemp.webp" alt="Games for Change Award" />
                    </div>
                </div>
            </div>
            <main className="main-container">

{/*
 <div className="wishlist-container">
  <iframe
    src="https://store.steampowered.com/widget/2481020/?utm_source_website&utm_campaign=wishlistgen"
    frameBorder="0"
    width="900"
    height="480"
    className="steam-iframe"
  />

  <a
    href="https://www.gog.com/en/game/vampire_therapist?utm_source=website&utm_medium=web&utm_campaign=gog_wishlist_gen"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Image
      src="/images/gogbutton.png"
      alt="GOG Wishlist Button"
      width={400}
      height={100}
    />
  </a>
</div>

<div className="console-links">
   <a
    href="https://www.nintendo.com/us/store/products/vampire-therapist-switch/"
    target="_blank"
    rel="noopener noreferrer"
  >
   <Image
      src="/images/vampire_out_now_on_nintendo.jpg"
      alt="Vampire Therapist coming to Nintendo"
      width={300}
      height={300}
    />
    </a>
<a
    href="https://store.playstation.com/en-us/concept/10014497"
    target="_blank"
    rel="noopener noreferrer"
  >
   <Image
      src="/images/vampire_out_now_on_ps5_ps4.jpg"
      alt="Vampire Therapist coming to Playstation"
      width={300}
      height={300}
    />
    </a>
<a
    href="https://www.xbox.com/en-us/games/store/vampire-therapist/9phx2nf7bvcb"
    target="_blank"
    rel="noopener noreferrer"
  >
   <Image
      src="/images/vampire_coming_to_xbox.jpg"
      alt="Vampire Therapist coming to Xbox"
      width={300}
      height={300}
    />
    </a>
</div>
*/}



                <div className="content-container">
                    <div className="video-responsive">
                        <iframe
                            src="https://www.youtube.com/embed/fbO7t8d9vk4" // Replace VIDEO_ID
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            title="Vampire Therapist — official trailer"
                        ></iframe>
                    </div>
                </div>
                <div className="content-container">
                    <p style={{ color: '#fff' }}>If you think all there is to being a vampire is drinking blood and wearing tight leather, think again: vampires are still human. In the BAFTA-nominated Vampire Therapist, you're Sam Walls — a reformed Wild West cowboy vampire training with a 3000-year-old immortal above a European goth club to help historical vampires sort out their issues. From the Iron Age to the Renaissance and beyond, you'll find that humans haven't really changed much … and vampires even less.</p>
                    <p style={{ color: '#fff' }}>With an all-star cast including <strong>Matthew Mercer</strong> (<em>Baldur's Gate 3, Critical Role</em>), <strong>Cyrus Nemati</strong> (<em>Hades, Pyre</em>), <strong>Sarah Grayson</strong> (<em>Hades 2, Gone Home</em>), <strong>Francesca Meaux</strong> (<em>Hades, Final Fantasy VII: Rebirth</em>), and introducing <strong>Kylie Clark</strong> and <strong>Kit Chen</strong>.</p>
              {/*      
                <div className="awards-container">
                    <Image 
                    src="/images/DCP2025_Signet_Beste-Story.png"
                    alt="DCP Award"
                    width={400}
                    height={400}
                    />
                    <Image 
                    src="/images/bafta_badge.png"
                    alt="BAFTA nomination"
                    width={400}
                    height={400}
                    />
                    <Image 
                    src="/images/award-dep.png"
                    alt="DEP Award"
                    width={400}
                    height={400}
                    />
                    <Image
                    src="/images/pup_star.png"
                    alt="Develop Star Award"
                    width={400}
                    height={400}
                    />
                    <Image
                    src="/images/g4cTemp.png"
                    alt="Games For Change Award"
                    width={400}
                    height={400}
                    />
                    <Image 
                    src="/images/award-indiex.png"
                    alt="DEP Award"
                    width={400}
                    height={400}
                    />
                    <Image 
                    src="/images/award-nom-indiex.png"
                    alt="DEP Award"
                    width={400}
                    height={400}
                    />

                    </div>
                */}
                <div className="dlc-container">
                    <a
                        href="https://store.steampowered.com/app/3320590/Vampire_Therapist__Couples_Therapy/?utm_source=website&utm_medium=referral&utm_campaign=website_ct"
                        target="_blank"
                        rel="noopener"
                    >
                        
                            <Image
                                src="/images/CTPromo.webp"
                                alt="Link to Vampire Therapist: Couples Therapy DLC"
                                width={700}
                                height={394}
                            />
                        
                    </a>
                </div>

                <div className="quotes" style={{ opacity: quoteVisible ? 1 : 0, transition: "opacity 0.6s ease" }}>
                    <p>
                        <em>{QUOTES[quoteIndex].text}</em>
                        <br />
                        <a href={QUOTES[quoteIndex].url} target="_blank" rel="noopener noreferrer">
                            {QUOTES[quoteIndex].source}
                        </a>
                    </p>
                </div>
                </div>
            {/* Features */}

            <div className="feature-section">
                    {/* Column 1 */}
                    <div className="feature-column">
                        
                        <Image src="/images/vtshot2.webp" alt="The gothic nightclub interior of Vampire Therapist" width={500} height={300} style={{ width: '100%', height: 'auto' }} />
                        <h2 className="feature-header">Explore an Enigmatic Gothic Universe</h2>
                        <p>Step into an unique gothic universe set in a European vampire-run goth club. As a reformed cowboy vampire, you'll navigate a world of dark European nightlife, encountering ancient vampires and a diverse array of clubgoers. Immerse yourself in a setting where humor and memorable characters bring the shadows to life.</p>
                    </div>

                    {/* Column 2 */}
                    <div className="feature-column">
                        
                        <Image src="/images/VampireTherapist_4.webp" alt="A CBT therapy session in progress — Vampire Therapist gameplay" width={500} height={300} style={{ width: '100%', height: 'auto' }} />
                        <h2 className="feature-header">Discover Therapy Concepts Through Gameplay</h2>
                        <p>Dive into the mechanics of cognitive behavioral therapy, intricately woven into gameplay. Understand the psychological depths of both the living and the undead. Engage with concepts and methodologies that are not only game-centric but also vetted by professional therapists, offering a unique blend of entertainment and real-world insight.</p>
                    </div>

                    {/* Column 3 */}
                    <div className="feature-column">
                        
                        <Image src="/images/VampireTherapist_7.webp" alt="A historical vampire patient dialogue scene in Vampire Therapist" width={500} height={300} style={{ width: '100%', height: 'auto' }} />
                        <h2 className="feature-header">Address Historical Issues</h2>
                        <p>Embrace the role of a vampire therapist, guiding a wide range of patients from the Bronze Age to modern times towards mental well-being. Through your interactions, uncover and address distorted thinking patterns, gaining insights that bridge the supernatural and the human condition. Your therapeutic journey is not just about healing others, but also about discovering universal truths.</p>
                    </div>
                </div>
            <div className="content-container">
            <div className="discord-cta-container">
                <Link href="https://discord.gg/JM7Xr3zp7V"><Image src="/images/littlebat-discord-cta-small.webp" alt="Discord link" width={600} height={133}  /></Link>
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

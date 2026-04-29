import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Navbar from '@components/Navbar'
import CookieConsent from '@components/CookieConsent'
import Image from 'next/image'
import Link from 'next/link'
import Slider from 'react-slick'
import Button from '@mui/material/Button'
import { useEffect, useState } from 'react';

export default function Home() {

    const [offsetY, setOffsetY] = useState(0);
    const handleScroll = () => setOffsetY(window.pageYOffset);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 4000,
        responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
    }

    return (
        <>
            <Head>
                <title>Press Kit — Vampire Therapist | BAFTA-Nominated Game by Little Bat Games</title>
                <meta name="description" content="Official press kit for Vampire Therapist — the BAFTA-nominated dark comedy therapy game. Download screenshots, logos, and factsheet. Released July 2024 on Steam, GOG, PlayStation, Xbox, and Nintendo Switch." />
                <link rel="icon" href="/favicon.ico" />
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
                <link rel="canonical" href="https://vampiretherapist.com/press" />
                <meta property="og:title" content="Press Kit — Vampire Therapist | BAFTA-Nominated Indie Game" />
                <meta property="og:description" content="Official press kit for Vampire Therapist. Screenshots, trailer, factsheet, and credits for the BAFTA-nominated dark comedy therapy game." />
                <meta property="og:image" content="https://vampiretherapist.com/images/VT_LargeCapsule.webp" />
                <meta property="og:url" content="https://vampiretherapist.com/press" />
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="Vampire Therapist" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Press Kit — Vampire Therapist | BAFTA-Nominated Indie Game" />
                <meta name="twitter:description" content="Official press kit for Vampire Therapist. Screenshots, trailer, factsheet, and credits." />
                <meta name="twitter:image" content="https://vampiretherapist.com/images/VT_LargeCapsule.webp" />
            </Head>
            <Navbar />
            <main className="main-container">

                <div className="header-image-container">
                    <div 
                        className="parallax-image"
                        style={{ 
                            backgroundImage: `url('/images/VT_Sitebanner.webp')`,
                            transform: `translateY(${offsetY * 0.5}px)` 
                        }}
                    ></div>
                </div>
                <div className="content-container">
                    <h2>Description</h2>
                    <p>INNOVATIVE SINGLE-PLAYER NARRATIVE GAME BUILT AROUND THERAPY<br />
                    A UNIQUE DARK COMEDY GOTHIC SETTING<br />
                    A LEARNING AND SELF-DISCOVERY EXPERIENCE
                    </p>
                    <p><em>Vampire Therapist</em> the acclaimed title from Little Bat Games, has surprised the narrative game genre with its innovative 'analyze-'em-up' gameplay. Vampire Therapist has garnered multiple awards for its story and educational value, and was nominated for the prestigious 2025 BAFTA Games Awards.</p><p>In this single-player experience, players assume the role of a therapist counseling vampires from various historical epochs. The game masterfully blends the enigmatic allure of the European goth club scene with the intellectual charm of dark academia, delving into mental health themes with a mix of gentle humor and profound character depth. Developed in collaboration with licensed therapists, it offers an insightful and educational journey, utilizing top-tier voice acting to breathe life into historical figures reimagined through a modern lens.</p>
                    <h2>The World of Vampire Therapist</h2>
                    <p>A strong new intellectual property, <em>Vampire Therapist</em> leverages thousands of years of human history and is able to support characters, locations, and historical epochs that have been unexamined in other media. As the player progresses, they gain access to "cognitive distortions" -- specific classifications of thought patterns that distort reality. By using real-world therapy techniques while merging the mundane and the supernatural, the game world invites players to explore not only history, but their own thought patterns for an experience both cozy and mature.</p>
                    <p>Vampire Therapist: Couples Therapy, was added as DLC to the game in February 2025, examining the difficulties of immortal couples and the history of revolutions.</p>
                </div>

                <div className="press-twocolumn">
                    <div className="press-column">
                        <h2>Factsheet</h2>
                        <p><strong>Developer:</strong><br />
                        Little Bat Games<br />
                        Based in Berlin, Germany</p>
                        <p><strong>Release Date:</strong><br />
                        July 18th, 2024</p>
                        <p><strong>Platforms:</strong><br />
                        Steam, GOG, Nintendo, Playstation, Xbox</p>
                        <p><strong>Website:</strong><br />
                        https://vampiretherapist.com</p>
                        <p><strong>Regular Price:</strong><br />
                        $ 14.99<br />
                        € 14.99</p>
                    </div>
                    <div className="press-column">
                        <h2>Features</h2>
                        <ul>
                        <li>A mix of darkly comic visual novel and a learning tool, <em>Vampire Therapist</em> aims to be a singular experience for fans narrative depth and self-exploration</li>
                        <li>A brand-new IP that blends polished comedic writing, a distinct gothic style, and top-tier voice acting to create an engrossing narrative experience</li>
                        <li>A first-of-its-kind mechanic in applied therapy - challenge characters' worldviews by pointing out their "cognitive distortions"</li>
                        <li>A gameplay toolkit that grows as the player learns real therapy concepts</li>
                            <li>Strong characters pulled from the history books, with consultation from esteemed historians</li>
                            <li>Winner of Indie X 2024, the German Developer Prize 2024, German Computer Games Prize 2025, Games for Change 2025</li>
                            <li>2025 BAFTA Games Nominee</li>
                        </ul>
                    </div>
                </div>
                <div className="content-container">
                    <h2>Trailer</h2>
                    <div className="video-responsive">
                        <iframe
                            src="https://www.youtube.com/embed/mTMJZMGwoa8" // Replace VIDEO_ID
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            title="Vampire Therapist — press trailer"
                        ></iframe>
                    </div>
                </div>
                <div className="carousel-container">
                    <h2>Images</h2>
                    <Slider {...settings}>
                      <div>
                        <img src="/images/VampireTherapist_1.png" alt="Vampire Therapist screenshot — gothic nightclub scene" />
                      </div>
                      <div>
                        <img src="/images/VampireTherapist_2.png" alt="Vampire Therapist screenshot — character dialogue" />
                      </div>
                      <div>
                        <img src="/images/VampireTherapist_3.png" alt="Vampire Therapist screenshot — therapy session gameplay" />
                      </div>
                      <div>
                        <img src="/images/VampireTherapist_4.png" alt="Vampire Therapist screenshot — cognitive distortion challenge" />
                      </div>
                      <div>
                        <img src="/images/VampireTherapist_5.png" alt="Vampire Therapist screenshot — historical vampire patient" />
                      </div>
                      <div>
                        <img src="/images/VampireTherapist_6.png" alt="Vampire Therapist screenshot — dark comedy narrative moment" />
                      </div>
                      <div>
                        <img src="/images/VampireTherapist_7.png" alt="Vampire Therapist screenshot — character art and dialogue" />
                      </div>
                      <div>
                        <img src="/images/VampireTherapist_8.png" alt="Vampire Therapist screenshot — CBT concepts in gameplay" />
                      </div>
                      <div>
                        <img src="/images/VampireTherapist_9.png" alt="Vampire Therapist screenshot — gothic atmosphere and setting" />
                      </div>
                      <div>
                        <img src="/images/VampireTherapist_10.png" alt="Vampire Therapist screenshot — visual novel narrative scene" />
                      </div>
                    </Slider>

                </div>
                <div className="download-button">
                  <Button variant="contained" color="primary" href="/VampireTherapist_PressImages.zip">
                    DOWNLOAD IMAGES
                  </Button>
                </div>
                <div className="content-container">
                  <h2>Logo</h2>
                  <a href="/images/VTLogoWhite.png" target="_blank" rel="noopener noreferrer">
                  <Image
                    src="/images/VTLogoWhite.png"
                    alt="Vampire Therapist Logo"
                    className="logo-image"
                    width={2838}
                    height={1450}
                    layout="responsive"
                  />
                  </a>
                </div>
                <div className="press-twocolumn">
                    <div className="press-column">
                        <h2>Vampire Therapist Credits</h2>
                        <h3>Writer, Developer, Voice Actor</h3>
                        <p>Cyrus Nemati</p>
                        <h3>Art Director</h3>
                        <p>Ruth Bosch</p>
                        <h3>Character Artist</h3>
                        <p>Sibylle Hell</p>
                        <h3>UI Artist</h3>
                        <p>Kim Schumacher</p>
                        <h3>Background Artist</h3>
                        <p>Barbara Langa</p>
                        <h3>Supporting Character Artist</h3>
                        <p>Darcy Grimm</p>
                        <h3>Consulting Therapist</h3>
                        <p>Sheila Fell</p>
                        <h3>Programming Support</h3>
                        <p>Anton Licht<br />
                        Dan Higgins<br />
                        Hendrik Demmer</p>
			<h3>Editorial Support</h3>
			<p>Chrysantha Rice</p>
                        <h3>Graphic Design and UI Support</h3>
                        <p>Nico Aris</p>
                        <h3>Prototype Concept Artist, UI/UX Consultant</h3>
                        <p>Daehan Stevenson</p>
                        <h3>Funding Support</h3>
                        <p>Medienboard Berlin Brandenburg</p>
                    </div>
                    <div className="press-column">
                        <h2>Contact</h2>
                        <h3>Inquiries</h3>
                        <p><a href="mailto:press@littlebat.games">press@littlebat.games</a></p>
                        <h3>X.com</h3>
                        <p><a href="https://twitter.com/littlebatgames">https://twitter.com/littlebatgames</a></p>
                        <h3>Web</h3>
                        <p><a href="https://littlebat.games">https://littlebat.games</a></p>
                        <h3>LinkedIn</h3>
                        <p><a href="https://www.linkedin.com/company/little-bat-games">https://www.linkedin.com/company/little-bat-games</a></p>
                    </div>
                </div>
            </main>
            <Footer />
            <CookieConsent />
        </>
    );
}
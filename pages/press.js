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
                <title>Vampire Therapist - Press</title>
                <meta name="description" content="Press kit for Vampire Therapist" />
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
                    <h1>Description</h1>
                    <p>INNOVATIVE SINGLE-PLAYER NARRATIVE GAME BUILT AROUND THERAPY<br />
                    A UNIQUE DARK COMEDY GOTHIC SETTING<br />
                    A LEARNING AND SELF-DISCOVERY EXPERIENCE
                    </p>
                    <p><em>Vampire Therapist</em>, the upcoming title from Little Bat Games, redefines the narrative game genre with its innovative 'analyze-'em-up' gameplay. Players step into the shoes of a therapist, whose clientele are vampires from various historical epochs. Set against a backdrop that blends the enigmatic allure of the European goth club scene with the intellectual charm of dark academia, the game delves into the world of mental health with a mix of gentle humor and profound character depth. Developed in collaboration with licensed therapists, it offers an insightful and educational experience, utilizing top-tier voice acting to breathe life into historical figures reimagined through a modern lens. Addressing previously overlooked mental health issues by bringing history into the modern day, Vampire Therapist is a groundbreaking title crafted for a mature audience, set to captivate players when it launches in June 2024.</p>
                    <h1>The World of Vampire Therapist</h1>
                    <p>A strong new intellectual property, <em>Vampire Therapist</em> leverages thousands of years of human history and is able to support characters, locations, and historical epochs that have been unexamined in other media. As the player progresses, they gain access to "cognitive distortions" -- specific classifications of thought patterns that distort reality. By using real-world therapy techniques while merging the mundane and the supernatural, the game world invites players to explore not only history, but their own thought patterns for an experience both cozy and mature.</p>
                </div>

                <div className="press-twocolumn">
                    <div className="press-column">
                        <h2>Factsheet</h2>
                        <p><strong>Developer:</strong><br />
                        Little Bat Games<br />
                        Based in Berlin, Germany</p>
                        <p><strong>Release Date:</strong><br />
                        June 17th, 2024</p>
                        <p><strong>Platforms:</strong><br />
                        Steam</p>
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
                        </ul>
                    </div>
                </div>
                <div className="content-container">
                    <h1>Trailer</h1>
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
                <div className="carousel-container">
                    <h1>Images</h1>
                    <Slider {...settings}>
                      <div>
                        <img src="/images/VampireTherapist_1.png" alt="Image 1" />
                      </div>
                      <div>
                        <img src="/images/VampireTherapist_2.png" alt="Image 2" />
                      </div>
                      <div>
                        <img src="/images/VampireTherapist_3.png" alt="Image 3" />
                      </div>
                      <div>
                        <img src="/images/VampireTherapist_4.png" alt="Image 4" />
                      </div>
                      <div>
                        <img src="/images/VampireTherapist_5.png" alt="Image 5" />
                      </div>
                      <div>
                        <img src="/images/VampireTherapist_6.png" alt="Image 6" />
                      </div>
                      <div>
                        <img src="/images/VampireTherapist_7.png" alt="Image 7" />
                      </div>
                    </Slider>

                </div>
                <div className="download-button">
                  <Button variant="contained" color="primary" href="/VampireTherapist_PressImages.zip">
                    DOWNLOAD IMAGES
                  </Button>
                </div>
                <div className="content-container">
                  <h1>Logo</h1>
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
                        Dan Higgins</p>
                        <h3>Graphic Design and UI Support</h3>
                        <p>Nico Aris</p>
                        <h3>Prototype Concept Artist</h3>
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
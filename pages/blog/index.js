import Head from 'next/head';
import Link from 'next/link';
import Navbar from '@components/Navbar';
import Footer from '@components/Footer';
import { getSortedPostsData } from '../../lib/posts';
import { useState } from 'react';

export default function BlogIndex({ allPostsData }) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);
    try {
      const res = await fetch('/.netlify/functions/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      if (res.ok) {
        setStatus('success');
        setEmail('');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Head>
        <title>Blog — Vampire Therapist | Therapy, Vampires & Game Development</title>
        <meta name="description" content="The official Vampire Therapist blog — news, updates, and deep dives into the therapy concepts, history, and dark comedy behind the BAFTA-nominated game." />
        <link rel="canonical" href="https://vampiretherapist.com/blog" />
        <meta property="og:title" content="Blog — Vampire Therapist" />
        <meta property="og:description" content="News, updates, and deep dives into the therapy concepts, history, and dark comedy behind Vampire Therapist." />
        <meta property="og:image" content="https://vampiretherapist.com/images/VT_LargeCapsule.webp" />
        <meta property="og:url" content="https://vampiretherapist.com/blog" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Navbar />
      <div>
        <h1>Blog</h1>
        <ul>
          {allPostsData.map(({ slug, frontmatter }) => (
            <li key={slug}>
              <Link href={`/blog/${slug}`}>{frontmatter.title}</Link>
              <p>{frontmatter.date}</p>
            </li>
          ))}
        </ul>

        <div className="email-signup-section">
          <form onSubmit={handleSubmit} id="blog-subscribe-form">
            <span>Sign up for Email Updates</span>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
            <button type="submit" disabled={loading}>
              {loading ? 'Subscribing…' : 'Subscribe'}
            </button>
            {status === 'success' && <p>Thanks for subscribing!</p>}
            {status === 'error' && <p>Something went wrong. Please try again.</p>}
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();

  return {
    props: {
      allPostsData,
    },
  };
}

import Head from 'next/head';
import Link from 'next/link';
import Navbar from '@components/Navbar';
import Footer from '@components/Footer';
import { getSortedPostsData } from '../../lib/posts';

export default function BlogIndex({ allPostsData }) {
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

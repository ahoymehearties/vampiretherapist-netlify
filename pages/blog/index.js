import Link from 'next/link';
import { getSortedPostsData } from '../../lib/posts';

export default function BlogIndex({ allPostsData }) {
  return (
    <div>
      <h1>My Blog</h1>
      <ul>
        {allPostsData.map(({ slug, frontmatter }) => (
          <li key={slug}>
            <Link href={`/blog/${slug}`}>{frontmatter.title}</Link>

            <p>{frontmatter.date}</p>
          </li>
        ))}
      </ul>
    </div>
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

import { useRouter } from 'next/router';
import { getPostData, getSortedPostsData } from '../../lib/posts';

export default function Post({ postData }) {
  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <article>
      <h1>{postData.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: postData.content }} />
    </article>
  );
}

export async function getStaticPaths() {
  const paths = getSortedPostsData().map(post => ({
    params: { slug: post.slug },
  }));

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.slug);
  return {
    props: {
      postData,
    },
  };
}
import * as React from 'react';
import { graphql, Link } from 'gatsby';

const PostsPage = ({ data }) => {
  const posts = data.allSanityPost.nodes;

  return (
    <>
      <h1>Posts</h1>
      {posts.map((post) => {
        console.log(post.slug.current);
        return (
          <h2 key={post._id}>
            <Link to={`/post/${post.slug.current}`}>{post.title}</Link>
          </h2>
        );
      })}
    </>
  );
};

export default PostsPage;

export const query = graphql`
  query {
    allSanityPost {
      nodes {
        _id
        title
        slug {
          current
        }
        publishedDate
        author {
          name
        }
      }
    }
  }
`;

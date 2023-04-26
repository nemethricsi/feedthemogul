const path = require('path');

module.exports.createPages = async ({ graphql, actions }: any) => {
  const { createPage } = actions;
  const postTemplate = path.resolve(`./src/templates/post.js`);

  const res = await graphql(`
    query {
      allSanityPost {
        edges {
          node {
            slug {
              current
            }
          }
        }
      }
    }
  `);

  const posts = res.data.allSanityPost.edges;

  posts.forEach((edge: any) => {
    createPage({
      component: postTemplate,
      path: `/post/${edge.node.slug.current}`,
      context: {
        slug: edge.node.slug.current,
      },
    });
  });
};

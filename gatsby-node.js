const path = require(`path`);
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  //Get a template for the page
  // query content for WordPress posts
  const {
    data: {
      allWpPost: { nodes: allPosts },
    },
  } = await graphql(`
    query {
      allWpPost {
        nodes {
          slug
        }
      }
    }
  `);
  const postTemplate = path.resolve(`./src/templates/Post.js`);
  allPosts.forEach((post) => {
    createPage({
      // will be the url for the page
      path: `/blog/${post.slug}`,
      // specify the component template of your choice
      component: postTemplate,
      // In the ^template's GraphQL query, 'id' will be available
      // as a GraphQL variable to query for this post's data.
      context: {
        slug: post.slug,
      },
    });
  });
};

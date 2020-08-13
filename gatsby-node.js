const _ = require("lodash");
const path = require(`path`);

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (_.get(node, "internal.type") === `MarkdownRemark`) {
    // Get the parent node
    const parent = getNode(_.get(node, "parent"));

    createNodeField({
      node,
      name: "collection",
      value: _.get(parent, "sourceInstanceName"),
    });
  }
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(`
    query {
      posts: allMarkdownRemark(filter: {fields: {collection: {eq: "posts"}}}) {
        edges {
          node {
            fields {
              collection
            }
            frontmatter {
              slug
              title
            }
          }
        }
      }
      destinations: allMarkdownRemark(filter: {fields: {collection: {eq: "destinations"}}}) {
        edges {
          node {
            fields {
              collection
            }
            frontmatter {
              slug
              title
            }
          }
        }
      }
    }
  `);
  result.data.posts.edges.forEach(({ node }) => {
    createPage({
      path: `${node.frontmatter.slug}`,
      component: path.resolve("./src/templates/blog-post.js"),
      context: {
        slug: node.frontmatter.slug,
      },
    });
  });
  result.data.destinations.edges.forEach(({ node }) => {
    createPage({
      path: `${node.frontmatter.slug}`,
      component: path.resolve("./src/templates/destinations.js"),
      context: {
        slug: node.frontmatter.slug,
      },
    });
  });
};

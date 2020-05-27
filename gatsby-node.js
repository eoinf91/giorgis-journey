const _ = require("lodash");
const path = require(`path`)

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (_.get(node, "internal.type") === `MarkdownRemark`) {
    // Get the parent node
    const parent = getNode(_.get(node, "parent"));

    createNodeField({
      node,
      name: "collection",
      value: _.get(parent, "sourceInstanceName")
    });
  }
};

// exports.createPages = ({ graphql, actions }) => {
//   const { createPage } = actions
//   return graphql(`
//     {
//       allShopifyProduct {
//         edges {
//           node {
//             handle
//           }
//         }
//       }
//       destinations: allMarkdownRemark(filter: {fields: {collection: {eq: "destinations"}}}) {
//         edges {
//           node {
//             fields {
//               collection
//             }
//             frontmatter {
//               slug
//               title
//             }
//           }
//         }
//       }
//     }
//   `).then(result => {
//     result.data.allShopifyProduct.edges.forEach(({ node }) => {
//       createPage({
//         path: `/product/${node.handle}/`,
//         component: path.resolve(`./src/templates/ProductPage/index.js`),
//         context: {
//           // Data passed to context is available
//           // in page queries as GraphQL variables.
//           handle: node.handle,
//         },
//       })
//     })
//   })
//     .then(result => {
//       result.data.destinations.edges.forEach(({ node }) => {
//         createPage({
//           path: `${node.frontmatter.slug}`,
//           component: path.resolve("./src/Templates/destinations.js"),
//           context: {
//             slug: node.frontmatter.slug,
//           },
//         })
//       })
//     })
// }


exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  // Query for all products in Shopify
  const result = await graphql(`
    query {
      allShopifyProduct {
        edges {
          node {
            handle
          }
        }
      }
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
  `)
  // Iterate over all products and create a new page using a template
  // The product "handle" is generated automatically by Shopify
  result.data.allShopifyProduct.edges.forEach(({ node }) => {
    createPage({
      path: `/shop/product/${node.handle}/`,
      component: path.resolve(`./src/templates/ProductPage/index.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        handle: node.handle,
      },
    })
  })
  result.data.posts.edges.forEach(({ node }) => {
    createPage({
      path: `${node.frontmatter.slug}`,
      component: path.resolve("./src/templates/blog-post.js"),
      context: {
        slug: node.frontmatter.slug,
      },
    })
  })
  result.data.destinations.edges.forEach(({ node }) => {
    createPage({
      path: `${node.frontmatter.slug}`,
      component: path.resolve("./src/templates/destinations.js"),
      context: {
        slug: node.frontmatter.slug,
      },
    })
  })
}
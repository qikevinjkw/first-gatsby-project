exports.createPages = async ({ actions, graphql, reporter }) => {
  const result = await graphql(`
    query {
      allMdx {
        nodes {
          frontmatter {
            slug
            title
            author
          }
          body
        }
      }
    }
  `);

  result.data.allMdx.nodes.forEach(node => {
    const { slug, title, author } = node.frontmatter;
    actions.createPage({
      path: slug,
      component: require.resolve('./src/templates/post.js'),
      context: {
        title,
        author,
        slug,
        body: node.body,
      },
    });
  });
};

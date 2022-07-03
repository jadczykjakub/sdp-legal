const pages = require("./src/config/pages");

function createStaticPage(createPage, page) {
  const { component, context } = page;
  const { slug, pageNumber } = context;
  createPage({
    path: slug === "/" ? slug : `/${slug}/${pageNumber ? pageNumber : ""}`,
    component,
    context,
  });
}

async function createStaticPagesFromConfig(createPage, staticPages) {
  return staticPages.forEach((page) => {
    createStaticPage(createPage, page);
  });
}

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;
  return Promise.all([createStaticPagesFromConfig(createPage, pages)]);
};

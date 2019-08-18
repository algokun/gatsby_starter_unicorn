import React from "react";
import PostItem from "./postItem";
import Layout from "./Layout";
import Helmet from "react-helmet";

export default function PostList({ data }) {
  const { allBlogPost, site } = data;

  return (
    <Layout>
      <Helmet>
        <title>{site.siteMetadata.title}</title>
      </Helmet>

      {allBlogPost.edges.map(({ node }) => {
        return (
          <PostItem
            title={node.title}
            excerpt={node.excerpt}
            key={node.id}
            slug={node.slug}
          />
        );
      })}
    </Layout>
  );
}

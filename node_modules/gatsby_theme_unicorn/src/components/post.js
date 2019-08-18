import React from "react";
import { Styled } from "theme-ui";

import Layout from "../components/Layout";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Footer from "./post-footer";
import Helmet from "react-helmet";

const Post = ({ data }) => {
  const { blogPost, previous, next } = data;
  const { title } = blogPost;
  return (
    <Layout>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <Styled.h1>{title}</Styled.h1>
      <div style={{ marginBottom: "20px" }}>
        <i>Published {blogPost.date}</i>
        <br />
        <i>Reading Time : {blogPost.timeToRead} min(s)</i>
      </div>

      <MDXRenderer>{blogPost.body}</MDXRenderer>

      <i>Tagged with:</i>
      <Footer next={next} previous={previous} />
    </Layout>
  );
};

export default Post;

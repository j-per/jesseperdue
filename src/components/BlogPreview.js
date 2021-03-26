import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import BlogCard from './BlogCard';

const BlogPreview = () => {
  const data = useStaticQuery(graphql`
    query {
      allWpPost(limit: 3) {
        edges {
          node {
            id
            content
            title
          }
        }
      }
    }
  `);
  return (
    <BlogPreviewStyles>
      <h2>Recent Posts</h2>
      <div>
        {data.allWpPost.edges.map((post) => (
          <BlogCard title={post.node.title} />
        ))}
      </div>
    </BlogPreviewStyles>
  );
};

const BlogPreviewStyles = styled.section`
  padding: 50px 0;
  width: 100vw;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  color: black;
  background-color: #fff;
  position: relative;
  h2 {
    margin-bottom: 50px;
  }
  div {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 1rem;
    margin: 0 auto;
  }
`;

export default BlogPreview;

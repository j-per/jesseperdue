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
            excerpt
            slug
            featuredImage {
              node {
                localFile {
                  childImageSharp {
                    fluid {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `);
  return (
    <BlogPreviewStyles>
      <h2 className='blogpreview_heading'>Recent Posts</h2>
      <div>
        {data.allWpPost.edges.map((post) => (
          <BlogCard
            title={post.node.title}
            excerpt={post.node.excerpt}
            featuredImage={post.node.featuredImage.node.localFile}
            slug={post.node.slug}
          />
        ))}
      </div>
    </BlogPreviewStyles>
  );
};

const BlogPreviewStyles = styled.section`
  margin-bottom: 50px;
  a {
    color: white;
  }
  .blogpreview_heading {
    margin-bottom: 50px;
  }
  div {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 1rem;
    justify-content: center;
  }
`;

export default BlogPreview;

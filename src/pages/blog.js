import React from 'react';
import { graphql, Link } from 'gatsby';
import BlogCard from '../components/BlogCard';
import styled from 'styled-components';

const Blog = ({ data }) => {
  console.log(data.allWpPost);
  return (
    <BlogStyles>
      {data.allWpPost.edges.map((post) => (
        <BlogCard
          title={post.node.title}
          excerpt={post.node.excerpt}
          featuredImage={post.node.featuredImage.node.localFile}
          slug={post.node.slug}
          date={post.node.date}
          key={post.node.id}
        />
      ))}
    </BlogStyles>
  );
};

export const query = graphql`
query {
  allWpPost(sort: { fields: date, order: DESC }) {
    edges {
      node {
        id
        title
        excerpt
        slug
        date(formatString: "MMMM DD, YYYY")
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
`;

const BlogStyles = styled.section`
  margin-bottom: 50px;
  a {
    color: white;
  }

 
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 1rem;
    justify-content: center;
`;
export default Blog;

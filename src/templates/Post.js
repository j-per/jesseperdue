import React from 'react';
import { graphql, Link } from 'gatsby';
import styled from 'styled-components';
import { AiOutlineArrowRight } from 'react-icons/ai';

const Post = ({ data: { wpPost } }) => {
  const postMarkup = () => {
    return { __html: `${wpPost.content}` };
  };
  return (
    <PostStyles>
      <div className='poststyles_breadcrumb'>
        <Link to='/'>Home</Link>
        <AiOutlineArrowRight />
        <Link to='/blog'>Blog</Link>
        <AiOutlineArrowRight />
      </div>
      <h1>{wpPost.title}</h1>
      <div className='line' />
      <ContentStyles dangerouslySetInnerHTML={postMarkup()} />
    </PostStyles>
  );
};

export const query = graphql`
  query($slug: String!) {
    wpPost(slug: { eq: $slug }) {
      content
      id
      title
    }
  }
`;

const PostStyles = styled.div`
  a {
    color: var(--blue);
  }
  .poststyles_breadcrumb {
    display: flex;
    align-items: center;
    width: 150px;
    a {
      margin-right: 12px;
    }
    svg {
      margin-right: 12px;
    }
  }
  h1 {
    margin-bottom: 50px;
  }
  .line {
    width: 100%;
    height: 2px;
    margin-bottom: 50px;
    background-color: white;
  }
`;

const ContentStyles = styled.article`
  pre {
    padding: 0.5rem;
    border-radius: 10px;
    width: auto;
    background: rgb(30, 38, 47);
  }
  figure {
    margin: 0;
  }
  img {
    width: 100%;
    border-radius: 10px;
  }
  h2 {
    color: var(--purple);
  }
`;

export default Post;

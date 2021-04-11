import React from 'react';
import { graphql, Link } from 'gatsby';
import styled from 'styled-components';
import { AiOutlineArrowRight } from 'react-icons/ai';

const Post = ({ data: { wpPost } }) => {
  return (
    <PostStyles>
      <div className='poststyles_breadcrumb'>
        <Link to='/'>Home</Link>
        <AiOutlineArrowRight />
        <Link to='/blog'>Blog</Link>
        <AiOutlineArrowRight />
      </div>
      <h1>{wpPost.title}</h1>
      <p className='poststyles_date'>{wpPost.date}</p>
      <div className='line' />
      <ContentStyles dangerouslySetInnerHTML={{__html: wpPost.content}} />
    </PostStyles>
  );
};

export const query = graphql`
  query($slug: String!) {
    wpPost(slug: { eq: $slug }) {
      content
      id
      title
      date(formatString: "MMMM DD, YYYY")
    }
  }
`;

const PostStyles = styled.div`
  margin-bottom: 50px;
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
  .poststyles_date {
    margin: 0 0 50px 0;
    color: var(--gray);
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
    overflow: auto;
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

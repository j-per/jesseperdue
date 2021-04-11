import React from 'react';
import Img from 'gatsby-image';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { BiRightArrowAlt } from 'react-icons/bi';

const BlogCard = ({ title, excerpt, featuredImage, slug, date }) => {
  return (
    <BlogCardStyles>
      <Link to={`blog/${slug}`}>
        <h3 className='blogcard_heading'>{title}</h3>
        <BiRightArrowAlt className='blogcard_readmore' size='2em' />
        <div
          className='blogcard_excerpt'
          dangerouslySetInnerHTML={{ __html: excerpt }}
        />
        <div className='image_wrapper'>
          <Img fluid={featuredImage.childImageSharp.fluid} />
        </div>
        <p>{date}</p>
      </Link>
    </BlogCardStyles>
  );
};

const BlogCardStyles = styled.article`
  border-radius: 10px;
  padding: 1rem;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  &:hover .blogcard_readmore {
    transform: translateX(10px);
    color: var(--green);
  }
  background: rgb(30, 38, 47);
  color: white;
  .blogcard_heading {
    padding: 0;
    margin: 20px 0 0 0;
    font-size: 1.2rem;
  }
  .blogcard_readmore {
    position: absolute;
    top: 0.5rem;
    right: 1rem;
    color: var(--purple);
    transition: 300ms ease-in-out;
  }
  .blogcard_excerpt {
    margin: 0;
  }
  .image_wrapper {
    width: 100%;
    height: 200px;
  }
  .gatsby-image-wrapper {
    border-radius: 10px;
  }
`;

export default BlogCard;

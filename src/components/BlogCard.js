import React from 'react';
import styled from 'styled-components';

const BlogCard = ({ title }) => {
  return (
    <BlogCardStyles>
      <h2>{title}</h2>
    </BlogCardStyles>
  );
};

const BlogCardStyles = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 10px;
`;

export default BlogCard;

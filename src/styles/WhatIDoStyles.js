import styled from 'styled-components';

const WhatIDoStyles = styled.section`
  padding: 50px 0;
  width: 100vw;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  color: black;
  line-height: 1.75rem;
  background-color: #fff;
  position: relative;
  .whatido_about_wrapper {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    place-items: center;
    max-width: 1000px;
    margin: 100px auto 0 auto;
    gap: 50px;
    padding: 1rem;
    @media (max-width: 768px) {
      display: block;
      margin: 25px auto 0 auto;
    }
  }
  .whatido_images_wrapper {
    display: grid;
    grid-template-columns: repeat(6, minmax(auto, 150px));
    place-items: center;
    gap: 1rem;
    padding: 0 1rem;
    margin: 0 auto;
    max-width: 1000px;
    div {
      width: 100%;
      &:hover {
        cursor: pointer;
      }
    }
  }
`;

export default WhatIDoStyles;

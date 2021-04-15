import React, { useEffect, useState } from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled, { keyframes } from 'styled-components';
import gsap from 'gsap';
import CodeIcon from '../assets/svg/CodeIcon';
import Divider from '../assets/svg/Divider';
import ProjectCard from '../components/ProjectCard';
import BlogPreview from '../components/BlogPreview';
import Typer from '../components/Typer';
import text from '../assets/text/text';
import WhatIDoStyles from '../styles/WhatIDoStyles';
import CodeEditorStyles from '../styles/CodeEditorStyles';

const IndexPage = ({ data }) => {
  useEffect(() => {
    gsap.from('.jumbotron_heading2', {
      opacity: 0,
      y: -100,
      duration: 1,
      delay: 0.75,
    });
  }, []);

  const [codeText, setCodeText] = useState('Please click on an image below');

  //These variables are used for the typer component
  const { javascript, react, gatsby, node, jamstack, netlify } = text.typerText;

  return (
    <>
      <HeaderStyles>
        <CodeIcon />
        <h2>
          Hi{' '}
          <span role='img' aria-label='waving' className='headerstyles_waiving'>
            &#128075;
          </span>{' '}
          I'm Jesse, a self taught web developer who loves working with
          JavaScript and React
        </h2>
      </HeaderStyles>
      <WhatIDoStyles>
        <Divider color='#0e141b' />
        <div className='whatido_about_wrapper'>
          <div>
            <h2>What I Do</h2>
            <p>
              Simply put, I love building front end’s. I’ve been teaching myself
              front end development over the past two years and enjoy every
              minute of it. I started out using Codeacademy and migrated over to
              Treehouse. Once I learned the basics, I started building things
              and looking into different technologies as needed. Here is some of
              the tech that I picked up along the way and love:
            </p>
          </div>
          <div>
            <CodeEditorStyles>
              <code>
                <div className='dot1' />
                <div className='dot2' />
                <div className='dot3' />
                <Typer text={codeText} />
              </code>
            </CodeEditorStyles>
          </div>
        </div>
        <div className='whatido_images_wrapper'>
          <div
            onClick={() => setCodeText(javascript)}
            onKeyDown={() => setCodeText(javascript)}
            role='button'
          >
            <Img fluid={data.jsImage.childImageSharp.fluid} />
          </div>
          <div
            onClick={() => setCodeText(react)}
            onKeyDown={() => setCodeText(react)}
            role='button'
          >
            <Img fluid={data.reactImage.childImageSharp.fluid} />
          </div>
          <div
            onClick={() => setCodeText(gatsby)}
            onKeyDown={() => setCodeText(gatsby)}
            role='button'
          >
            <Img fluid={data.gatsbyImage.childImageSharp.fluid} />
          </div>
          <div
            onClick={() => setCodeText(node)}
            onKeyDown={() => setCodeText(node)}
            role='button'
          >
            <Img fluid={data.nodeImage.childImageSharp.fluid} />
          </div>
          <div
            onClick={() => setCodeText(jamstack)}
            onKeyDown={() => setCodeText(jamstack)}
            role='button'
          >
            <Img fluid={data.jamstackImage.childImageSharp.fluid} />
          </div>
          <div
            onClick={() => setCodeText(netlify)}
            onKeyDown={() => setCodeText(netlify)}
            role='button'
          >
            <Img fluid={data.netlifyImage.childImageSharp.fluid} />
          </div>
        </div>
      </WhatIDoStyles>
      <ProjectStyles>
        <h2 className='projects_heading'>Projects</h2>
        <ProjectCard />
      </ProjectStyles>
      {/* <Inspire>
        <div className='inspire_wrapper'>
          <h2>Stuff That Inspires Me</h2>
          <div className='inspire_image_wrapper'>
            <a href='https://syntax.fm'>
              <Img fluid={data.syntaxImage.childImageSharp.fluid} />
            </a>
            <a href='https://wesbos.com/'>
              <Img fluid={data.wesBosImage.childImageSharp.fluid} />
            </a>
            <a href='https://www.learnwithjason.dev/'>
              <Img fluid={data.jasonImage.childImageSharp.fluid} />
            </a>
            <a href='https://www.youtube.com/channel/UCsBjURrPoezykLs9EqgamOA'>
              <Img fluid={data.fireshipImage.childImageSharp.fluid} />
            </a>
            <a href='https://www.indiehackers.com/podcasts'>
              <Img fluid={data.indieHackersImage.childImageSharp.fluid} />
            </a>
            <a href='https://www.youtube.com/user/TechGuyWeb'>
              <Img fluid={data.traversyMediaImage.childImageSharp.fluid} />
            </a>
          </div>
        </div>
      </Inspire> */}
      <BlogPreview />
    </>
  );
};

const HeaderStyles = styled.header`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 50px;
  place-items: center;
  margin-bottom: 75px;
  svg {
    max-width: 100%;
  }
  h2 {
    font-size: 35px;
  }
  @media (max-width: 768px) {
    grid-template-columns: 1fr 2fr;
    gap: 15px;
    h2 {
      font-size: 25px;
    }
  }
`;

const ProjectStyles = styled.section`
  margin: 50px 0;
  position: relative;
  .projects_heading {
    margin-bottom: 50px;
  }
  svg {
    max-width: 300px;
    position: absolute;
    top: 22px;
    right: -50px;
    transform: rotate(20deg);
  }
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(20deg);
  }
`;

const Inspire = styled.section`
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
  .inspire_wrapper {
    margin: 0 auto;
    max-width: 1000px;
    padding: 1rem;
    h2 {
      margin-bottom: 50px;
    }
  }
  .inspire_image_wrapper {
    a {
      transition: 1000ms ease;
      width: 100%;

      &:hover {
        transform: rotate(10deg);
        animation: ${rotate} 500ms infinite alternate-reverse;
      }
    }
    display: grid;
    grid-template-columns: repeat(3, minmax(auto, 200px));
    justify-content: center;
    place-items: center;
    gap: 2rem;
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

export const query = graphql`
  query {
    jsImage: file(relativePath: { eq: "js.png" }) {
      id
      childImageSharp {
        fluid(maxWidth: 150) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    reactImage: file(relativePath: { eq: "react.png" }) {
      id
      childImageSharp {
        fluid(maxWidth: 150) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    gatsbyImage: file(relativePath: { eq: "gatsby.png" }) {
      id
      childImageSharp {
        fluid(maxWidth: 150) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    nodeImage: file(relativePath: { eq: "node.png" }) {
      id
      childImageSharp {
        fluid(maxWidth: 150) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    jamstackImage: file(relativePath: { eq: "jamstack.png" }) {
      id
      childImageSharp {
        fluid(maxWidth: 150) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    netlifyImage: file(relativePath: { eq: "netlify.png" }) {
      id
      childImageSharp {
        fluid(maxWidth: 150) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    fflImage: file(relativePath: { eq: "fantasy_football.png" }) {
      id
      childImageSharp {
        fluid(maxWidth: 150) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    campifyImage: file(relativePath: { eq: "campify.png" }) {
      id
      childImageSharp {
        fluid(maxWidth: 150) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    personalTrainingImage: file(relativePath: { eq: "personal_training.png" }) {
      id
      childImageSharp {
        fluid(maxWidth: 150) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    syntaxImage: file(relativePath: { eq: "syntax.png" }) {
      id
      childImageSharp {
        fluid(maxWidth: 250) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    wesBosImage: file(relativePath: { eq: "wesboslogo.png" }) {
      id
      childImageSharp {
        fluid(maxWidth: 250) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    jasonImage: file(relativePath: { eq: "jason.png" }) {
      id
      childImageSharp {
        fluid(maxWidth: 250) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    fireshipImage: file(relativePath: { eq: "fireship.png" }) {
      id
      childImageSharp {
        fluid(maxWidth: 250) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    indieHackersImage: file(relativePath: { eq: "indie_hackers.png" }) {
      id
      childImageSharp {
        fluid(maxWidth: 250) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    traversyMediaImage: file(relativePath: { eq: "traversy_media.png" }) {
      id
      childImageSharp {
        fluid(maxWidth: 250) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default IndexPage;

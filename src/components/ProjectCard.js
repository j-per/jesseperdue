import React from 'react';
import styled from 'styled-components';
import ffl from '../assets/images/fantasy_football.png';
import campify from '../assets/images/campify.png';
import personalTraining from '../assets/images/personal_training.png';

const ProjectCard = () => {
  return (
    <ProjectCardStyles>
      <div className='card_1'>
        <h2>A Reason to Drink FFL</h2>
        <div className='overlay'>
          <p>
            This was a fun side project I worked on for my fantasy football
            league. It was built with GatsbyJS and styled with Tailwind CSS .
            The content is being pulled from the Contentful CMS using GraphQL.
          </p>
          <button>
            <a
              href='https://areasontodrink.com'
              target='_blank'
              rel='noreferrer'
            >
              Visit Site
            </a>
          </button>
        </div>
      </div>
      <div className='card_2'>
        <h2>Campify</h2>
        <div className='overlay'>
          <p>
            This is a full stack app that I am currently working on. Since my
            family enjoys camping, the app scans booked campsites and sends the
            user a text if a cancellation takes place. I'm building it using
            NodeJS.
          </p>
          <button>
            <a href='https://github.com/j-per' target='_blank' rel='noreferrer'>
              Visit Site
            </a>
          </button>
        </div>
      </div>
      <div className='card_3'>
        <h2>Corey Contreras</h2>
        <div className='overlay'>
          <p>
            I built this site for a personal trainer. It was built using
            WordPress and Elementor.
          </p>
          <button>
            <a href='https://coreycpt.com/' target='_blank' rel='noreferrer'>
              Visit Site
            </a>
          </button>
        </div>
      </div>
    </ProjectCardStyles>
  );
};

const ProjectCardStyles = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  gap: 1rem;
  div {
    border-radius: 10px;
    width: 50%;
    height: 250px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
  h2 {
    transition: 500ms;
  }
  p {
    padding: 0 1rem;
  }
  .overlay {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
    width: 100%;
    opacity: 0;
    transition: 0.5s ease;
    background-color: var(--purple);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    line-height: 2;
  }
  .card_1 {
    position: relative;
    background: linear-gradient(
        90deg,
        rgba(159, 135, 225, 0.8),
        rgba(103, 58, 226, 0.8)
      ),
      url(${ffl}) no-repeat center;
    .overlay {
      background-color: var(--purple);
    }
    &:hover {
      .overlay {
        opacity: 1;
      }
      h2 {
        transform: scale(1.3);
        opacity: 0;
      }
    }
  }
  .card_2 {
    position: relative;
    background: linear-gradient(
        90deg,
        rgba(0, 255, 163, 0.8),
        rgba(20, 161, 240, 0.8)
      ),
      url(${campify}) no-repeat center;
    .overlay {
      background-color: var(--blue);
    }
    &:hover {
      .overlay {
        opacity: 1;
      }
      h2 {
        transform: scale(1.3);
        opacity: 0;
      }
    }
  }
  .card_3 {
    position: relative;
    background: linear-gradient(
        90deg,
        rgba(135, 144, 225, 0.8),
        rgba(226, 58, 58, 0.8)
      ),
      url(${personalTraining}) no-repeat center;
    .overlay {
      background-color: var(--red);
    }
    &:hover {
      .overlay {
        opacity: 1;
      }
      h2 {
        transform: scale(1.3);
        opacity: 0;
      }
    }
  }
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    div {
      width: 100%;
    }
  }
`;

export default ProjectCard;

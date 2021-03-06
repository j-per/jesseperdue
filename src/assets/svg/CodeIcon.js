import React, { useEffect } from 'react';
import gsap from 'gsap';

const CodeIcon = () => {
  useEffect(() => {
    gsap.from('.leftbracket', {
      opacity: 0,
      x: 100,
      duration: 1,
      delay: 0.75,
    });
    gsap.from('.rightbracket', {
      opacity: 0,
      x: -100,
      duration: 1,
      delay: 0.75,
    });
  }, []);

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      data-name='Layer 1'
      viewBox='0 0 481.57 309.93'
    >
      <defs>
        <clipPath id='clip-path'>
          <path fill='none' d='M0.16 0H481.57000000000005V309.93H0.16z'></path>
        </clipPath>
        <linearGradient
          id='linear-gradient'
          x2='481.41'
          y1='8.9'
          y2='8.9'
          gradientUnits='userSpaceOnUse'
        >
          <stop offset='0' stopColor='#00ffa3'></stop>
          <stop offset='0.96' stopColor='#aa91fb'></stop>
        </linearGradient>
      </defs>
      <g clipPath='url(#clip-path)'>
        <path
          fill='#f2f2f2'
          d='M469.78 309.93H12A11.8 11.8 0 01.16 298.17V16.33A8.66 8.66 0 018.8 7.71h464a8.77 8.77 0 018.78 8.77v281.69a11.78 11.78 0 01-11.79 11.76z'
        ></path>
        <path
          fill='#fff'
          d='M455 295.08H28.29C22 295.08 17 290.32 17 284.47V39a8.16 8.16 0 018.41-7.86h432.37a8.29 8.29 0 018.54 8v245.3c0 5.88-5.08 10.64-11.32 10.64z'
        ></path>
        <path
          fill='url(#linear-gradient)'
          d='M481.41 17.8H0v-6A11.83 11.83 0 0111.83 0h457.75a11.83 11.83 0 0111.83 11.8z'
        ></path>
        <path
          fill='#fff'
          d='M21.5 12a3.06 3.06 0 10-3.06-3.05A3.06 3.06 0 0021.5 12zM33.12 12a3.06 3.06 0 10-3.06-3.05A3.06 3.06 0 0033.12 12zM44.73 12a3.06 3.06 0 10-3.06-3.05A3.06 3.06 0 0044.73 12z'
        ></path>
        <path
          fill='#ccc'
          d='M231.51 84.84h-83.45a4.68 4.68 0 110-9.36h83.45a4.68 4.68 0 110 9.36zM335.21 84.84h-83.45a4.68 4.68 0 110-9.36h83.45a4.68 4.68 0 110 9.36zM335.21 102.59H190a4.69 4.69 0 110-9.37h145.21a4.74 4.74 0 013.32 1.37 4.69 4.69 0 01-3.32 8zM231.51 66.85h-83.45a4.68 4.68 0 01-4.68-4.68 4.69 4.69 0 014.68-4.69h83.45a4.63 4.63 0 011.8.36 4.59 4.59 0 012.54 2.53 4.66 4.66 0 010 3.59 4.59 4.59 0 01-2.54 2.53 4.63 4.63 0 01-1.8.36zM277.44 67.1h-23.7a4.69 4.69 0 110-9.37h23.7a4.69 4.69 0 010 9.37zM171.77 102.59h-23.71a4.69 4.69 0 01-3.31-1.38 4.67 4.67 0 010-6.61 4.69 4.69 0 013.31-1.38h23.71a4.62 4.62 0 011.79.36 4.59 4.59 0 012.54 2.53 4.66 4.66 0 010 3.59 4.59 4.59 0 01-2.54 2.53 4.62 4.62 0 01-1.79.36zM231.51 251h-83.45a4.68 4.68 0 110-9.36h83.45a4.62 4.62 0 013.32 1.37 4.69 4.69 0 011.38 3.31 4.54 4.54 0 01-.36 1.79 4.74 4.74 0 01-2.54 2.54 4.81 4.81 0 01-1.8.35zM335.21 251h-83.45a4.68 4.68 0 110-9.36h83.45a4.81 4.81 0 011.8.35 4.9 4.9 0 011.52 1 4.73 4.73 0 011.37 3.31 4.54 4.54 0 01-.36 1.79 4.59 4.59 0 01-1 1.52 4.73 4.73 0 01-1.52 1 4.81 4.81 0 01-1.81.39zM335.21 268.77H190a4.68 4.68 0 110-9.36h145.21a4.62 4.62 0 011.8.35 4.87 4.87 0 011.52 1 4.77 4.77 0 011 1.53 4.54 4.54 0 01.36 1.79 4.69 4.69 0 01-1.38 3.31 4.73 4.73 0 01-1.52 1 4.81 4.81 0 01-1.78.38z'
        ></path>
        <path
          fill='#909090'
          d='M231.51 233h-83.45a4.68 4.68 0 110-9.36h83.45a4.68 4.68 0 110 9.36z'
        ></path>
        <path
          fill='#ccc'
          d='M277.44 233.28h-23.7a4.69 4.69 0 110-9.37h23.7a4.69 4.69 0 010 9.37zM171.77 268.77h-23.71a4.68 4.68 0 110-9.36h23.71a4.6 4.6 0 011.79.35 4.63 4.63 0 012.55 2.54 4.72 4.72 0 01.35 1.79 4.67 4.67 0 01-4.69 4.68z'
        ></path>
        <path
          className='leftbracket'
          fill='#00ffa3'
          d='M209.72 200.75a6.74 6.74 0 01-4.73-1.93l-31.37-30.93a6.42 6.42 0 01-1.44-2.13 6.58 6.58 0 010-5 6.42 6.42 0 011.44-2.13l31.24-30.8a6.91 6.91 0 019.75 9.79l-23.22 23.18a3.85 3.85 0 000 5.45l23.09 23.06a6.6 6.6 0 011.85 3.44 6.73 6.73 0 01-6.61 8z'
        ></path>
        <path
          className='rightbracket'
          fill='#aa91fb'
          d='M259.71 200.75a6.72 6.72 0 01-6.61-8 6.66 6.66 0 011.84-3.44L278 166.22a3.85 3.85 0 000-5.45l-23.21-23.18a6.89 6.89 0 010-9.76 6.94 6.94 0 019.74 0l31.25 30.8a6.74 6.74 0 011.44 2.13 6.58 6.58 0 010 5 6.74 6.74 0 01-1.44 2.13l-31.37 30.93a6.74 6.74 0 01-4.7 1.93z'
        ></path>
      </g>
    </svg>
  );
};

export default CodeIcon;

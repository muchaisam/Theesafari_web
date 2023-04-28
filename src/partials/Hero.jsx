import React, { useState } from 'react';

import { IoIosArrowDropdown } from 'react-icons/io';
import { Link as ScrollLink } from 'react-scroll';
import nbo from '../assets/nbo.webp';

function HeroHome() {

  const heroStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    minHeight: '100vh',
    backgroundImage: `url(${nbo})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    color: '#ffffff',
    textAlign: 'center',
    position: 'relative'
  };

  const headlineStyle = {
    fontSize: '3rem',
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: '1rem'
  };

  const subheadingStyle = {
    fontSize: '1.5rem',
    marginBottom: '2rem'
  };

  const buttonStyle = {
    backgroundColor: '#ffffff',
    color: '#000000',
    padding: '1rem 2rem',
    borderRadius: '4px',
    textDecoration: 'none',
    fontSize: '1.2rem',
    fontWeight: 'bold',
    cursor: 'pointer'
  };

  const arrowIconStyle = {
    position: 'absolute',
    bottom: '2rem',
    animation: 'pulse 2s infinite',
    cursor: 'pointer',
    transition: 'background-color 0.3s'
  };

  const hoverStyle = {
    backgroundColor: '#e45124'
  };

  const [isHovered, setIsHovered] = React.useState(false);

  const pulseAnimation = `
    @keyframes pulse {
      0% {
        transform: scale(1);
        opacity: 1;
      }
      50% {
        transform: scale(1.2);
        opacity: 0.5;
      }
      100% {
        transform: scale(1);
        opacity: 1;
      }
    }
  `;

  return (
    <>
      <style>{pulseAnimation}</style>
      <section style={heroStyle}>
        <h1 style={headlineStyle}>Discover Your Perfect Getaway</h1>
        <h2 style={subheadingStyle}>Discover hidden gems and unique destinations tailored to your taste</h2>
        <button style={buttonStyle}>Get Started</button>
        <ScrollLink to="categories" smooth={true} duration={1000}>
          <IoIosArrowDropdown
            style={{
              ...arrowIconStyle,
              ...(isHovered ? hoverStyle : {})
            }}
            size={48}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          />
        </ScrollLink>
      </section>
    </>
  );
};


export default HeroHome;
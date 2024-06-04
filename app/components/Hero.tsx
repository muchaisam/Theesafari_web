'use client';

import React, { useState } from 'react';
import Image from 'next/image';

const HeroHome: React.FC = () => {

  const [isHovered, setIsHovered] = useState(false);

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
      <div style={{ position: 'relative', width: '100%', height: '100vh' }}>
        <Image
          src="/nbo.webp"
          layout="fill"
          objectFit="cover"
          quality={100}
          alt="Background Image"
        />
        <section style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          minHeight: '100vh',
          color: '#ffffff',
          textAlign: 'center',
          position: 'relative'
        }}>
          <h1 style={{
            fontSize: '3rem',
            fontWeight: 'bold',
            color: '#000000',
            marginBottom: '1rem'
          }}>Discover Your Perfect Getaway</h1>
          <h2 style={{
            fontSize: '1.5rem',
            marginBottom: '2rem'
          }}>Discover hidden gems and unique destinations tailored to your taste</h2>
          <button style={{
            backgroundColor: '#ffffff',
            color: '#000000',
            padding: '1rem 2rem',
            borderRadius: '4px',
            textDecoration: 'none',
            fontSize: '1.2rem',
            fontWeight: 'bold',
            cursor: 'pointer'
          }}>Get Started</button>
        </section>
      </div>
    </>
  );
};

export default HeroHome;
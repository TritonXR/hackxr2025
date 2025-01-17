'use client'

import React from 'react';

const Grain = () => {
  return (
    <>
      <div 
        className="fixed w-[300%] h-[300%] -top-[100%] -left-[100%] opacity-5 pointer-events-none z-[100]"
        style={{
          backgroundImage: "url('https://upload.wikimedia.org/wikipedia/commons/7/76/1k_Dissolve_Noise_Texture.png')",
          animation: 'animateGrain 8s steps(10) infinite'
        }} 
      />
      
      <style jsx global>{`
        @keyframes animateGrain {
          0%, 100% { transform: translate(0, 0) }
          10% { transform: translate(-5%, -10%) }
          20% { transform: translate(-15%, -20%) }
          30% { transform: translate(-5%, -10%) }
          40% { transform: translate(-15%, -20%) }
          50% { transform: translate(-5%, -10%) }
          60% { transform: translate(-15%, -20%) }
          70% { transform: translate(-5%, -10%) }
          80% { transform: translate(-15%, -20%) }
          90% { transform: translate(-5%, -10%) }
          100% { transform: translate(-15%, -20%) }
        }
      `}</style>
    </>
  );
};

export default Grain;
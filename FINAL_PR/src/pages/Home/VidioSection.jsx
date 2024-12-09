import React from 'react';
import { useNavigate } from 'react-router-dom';

const VidioSection = () => {
  const navigate = useNavigate();

  return (
    <div
      className="relative bg-cover bg-center h-screen"
      style={{
        backgroundImage:
          "url('https://agrioxwp.pixydrops.com/wp-content/uploads/2021/10/video-one-bg.jpg')", // Updated image URL
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-white text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Agriculture Matters to the Future of Development
        </h1>
        <div className="flex flex-col md:flex-row gap-4 mt-8">
          <button
            onClick={() => navigate('/about')}
            className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-3 px-6 rounded shadow-lg transition duration-300"
          >
            Discover More
          </button>
          <button
            onClick={() =>
              window.open('https://www.youtube.com/watch?v=Qs6cnQLsGzE', '_blank')
            }
            className="relative group bg-transparent border-2 border-white rounded-full w-16 h-16 flex items-center justify-center hover:bg-white hover:text-black transition duration-300"
          >
            <span className="absolute top-16 text-sm group-hover:text-black">Watch the video</span>
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M10 17l6-5-6-5v10z"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default VidioSection;


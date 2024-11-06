import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function PersonaCharaList({ img, title, sub, areas = [], useMap }) {
  const [hoveredCharacter, setHoveredCharacter] = useState(null);

  const handleMouseEnter = (area) => {
    setHoveredCharacter(area);
  };

  const handleMouseLeave = () => {
    setHoveredCharacter(null);
  };

  return (
    <main className="flex flex-col border-white w-[40rem] items-center justify-center mb-[8rem]">
      <div className="flex flex-col h-[29rem] w-[23rem] bg-white items-center justify-center">
        <div className="relative h-full w-full overflow-hidden">
          <img
            className="object-cover object-center h-full w-full transition-transform duration-700 ease-in-out transform hover:scale-110"
            src={img}
            useMap={`#${useMap}`}
            alt={title}
          />
        </div>
        <map name={useMap}>
          {areas.map((area, index) => (
            <area
              key={index}
              shape={area.shape}
              coords={area.coords}
              href={area.link}
              alt={area.alt}
              onMouseEnter={() => handleMouseEnter(area)}
              onMouseLeave={handleMouseLeave}
            />
          ))}
        </map>
      </div>

      <div className="flex flex-col p-10">
        <div className="flex flex-col items-center px-10">
          <h1 className="font-customFont font-medium text-white text-3xl">{title}</h1>
          <pre className="text-white mt-3 font-normal text-lg break-words w-full max-w-[50rem]">
            {sub}
          </pre>
        </div>
        {hoveredCharacter && (
          <div className="mt-5 p-5 bg-white text-black rounded shadow-lg">
            <h2 className="font-bold text-xl">{hoveredCharacter.alt}</h2>
            <p>{hoveredCharacter.details}</p>
          </div>
        )}
      </div>
    </main>
  );
}

PersonaCharaList.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  sub: PropTypes.string.isRequired,
  areas: PropTypes.arrayOf(
    PropTypes.shape({
      shape: PropTypes.string.isRequired,
      coords: PropTypes.string.isRequired,
      link: PropTypes.string,
      alt: PropTypes.string.isRequired,
      details: PropTypes.string,
    })
  ),
  useMap: PropTypes.string.isRequired,
};

PersonaCharaList.defaultProps = {
  areas: [],
};
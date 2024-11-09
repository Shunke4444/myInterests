import PropTypes from 'prop-types';

export default function PersonaCharaList({ img, title, areas = [], useMap }) {


  return (
    <main className="flex flex-col border-white w-[40rem] items-center justify-center mb-[8rem] text-center">
      <div className="flex flex-col h-[30rem] w-[25rem] bg-white items-center justify-center">
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
            />
          ))}
        </map>
      </div>

      <div className="flex flex-col p-10 text-center">
        <div className="flex flex-col items-center text-center px-10">
          <h1 className="font-customFont font-medium text-black text-center text-3xl mr-[2rem]">{title}</h1>
  
        </div>
      </div>
    </main>
  );
}

PersonaCharaList.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
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
export default function InterestList({ img, title, sub, areas, useMap, openInNewTab }) {
  return (
    <main className="flex flex-col border border-t-0 border-white w-[30rem] md:w-[50rem]">
      <div className="flex flex-col pb-6 md:pb-10 p-6 md:p-10 mt-[3rem] md:mt-[5rem] items-center">
        <img
          className="h-[10rem] md:h-[20rem] w-auto shadow-2xl shadow-cyan-500/50"
          src={img}
          useMap={useMap}
          alt={title}
        />
  
        <map name={useMap}>
          {areas.map((area, index) => (
            <area
              key={index}
              shape={area.shape}
              coords={area.coords}
              href={area.link}
              alt={area.alt}
              target={openInNewTab ? "_blank" : "_self"}
            />
          ))}
        </map>
      </div>

      <div className="flex flex-col p-6 md:p-10">
        <div className="flex flex-col items-center px-6 md:px-10">
          <h1 className="font-customFont font-medium text-white text-2xl md:text-3xl">{title}</h1>
          <pre className="text-white mt-2 temd:mt-3 font-normal text-base md:text-base break-words w-full max-w-[30rem] md:max-w-[50rem]">
            {sub}
          </pre>
        </div>
      </div>
    </main>
  );
}

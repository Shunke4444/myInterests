export default function InterestList({ img, title, sub, areas, useMap, openInNewTab }) {
  return (
    <main className="flex flex-col border border-t-0 border-white w-[50rem]">
      <div className="flex flex-col pb-10 p-10 mt-[5rem] items-center">
        <img
          className="h-[20rem] w-auto shadow-2xl shadow-cyan-500/50"
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

      <div className="flex flex-col p-10">
        <div className="flex flex-col items-center px-10">
          <h1 className="font-customFont font-medium text-white text-3xl">{title}</h1>
          <pre className="text-white mt-3 font-normal text-lg break-words w-full max-w-[50rem]">
            {sub}
          </pre>
        </div>
      </div>
    </main>
  );
}
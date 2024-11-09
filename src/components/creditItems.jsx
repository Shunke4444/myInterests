export default function CreditItems({ alt, sub, img, title, areas, useMap }) {
  return (
    <main className="w-screen h-[15rem] bg-gray-800 text-white flex items-center justify-between px-[8rem] ">
      <img
        className="h-[12rem]   w-[21rem] shadow-2xl shadow-cyan-500/50 rounded-lg"
        src={img}
        useMap={useMap}
      />
      
      <map name={useMap}>
        {areas.map((area, index) => (
          <area
            key={index}
            shape={area.shape}
            coords={area.coords}
            href={area.link}
            target="_blank"
          />
        ))}
      </map>
      
      <div className="flex flex-col text-center w-[40rem] pl-10">
        <h1 className="text-[2rem] font-8bitFont font-medium">
          {title}
        </h1>
        <p className="text-[1rem] font-normal">{sub}</p>
      </div>
    </main>
  );
}

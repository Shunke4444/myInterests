import CreditItems from '../components/creditItems'
import CreditSpaceman from '../assets/credits/1.png'
import SpaceBg from '../assets/credits/bg.png'
import Persona from '../assets/interests/persona3.jpg'
import Fonts from '../assets/credits/fonts.jpg'
export default function Credits() {
  return (
    <main className='h-screen w-screen'>
        <section className='h-[11rem] w-screen flex items-center justify-center flex-col bg-gray-900'>
            <h1 className='text-4xl text-white font-personaFont font-extrabold tracking-wider'>
                SOURCES
            </h1>
            <p className='text-lg text-white font-extralight'>Click the images to go to the source!</p>
        </section>

        <section className='h-screen w-screen bg-gray-800'>
          <CreditItems
            img={CreditSpaceman}
            title='Spaceman'
            sub='This 3d Model is made by "likesenape" on Sketchfab'
            areas={[
              {
                shape: 'rect',
                coords: '4,13,1025,556',
                link: 'https://sketchfab.com/3d-models/spaceman-model-4494aa9be0c84b9dbef590a588b493cf',
                alt: 'Spaceman'
              }
            ]}
            useMap='#spaceman'
          />
          <hr className="w-[80%] border-t-2 border-gray-400 mt-4 mx-auto" />
            <CreditItems
            img={SpaceBg}
            title='Space Theme Background'
            sub='Image is made by "jongcreative" from FREEPIK!'
            areas={[
              {
                shape: 'rect',
                coords: '4,13,1025,556',
                link: 'https://www.freepik.com/premium-vector/landscape-surface-planet-sky_7295923.htm#from_view=detail_alsolike',
              }
            ]}
            useMap='#bg'
          />
          <hr className="w-[80%] border-t-2 border-gray-400 mt-4 mx-auto" />
          <CreditItems
            img={Persona}
            title='Persona 3 Reload'
            sub='The sources for each Persona 3 reload related images and information were taken from Game8'
            areas={[
              {
                shape: 'rect',
                coords: '4,13,1025,556',
                link: 'https://game8.co/games/Persona-3-Reload/archives/435456',
              }
            ]}
            useMap='#persona'
          />
          <hr className="w-[80%] border-t-2 border-gray-400 mt-4 mx-auto" />
          <CreditItems
            img={Fonts}
            title='Fonts'
            sub='Every font used in this project is from Google Fonts which are 
            Orbitron,
            Pixelify Sans,
            EB Garamond,
            Libre Baskerville,
            Poppins'
            areas={[
              {
                shape: 'rect',
                coords: '4,13,1025,556',
                link: 'https://fonts.google.com',
              }
            ]}
            useMap='#fonts'
          />
          
        </section>
    </main>
  )
}

import React from 'react'
import heart from '../assets/white-heart.png'

function Services() {
  return (
    <div className='bg-services bg-cover text-white'>
      <section className='p-10'>
      <h1 className="text-center  heading-color text-[38px] w-full max-w-[700px]  m-auto font-bold  ">
          Leistungen
        </h1>
        <div className="w-full flex justify-center items-center mt-8  max-w-[400px] m-auto">
              <span className="border-t-2 border-white w-[100%] max-w-[100px]"></span>
              <img className=" text-white text-shadow ml-6 mr-6 w-[48px]" src={heart} alt="Herz Icon"/>
              <span className="border-t-2 border-white w-[100%] max-w-[100px]"></span>
              </div>

        <div className='border  rounded-lg bg-[#83552E] w-full max-w-[1000px] m-auto p-4 mt-[69px]'>
          <h2 className='text-3xl text-center  font-bold  mb-8 mt-10 text-white '>Energetik und Feinstoffliche Arbeit</h2>
          <div className='w-full lg:flex'>

    

            <div className='lg:w-[75%] m-auto text-lg'>
                <p className='mb-4 text-center'>Kern meiner Tätigkeit ist die Energetik und feinstoffliche Arbeit. 
                  Hierbei handelt es sich um eine Beratung, 
                  die ganzheitlich auf allen Ebenen wirkt: Körper, Geist, Seele und Emotionen.</p> 

                <p className='mb-4 text-center'>Mein Ziel ist es, Menschen zu unterstützen, sodass ihre Herzen wieder leuchten und
                   dass jeder einzelne genau das tun kann, wofür sein Herz tanzt!</p>

                <p className='mb-4 text-center'>Während meiner Beratung verbinde ich mich mit dir und deiner Seele, sodass wir den größtmöglichen Nutzen
                   aus unserem Treffen ziehen können. Wir legen Ziele fest, die du mit dieser Beratung erreichen möchtest.
                    Durch viele verschiedene Methoden, die uns zur Verfügung stehen, 
                  werde ich durch meine feinstoffliche Arbeit dazu beitragen, dass du diese Ziele erreichst.</p>

                <div className='flex-col mb-10 p-4 xs:justify-around'>
                  <div className='text-center'>
                <h3 className='text-xl  font-bold mb-4 '>Meine Angebote</h3>
                <p className='mb-2 '>❧ Einzelgespräche und Begleitung <br/>zu allen Lebenszielen</p>
                <p className='mb-2'>❧ Energetische Beratung</p>
                <p>❧ Telefonische Beratung</p>
                </div>

                <div className='text-center'>
                <h3 className='text-xl font-bold mt-6 mb-4'>Preise</h3>
                <p className='mb-6'>❧ 70,00 Euro pro Beratung</p>
               <a href="kontakt"> <button className='btn '> Kontakt</button></a>
                </div>
                </div>

                
            </div>

           
          </div>

        </div>

        <div className='border  rounded-lg bg-[#83552E] w-full max-w-[1000px] m-auto p-4 mt-[96px] mb-10'>
          <h2 className='text-3xl  text-center font-bold mb-8 mt-10 text-white '>Familienstellen</h2>

          <div className='w-full lg:flex flex-row-reverse'>

         

            <div className='lg:w-[75%] m-auto text-lg'>
                <p className='mb-4 text-center'>Beim Familienstellen betrachten wir uns die Situation auf Seelenebene.

Es zeigen sich mögliche Blockaden, Verstrickungen und Schicksale, die wir

mit der Aufstellung würdigen und lösen, sodass die Liebe wieder fließen kann.</p> 

                <p className='mb-4 text-center'>Die Aufstellungen sind komplett verdeckt. Das bedeutet, dass das Thema,
welches aufgestellt wird nur mir und demjenigen bekannt ist, der es sich ansehen
möchte. Die teilnehmenden Personen wissen nicht, in welcher Position sie stehen.
Das hat den Vorteil, dass niemand seine eigenen Vorstellungen einbringen kann,
sondern authentisch in seiner Rolle wahrgenommen wird.</p>

                <p className='mb-4 text-center'>Außerdem steht es
jedem Aufsteller nach der Aufstellung und der Klärung des Problems frei, sein Thema
der Gruppe zu erzählen. Das macht es für viele Menschen leichter, in der Gruppe zu
arbeiten.

</p>

                <div className='flex-col xs:flex m-auto p-4 items-center justify-around'>
                

               <div className='mt-4 text-center'>
                <h3 className='text-xl font-bold mb-2'>Preise</h3>
                <p className='mb-2'>25,00 Euro für das Erstgespräch</p>
                <p className='mb-2'>85,00 Euro als Aufsteller</p>
                <p className='mb-4'>15,00 Euro als Stellvertreter</p>
                </div>
               
                <div className='text-center'>
                  <a href="kontakt">
                <button className=' mt-2 btn '> Kontakt</button>
                </a>
                </div>
                
                </div>
               

                
            </div>
            
          </div>
        </div>
       
        </section>
    </div>
  )
}

export default Services
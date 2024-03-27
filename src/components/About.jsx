import React from 'react'
import susann from '../assets/susann.jpg'
import falk from '../assets/falk.jpg'
import heart from '../assets/white-heart.png'

function About() {
  return (
    <div className=''>
      <section className=' bg-about  bg-cover pt-10 text-white'>
        <h1 className="text-center mt-6 heading-color text-[38px] w-full max-w-[700px]  m-auto font-bold  ">
         Über Uns
        </h1>
        <div className="w-full flex justify-center items-center mt-8  max-w-[400px] m-auto">
              <span className="border-t-2 border-white w-[100%] max-w-[100px]"></span>
              <img className=" text-white text-shadow ml-6 mr-6 w-[48px]" src={heart} alt="Herz Icon"/>
              <span className="border-t-2 border-white w-[100%] max-w-[100px]"></span>
              </div>



        <div>
          <div className=' lg:pl-[150px] xl:pl-[350px] xl:pr-[350px] lg:pr-[150px] lg:pt-10 lg:pb-10  p-2 mt-10 mb-10  w-full  m-auto flex-col justify-center items-center'>
            <div className='border  rounded-lg bg-[#83552E]'>
            <div className=' p-10 '>
              <h2 className=' font-bold text-2xl text-center mb-8 text-white'>Hallo, ich bin Susann</h2>
              <img className='w-[240px] m-auto h-[240px] border-4 border-[#EEE3CB] rounded-full ' src={susann} alt="Foto von Susann" />
            </div>
            <div className='w-full lg:max-w-[550px] m-auto text-center text-lg '>

              <p className='lg:w-full xl:max-w-[750px] lg:max-w-[550px] max-w-[450px] text-center m-auto m-4'>
                Im Jahr 2008 hatte ich alles, was ich mir immer wünschte: Ich war und bin sehr glücklich verheiratet, war zum ersten Mal mit meinem ersten gesunden Wunschkind gesegnet und war leider trotzdem unglücklich. Ich fragte mich, wie das sein kann und holte mir Hilfe bei einer Therapeutin. Heute weiß ich, es war der Beginn einer großartigen Reise, die immer noch anhält. Bisher kann ich auf folgende Erlebnisse zurück blicken:
              </p>
              <div className='justify-between w-full  p-10 mb-5'>
                <div className='m-auto text-left'>
                  <p className='font-bold text-xl mb-4 mt-6'>auf feinstofflicher Ebene:</p>

                  <p className='mb-2 flex '> <p className='mr-1'>❧</p> Energetische Aufstellungsleiterin - "Lichterherzen-Schule" Radestock</p>
                  <p className='mb-2 flex'> <p className='mr-1'>❧</p>Energetik und feinstoffliche Arbeit - "Lichtherzen-Schule" <br/> Katharina Radestock</p>
                  <p className='mb-2'> ❧ Ahnenseminare</p>
                  <p className='mb-2'> ❧ Familienstellen</p>
                  <p className='mb-2'> ❧ Frauenkreise - vor allem bei Susan Wilczek</p>
                  <p className='mb-2'> ❧ Rebirthing-Seminar - bei Annett Matuschak</p>
                </div>

                <div className='m-auto mt-8 text-left'>

                  <p className='font-bold text-xl mb-2'>
                    auf weltlicher Ebene:
                  </p>

                  <p className='mb-2'> ❧ sehr glücklich verheiratet</p>
                  <p className='mb-2'> ❧ drei Wunder-Kinder</p>
                  <p className='mb-2'> ❧ Haus und Hof</p>
                  <p className='mb-2 flex'> <p className='mr-1'>❧</p>  Abschluss als Diplom-Betriebswirt (BA), <br/>Fachrichtung Steuerrecht</p>

                </div>
              </div>
              </div>
            </div>


          </div>
        </div>
        <div>
          <div className='lg:pl-[150px] xl:pl-[350px] xl:pr-[350px] lg:pr-[150px] lg:pt-10 lg:pb-10  p-2 pb-10 w-full  m-auto flex-col justify-center items-center'>
            <div className='border lg:rounded-lg rounded-lg bg-[#83552E]'>
            <div className='p-10 '>
          
              <h2 className='font-bold text-2xl text-center mt-4 mb-8 text-white '>Hallo, ich bin Falk</h2>
              
          
              <img className='w-[240px] m-auto h-[240px] border-4 border-[#EEE3CB] rounded-full ' src={falk} alt='Foto von Falk'  />

       
        </div>
        <div className='lg:w-full xl:max-w-[750px] lg:max-w-[550px] max-w-[450px] m-auto text-center text-lg'>
              <p>
                durch meine Frau bin ich auf die feinstoffliche Arbeit aufmerksam geworden.
                Nach vielseitiger Erfahrung mit Familienstellen habe ich Katharina Radestock
                kennengelernt und vertiefte diese Arbeit. Ich konnte mit den Aufstellungen bereits viele alte Verstrickungen lösen, Glaubenssätze erkennen und umprogrammieren und mich immer wieder neu auf meine Ziele ausrichten.
                Schließlich entschied ich mich zu der Ausbildung als Aufstellungsleiter und habe diese Ausbildung nach zwei Jahren abgeschlossen.
                Wenn du jetzt Hilfe brauchst, bin ich gerne für dich da.
              </p>
              <div className='justify-between w-full p-5 mb-5 mt-4'>
                <div className='m-auto text-left'>
              <p className='font-bold text-xl mb-4'>auf feinstofflicher Ebene:</p>
              <p className='mb-2 flex'> <p className='mr-1'>❧</p>  Energetischer Aufstellungsleiter - <br/>"Lichtherzen-Schule" Katharina Radestock</p>
</div>
<div className='text-left mt-8'>
              <p className='font-bold text-xl mb-4 '>
                auf weltlicher Ebene:
                </p>
                <p className='mb-2'> ❧ glücklicher Ehemann</p>
                  <p className='mb-2'> ❧ stolzer Papa von unseren Wunder-Kindern</p>
                  <p className='mb-2'> ❧ selbstständiger Forstwirt</p>
                  </div>
           
        </div>
        </div>
        </div>
        </div>
        </div>
      </section>
    </div>
  )
}

export default About
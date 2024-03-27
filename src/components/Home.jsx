import React from "react";
import { FaClipboardList } from "@react-icons/all-files/fa/FaClipboardList";
import { HiOutlineUserGroup } from "react-icons/hi2";
import { HiPhone } from "react-icons/hi2";
import { HiChatBubbleBottomCenterText } from "react-icons/hi2";
import susann from '../assets/susann.jpg'
import falk from '../assets/falk.jpg'
import heart from '../assets/white-heart.png'



function Home() {
  return (
    <div>
      <header>
       

        <main className="p-[32px] bg  ">
          <h1 className="text-center text-[38px] w-full max-w-[900px] mt-[48px] lg:mt-[128px] m-auto font-bold heading-color  ">
          “ Die Fähigkeit glücklich zu leben, <br/>kommt aus einer Kraft, die der
            Seele innewohnt ”
            <br />
            <span className="">- Mark Aurel</span>
            <div className="w-full flex justify-center items-center mt-8  max-w-[400px] m-auto">
              <span className="border-t-2 border-white w-[100%] max-w-[100px]"></span>
              <img className=" text-white text-shadow ml-6 mr-6 w-[48px]" src={heart} alt="Herz Icon"/>
              <span className="border-t-2 border-white w-[100%] max-w-[100px]"></span>
              </div>
              
           
           
          </h1>

          <div className="text-center m-auto font-bold w-full max-w-[1200px] text-white ">
            <h2 className="text-[38px] mt-[58px] text-[#B09B71]">
              <span>Liebe</span> - das ist unsere Ur-Essenz
            </h2>

            <h3 className="mt-[90px] text-[#750E21] text-center underline text-3xl">
              Aktuelle Termine:
            </h3>
            <div className="lg:text-3xl text-[#750E21] mt-6 mb-10 flex justify-center items-center text-sm">
              
              <p className="w-[75%] flex">
                <p className="mr-10">2024</p>
               Ausbildung in "Energetik und feinstofflicher Arbeit"
              </p>
            </div>
          </div>
        </main>
      </header>
     
      <div className="border-amber-950 border-2"></div>
      <section className=" bg-[#A9907E]">
      <div className="p-10 ">
        <h2 className="m-auto text-center text-4xl font-bold  text-white text-shadow">Leistungen</h2>
        <div className="w-full flex justify-center items-center mt-8  max-w-[400px] m-auto">
              <span className="border-t-2 border-white w-[100%] max-w-[100px]"></span>
              <img className=" text-white text-shadow ml-6 mr-6 w-[48px]" src={heart} alt="Herz Icon"/>
              <span className="border-t-2 border-white w-[100%] max-w-[100px]"></span>
              </div>
            
                
                  <div className="w-full lg:flex mb-8 justify-center items-center  text-white">
              <div className="lg:w-[45%] w-full mt-8 m-auto p-6   rounded-xl">
                  <h2 className="font-bold text-2xl lg:text-3xl mb-4 mt-4 text-center ">Energetik und Feinstoffliche Arbeit</h2>
                  <p className="w-full max-w-[700px] m-auto text-center mb-10 text-lg  lg:text-2xl">Kern meiner Tätigkeit ist die Energetik und feinstoffliche Arbeit. Hierbei handelt es sich um eine Beratung, die ganzheitlich auf allen Ebenen wirkt: 
                      <span className="font-bold" > Körper, Geist, Seele und Emotionen.</span> </p>
                    <h3 className="text-center font-bold text-xl lg:text-3xl mb-4 ">Angebote</h3>
                    <div className="lg:flex mb-8 text-lg justify-center items-center ">
                      <div className="text-center w-full lg:w-1/3 ">
                        <FaClipboardList  className="m-auto lg:w-[28px] w-[22px] lg:h-[28px] h-[22px] mb-2 lg:mb-4"/>
                    <p className="lg:text-xl text-md mb-6">Einzelgespräche und Begleitung zu allen Lebenszielen</p>
                    </div>
                    <div className="text-center w-full lg:w-1/3">
                      <HiOutlineUserGroup className="m-auto lg:w-[28px] w-[22px] lg:h-[28px] h-[22px] mb-2 lg:mb-4"/>
                      <p className="lg:text-xl text-md mb-6">Energetische Beratung</p> 
                      </div> 
                      <div className="text-center w-full lg:w-1/3">
                        <HiPhone className="m-auto lg:w-[28px] w-[22px] lg:h-[28px] h-[22px] mb-2 lg:mb-4"/>
                       <p  className="lg:text-xl text-md mb-6">Telefonische Beratung</p> 
                       </div>
                       </div>
                       <div className="flex-col justify-center items-center mb-4 ">
                        <div className="flex justify-center items-center">
                       <h3 className="lg:text-2xl text-xl font-bold mr-6">Preise:</h3>
                        <p className="lg:text-xl text-md">70,00 Euro pro Beratung</p>
                        </div>
                        <div className="flex items-center justify-center mt-8 mb-4">
                          <a href="leistungen"><button className="btn text-xl text-center">Mehr Lesen</button></a>
                          </div>
                       </div>
                       </div>
                
              <div className="lg:w-[45%] w-full m-auto mt-8  p-6   rounded-xl">
                  <h2 className="font-bold text-2xl lg:text-3xl mb-4 mt-4 text-center ">Familienstellen</h2>
                  <p className="w-full max-w-[550px] text-center m-auto mb-10 text-lg lg:text-2xl">Beim Familienstellen betrachten wir uns die Situation auf Seelenebene.

Es zeigen sich mögliche Blockaden, Verstrickungen und Schicksale, die wir

mit der Aufstellung würdigen und lösen, sodass die Liebe wieder fließen kann. </p>
                   
                       <div className="flex-col justify-center items-center mb-4 ">
                        <div className="flex-col ">
                          <div>
                       <h3 className="lg:text-2xl text-xl font-bold text-center mb-4">Preise:</h3>
                       <p className="lg:text-xl mb-4 text-center">25,00 Euro für das Erstgespräch</p>
                        <p className="lg:text-xl mb-4 text-center">85,00 Euro als Aufsteller</p>
                        <p className="lg:text-xl text-center">15,00 Euro als Stellvertreter</p>
                        </div>
                        </div>
                        
                        <div className="flex justify-center items-center mt-10">
                        <a href="leistungen"><button className="btn w-full text-xl m-auto text-center">Mehr Lesen</button></a>
                        </div>
                       </div>
                                        
                 
              </div>

             

            </div>
        </div>
      </section>
      <div className="border-amber-950 border-2"></div>
      <section className="bg-about bg-cover">
        <div className="p-10">
            <div className="bg-[#83552E] border-2 border-[#EEE3CB] p-10 w-full max-w-[700px] m-auto rounded-lg">
              <div className="flex justify-around mt-10 ">
                <figure>
                  <img className="border-2 border-[#EEE3CB] rounded-full w-[100px] h-[100px] xs:w-[148px] xs:h-[148px]" src={susann} alt="Bild von Susann" />
                  </figure>
                  <figure>
                  <img className="border-2 border-[#EEE3CB] rounded-full w-[100px] h-[100px] xs:w-[148px] xs:h-[148px]" src={falk}  alt="Bild von Falk" />
                  </figure>
              </div>
              <div className="mb-10 text-center text-white">
                  <h3 className="mt-10 text-center text-2xl font-bold">Hallo, wir sind Susann und Falk</h3>
                  <p className="mt-4 text-xl text-center">Durch unsere Arbeit können Wunder geschehen!</p>
                 <a href="kontakt">
                 <button className="btn mt-8 ">Kontakt</button>
                 </a>
              </div>
            </div>
        </div>
      </section>
  
            <div className="border-amber-950 border-2"></div>
            <section className="bg-[#DFD3C3]">
              <div className="p-10">
              <h2 className="m-auto text-center text-3xl font-bold  text-white text-shadow ">Kontakt</h2>
              <div className="w-full flex justify-center items-center mt-8  max-w-[400px] m-auto">
              <span className="border-t-2 border-white w-[100%] max-w-[100px]"></span>
              <img className=" text-white text-shadow ml-6 mr-6 w-[48px]" src={heart} alt="Herz Icon"/>
              <span className="border-t-2 border-white w-[100%] max-w-[100px]"></span>
              </div>
             </div>
            <div className="flex m-auto justify-center items-center">
              <div className="flex justify-center items-center ">
              <HiChatBubbleBottomCenterText className="w-[150px] h-[150px] text-color text-center m-auto mr-10"/>
              <p className="text-2xl text-color w-full max-w-[500px] m-auto text-center">Hast du weitere Fragen?<br/> Dann Kontaktiere uns doch einfach.<br/>
                Wir freuen uns auf dich.
              </p>
              </div>
              
            </div>
            <div className=" text-center items-center">
            <a href="kontakt"><button className="btn w-[250px]  xs:w-[500px] mt-6 mb-6">Kontakt</button> </a>
            </div>        
            </section>
           </div>
          
      
      
     
  
  );
}

export default Home;

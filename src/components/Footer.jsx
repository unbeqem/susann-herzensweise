import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo-herzensweise-ohne-hintergrund-removebg-preview.png'

function Footer() {
  return (
    <div >
    <div className="border-amber-950 border-2"></div>
            <footer className="bg-[#A9907E] p-2 max-[640px]:pt-[14px] ">
              <div className="flex justify-center w-full items-center xs:p-4 lg:p-10">
                <div className="w-1/3 text-center ">
                  <img className="w-full rounded-full max-w-[150px] lg:max-w-[150px] m-auto mb-2 bg-transparent max-[640px]:w-[100px] " src={logo} alt="logo" />
                  <p className="text-white max-[640px]:text-xs">Man sieht nur mit dem Herzen gut</p>
                </div>
                <div className="w-1/3 text-center text-white ">
                  <h3 className="text-lg font-bold mb-2 max-[640px]:text-base">LEISTUNGEN</h3>
                    <p className='mb-2 max-[640px]:text-xs'>Energetik und feinstoffliche Arbeit</p>
                    <p className='mb-2 max-[640px]:text-xs'>Beratung</p>
                    <p className='mb-2 max-[640px]:text-xs'>Familienstellen</p>
                    <p className='mb-2 max-[640px]:text-xs'>Familien- und Ahnenarbeit</p>
                </div>
                <div className="w-1/3 text-center text-white">
                    <h3 className="font-bold text-lg mb-2 max-[640px]:text-base">KONTAKT</h3>
                    <p className='mb-2 max-[640px]:text-xs'>+49 173 9736371</p>
                    <p className='mb-2 max-[640px]:text-xs'>brief@herzensweise.de</p>
                  <a href="kontakt">  <button className="btn !text-lg lg:w-[50%] mt-2">Kontakt</button></a>
                </div>
              </div>
              <div className='text-white flex m-auto justify-center items-center text-center mb-6 max-[640px]:mt-8 '>
               <a href="impressum"><p className='mr-20 max-[640px]:mr-6 text-lg max-[640px]:text-base'>Impressum</p></a>
               <p className='mr-20 max-[640px]:mr-6 text-lg max-[640px]:text-base'>Copyright 2024</p>
               <p className='text-lg max-[640px]:text-base'>Made by Tristan Keick</p>
              </div>
            </footer>
            </div>
  )
}

export default Footer
import React, {useState} from 'react'
import Modal from "@mui/material/Modal";
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import CloseIcon from '@mui/icons-material/Close';
import logo from '../assets/logo-herzensweise.jpg'

function Navbar() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
<>
    <Modal
        className='absolute text-color overflow-auto'
        open={open}
        onClose={handleClose}
        >
            <div className='bg-[#EEE3CB] w-full h-screen'>
            <CloseIcon className='absolute right-[15px] top-[15px] cursor-pointer text-2xl ' onClick={handleClose}/>
                <div className='p-10 '>
                <img
            className="w-[200px] m-auto mt-[120px] rounded-full"
            src={logo}
            alt="logo"
          />

              <ul className="  ">
            <li className="">
              <a href="/">
                <h1 className="hoverAnimation w-full max-w-[200px] m-auto font-bold text-4xl text-center mt-[64px] ">
                  Startseite
                </h1>
              </a>
            </li>
            <li className="">
              <a href="über">
                <h1 className="hoverAnimation w-full max-w-[200px] m-auto font-bold text-4xl text-center mt-[64px] ">
                  Über Uns
                </h1>
              </a>
            </li>
            <li className="">
              <a href="leistungen">
                <h1 className="hoverAnimation w-full max-w-[200px] m-auto font-bold text-4xl text-center mt-[64px] ">
                  Leistungen
                </h1>
              </a>
            </li>
            <li className="">
              <a href="kontakt">
                <h1 className=" font-bold !text-4xl text-center mt-[64px] btn ">
                  Kontakt
                </h1>
              </a>
            </li>
          </ul>
                    
                </div>
            </div>

        </Modal>
        
    <nav className="sticky border-bottom border-2 z-10 top-0 p-4 flex justify-between items-center w-full bg-white text-color ">
          <img
            className="w-[110px] rounded-full"
            src={logo}
            alt="logo"
          />

          <ul className="sm:flex hidden justify-center items-center">
            <li className="mr-9">
              <a href="/">
                <h1 className="sm:text-lg  font-bold text-xl hoverAnimation ">
                  Startseite
                </h1>
              </a>
            </li>
            <li className="mr-9">
              <a href="über">
                <h1 className="sm:text-lg font-bold text-xl hoverAnimation ">
                  Über Uns
                </h1>
              </a>
            </li>
            <li className="mr-9">
              <a href="leistungen">
                <h1 className="sm:text-lg font-bold text-xl hoverAnimation ">
                  Leistungen
                </h1>
              </a>
            </li>
            <li className="mr-9">
              <a href="kontakt">
                <h1 className="sm:text-lg font-bold text-xl hoverAnimation btn ">
                  Kontakt
                </h1>
              </a>
            </li>
          </ul>
          <DensityMediumIcon  className='sm:!hidden flex cursor-pointer' onClick={handleOpen} />
        </nav>
        </>
  )
}

export default Navbar
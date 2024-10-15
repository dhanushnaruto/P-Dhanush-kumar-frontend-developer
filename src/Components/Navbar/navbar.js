import React from 'react'
import logo from '../../assets/logoImg.png'
import { IoReorderTwoOutline } from "react-icons/io5";
import { useState } from 'react';

import Offcanvas from 'react-bootstrap/Offcanvas';
import './navbar.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function Navbar() {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
        <div className='flex justify-between z-3 rounded-full p-3 d-lg-none' style={{backgroundColor:'#0C2B2FB2', position:'sticky', top:'10px', right:'10px',left:'10px'}}>
        <img src={logo} alt='logo'/>
        <IoReorderTwoOutline className='text-slate-100 text-3xl' onClick={handleShow}/>
        <>
            <Offcanvas show={show} onHide={handleClose}  data-bs-theme="dark">
                <Offcanvas.Header closeButton className='bg-black text-white'>
                <Offcanvas.Title>EthAi</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body >
                <ul className='list-none text-white'>
                    <li className='mb-3'>Features</li>
                    <li className='mb-3'>Why Us</li>
                    <li className='mb-3'>Tokenmoies</li>
                    <li className='mb-3'>Roadmap</li>
                </ul>
                </Offcanvas.Body>
                </Offcanvas>
            </>
        </div>
        <div className='d-none d-lg-block'>
            <div className='flex justify-between'>
                <div className='text-white flex'>
                    <img src={logo} alt='logo' className='w-14 h-12'/>
                    <h1 className='text-4xl'>EthAi</h1>
                </div>
                
                <ul className='list-none text-white flex justify-around items-center p-3 rounded-full' style={{backgroundColor:'#0C2B2FB2',width:'35vw'}}>
                    <li className='mr-3'>Features</li>
                    <li className='mr-3'>Why Us</li>
                    <li className='mr-3'>Tokenmoies</li>
                    <li className='mr-3'>Roadmap</li>
                </ul>
                
                <div>
                    <button className='btn text-white mr-6'>Login</button>
                    <button className='rounded-full pt-2 pb-2 pl-4 pr-4 border-2 border-sky-400 shadow-inner shadow-sky-400 shadow-md' style={{backgroundColor:"#CDFCFF"}}>Whitepaper</button>
                </div>
            </div>
        </div>

        
    </div>
    
  )
}

export default Navbar




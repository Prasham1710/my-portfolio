import React , {useState}from 'react';
import {FaBars, FaTimes, FaGithub, FaLinkedin, FaInstagram} from 'react-icons/fa';
import{HiOutlineMail} from 'react-icons/hi'
import Logo from '../assets/logo.png'
import Home from "../components/Home"
import About from "../components/About.jsx"

const Navbar = () => {
    const[nav, setNav] =useState(false)
    const handleClick = () => setNav(!nav)
return (
    <div className = 'fixed w-full h-[80px] flex justify-between items-center px-4 bg-black text-gray-300 '>
        <div>
            <img src ={Logo} alt="Logo Image" style={{width: '50px'}}/>
        </div>
    {/*menu*/}
    <div className=''>
         <button className='px-[20px] text-xl' onClick={<Home/>}>Home</button>
            <button className='px-[20px] text-xl' onClick={<About/>}>About</button>
            <button className='px-[20px] text-xl'>Skills</button>
            <button className='px-[20px] text-xl'>Work</button>
            <a href="/Contact"><button className='px-[20px] text-xl' >Contact</button></a>
    </div>  
    {/*Hamburger*/}
    <div onClick={handleClick}className = 'md:hidden z-10 color-==='>
        {!nav ? <FaBars /> : <FaTimes/>}
    </div>
    {/*Mobile menu*/}
    <div>
        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
            <button className='py-6 text-4xl'>Home</button>
            <button className='py-6 text-4xl'>About</button>
            <button className='py-6 text-4xl'>Skills</button>
            <button className='py-6 text-4xl'>Work</button>
            <button className='py-6 text-4xl'>Contact</button>
        </ul>
    </div>  
    {/*Social icons*/ }
   <div className='flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://www.linkedin.com/in/prasham-jain-03b204223/'
            >Linkedin <FaLinkedin size={30} />
            </a>
          </li>
           <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://github.com/Prasham1710'
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='jainprasham17@gmail.com'
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
           
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#e01340]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://www.instagram.com/_.prashamjain/'
            >
              Instagram <FaInstagram size={30} />
            </a>
          </li>
        </ul>
    </div>

    </div>
)
}

export default Navbar
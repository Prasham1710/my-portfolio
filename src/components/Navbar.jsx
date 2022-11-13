import React , {useState}from 'react';
import {FaBars, FaTimes, FaGithub, FaLinkedin, FaInstagram, FaFacebook} from 'react-icons/fa';
import{HiOutlineMail} from 'react-icons/hi'
import{BsFillPersonLinesFill} from 'react-icons/bs'
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
            <a href="/Contact"><button className='px-[20px] text-xl' >Contract</button></a>
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
            <button className='py-6 text-4xl'>Contract</button>
        </ul>
    </div>  
    {/*Social icons*/ }
   <div className='flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='/'
            >Linkedin <FaLinkedin size={30} />
            </a>
          </li>
           <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='/'
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='/'
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
           <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='/'
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#e01340]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='/'
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
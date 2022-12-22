import React from 'react'

import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Python from '../assets/Python.png';
import C from '../assets/c.png';
import GitHub from '../assets/github.png';
import Tailwind from '../assets/tailwind.png';

const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#0a192f] text-gray-300'>
        {/*Container */}
        <div>
             <p className='text-4xl font-bold inline border-b-4 border-pink-600 '>Skills</p>
              <p className='py-4'>These are the technologies I've worked with</p>
          </div>
       <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img  className='w-20 mx-auto'src={HTML} alt ="HTML icon"/>
                <p>HTML</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img  className='w-20 mx-auto'src={CSS} alt ="HTML icon"/>
                <p>CSS</p>
            </div>
             <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img  className='w-20 mx-auto'src={Tailwind} alt ="HTML icon"/>
                <p>TAILWIND</p>
            </div>
             <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img  className='w-20 mx-auto'src={ReactImg} alt ="HTML icon"/>
                <p>REACT</p>
            </div>
             <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img  className='w-20 mx-auto'src={GitHub} alt ="HTML icon"/>
                <p>Github</p>
            </div>
             <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img  className='w-20 mx-auto'src={Python} alt ="HTML icon"/>
                <p>PYTHON</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img  className='w-20 mx-auto'src={C} alt ="HTML icon"/>
                <p>C++</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img  className='w-20 mx-auto'src={JavaScript} alt ="HTML icon"/>
                <p>Javascript</p>
            </div>
             
        </div>
        </div>
  )
}

export default Skills
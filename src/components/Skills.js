import React from 'react'

import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Python from '../assets/Python.png';
import Cplus from '../assets/Cplusplus.png';
import GitHub from '../assets/github.png';
import Tailwind from '../assets/tailwind.png';
import Nodejs from '../assets/node.png';
import MongoDb from '../assets/mongo.png'
import AWS from '../assets/aws.png'
import Clang from '../assets/clanguage.png'
import Firebase from '../assets/firebase.png'


const Skills = () => {
  return (
    <div id='skills' className='w-full h-screen bg-[#0a192f] text-gray-300'>
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
                <img  className='w-20 mx-auto'src={CSS} alt ="CSS icon"/>
                <p>CSS</p>
            </div>
             <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img  className='w-20 mx-auto'src={Tailwind} alt ="TAILWIND icon"/>
                <p>TAILWIND</p>
            </div>
             <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img  className='w-20 mx-auto'src={ReactImg} alt ="REACT"/>
                <p>REACT</p>
            </div>
             
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img  className='w-20 mx-auto'src={JavaScript} alt ="JAVASCRIPT"/>
                <p>Javascript</p>
            </div>
             <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img  className='w-20 mx-auto'src={Nodejs} alt ="NODEJS"/>
                <p>NODEJS</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img  className='w-20 mx-auto'src={MongoDb} alt ="MONGODB"/>
                <p>Mongodb</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img  className='w-20 mx-auto'src={Firebase} alt ="FIREBASE"/>
                <p>FireBase</p>
            </div>
            
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img  className='w-20 mx-auto'src={Cplus} alt ="C++"/>
                <p>C++</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img  className='w-20 mx-auto'src={Clang} alt ="C"/>
                <p>C</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img  className='w-20 mx-auto'src={GitHub} alt ="GITHUB"/>
                <p>Github</p>
            </div>
             <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img  className='w-20 mx-auto'src={Python} alt ="PYTHON"/>
                <p>PYTHON</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img  className='w-20 mx-auto'src={AWS} alt ="AWS"/>
                <p>AWS</p>
            </div>
            
            
        </div>
        </div>
  )
}

export default Skills
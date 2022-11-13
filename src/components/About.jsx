import React from 'react'
import profile from '../assets/profilephoto.JPG';

const About = () => {
  return (
      <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col items-center  w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4 flex-row'>
           <div>  <img  className='w-[150px] hover:scale-110 duration-500 rounded-'src={profile} alt ="pyhton"/> 
            </div>
             <div className='sm: text-2xl font-bold'>
              <p>Hi. I'm Prasham Jain, Nice to meet you. Please take a look around.</p>
              <p>I am passionate about building excellent software by desinging the front end part of the website that 
              the lives of those around me. I am from Indore Madhya Pradesh  </p>
            </div>
            
          </div>
      </div>
    </div>
  );
};


export default About
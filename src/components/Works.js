import React from 'react'
import certificate from '../assets/pythoncerificate.png';
import neo from'../assets/neo.jpeg';
import clang from'../assets/clang.jpg';

const Works = () => {
  return (
    <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-right w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>
            Work
          </p>
        </div>
        <div>
          <p className='py-6'>My certificates are</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              <img  className='w-[400px] hover:scale-110 duration-500'src={certificate} alt ="pyhton"/>
              <img  className='w-[400px] hover:scale-110 duration-500'src={neo} alt ="neo"/>
              <img  className='w-[400px] hover:scale-110 duration-500'src={clang} alt ="c language"/>
        </div>
      </div>
    </div>
  )
}

export default Works
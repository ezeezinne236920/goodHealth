import React from 'react'
import { Wrapper } from '../home.styled'
import Image from 'next/image'

const HomeIndex = () => {
  return (
    <Wrapper>
      <div className='wrapper w-full m-auto items-center h-[30vh]'>
        <div className='flex items-center'>
          <div className="img-bg min-h-[78vh] ">
            {/* <Image src='/weddings/gownBg.jpg' alt='ball gown' width={100} height={70} /> */} 
          </div>
          <div className='flex items-center flex-col   h-[90%] shadow-lg text-center justify-center mr-auto'>
            <h2 className='text-[30px] text-center w-[90%] items-center m-auto'>
              PLAN YOUR EVENT AND CHOOSE YOUR VENDORS FROM THE COMFORT OF YOUR
              HOME!
            </h2>
            <p className='text-[18px] text-center w-[60%] items-center flex m-auto  '>
              transforming your aspirations into distinguished events that
              captivate, impress, and inspire. Whether orchestrating an intimate
              gathering or a grand celebration, our team of dedicated
              professionals brings creativity, precision, and elegance to every
              endeavor.
            </p>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

export default HomeIndex

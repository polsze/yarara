import React from 'react'
import Image from 'next/image'
import LogoYea from '../../../public/images/yaa.png'

const Logo = () => {
  return (
    <div className='flex items-center justify-center'>
      <Image src={LogoYea} alt="Yarará en acción logo" className='-mt-52 w-[60%] h-[60%]  xl:ml-36 3xl:ml-48 md:ml-2 md:mr-4 
      lg:w-[80%] lg:-mt-8 lg:mr-48  sm:h-[auto] sm:w-[40%] sm:relative'/>
    </div>
  )
}

export default Logo
"use client"
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import Logo from '../components/Logo'
import FB from '../../../public/images/facebook.png'
import IG from '../../../public/images/instagram.png'
import Image from 'next/image';
import Plantas from '../../../public/images/plantas.png'
import Plantas3 from '../../../public/images/plantas2.png'
import { motion } from 'framer-motion';


const CustomLink = ({ href, title, className = '' }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(href)
  }

  return (
    <button href={href} className={`${className} relative group`} onClick={handleClick}>
      {title}
      <span className={`h-[1px] inline-block bg-light absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300
			 ${router.asPath === href ? 'w-full' : 'w-0'}`}>&nbsp;</span>
    </button>
  )
}

const CustomMobileLink = ({ href, title, className = '', toggle }) => {
  const router = useRouter();

  const handleClick = () => {
    toggle();
    router.push(href)
  }

  return (
    <button href={href} className={`${className} relative group text-light my-2`} onClick={handleClick}>
      {title}
      <span className={`h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300
         ${router.asPath === href ? 'w-full' : 'w-0'}`}>&nbsp;</span>
    </button>
  )
}

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);


  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  return (

    <header className="w-full font-medium  lg:px-16 md:px-12 sm:px-8" >
      <button className='flex-col justify-center hidden items-center lg:flex mt-5' onClick={handleClick}>
        <span className={`bg-green-500  block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm  ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
        <span className={`bg-green-500  block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
        <span className={`bg-green-500  block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm  ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
      </button>
      <div className="w-full flex justify-between">

        <div className='w-[30%] sm:hidden'>
          <Image src={Plantas3} alt="" className='' />
        </div>

        <div className='w-[30%] sm:hidden'>
          <Image src={Plantas} alt="" className='' />
        </div>

        <div className="
      absolute flex items-center lg:hidden border-l-4 border-green-900 pl-4 h-12  top-32 right-96 mr-56 
      xl:top-12 xl:right-40 xl:h-12 xl:w-36 2xl:right-56 z-20
      ">
          <motion.a className="mr-2 w-10" whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }}><Image src={FB} alt="Facebook" /></motion.a>
          <motion.a className="ml-2 w-10 " whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }}><Image src={IG} alt="Instagram" /></motion.a>
        </div>
      </div>

      <div className="absolute left-[50%] top-48 translate-x-[-70%] sm:relative sm:top-0 sm:translate-x-[-50%]">
        <Logo />
      </div>



      <div className="
      w-full bg-green-600 relative bottom-10 lg:hidden text-center 
      xl:bottom-14 xl:z-50 2xl:bottom-4
      ">
        <nav className='w-full h-14 flex justify-center items-center xl:text-xs text-white'>
          <CustomLink href='/' title='Inicio' className='mx-4 text-light' />
          <CustomLink href='/sobrenosotros' title='Sobre Nosotros' className='mx-4 text-light' />
          <CustomLink href='/rescates' title='Rescates' className='mx-4 text-light' />
          <CustomLink href='/denuncias' title='Denuncias' className='mx-4 text-light' />
          <CustomLink href='/exposiciones' title='Exposiciones' className='mx-4 text-light' />
          <CustomLink href='/animalesvenenosos' title='Animales venenosos' className='mx-4 text-light' />
        </nav>
      </div>

      {isOpen ? <motion.div initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }} animate={{ scale: 1, opacity: 1 }} className='min-w-[70vw] text-white flex flex-col justify-between z-30 items-center
	   fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg bg-emerald-700 backdrop backdrop-blur-md py-24 sm:text-lg'>
        <nav className='flex items-center flex-col justify-center mb-2'>
          <CustomMobileLink href='/' title='Inicio' className='' toggle={handleClick} />
          <CustomMobileLink href='/sobrenosotros' title='Sobre Nosotros' className='' toggle={handleClick} />
          <CustomMobileLink href='/rescates' title='Rescates' className='' toggle={handleClick} />
          <CustomMobileLink href='/denuncias' title='Denuncias' className='' toggle={handleClick} />
          <CustomMobileLink href='/exposiciones' title='Exposiciones' className='' toggle={handleClick} />
          <CustomMobileLink href='/animalesvenenosos' title='Animales Venenosos' className='' toggle={handleClick} />
        </nav>
        <div className="flex items-center justify-center flex-wrap mt-2">
          <motion.a className="mr-2 w-8" whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }}><Image src={FB} alt="Facebook" /></motion.a>
          <motion.a className="ml-2 w-8" whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }}><Image src={IG} alt="Instagram" /></motion.a>
        </div>

      </motion.div>
        : null}
    </header>

  )
}

export default Header


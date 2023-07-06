"use client"
import React, { useRef, useEffect } from 'react'
import { useInView, useMotionValue, useSpring } from 'framer-motion'
import AnimatedText from '../components/AnimatedText';
import Rescate from '../../../public/images/amado-mulitas.jpg'
import Rescate2 from '../../../public/images/rescate.png'
import Libertad from '../../../public/images/libertad.png'
import Image from 'next/image';
import Layout1 from '../components/Layout1';
import Head from 'next/head';
import TransitionEffect from '../components/TransitionEffect';


const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue])

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0)
      }
    })
  }, [springValue, value])
  return <span ref={ref}></span>
}

const Page = () => {
  return (
    <>
      <Head>
        <title>Yarará en Acción | Rescates</title>
        <meta name='description' content='Rescate y liberación de animales silvestres en zonas urbanas de Posadas'></meta>
      </Head>
      <TransitionEffect />
      <Layout1 className='pt-16 sm:pt-0'>
        <div> <AnimatedText text='¡Del rescate a la libertad!' className='pb-12 xs:py-2 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8' />
        </div>
        <div className='col-span-3 relative h-max  
                  p-8 xl:col-span-4 md:order-1 md:col-span-8 sm:p-2'>
          <div className='col-span-2 flex flex-row items-center justify-center xl:col-span-8 xl:flex-row xl:items-center md:order-3'>
            <div className='flex flex-col justify-center items-center xl:items-center'>
              <span className='inline-block text-7xl text-green-600 font-bold md:text-6xl sm:text-5xl xs:text-4x'><AnimatedNumbers value={160} />+</span>
              <h2 className='font-bold mt-2 text-6xl mb-4 sm:text-3xl xl:text-center md:text-lg'>Rescates y liberaciones</h2>
              <div className=''><Image src={Rescate} className=' rounded-2xl' alt="image" /> </div>
            </div>
          </div>
        </div>

        <div className='flex flex-row justify-between sm:flex-col'>
          
            <div className=''>
              <div className='flex justify-center mt-8'>
              <Image src={Rescate2} alt="Rescate de animales en Posadas, Misiones, Argentina" className='w-24'/>
              
              </div>   
              <h1 className='text-center font-bold my-4 text-4xl'>Al rescate</h1>      
              <div className=''>
              <p className='text-justify'> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
              </p>
            </div> 
            </div>

            <div className='border border-solid mx-16 sm:hidden'></div>


            <div className=''>
            <div className='flex justify-center mt-8'>
              <Image src={Libertad} alt="Rescate de animales en Posadas, Misiones, Argentina" className='w-24'/>
              
              </div> 
              <h1 className='text-center font-bold my-4 text-4xl'>Libertad</h1>
              <div className='text-justify'>
              <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
              </p>
            </div> 
            </div>
          
        </div>
       
      </Layout1>
    </>
  )
}

export default Page

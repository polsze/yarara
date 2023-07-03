"use client"
import React, { useRef, useEffect } from 'react'
import { useInView, useMotionValue, useSpring } from 'framer-motion'
import AnimatedText from '../components/AnimatedText';
import Rescate from '../../../public/images/amado-mulitas.jpg'
import Image from 'next/image';
import Layout1 from '../components/Layout1';
import Head from 'next/head';

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

const page = () => {
  return (
    <>
      <Head>
        <title>Yarará en Acción | Rescates</title>
        <meta name='description' content='Rescate y liberación de animales silvestres en zonas urbanas de Posadas'></meta>
      </Head>
      <Layout1 className='pt-16'>
        <div> <AnimatedText text='¡Del rescate a la libertad!' className='py-12 xs:py-2 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8' />
        </div>
        <div className='flex flex-col item justify-start xl:col-span-4 md:order-2 md:col-span-8'>
          <p>Rescate y liberación de animales silvestres en zonas urbanas de Posadas, Rescate y liberación de animales silvestres en zonas urbanas de Posadas,
          Rescate y liberación de animales silvestres en zonas urbanas de Posadas,Rescate y liberación de animales silvestres en zonas urbanas de Posadas
          Rescate y liberación de animales silvestres en zonas urbanas de Posadas
          Rescate y liberación de animales silvestres en zonas urbanas de Posadas Rescate y liberación de animales silvestres en zonas urbanas de Posadas
          </p>
        </div>
        <div className='col-span-3 relative h-max  
                  p-8 xl:col-span-4 md:order-1 md:col-span-8'>

          <div className='col-span-2 flex flex-row items-center justify-center xl:col-span-8 xl:flex-row xl:items-center md:order-3'>
            <div className='flex flex-col justify-center items-center xl:items-center'>
              <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4x'><AnimatedNumbers value={160} />+</span>
              <h2 className='text-xl font-medium capitalize text-dark/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>Rescates y liberaciones</h2>
              <div className=''><Image src={Rescate} className=' rounded-2xl' /> </div>
            </div>

          </div>
        </div>
      </Layout1>
    </>
  )
}

export default page

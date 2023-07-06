'use client'
import React from 'react'
import TransitionEffect from '../components/TransitionEffect'
import Layout1 from '../components/Layout1'
import AnimatedText from '../components/AnimatedText'
import Head from 'next/head'
import Bg from '../../../public/images/equipo.jpg'
import Image from 'next/image'



const Page = () => {
  return (
    <>
      <Head>
        <title>Yarará en Acción | Sobre Nosotros</title>
        <meta name='description' content='Rescate y liberación de animales silvestres en zonas urbanas de Posadas'></meta>
      </Head>
      <TransitionEffect />
      <main className='flex w-full flex-col items-center justify-center'>
        <div className="fixed inset-0 z-0 pointer-events-none">
          
        </div>
        <Layout1 className='pt-16 sm:pt-0'>
          <AnimatedText text='Conocé a Yarará en Acción' className='pb-12 xs:py-2 lg:!text-7xl sm:!text-6xl xs:!text-4xl' />
          <div className='grid w-full grid-cols-8 gap-16 sm:gap-8 '>
            <div className='col-span-4 flex flex-col item justify-start xl:col-span-4 md:order-2 md:col-span-8'>
              <h2 className='mb-4 text-lg font-bold uppercase text-dark/75 sm:mb-0'>Nosotros</h2>
              <p className='my-4 font-medium'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
              </p>
              <p className='my-4 font-medium'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
              </p>
              <p className='my-4 font-medium'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
              
            </p>
            </div>

            <div className='col-span-4 relative h-max rounded-2xl 
            bg-light p-8 xl:col-span-4 md:order-1 md:col-span-8 sm:p-2'>
             
              <Image src={Bg} alt="Pablo Barrios, Pablo Barrios Developer" className='w-50 h-auto rounded-2xl' priority sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw" />
            </div>
            
          </div>
          
        </Layout1>
      </main>
    </>
  )
}

export default Page
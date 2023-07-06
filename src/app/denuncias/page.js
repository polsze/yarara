"use client"
import React from 'react'
import TransitionEffect from '../components/TransitionEffect'
import Head from 'next/head'
import AnimatedText from '../components/AnimatedText'
import Layout1 from '../components/Layout1'
import Image from 'next/image'
import Policia from '../../../public/images/polmis.png'
import Bomberos from '../../../public/images/bomberos.jpg'
import Ecologia from '../../../public/images/ecologia.jpg'
import Link from 'next/link'
import Amado from '../../../public/images/amado-ave1.jpg'


const Page = () => {
  return (
    <>
     <Head>
        <title>Yarará en Acción | Denuncias</title>
        <meta name='description' content='Rescate y liberación de animales silvestres en zonas urbanas de Posadas'></meta>
      </Head>
      <Layout1 className='pt-4 sm:pt-0'>
      <div> <AnimatedText text='En contra de cualquier delito contra la integridad Animal' className='py-12 xs:py-2 lg:!text-7xl sm:!text-6xl xs:!text-4xl' />
        </div>
    <TransitionEffect />
    <div className='grid w-full grid-cols-8 gap-16 sm:gap-8 ml-52 sm:ml-0'>
            <div className='col-span-4 flex flex-col justify-start xl:col-span-4 md:order-2 md:col-span-8'>
              <h2 className='mb-4 text-lg font-bold uppercase text-dark/75 sm:mb-0'>Haga lo que los animales no pueden, ¡Denuncie!</h2>
              <p className='my-4 font-medium'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
              </p>
              <p className='my-4 font-medium'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
              </p>
              <p className='my-4 font-medium'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
              </p>
            </div>

            <div className='col-span-4 relative h-max rounded-2xl 
            bg-light p-8 xl:col-span-4 md:order-1 md:col-span-8 '>
             
              <Image src={Amado} alt="Pablo Barrios, Pablo Barrios Developer" className='w-[50%] h-[50%] rounded-2xl sm:w-full' priority sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw" />
            </div>
            </div>
        <div className='flex flex-row items-center justify-evenly flex-wrap mt-12 sm:mt-0'>
          <div> 
            <Image src={Ecologia} alt="imagen"/>
            <Link href="https://api.whatsapp.com/send?phone=543765252582" target={"_blank"} className='text-white mr-4 mt-2 mb-4 p-2.5 text-center flex items-center w-40 bg-green-700 text-light
              rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border border-solid border-transparent hover:border-dark sm:ml-0 sm:mt-2 md:p-2 md:px-4 md:text-base'
                >
                  Enviar Mensaje 
                </Link>
          </div>
          <div>
          <Image src={Bomberos} alt="imagen" />
          <Link href="https://api.whatsapp.com/send?phone=543765252582" target={"_blank"} className='text-white mt-2  mb-4  text-center mr-4 p-2.5 flex items-center w-40 bg-green-700 text-light
              rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border border-solid border-transparent hover:border-dark sm:ml-0 sm:mt-2 md:p-2 md:px-4 md:text-base'
                >
                  Enviar Mensaje 
                </Link>
          </div>
          <div>
          <Image src={Policia} alt="imagen"  />
          <Link href="https://api.whatsapp.com/send?phone=543765252582" target={"_blank"} className='text-white mt-2  text-center mr-4 p-2.5 flex items-center w-40 bg-green-700 text-light
              rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border border-solid border-transparent hover:border-dark sm:ml-0 sm:mt-2 md:p-2 md:px-4 md:text-base'
                >
                  Enviar Mensaje 
                </Link>
          </div>
        </div>
        </Layout1>
    </>
  )
}

export default Page
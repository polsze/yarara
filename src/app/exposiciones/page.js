'use client'
import Head from 'next/head'
import React from 'react'
import Layout1 from '../components/Layout1'
import TransitionEffect from '../components/TransitionEffect'
import AnimatedText from '../components/AnimatedText'
import Image from 'next/image'
import Expo1 from '../../../public/images/amado-araña.jpg'
import Expo2 from '../../../public/images/yarara-conference.jpg'
import Expo3 from '../../../public/images/amado-conference2.jpg'


const page = () => {
  return (
    <>
      <Head>
        <title>Yarará en Acción | Exposiciones</title>
        <meta name='description' content='Rescate y liberación de animales silvestres en zonas urbanas de Posadas'></meta>
      </Head>
    <TransitionEffect />
    <Layout1 className='pt-4'>
    <AnimatedText text='Exponemos y enseñamos nuestros conocimientos' className='py-12 xs:py-2 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8' />
    <div className='flex flex-row flex-wrap gap-16 justify-center items-center'>
    <div className="max-w-sm rounded overflow-hidden shadow-xl">
  <Image className="w-full" src={Expo1} alt="Exposiciones de yarara en accion" />
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
    <p className="text-gray-700 text-base">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
    </p>
  </div>
  <div className="px-6 pt-4 pb-2">
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
  </div>
  
</div>
<div className="max-w-sm rounded overflow-hidden shadow-xl">
  <Image className="w-full" src={Expo2} alt="Exposiciones de yarara en accion" />
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
    <p className="text-gray-700 text-base">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
    </p>
  </div>
  <div className="px-6 pt-4 pb-2">
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
  </div>
  
</div>
<div className="max-w-sm rounded overflow-hidden shadow-xl">
  <Image className="w-full" src={Expo3} alt="Exposiciones de yarara en accion" />
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
    <p className="text-gray-700 text-base">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
    </p>
  </div>
  <div className="px-6 pt-4 pb-2">
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
  </div>
  
</div>

</div>
    </Layout1>
    </>
  )
}

export default page
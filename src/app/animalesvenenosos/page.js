'use client'
import Head from 'next/head'
import React, { useRef } from 'react'
import TransitionEffect from '../components/TransitionEffect'
import Layout1 from '../components/Layout1'
import AnimatedText from '../components/AnimatedText'
import Expo1 from '../../../public/images/taturana.png'
import Expo2 from '../../../public/images/araña-banano1.jpg'
import Expo3 from '../../../public/images/araña-rincon.jpg'
import Expo4 from '../../../public/images/escorpion.jpg'
import Expo5 from '../../../public/images/yarara.jpg'
import Expo6 from '../../../public/images/coral-falsa.png'
import Expo7 from '../../../public/images/cascabel.jpg'
import Expo8 from '../../../public/images/coral.jpg'
import Image from 'next/image'
import { motion, useScroll } from "framer-motion"

const page = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll(
    {
      target: ref,
      offset: ["start end", "center start"]
    }
  )


  return (
    <>
      <Head>
        <title>Yarará en Acción | Animales Venenosos
        </title>
        <meta name='description' content='Rescate y liberación de animales silvestres en zonas urbanas de Posadas'></meta>
      </Head>
      <TransitionEffect />
      <Layout1 className='pt-4 sm:pt-0'>
        <AnimatedText text='Conocé las especies autóctonas más peligrosas para prevenir' className='py-12 xs:py-2 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8' />
        <div className='flex flex-row flex-wrap gap-16 justify-center items-center'>
          <motion.div className="max-w-sm rounded overflow-hidden shadow-xl" initial={{ y: 50 }}
      whileInView={{ y: 0 }}
      transition={{ duration: 0.5, type: "spring" }}>
            <Image className="w-full" src={Expo1} alt="Exposiciones de yarara en accion" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Oruga Taturana</div>
              <p className="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
            </div>

          </motion.div>
          <motion.div className="max-w-sm rounded overflow-hidden shadow-xl" initial={{ y: 50 }}
      whileInView={{ y: 0 }}
      transition={{ duration: 0.5, type: "spring" }}>
            <Image className="w-full" src={Expo2} alt="Exposiciones de yarara en accion" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Araña del Banano</div>
              <p className="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
            </div>

          </motion.div>
          <motion.div className="max-w-sm rounded overflow-hidden shadow-xl" initial={{ y: 50 }}
      whileInView={{ y: 0 }}
      transition={{ duration: 0.5, type: "spring" }}>
            <Image className="w-full" src={Expo3} alt="Exposiciones de yarara en accion" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Araña del Rincon</div>
              <p className="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
            </div>

          </motion.div>
          <motion.div className="max-w-sm rounded overflow-hidden shadow-xl" initial={{ y: 50 }}
      whileInView={{ y: 0 }}
      transition={{ duration: 0.5, type: "spring" }}>
            <Image className="w-full" src={Expo4} alt="Exposiciones de yarara en accion" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Alacrán</div>
              <p className="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
            </div>

          </motion.div>
          <motion.div className="max-w-sm rounded overflow-hidden shadow-xl" initial={{ y: 50 }}
      whileInView={{ y: 0 }}
      transition={{ duration: 0.5, type: "spring" }}>
            <Image className="w-full" src={Expo5} alt="Exposiciones de yarara en accion" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Yarará</div>
              <p className="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
            </div>
          </motion.div>

          <motion.div className="max-w-sm rounded overflow-hidden shadow-xl" initial={{ y: 50 }}
      whileInView={{ y: 0 }}
      transition={{ duration: 0.5, type: "spring" }}>
            <Image className="w-full" src={Expo8} alt="Exposiciones de yarara en accion" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Coral</div>
              <p className="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationemm praesentium nihil.
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
            </div>

          </motion.div>

          <motion.div className="max-w-sm rounded overflow-hidden shadow-xl" initial={{ y: 50 }}
      whileInView={{ y: 0 }}
      transition={{ duration: 0.5, type: "spring" }}>
            <Image className="w-full" src={Expo7} alt="Exposiciones de yarara en accion" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Cascabel</div>
              <p className="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
            </div>

          </motion.div>

          <motion.div className="max-w-sm rounded overflow-hidden shadow-xl" initial={{ y: 50 }}
      whileInView={{ y: 0 }}
      transition={{ duration: 0.5, type: "spring" }}>
            <Image className="w-full" src={Expo6} alt="Exposiciones de yarara en accion" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Falsa Coral (NO VENENOSA)</div>
              <p className="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
            </div>

          </motion.div>
        </div>




      </Layout1>
    </>
  )
}

export default page
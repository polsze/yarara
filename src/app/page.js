'use client'
import Image from 'next/image'
import Link from 'next/link'
import Bg from '../../public/images/amado-tucan.png'
import AnimatedText from './components/AnimatedText'
import Layout1 from './components/Layout1'
import TransitionEffect from './components/TransitionEffect'
import { WhatsAppIcon } from './components/Icons'



export default function Home() {
  return (
    <>


      <main className='flex items-center text-dark w-full h-min-screen '>
        <TransitionEffect />

        <Layout1 className='pt-0  md:pt-16 sm:pt-2 lg:py-48'>
          <div className='flex items-center justify-between w-full lg:flex-col'>
            <div className='w-1/2 md:w-full'>
              <Image src={Bg} alt='developer' className='w-full h-auto rounded-md lg:hidden md:inline-block md:w-full md:mt-2' priority sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw" />
            </div>
            <div className='w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center '>
              <AnimatedText text='El momento de actuar y cuidar a nuestra fauna es ahora, ¡contáctenos!' className='ml-4 !text-6xl !text-left xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl' />
              <p className='my-4 ml-4 text-base font-medium md:text-sm sm:text-xs'>
                Somos una Asociación Civil dedicada al rescate de animales silvestres en zonas urbanas y posterior liberación en zonas habitables de la provincia de Misiones.
              </p>
              <div className='flex justify-center items-center flex-wrap py-4 lg:self-center ml-4 text-white '>
                <Link href="https://api.whatsapp.com/send?phone=543765252582" target={"_blank"} className='mr-4 p-2.5 flex items-center w-40 bg-green-700 text-light
              rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border border-solid border-transparent hover:border-dark sm:ml-0 sm:mt-2 md:p-2 md:px-4 md:text-base'
                >
                  xxxxxxxx <WhatsAppIcon className={"w-5 ml-4"} />
                </Link>
                <Link href="https://api.whatsapp.com/send?phone=543765252582" target={"_blank"} className='mr-4 p-2.5 flex items-center w-40 bg-green-700 text-light
              rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border border-solid border-transparent hover:border-dark sm:ml-0 sm:mt-2 md:p-2 md:px-4 md:text-base'
                >
                  xxxxxxxx <WhatsAppIcon className={"w-5 ml-4"} />
                </Link>

                <Link href="https://api.whatsapp.com/send?phone=543765252582" target={"_blank"} className='mr-4 p-2.5 flex items-center w-40 bg-green-700 text-light
              rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border border-solid border-transparent hover:border-dark sm:ml-0 sm:mt-2 md:p-2 md:px-4 md:text-base'
                >
                  xxxxxxxx <WhatsAppIcon className={"w-5 ml-4"} />
                </Link>

              </div>
            </div>
          </div>
        </Layout1 >

      </main>

    </>
  )
}


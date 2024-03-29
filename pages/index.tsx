import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Star from '../components/Star'
import { nanoid } from 'nanoid'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const starArray = new Array(100).fill(<Star />)
  return (
    <>
      <Head>
        <title>100 Rejections</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='grid place-content-center'>
        <div className="flex flex-wrap justify-center pt-12 px-1 md:max-w-xl lg:max-w-3xl">{starArray.map(e => ({...e, key: nanoid()}))}</div>
      </main>
    </>
  )
}

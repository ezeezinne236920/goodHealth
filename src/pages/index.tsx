import Image from 'next/image'
// import Nav
import { Inter } from 'next/font/google'
import Nav from '@/components/home/navbar/navbar'
import HomeIndex from '@/components/home/navbar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
   <Nav/>
   <HomeIndex />
      {/* <> hello world</> */}
    </>
  )
}

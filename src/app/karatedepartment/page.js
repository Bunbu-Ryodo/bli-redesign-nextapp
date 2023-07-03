import Image from 'next/image';
import Navbar from '../components/Navbar/Navbar';
import karateDepartmentHome from './karate_department_home.png';

import { Dosis } from 'next/font/google';
const dosis = Dosis({subsets: ['latin'], weight: ['400']});

export default function KarateDepartment() {
  return (
    <main>
      <div className="flex-row">
        <Navbar></Navbar>
        <section id="karatedepartment">
         <div className="container flex flex-row mx-auto justify-items-start">
            <a href="/" className={dosis.className + " flex flex-col justify-self-auto px-1 text-blitzBlue hover:text-blitzRed"}>Home /</a>
            <a href="#" className={dosis.className + " flex flex-col justify-self-auto px-1 text-blitzRed"}>Karate Department</a>
         </div>
         <div className="container flex flex-row mx-auto items-center">
            <Image src={karateDepartmentHome}/>
         </div>
        </section>
      </div>
    </main>
  )
}

import Image from 'next/image';
import Navbar from '../components/Navbar/Navbar';
import karateDepartmentHome from './karate_department_home.png';
import Shuhari from './shuhari.jpg';
import { dosisSemibold } from '../fonts.js';

export default function KarateDepartment() {
  return (
    <main>
      <div className="flex-row">"
        <Navbar></Navbar>
        <section id="karatedepartment">
         <div className="container flex flex-row mx-auto justify-items-start">
            <a href="/" className={"flex flex-col justify-self-auto px-1 text-blitzBlue hover:text-blitzRed"}>Home /</a>
            <a href="#" className={"flex flex-col justify-self-auto px-1 text-blitzRed"}>Karate Department</a>
         </div>
         <div className="container flex flex-row mx-auto items-center">
            <Image src={karateDepartmentHome} alt="karate department collage"/>
         </div>
         <div className="container flex flex-row max-[720px]:flex-col justify-evenly px-6 mx-auto mt-10 mb-10">
            <div className="flex flex-row justify-end max-[720px]:justify-center w-1/2 max-[720px]:w-full">
               <div>
                  <Image src={Shuhari} alt="shuhari gi"/>
               </div>
            </div>
            <div className="flex flex-row justify-start max-[720px]:justify-center w-1/2 max-[720px]:w-full px-8 pt-8 pb-8">
               <div className="w-9/12">
                  <div className="flex flex-col">
                     <p className="text-2xl max-[720px]:text-lg"><span className={dosisSemibold + ' text-blitzRed'}>
                     If you're training to be a Karateka, having the right Karate suit is essential to your success. </span> 
                     An inferior Karate gi will easily rip and stick to your skin when you get sweaty, 
                     while a quality one will survive considerable pulling and sparring without restricting your movements in the slightest. 
                     Blitz has an impressive collection of great value Karate uniforms for sale.</p>
                     <a href="#" className={dosisSemibold.className + " p-1 px-1 mt-8 text-white bg-blitzRed baseline self-center text-center align-middle w-full h-14 leading-12"}>Shop All Karategi</a>
                  </div>
                  
               </div>
            </div>
         </div>
        </section>
      </div>
    </main>
  )
}

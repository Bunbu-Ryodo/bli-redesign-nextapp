import Image from 'next/image';
import Navbar from '../components/Navbar/Navbar';
import karateDepartmentHome from './karate_department_home.png';
import Shuhari from './shuhari.jpg';
import Funakoshi from './funakoshi.png';
import Tonfa from './tonfa.png';
import Belt from './belt.png';
import BodyArmour from './body_armour.png';
import Hoodie from './hoodie.jpg';

import { bebasNeue, dosisSemibold } from '../fonts.js';

export default function KarateDepartment() {
  return (
    <main>
      <div className="flex-row">"
        <Navbar></Navbar>
        <section id="karatedepartment">
         <div className="container flex flex-row mx-auto justify-start">
            <a href="/" className={"flex flex-col justify-self-auto px-1 text-blitzBlue hover:text-blitzRed"}>Home /</a>
            <a href="#" className={"flex flex-col justify-self-auto px-1 text-blitzRed"}>Karate Department</a>
         </div>
         <div className="container flex flex-row mx-auto items-center">
            <Image src={karateDepartmentHome} alt="karate department collage"/>
         </div>
         <div className="container flex flex-row mx-auto justify-center">
         <a href="#history" className={dosisSemibold.className + " p-1 px-10 text-white bg-blitzRed baseline self-center text-center align-middle w-9/6 max-[970px]:w-full mx-auto mt-8 h-14 leading-12"}>Learn More About Karate</a>
         </div>
         <div className="container flex flex-row max-[970px]:flex-col py-6 mx-auto my-10 w-full">
            <div className="flex flex-row justify-end w-1/2 max-[970px]:justify-center max-[970px]:w-full">
               <div>
                  <Image src={Shuhari} alt="shuhari gi"/>
               </div>
            </div>
            <div className="flex flex-row justify-start max-[970px]:justify-center w-1/2 max-[970px]:w-full px-8 pt-8 pb-8">
               <div className="w-1/2">
                  <div className="flex flex-col">
                     <p className="text-2xl max-[970px]:text-lg"><span className={dosisSemibold + ' text-blitzRed'}>
                     If you're training to be a Karateka, having the right Karate suit is essential to your success. </span> 
                     An inferior Karate gi will easily rip and stick to your skin when you get sweaty, 
                     while a quality one will survive considerable pulling and sparring without restricting your movements in the slightest. 
                     Blitz has an impressive collection of great value Karate uniforms for sale.</p>
                     <a href="/karateuniforms" className={dosisSemibold.className + " p-1 px-1 mt-8 text-white bg-blitzRed baseline self-center text-center align-middle w-full h-14 leading-12"}>Shop All Karategi</a>
                  </div>
                  
               </div>
            </div>
         </div>
         <div className="container flex flex-row max-[970px]:flex-col max-[970px]:content-center w-full mx-auto my-10 flex-wrap">
               <div className="flex flex-col items-center mt-6 w-1/4 max-[970px]:w-1/2">
                  <Image src={Tonfa} alt="Tonfa" height={250} width={250}></Image>
                  <a href="#" className={dosisSemibold.className + " p-1 px-1 text-white bg-blitzRed baseline self-center text-center align-middle w-4/5 max-[970px]:w-full mx-auto mt-8 h-14 leading-12"}>Shop Training Aids</a>
               </div>
               <div className="flex flex-col items-center mt-6 w-1/4 max-[970px]:w-1/2 ">
                  <Image src={Belt} alt="Belt" height={250} width={250}></Image>
                  <a href="#" className={dosisSemibold.className + " p-1 px-1 text-white bg-blitzRed baseline self-center text-center align-middle w-4/5 max-[970px]:w-full mx-auto mt-8 h-14 leading-12"}>Shop Belts</a>
               </div>
               <div className="flex flex-col items-center mt-6 w-1/4 max-[970px]:w-1/2 ">
                  <Image src={BodyArmour} alt="Body Armour" height={250} width={250}></Image>   
                  <a href="#" className={dosisSemibold.className + " p-1 px-1 text-white bg-blitzRed baseline self-center text-center align-middle w-4/5 max-[970px]:w-full mx-auto mt-8 h-14 leading-12"}>Shop Armour</a>
               </div>
               <div className="flex flex-col items-center mt-6 w-1/4 max-[970px]:w-1/2 ">
                  <Image src={Hoodie} alt="Hoodie" height={250} width={250}></Image> 
                  <a href="#" className={dosisSemibold.className + " p-1 px-1 text-white bg-blitzRed baseline self-center text-center align-middle w-4/5 max-[970px]:w-full mx-auto mt-8 h-14 leading-12"}>Shop Merch</a>
               </div>
            </div>
         <div className="container flex flex-row max-[970px]:flex-col-reverse justify-evenly px-10 py-10 mx-auto my-10 bg-blitzLighterYellow">
            <div className="flex flex-row justify-center max-[970px]:hidden w-1/2 px-4 px-y4 mx-2 my-2">
               <div>
                  <Image src={Funakoshi} alt="Funakoshi"/>
               </div>
            </div>
            <div id="history" className="flex flex-row justify-start max-[970px]:justify-center w-1/2 max-[970px]:w-full mx-2 my-2">
               <div className="w-9/12">
                  <div className="flex flex-col">
                     <h1 className={bebasNeue.className + " text-blitzRed text-4xl "}>The History of Karate</h1>
                     <br/>
                     <p className="text-2xl">Originating from the ancient Ryukyu Kingdom and influenced by Chinese kenpō, 
                        Karate is a martial art which was brought to Japan by Ryukyuan migrants in the early 20th century. 
                        Here, it was taught systematically at universities and military bases 
                        - most notably at Okinawa, which became an important US military site after World War II.</p>
                     <br/>
                     <p className="text-2xl">Gichin Funakoshi, the Okinawan master who founded Shotokan Karate-Do and 
                     introduced it to the Japanese mainland, is widely considered to be the father of modern Karate.</p>
                     <br/>
                     <p className="text-2xl">In 1957, a new form of Karate was founded by Masutatsu Oyama. It was named 
                     Kyokushin and is now also known as "full-contact Karate" or "knockdown Karate".</p>
                     <br/>
                     <h1 className={bebasNeue.className + " text-blitzRed text-4xl "}>Karate Practitioners Today</h1>
                     <br/>
                     <p className="text-2xl">According to Web Japan (which is sponsored by the Japanese Ministry of Foreign Affairs), 
                     there are 50 million Karate practitioners around the world today - the World Karate Federation believes 
                     that this number is more likely to lie around 100 million.</p>
                     <br/>
                     <h1 className={bebasNeue.className + " text-2xl"}>Will you be one of them?</h1>
                     <a href="/karateuniforms" className={dosisSemibold.className + " p-1 px-1 mt-8 text-white bg-blitzRed baseline self-center text-center align-middle w-full h-14 leading-12"}>Pick Your Karategi</a>
                  </div>
               </div>
            </div>
         </div>
        </section>
      </div>
    </main>
  )
}

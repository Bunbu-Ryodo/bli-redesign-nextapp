
import Image from 'next/image';
import karateHover from './karate_hover.png';
import judoHover from './judo_hover.png';
import bjjHover from './bjj_hover.png';
import kickboxingHover from './kickboxing_hover.png';

import { Dosis } from 'next/font/google';
const dosis = Dosis({subsets: ['latin'], weight: ['400']});


function DepartmentCards(){
    return (
        <section id="home">
            <div className="container flex flex-row mx-auto justify-items-start">
                <a href="/" className={dosis.className + " flex flex-col justify-self-auto px-1 text-blitzBlue hover:text-blitzRed"}>Home</a>
            </div>
            <div className="container flex flex-col md:flex-row justify-items-evenly px-6 mx-auto mt-10 space-x-2 space-y-0 md:space-y-0">
                <a className="flex flex-col md:w-1/2" href="/karatedepartment">
                    <Image src={karateHover} width={317} height={420} alt="Karate"/>
                </a>
                <div className="flex flex-col md:w-1/2">
                    <Image src={judoHover} width={317} height={420} alt="Judo"/>
                </div>
                <div className="flex flex-col md:w-1/2">
                    <Image src={bjjHover} width={317} height={420} alt="BJJ"/>
                </div>
                <div className="flex flex-col md:w-1/2">
                    <Image src={kickboxingHover} width={317} height={420} alt="Kickboxing"/>
                </div>
            </div>
        </section>
   
    );
}

export default DepartmentCards;

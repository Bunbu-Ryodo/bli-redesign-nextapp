
import Image from 'next/image';
import karate from './karate.png';
import karateHover from './karate_hover.png';
import judo from './judo.png';
import judoHover from './judo_hover.png';
import bjj from './bjj.png';
import bjjHover from './bjj_hover.png';
import kickboxing from './kickboxing.png';
import kickboxingHover from './kickboxing_hover.png';

function DepartmentCards(){
    return (
        <div class="container flex flex-col md:flex-row justify-items-evenly px-6 mx-auto mt-10 space-x-2 space-y-0 md:space-y-0">
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
    );
}

export default DepartmentCards;

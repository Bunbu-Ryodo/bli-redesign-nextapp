import Image from 'next/image';
import diamond from './diamond.jpg';
import { bebasNeue, dosisSemibold } from '../../fonts';

export default function ProductCard(){
    return(
        <div 
         class="flex flex-col px-4 py-4 items-center border border-blitzBlack hover:border-none hover:shadow-xl w-80 h-128">
            <a href="/karatedepartment">
            <div className="flex flex-row justify-center mb-10">
                <Image src={diamond} alt="diamond"></Image>
            </div>
            <h3 className={bebasNeue.className + " text-blitzBlack"}>Blitz Adult Diamond Kata Karategi</h3>
            <h3 className={bebasNeue.className + " text-blitzRed"}>£95.99 - £115.99</h3>
            <h3 className={bebasNeue.className + " text-blitzYellow"}>5/5 <span className="text-blitzBlue">(75 Reviews)</span></h3>
            </a>
        </div>
    )
}
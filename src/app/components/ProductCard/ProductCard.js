import Image from 'next/image';
import diamond from './diamond.jpg';
import { bebasNeue, dosisSemibold } from '../../fonts';

export default function ProductCard({link, image, alt, productDescription, price, rating, reviews}){
    return(
        <div 
         class="flex flex-col px-4 py-4 items-center border border-blitzBlack hover:border-none hover:shadow-xl w-80 h-128 mx-2 my-2">
            <a href={link}>
            <div className="flex flex-row justify-center mb-10">
                <Image src={diamond} alt={alt}></Image>
            </div>
            <h3 className={bebasNeue.className + " text-blitzBlack"}>{productDescription}</h3>
            <h3 className={bebasNeue.className + " text-blitzRed"}>{price}</h3>
            <h3 className={bebasNeue.className + " text-blitzYellow"}>{rating} <span className="text-blitzBlue">{reviews}</span></h3>
            </a>
        </div>
    )
}
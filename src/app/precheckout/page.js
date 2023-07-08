import Navbar from '../components/Navbar/Navbar';
import { bebasNeue, dosisSemibold } from '../fonts';
import Image from 'next/image';
import blitzDojo from './blitzdojo.png';

export default function PreCheckout(){
    return(
        <div className="container mx-auto w-full">
        <Navbar></Navbar>
        <div className="container flex flex-row mx-auto justify-start">
            <a href="/" className={"flex flex-col justify-self-auto px-1 text-blitzBlue hover:text-blitzRed"}>Home /</a>
            <a href="/karatedepartment" className={"flex flex-col justify-self-auto px-1 text-blitzBlue hover:text-blitzRed"}>Karate Department /</a>
            <a href="/karateuniforms" className={"flex flex-col justify-self-auto px-1 text-blitzBlue"}>Karate Uniforms /</a>
            <a href="#" className={"flex flex-col justify-self-auto px-1 text-blitzRed"}>Join Us</a>
        </div>
        <div className="container mt-6">
            <Image src={blitzDojo} alt={"Blitz Dojo"}/>
        </div>
        <div className="container mx-auto flex flex-row w-full">
            <div className="flex flex-col items-end w-1/2 mt-8 px-6 py-6">
                <h1 className={bebasNeue.className + " text-4xl"}>Want to checkout as a Guest?</h1>
                <div className="my-8">(We'll just need your email)</div>
                <a href="/checkout" className={dosisSemibold.className + " p-1 px-1 text-white bg-blitzRed baseline text-center align-middle w-1/2 h-14 leading-12"}>Checkout as a Guest</a>
            </div>
            <div className="flex flex-col items-start w-1/2 mt-8 px-6 py-6">
            <h1 className={bebasNeue.className + " text-4xl text-blitzBlue"}>JOIN BLITZ DOJO
            <br/>DEALS, RECOMMENDATIONS, COMMUNITY</h1>
                <div className="my-8">
                ● Checkout faster<br/>
                ● Get personalized product recommendations,(Courtesy of SempAI)<br/>
                ● Get exclusive member deals and discounts<br/>
                ● Join our fast growing community of martial artists in our message forums and Discord.<br/>
                </div>
                <a href="#" className={dosisSemibold.className + " p-1 px-1 text-white bg-blitzBlue baseline text-center align-middle w-1/2 h-14 leading-12"}>Join Blitz Dojo</a>
            </div>
        </div>
        </div>
    )
}
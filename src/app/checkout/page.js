import Navbar from '../components/Navbar/Navbar';
import { bebasNeue, dosisSemibold } from '../fonts';
import Image from 'next/image';
import smallGi from './small_gi.png';

export default function Checkout(){
    return(
        <div className="container mx-auto w-full h-screen">
            <Navbar></Navbar>
            <div className="container flex flex-row mx-auto justify-start">
            <a href="/" className={"flex flex-col justify-self-auto px-1 text-blitzBlue hover:text-blitzRed"}>Home /</a>
            <a href="/karatedepartment" className={"flex flex-col justify-self-auto px-1 text-blitzBlue hover:text-blitzRed"}>Karate Department /</a>
            <a href="/karateuniforms" className={"flex flex-col justify-self-auto px-1 text-blitzBlue"}>Karate Uniforms /</a>
            <a href="/precheckout" className={"flex flex-col justify-self-auto px-1 text-blitzBlue"}>Join Us /</a>
            <a href="#" className={"flex flex-col justify-self-auto px-1 text-blitzRed"}>Checkout</a>
            </div>
            <div className="container flex flex-col mt-2 w-full">
                <h3 className={bebasNeue.className + " text-2xl text-blitzRed ml-1 mb-2"}>Your Cart</h3>
                <div className="flex flex-row w-full">
                    <div className="flex flex-col items-start w-1/2 px-4 py-4">
                        <a href="#" className={dosisSemibold.className + " p-1 px-1 text-white bg-blitzRed baseline text-center align-middle w-60 h-14 leading-12 hover:bg-blitzLighterRed active:bg-blitzActiveRed"}>Already a Member? Login</a>
                    </div>
                    <div className="flex flex-col items-end w-1/2 px-4 py-4">
                        <a href="#" className={dosisSemibold.className + " p-1 px-1 text-white bg-blitzRed baseline text-center align-middle w-60 h-14 leading-12 hover:bg-blitzLighterRed active:bg-blitzActiveRed"}>Proceed to Payment</a>
                    </div>
                </div>
                <div className="flex flex-row ml-10 mt-10">
                    <Image src={smallGi} alt="Small Gi"></Image>
                    <div className="flex flex-col ml-4">
                        <p className={dosisSemibold.className}>White Karate Gi</p>
                        <p className={dosisSemibold.className}>Color: White</p>
                        <p className={dosisSemibold.className}>Size: 4/170cm</p>
                        <p className={dosisSemibold.className}>£99.99</p>
                    </div>
                </div>
                <div className="flex flex-row mt-4 border-t border-blitzBlack">
                    <p className={dosisSemibold.className + " text-blitzBlue"}>Total: £99.99</p>
                </div>
            </div>
        </div>
    )
}
import Navbar from '../components/Navbar/Navbar';
import { bebasNeue, dosisSemibold } from '../fonts';
import Image from 'next/image';
import Taiji from './taiji.jpg';
import Tori from './tori.jpg';
import Katana from './katana.jpg';
import Shine from './shine.jpg';
import Makiwara from './makiwara.jpg';
import Omedetou from './omedetou.jpg';

export default function EditCommunityProfile(){
    return(
        <div className="container mx-auto h-full w-full">
            <Navbar></Navbar>
            <h3 className={bebasNeue.className + " text-blitzRed text-2xl ml-1 mb-2"}>Edit Community Profile</h3>
            <div className="container flex flex-col items-center w-full">
                <h3 className="text-xl ml-1 mt-5 mb-5">Choose an Avatar</h3>
                <div className="flex flex-row mx-auto justify-evenly space-x-4">
                    <div className="border-4 border-blitzBlack hover:border-blitzBlue">
                        <Image src={Taiji} alt="Taiji"/>
                    </div>
                    <div className="border-4 border-blitzBlack hover:border-blitzBlue">
                        <Image src={Tori} alt="Tori"/>
                    </div>
                    <div className="border-4 border-blitzBlack hover:border-blitzBlue">
                        <Image src={Katana} alt="Katana"/>
                    </div>
                    <div className="border-4 border-blitzBlack hover:border-blitzBlue">   
                        <Image src={Makiwara} alt="Makiwara"/>
                    </div>
                    <div className="border-4 border-blitzBlack hover:border-blitzBlue">
                        <Image src={Shine} alt="Shine"/>
                    </div>
                </div>
            </div>
            <div className="container flex flex-col w-full my-10 items-center">
                <h3 className="text-xl m1-1 mt-5 mb-5">What should we call you?</h3>
                <input placeholder="Call me..." className="flex border border-blitzRed focus:outline-none w-80 h-10 px-2 max-[1440px]:w-60"></input>
            </div>
            <div className="container flex flex-col w-full my-10 items-center">
                <h3 className="text-xl m1-1 mt-5 mb-5">Give us some words of wisdom...</h3>
                <textarea placeholder="What is the sound of one hand clapping in the woods?" rows="10" className="flex border border-blitzRed focus:outline-none w-80 h-40 px-2 resize-none"></textarea>
            </div>
            <div className="container flex flex-col w-full my-10 items-center">
                <h3 className="text-xl m1-1 mt-5 mb-5">Describe your martial arts experience...</h3>
                <textarea placeholder="11th Dan Ameridote" rows="10" className="flex border border-blitzRed focus:outline-none w-80 h-40 px-2 resize-none"></textarea>
            </div>
            <div className="container flex flex-col w-full my-10 items-center">
                <h3 className="text-xl m1-1 mt-5 mb-5">Upload Your Certificate</h3>
                <div className="border-4 border-blitzBlue" >
                    <Image src={Omedetou} alt={"Omedetou"}/>
                </div>
                <a href="#history" className={dosisSemibold.className + " p-1 px-10 text-white bg-blitzRed baseline self-center text-center align-middle w-9/6 max-[970px]:w-full mx-auto mt-8 h-14 leading-12"}>Save Changes</a>
            </div>
        </div>
    )
}
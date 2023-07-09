"use client";

import Navbar from '../components/Navbar/Navbar';
import { bebasNeue, dosisSemibold } from '../fonts';
import Image from 'next/image';
import Taiji from './taiji.jpg';
import Tori from './tori.jpg';
import Katana from './katana.jpg';
import Shine from './shine.jpg';
import Makiwara from './makiwara.jpg';
import Omedetou from './omedetou.jpg';
import { useSelector } from 'react-redux';

export default function YourProfile(){
    const taiji = useSelector((state) => state.profileReducer.value.taiji);
    const tori = useSelector((state) => state.profileReducer.value.tori);
    const katana = useSelector((state) => state.profileReducer.value.katana);
    const makiwara = useSelector((state) => state.profileReducer.value.makiwara);
    const shine = useSelector((state) => state.profileReducer.value.shine);
    const name = useSelector((state) => state.profileReducer.value.name);
    const wisdom = useSelector((state) => state.profileReducer.value.wisdom);
    const experience = useSelector((state) => state.profileReducer.value.experience);
    
    console.log(taiji, "TAIJI");

    return (
        <div className="container mx-auto h-full w-full bg-blitzLighterYellow pb-10">
            <Navbar></Navbar>
            <h3 className={bebasNeue.className + " text-blitzRed text-4xl ml-1 mb-2"}>{name ? name : "Unknown" }</h3>
            <div className="container flex flex-row w-full">
                <div className="flex flex-row w-1/2 justify-end">
                    <div className="border-4 border-blitzRed">
                        <Image src={taiji ? Taiji : tori ? Tori : katana ? Katana : shine ? Shine : Makiwara ? makiwara : ''} alt="profileImage"></Image>
                    </div>
                </div>
                <div className="flex flex-row w-1/2 justify-start items-center px-2">
                    <div className="flex flex-col items-start">
                        <span className="text-4xl text-blitzRed">{wisdom ? wisdom : "I have nothing to say to you" }</span> - Angry Samurai, 2023
                        <span className="text-2xl mt-4 w-1/2"><span className="text-blitzRed">Rank: </span>{experience ? experience : "I am not a belt"}</span>
                        <button className={dosisSemibold.className + " p-4 mt-2 bg-blitzRed text-white hover:bg-blitzLighterRed active:bg-blitzActiveRed text-xl"}>Message Me</button>
                    </div>
                </div>
            </div>
            <div className="flex flex-row justify-start mt-10">
                <div className="flex flex-row w-1/2 justify-end">
                    <h3 className={bebasNeue.className + " text-2xl text-blitzRed"}>{ name ? name + "'s Certifications" : "Unknown's Certifications"}</h3>
                </div>
                <div className="flex flex-col px-2">
                    <div className="border-4 border-blitzRed">
                        <Image src={Omedetou} width="250" height="210" alt="Omedetou"></Image>
                    </div>
                </div>
            </div>
            <div className="flex flex-row justify-start mt-10">
                <div className="flex flex-row w-1/2 justify-end">
                    <h3 className={bebasNeue.className + " text-2xl text-blitzRed"}>{ name ? name + "'s Recent Posts & Comments" : "Unknown's Posts & Comments"}</h3>
                </div>
                <div className="flex flex-col px-2">
                    <span className="text-lg w-full"><span className="text-blitzRed">Started thread</span>: What are the best martial arts schools nearby?</span>
                    <span className="text-lg w-full"><span className="text-blitzRed">Commented</span>: Yes, it's a great workout! </span>
                    <span className="text-lg w-full"><span className="text-blitzRed">Commented</span>: The only reason my martial art doesn't work in MMA is because the rules are too strict... </span>
                    <span className="text-lg w-full"><span className="text-blitzRed">Commented</span>: Taekwondo? More like Safe Space Karate Lmao. </span>
                    <span className="text-lg w-full"><span className="text-blitzRed">Commented</span>: There's really no need to get salty lol.</span>
                </div>
            </div>
            <div className="flex flex-row justify-start mt-10">
                <div className="flex flex-row w-1/2 justify-end">
                    <h3 className={bebasNeue.className + " text-2xl text-blitzRed"}>{ name ? name + "'s Friends" : "Unknown's Friends"}</h3>
                </div>
                <div className="flex flex-col px-2">
                    <span className="text-lg blitzRed">Master Ken <span className="text-blitzBlue">(Online)</span></span>
                    <span className="text-lg blitzRed">Jesse Enkamp <span className="text-blitzBlack">(Last Online 1 month ago)</span></span>
                    <span className="text-lg blitzRed">Sensei Seth <span className="text-blitzBlack">(Last Online 1 week ago)</span></span>
                    <span className="text-lg blitzRed">Ramsey Dewey <span className="text-blitzBlue">(Online)</span></span>
                </div>
            </div>
            <div className="flex flex-row justify-center">
                <button className={dosisSemibold.className + " p-4 mt-2 bg-blitzRed text-white hover:bg-blitzLighterRed active:bg-blitzActiveRed text-xl"}><a href="/editcommunityprofile">Edit Your Profile</a></button>
            </div>
        </div>
    )
} 
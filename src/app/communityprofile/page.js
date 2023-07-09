"use client";

import Navbar from '../components/Navbar/Navbar';
import ProductCard from '../components/ProductCard/ProductCard';
import { bebasNeue, dosisSemibold } from '../fonts';
import Image from 'next/image';
import Taiji from './taiji.jpg';
import Tori from './tori.jpg';
import Katana from './katana.jpg';
import Shine from './shine.jpg';
import Makiwara from './makiwara.jpg';
import Omedetou from './omedetou.jpg';
import Diamond from './diamond.jpg';
import Kokoro from './kokoro.jpg';
import Zanshin from './zanshin.jpg';
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
        <div className="container mx-auto h-full w-full pb-10">
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
                    <span className="text-lg cursor-pointer text-blitzRed hover:text-blitzBlue">Master Ken (Online)</span>
                    <span className="text-lg text-blitzBlack">Jesse Enkamp (Last Online 1 month ago)</span>
                    <span className="text-lg text-blitzBlack">Sensei Set (Last Online 1 week ago)</span>
                    <span className="text-lg cursor-pointer text-blitzRed hover:text-blitzBlue">Ramsey Dewey (Online)</span>
                </div>
            </div>
            <div className="flex flex-row justify-start mt-10">
                <div className="flex flex-row w-1/2 justify-end">
                    <div className="flex flex-col items-end">
                        <h3 className={bebasNeue.className + " text-2xl text-blitzBlue"}>Product Recommendations Based on Your Experience and Activity</h3>
                        <span>(Only visible to you)</span>
                    </div>
                </div>
                <div className="flex flex-col px-2">
                </div>
            </div>
            <div className="container flex flex-row mt-2 justify-center max-[970px]:flex-col max-[970px]:items-center">
                <ProductCard 
                link="/diamondkata"
                image={Diamond} 
                alt="Diamond"
                productDescription="Blitz Diamond Kata Karate Gi" 
                price="£95.99-£115.99" 
                rating="5/5" 
                reviews="(75 Reviews)"
                />
                <ProductCard 
                link="/kokoro"
                image={Kokoro} 
                alt="Kokoro"
                productDescription="Blitz Kokoro Karate Gi - 10 oz" 
                price="£71.99 - £91.99" 
                rating="4/5" 
                reviews="(1 Reviews)"
                />
                <ProductCard 
                link="/zanshin"
                image={Zanshin} 
                alt="Zanshin"
                productDescription="Blitz Zanshin Karate Gi - 12 oz" 
                price="£83.99 - £103.99" 
                rating="5/5" 
                reviews="(13 Reviews)"
                />
            </div>
            <div className="flex flex-row justify-center">
                <button className={dosisSemibold.className + " p-4 mt-2 bg-blitzRed text-white hover:bg-blitzLighterRed active:bg-blitzActiveRed text-xl"}><a href="/editcommunityprofile">Edit Your Profile</a></button>
            </div>
        </div>
    )
} 
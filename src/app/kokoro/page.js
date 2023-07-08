"use client";

import Navbar from '../components/Navbar/Navbar';
import { bebasNeue, dosisSemibold } from '../fonts';
import Image from 'next/image';
import Kokoro1 from './kokoro1.png';
import Kokoro2 from './kokoro2.png';
import Kokoro3 from './kokoro3.png';
import Kokoro4 from './kokoro4.png';
import Kokoro5 from './kokoro5.png';
import Kokoro6 from './kokoro6.png';
import Kokoro7 from './kokoro7.png';
import Kokoro8 from './kokoro8.png';
import Review from '../components/Review/Review';
import { useDispatch } from 'react-redux';
import { toggleCart } from '@/redux/features/nav-slice.js';


export default function Kokoro(){
    const dispatch = useDispatch();

    function openCart(){
        dispatch(toggleCart());
    }
    return(
            <div className="container mx-auto h-screen">
                <Navbar></Navbar>
                <div className="container flex flex-row mx-auto justify-start">
                    <a href="/" className={"flex flex-col justify-self-auto px-1 text-blitzBlue hover:text-blitzRed"}>Home /</a>
                    <a href="/karatedepartment" className={"flex flex-col justify-self-auto px-1 text-blitzBlue hover:text-blitzRed"}>Karate Department /</a>
                    <a href="/karateuniforms" className={"flex flex-col justify-self-auto px-1 text-blitzBlue"}>Karate Uniforms /</a>
                    <a href="#" className={"flex flex-col justify-self-auto px-1 text-blitzRed"}>Kokoro</a>
                </div>
                <div class="container flex flex-col">
                    <h3 className={bebasNeue.className + " text-4xl ml-1 mt-4 text-blitzRed"}>Blitz Adult Kokoro Karate Gi - 10 oz</h3>
                    <h5 className={bebasNeue.className + " text-2xl ml-1 mt-4 text-blitzYellow"}>4/5 <a href="#reviews" className="underline decoration-2 text-blitzBlue ml-4">1 Review</a></h5>
                </div>
                <div className="container flex flex-row h-screen">
                    <div className="flex flex-col w-1/3 items-center overflow-y-auto">
                        <div className="my-4 mx-auto">
                            <Image src={Kokoro1} alt="Kokoro 1"/>
                        </div>
                        <div className="my-4 mx-auto">
                            <Image src={Kokoro2} alt="Kokoro 2"/>
                        </div>
                        <div className="my-4 mx-auto">
                            <Image src={Kokoro3} alt="Kokoro 3"/>
                        </div>
                        <div className="my-4 mx-auto">
                            <Image src={Kokoro4} alt="Kokoro 4"/>
                        </div>
                        <div className="my-4 mx-auto">
                            <Image src={Kokoro5} alt="Kokoro 5"/>
                        </div>
                        <div className="my-4 mx-auto">
                            <Image src={Kokoro6} alt="Kokoro 6"/>
                        </div>
                        <div className="my-4 mx-auto">
                            <Image src={Kokoro7} alt="Kokoro 7"/>
                        </div>
                        <div className="my-4 mx-auto">
                            <Image src={Kokoro8} alt="Kokoro 8"/>
                        </div>
                        <div id="reviews">
                        <h3 className={bebasNeue.className + " text-blitzYellow self-start"}>4/5</h3>
                        <h3 className={bebasNeue.className + " text-blitzBlue self-start"}>1 Reviews</h3>
                        <Review rating={"4/5"} reviewTitle="By Gary on 19th June 2020" reviewContent={"For reference, I'm 185cm & 90kg and the size 5/180 fits perfectly. No running over the wrists or heels. Quality is good especially for price. Does not have a pronounced snap like a 12 Oz or 14 Oz but that was expected. A good utility Gi but as per the price, don't compare it to the White Diamond which is still No 1!"}/>
                        </div>
                    </div>
                    <div className="flex flex-col w-2/3 items-start px-2 h-screen">
                        <h5 className={bebasNeue.className + " text-2xl text-blitzRed"}>Designed for the dedicated and the determined</h5>
                        <p>The Blitz Kokoro Karate Gi is your companion for intense training sessions and competitive events. This Gi, available in both traditional white and sleek black, exhibits a European cut offering full-length sleeves and trouser legs, delivering maximum comfort and unrestrained movement during your Karate routines.</p>
                        <br/>
                        <p>Crafted with reinforced seams, this Gi promises enhanced durability to stand up to the rigor of your practice. The trousers feature a traditional tie waist, ensuring a precise fit for effortless mobility.</p>
                        <br/>
                        <p>The classic, minimalistic design of the Gi opens the door for personalization, allowing you to display your unique club logos and associations with pride. A woven Kokoro label subtly graces the lapel and the top of the left leg, underlining the exceptional quality and craftsmanship of Blitz.</p>
                        <br/>
                    <div className="flex flex-row w-full max-[970px]:flex-col fixed-top">
                        <div className="flex flex-col w-1/2 mt-4">
                            <p className={dosisSemibold.className + " text-blitzBlack"}>Choose a size:</p>
                            <div className="flex flex-row space-x-2 my-1 max-[770px]:flex-col max-[770px]:space-x-0">
                                <button className={dosisSemibold.className + " rounded-none w-24 h-14 align-midldle text-blitzRed border-2 border-blitzRed hover:bg-blitzLighterRed max-[770px]:my-1"}>3/160cm</button>
                                <button className={dosisSemibold.className + " rounded-none w-24 h-14 align-midldle text-blitzRed border-2 border-blitzRed hover:bg-blitzLighterRed max-[770px]:my-1"}>3.5/165cm</button>
                                <button className={dosisSemibold.className + " rounded-none w-24 h-14 align-midldle text-blitzRed border-2 border-blitzRed hover:bg-blitzLighterRed max-[770px]:my-1"}>4/170cm</button>
                            </div>
                            <div className="flex flex-row space-x-2 my-1 max-[770px]:flex-col max-[770px]:space-x-0">
                                <button className={dosisSemibold.className + " rounded-none w-24 h-14 align-midldle text-blitzRed border-2 border-blitzRed hover:bg-blitzLighterRed max-[770px]:my-1"}>4.5/175cm</button>
                                <button className={dosisSemibold.className + " rounded-none w-24 h-14 align-midldle text-blitzRed border-2 border-blitzRed hover:bg-blitzLighterRed max-[770px]:my-1"}>5/180cm</button>
                                <button className={dosisSemibold.className + " rounded-none w-24 h-14 align-midldle text-blitzRed border-2 border-blitzRed hover:bg-blitzLighterRed max-[770px]:my-1"}>5.5/185cm</button>
                            </div>
                            <div className="flex flex-row space-x-2 my-1 max-[770px]:flex-col max-[770px]:space-x-0">
                                <button className={dosisSemibold.className + " rounded-none w-24 h-14 align-midldle text-blitzRed border-2 border-blitzRed hover:bg-blitzLighterRed max-[770px]:my-1"}>6/190cm</button>
                                <button className={dosisSemibold.className + " rounded-none w-24 h-14 align-midldle text-blitzRed border-2 border-blitzRed hover:bg-blitzLighterRed max-[770px]:my-1"}>6.5/195cm</button>
                                <button className={dosisSemibold.className + " rounded-none w-24 h-14 align-midldle text-blitzRed border-2 border-blitzRed hover:bg-blitzLighterRed max-[770px]:my-1"}>7/200cm</button>
                            </div>       
                        </div>
                        <div className="flex flex-col max-[770px]:flex-col w-1/2 mt-4">
                            <p className={dosisSemibold.className + " text-blitzBlack"}>Choose a color:</p>
                            <div className="flex flex-row space-x-2">
                                <button className={dosisSemibold.className + " rounded-none w-24 h-14 align-midldle text-blitzBlack border-2 border-blitzBlack hover:bg-blitzLighterRed"}>White</button>
                                <button className={dosisSemibold.className + " rounded-none w-24 h-14 align-midldle text-white border-2 border-white bg-blitzBlack hover:bg-blitzLighterRed"}>Black</button>
                            </div>
                            <p className={dosisSemibold.className + " text-blitzBlack"}>Choose quantity:</p>
                            <div className="flex flex-row space-x-1">
                                <button className={dosisSemibold.className + " rounded-none h-14 w-14 bg-blitzRed text-2xl text-white hover:bg-blitzLighterRed max-[770px]:hidden"}>-</button><input type="number" className="border-2 border-blitz-Red text-center" defaultValue="1" min="1"></input><button className={dosisSemibold.className + " rounded-none h-14 w-14 bg-blitzRed text-2xl max-[770px]:hidden text-white hover:bg-blitzLighterRed"}>+</button>
                            </div>
                        </div>
                        
                    </div>
                    <div className="flex flex-row w-full max-[970px]:flex-col justify-start">
                        <div onClick={openCart} className="flex flex-row w-1/2 mt-4">
                            <a href="#" className={dosisSemibold.className + " p-1 px-1 text-white bg-blitzRed baseline self-center text-center align-middle w-9/12 h-14 leading-12"}>£74.99 - Add to Cart</a>
                        </div>
                        <div className="flex flex-row justify-start w-1/2 mt-4">
                        
                        </div>
                    </div>
                    </div>

                </div>
            </div>
    )
}
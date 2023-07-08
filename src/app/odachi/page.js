"use client";

import Navbar from '../components/Navbar/Navbar';
import { bebasNeue, dosisSemibold } from '../fonts';
import Image from 'next/image';
import Odachi1 from './odachi1.png';
import Odachi2 from './odachi2.png';
import Odachi3 from './odachi3.png';
import Odachi4 from './odachi4.png';
import Odachi5 from './odachi5.png';
import Review from '../components/Review/Review';
import { useDispatch } from 'react-redux';
import { toggleCart } from '@/redux/features/nav-slice.js';


export default function Odachi(){
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
                    <a href="#" className={"flex flex-col justify-self-auto px-1 text-blitzRed"}>Odachi</a>
                </div>
                <div class="container flex flex-col">
                    <h3 className={bebasNeue.className + " text-4xl ml-1 mt-4 text-blitzRed"}>Odachi WKF Approved Karate Gi - 14 oz</h3>
                    <h5 className={bebasNeue.className + " text-2xl ml-1 mt-4 text-blitzYellow"}>4/5 <a href="#reviews" className="underline decoration-2 text-blitzBlue ml-4">25 Reviews</a></h5>
                </div>
                <div className="container flex flex-row h-screen">
                    <div className="flex flex-col w-1/3 items-center overflow-y-auto">
                        <div className="my-4 mx-auto">
                            <Image src={Odachi1} alt="Odachi 1"/>
                        </div>
                        <div className="my-4 mx-auto">
                            <Image src={Odachi2} alt="Odachi 2"/>
                        </div>
                        <div className="my-4 mx-auto">
                            <Image src={Odachi3} alt="Odachi 3"/>
                        </div>
                        <div className="my-4 mx-auto">
                            <Image src={Odachi4} alt="Odachi 4"/>
                        </div>
                        <div className="my-4 mx-auto">
                            <Image src={Odachi5} alt="Odachi 5"/>
                        </div>
                        <div id="reviews">
                        <h3 className={bebasNeue.className + " text-blitzYellow self-start"}>4/5</h3>
                        <h3 className={bebasNeue.className + " text-blitzBlue self-start"}>25 Reviews</h3>
                        <Review rating={"5/5"} reviewTitle="By Michael M on 30th August 2019" reviewContent={"I’ve tried many Karate Gi & the Odachi is a very comfortable Gi for a 14oz heavyweight. Looks good & well suited for cold weather & for warmers weather when you want to sweat. In most brands I have worn a size 6 190cm , but on the suggestion from Blitz based upon my size they recommended the size 5 & it fits superbly with plenty of room for performance of techniques. I will definitely order this Gi again!"}/>
                        <Review rating={"5/5"} reviewTitle="By Mo on 2nd October 2018" reviewContent={"Fits great, very comfortable even in extreme long duration training. Would have preferred the logo to be on the back rather than front."}/>
                        <Review rating={"5/5"} reviewTitle="By AC on 27th February 2018" reviewContent={"Lovely gi but odd cut - extremely wide in relation to the length. My 12 year old is average sized in all regards but this was like a tent on him!"}/>
                        </div>
                    </div>
                    <div className="flex flex-col w-2/3 items-start px-2 h-screen">
                        <h5 className={bebasNeue.className + " text-2xl text-blitzRed"}>DESIGNED FOR ADVANCED PRACTITIONERS</h5>
                        <p>Our heavyweight Odachi Karate Suit is Japanese cut to prevent the long jacket from riding up and providing ¾ length sleeves and trouser legs.Suit features a super-soft shoulder sublimated lining to provide that extra bit of comfort during the most intense training sessions and, a three-sectional trouser gusset to prevent hitching and maximise movement.</p>
                        <br/>
                        <p>Trousers have a traditional tie waist.Plain, minimalistic design allows suit to be personalised with club logos and associations. Woven Odachi/WKF label on lapel and on the top of left leg. An embroidered Blitz logo features on the right chest and the back of the neck as required by the WKF.</p>
                        <br/>
                        <p>Comes with a drawstring bag to store the suit. Belt not included. 100% brushed cotton canvas. 14oz.</p>
                        <br/>
                        <p className={dosisSemibold.className + " text-blitzRed"}>Tested and approved by the Official World Karate Federation (WKF). Suitable for National and International competition, as well as club use.</p>
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
                            <a href="#" className={dosisSemibold.className + " p-1 px-1 text-white bg-blitzRed baseline self-center text-center align-middle w-9/12 h-14 leading-12"}>£131.99 - Add to Cart</a>
                        </div>
                        <div className="flex flex-row justify-start w-1/2 mt-4">
                        
                        </div>
                    </div>
                    </div>

                </div>
            </div>
    )
}
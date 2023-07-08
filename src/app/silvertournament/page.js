"use client";

import Navbar from '../components/Navbar/Navbar';
import { bebasNeue, dosisSemibold } from '../fonts';
import Image from 'next/image';
import Silver1 from './silver1.png';
import Silver2 from './silver2.png';
import Silver3 from './silver3.png';
import Silver4 from './silver4.png';
import Silver5 from './silver5.png';
import Silver6 from './silver6.png';
import Review from '../components/Review/Review';
import { useDispatch } from 'react-redux';
import { toggleCart } from '@/redux/features/nav-slice.js';


export default function SilverTourament(){
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
                    <a href="#" className={"flex flex-col justify-self-auto px-1 text-blitzRed"}>Silver Tournament</a>
                </div>
                <div class="container flex flex-col">
                    <h3 className={bebasNeue.className + " text-4xl ml-1 mt-4 text-blitzRed"}>Blitz Adult Zanshin Karate Gi - 12 oz</h3>
                    <h5 className={bebasNeue.className + " text-2xl ml-1 mt-4 text-blitzYellow"}>5/5 <a href="#reviews" className="underline decoration-2 text-blitzBlue ml-4">35 Reviews</a></h5>
                </div>
                <div className="container flex flex-row h-screen">
                    <div className="flex flex-col w-1/3 items-center overflow-y-auto">
                        <div className="my-4 mx-auto">
                            <Image src={Silver1} alt="Silver 1"/>
                        </div>
                        <div className="my-4 mx-auto">
                            <Image src={Silver2} alt="Silver 2"/>
                        </div>
                        <div className="my-4 mx-auto">
                            <Image src={Silver3} alt="Silver 3"/>
                        </div>
                        <div className="my-4 mx-auto">
                            <Image src={Silver4} alt="Silver 4"/>
                        </div>
                        <div className="my-4 mx-auto">
                            <Image src={Silver5} alt="Silver 5"/>
                        </div>
                        <div className="my-4 mx-auto">
                            <Image src={Silver6} alt="Silver 6"/>
                        </div>
                        <div id="reviews">
                        <h3 className={bebasNeue.className + " text-blitzYellow self-start"}>5/5</h3>
                        <h3 className={bebasNeue.className + " text-blitzBlue self-start"}>13 Reviews</h3>
                        <Review rating={"3/5"} reviewTitle="By Ian on 29th June 2019" reviewContent={"It's a good suit, but not perfect. I've only had gis with elasticated waists before, and this tie version isn't great. I got the 170cm version, and the length of the trouser is perfect for me (34R), but the waist must be about 48in; it's huge. So I have to sort of fold round the top and tie it tight, then end up adjusting it and re-tying it during a session. I'm just waiting for them to come undone and fall down during a fight. The jacket is a great fit, and comfy. Note that the thickness of the cotton means that you get hot - like working out in a jumper. Note also that the thickness of the material means that a) ironing is absolutely necessary, and b) ironing takes a long time! The gi comes in a well made but ultimately pointless bag - I'd rather it had just been a couple of quid cheaper. The only reason for my 3 star rating is the trouser width - if you could chose a waist size, or it was elasticated, it would be a 4-5."}/>
                        <Review rating={"5/5"} reviewTitle="By Nieky on 9th January 2019" reviewContent={"Really lovely gi, and amazing service. Got a 175 first, exchanged it for a 170, I'm 179. No quibbles, replacement turned up a few days later."}/>
                        <Review rating={"5/5"} reviewTitle="By Ismael on 5th May 2018" reviewContent={"Bought two of these 10 years ago and I swear by them. Still feel solid wash well stay white keep their shape and fit perfect. Only downsides are drawstrings too light they rip up quickly. Need to buy sturdy ones to replace. Also thick suit so keeps you a tad too warm."}/>
                        </div>
                    </div>
                    <div className="flex flex-col w-2/3 items-start px-2 h-screen">
                        <h5 className={bebasNeue.className + " text-2xl text-blitzRed"}>An essential choice for dedicated practitioners</h5>
                        <p>Available in traditional white and sleek black, this Gi features a traditional European cut, providing full-length sleeves and trouser legs for maximum comfort and unrestricted movement during your Kumite routines.</p>
                        <br/>
                        <p>Its classic, minimalistic design serves as an ideal canvas for personalization, inviting you to showcase your unique club logos and associations with pride. A woven Silver Tournament label subtly enhances both the lapel and the top of the left leg, signifying the exceptional quality of Blitz.</p>
                        <br/>
                        <p>Constructed from 100% brushed cotton canvas, this 14oz Gi guarantees superior comfort and durability, able to endure the intensity of your Karate practice. The trousers incorporate a traditional tie waist, ensuring a secure fit and seamless mobility.</p>
                        <br/>
                        <p>Each Silver Tournament Kumite Karate Gi comes complete with a drawstring bag for easy storage and transportation. Please note, the belt is not included, allowing you the freedom to select one that matches your rank and style. Choose the Blitz Silver Tournament Kumite Karate Gi for a perfect fusion of quality, comfort, and classic elegance in your Karate journey.</p>
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
                            <a href="#" className={dosisSemibold.className + " p-1 px-1 text-white bg-blitzRed baseline self-center text-center align-middle w-9/12 h-14 leading-12"}>£98.99 - Add to Cart</a>
                        </div>
                        <div className="flex flex-row justify-start w-1/2 mt-4">
                        
                        </div>
                    </div>
                    </div>

                </div>
            </div>
    )
}
"use client";

import Navbar from '../components/Navbar/Navbar';
import { bebasNeue, dosisSemibold } from '../fonts';
import Image from 'next/image';
import Shuhari1 from './shuhari.png';
import Shuhari2 from './shuhari2.png';
import Shuhari3 from './shuhari3.png';
import Shuhari5 from './shuhari5.png';
import Shuhari6 from './shuhari6.png';
import Review from '../components/Review/Review';
import { useDispatch } from 'react-redux';
import { toggleCart } from '@/redux/features/nav-slice.js';


export default function Shuhari(){
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
                    <a href="#" className={"flex flex-col justify-self-auto px-1 text-blitzRed"}>Shuhari</a>
                </div>
                <div class="container flex flex-col">
                    <h3 className={bebasNeue.className + " text-4xl ml-1 mt-4 text-blitzRed"}>Shuhari WKF Approved Karate Gi - 8 oz</h3>
                    <h5 className={bebasNeue.className + " text-2xl ml-1 mt-4 text-blitzYellow"}><a href="#reviews" className="underline decoration-2 text-blitzBlue ml-4">0 Reviews</a></h5>
                </div>
                <div className="container flex flex-row h-screen">
                    <div className="flex flex-col w-1/3 items-center overflow-y-auto">
                        <div className="my-4 mx-auto">
                            <Image src={Shuhari1} alt="Shuhari 1"/>
                        </div>
                        <div className="my-4 mx-auto">
                            <Image src={Shuhari2} alt="Shuhari 2"/>
                        </div>
                        <div className="my-4 mx-auto">
                            <Image src={Shuhari3} alt="Shuhari 3"/>
                        </div>
                        <div className="my-4 mx-auto">
                            <Image src={Shuhari5} alt="Shuhari 4"/>
                        </div>
                        <div className="my-4 mx-auto">
                            <Image src={Shuhari6} alt="Shuhari 5"/>
                        </div>
                        <div id="reviews">
                        <h3 className={bebasNeue.className + " text-blitzYellow self-start"}></h3>
                        <h3 className={bebasNeue.className + " text-blitzBlue self-start"}>0 Reviews</h3>
                        </div>
                    </div>
                    <div className="flex flex-col w-2/3 items-start px-2 h-screen">
                        <h5 className={bebasNeue.className + " text-2xl text-blitzRed"}>Specifically developed for kumite practitioners</h5>
                        <p>The incredibly lightweight Shuhari Karate Suit includes the latest moisture management technologies. The ventilated shoulder, waist, hip, underarm and backside areas are designed to draw moisture away from the skin, keeping you cool and comfortable in warm climates.</p>
                        <br/>
                        <p>For maximum movement and comfort, the gi also incorporates a three-sectional gusset and a super-soft interior, helping the material glide over the skin during intense training sessions. The trousers have an elastic/tie waist for a precise fit.The plain, minimalistic design allows the suit to be personalised with club logos and associations. </p>
                        <br/>
                        <p>Artwork that is featured includes a woven Shuhari label on the lapel and top of the left leg; and an embroidered Blitz logo on the right chest and on the back of the neck. Comes with an additional drawstring bag to store. Belt not included. 100% polyester. 8oz.</p>
                        <br/>
                        <p className={dosisSemibold.className + " text-blitzRed"}>Tested and approved by the Official World Karate Federation (WKF), the Blitz Shuhari WKF Approved Karate Suit is suitable for both National and International competition as well as club use.</p>
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
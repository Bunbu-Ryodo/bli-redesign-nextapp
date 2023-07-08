"use client";

import Navbar from '../components/Navbar/Navbar';
import { bebasNeue, dosisSemibold } from '../fonts';
import Image from 'next/image';
import Diamond1 from './1diamond.jpg';
import Diamond2 from './2diamond.png';
import Diamond3 from './3diamond.png';
import Diamond4 from './4diamond.png';
import Diamond5 from './5diamond.png';
import Review from '../components/Review/Review';
import { useDispatch } from 'react-redux';
import { toggleCart } from '@/redux/features/nav-slice.js';


export default function DiamondKata(){
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
                    <a href="#" className={"flex flex-col justify-self-auto px-1 text-blitzRed"}>Diamond Kata</a>
                </div>
                <div class="container flex flex-col">
                    <h3 className={bebasNeue.className + " text-4xl ml-1 mt-4 text-blitzRed"}>Blitz Adult Diamond Kata Karate Gi</h3>
                    <h5 className={bebasNeue.className + " text-2xl ml-1 mt-4 text-blitzYellow"}>5/5 <a href="#" className="underline decoration-2 text-blitzBlue ml-4">75 Reviews</a></h5>
                </div>
                <div className="container flex flex-row h-screen">
                    <div className="flex flex-col w-1/3 items-center overflow-y-auto">
                        <div className="my-4 mx-auto">
                            <Image src={Diamond1} alt="Diamond 1"/>
                        </div>
                        <div className="my-4 mx-auto">
                            <Image src={Diamond2} alt="Diamond 1"/>
                        </div>
                        <div className="my-4 mx-auto">
                            <Image src={Diamond3} alt="Diamond 1"/>
                        </div>
                        <div className="my-4 mx-auto">
                            <Image src={Diamond4} alt="Diamond 1"/>
                        </div>
                        <div className="my-4 mx-auto">
                            <Image src={Diamond5} alt="Diamond 1"/>
                        </div>
                        <h3 className={bebasNeue.className + " text-blitzYellow self-start"}>5/5</h3>
                        <h3 className={bebasNeue.className + " text-blitzBlue self-start"}>75 Reviews</h3>
                        <Review rating={"5/5"} reviewTitle="By Matt on 6th September 2019" reviewContent={"I put this gi to the test the other night and have to say I love it. I'm very happy with this gi, it's comfortable, dose not restrict my movements, it's japanese cut ( thats a bonus for me as i prefer japanese cut ) and it's well made and will stand the test of time! Highly recommended, I dont think I'll be using anything else but my Blitz white diamond, it's a great upgrade from anything else I have owned!"}/>
                        <Review rating={"5/5"} reviewTitle="By Paul young on 12th February 2019" reviewContent={"Brilliant suit though after two years of hell the trousers between the thighs get very weak but considering I haven't had a suit that has lasted me that long!"}/>
                        <Review rating={"5/5"} reviewTitle="By Mo on 2nd October 2018" reviewContent={"Possibly the best all round suit. 14oz for advanced practitioners or those who like heavy suits, two trousers, slightly tapered fit and robust ties. These suits lasts a very long time."}/>
                        <Review rating={"5/5"} reviewTitle="By Mark Watson on 14th June 2018" reviewContent={"Fabulous quality and comes with an extra pair of kumite trousers and all in a lovely bag"}/>
                        <Review rating={"5/5"} reviewTitle="By John Clift on 1st May 2018" reviewContent={"This is by far a first class gi, i have several of these, the oldest is over 10 years old, and is still in first class shape. If there is one problem with them, its that they should be WKF approved."}></Review>
                    </div>
                    <div className="flex flex-col w-2/3 items-start px-2 h-screen">
                        <h5 className={bebasNeue.className + " text-2xl text-blitzRed"}>Introducing the Blitz Diamond Kata Karate Gi </h5>
                        <p>A meticulously crafted for advanced karate practitioners and esteemed instructors. This Gi showcases a traditional Japanese cut 
                        - with shorter sleeves and trousers and a shortened jacket lapel - designed to highlight and enable the high kicks and rapid movements that are integral to Karate. 
                        The minimalist design presents a canvas for personalization, allowing you to proudly display your unique club logos and affiliations. 
                        Distinctive features include an elegantly woven Diamond label on the lapel and the top of the left leg, symbolizing the superior Blitz quality.
                        <br/>
                        <br/>
                        Made from 100% brushed cotton, this 14oz Gi delivers a lightweight feel while maintaining resilient strength, perfect for the rigours of Kata routines. 
                        The trousers are equipped with a convenient tie waist, ensuring a secure and comfortable fit, providing unrestricted movement and flexibility. 
                        The Diamond Kata Karate Gi is available in both traditional white and sleek black, honouring individual preferences and martial arts traditions. Each Gi is accompanied by a drawstring bag for hassle-free storage and transportation.
                        Please note, the belt is not included, allowing you to select one according to your rank and style. 
                        The Blitz Diamond Kata Karate Gi - the embodiment of quality, comfort, and tradition with a nod to the roots of Karate.</p>
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
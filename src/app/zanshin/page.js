"use client";

import Navbar from '../components/Navbar/Navbar';
import { bebasNeue, dosisSemibold } from '../fonts';
import Image from 'next/image';
import Zanshin1 from './zanshin1.png';
import Zanshin2 from './zanshin2.png';
import Zanshin3 from './zanshin3.png';
import Zanshin4 from './zanshin4.png';
import Zanshin5 from './zanshin5.png';
import Zanshin6 from './zanshin6.png';
import Zanshin7 from './zanshin7.png';
import Review from '../components/Review/Review';
import { useDispatch } from 'react-redux';
import { toggleCart } from '@/redux/features/nav-slice.js';


export default function Zanshin(){
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
                    <a href="#" className={"flex flex-col justify-self-auto px-1 text-blitzRed"}>Zanshin</a>
                </div>
                <div class="container flex flex-col">
                    <h3 className={bebasNeue.className + " text-4xl ml-1 mt-4 text-blitzRed"}>Blitz Adult Zanshin Karate Gi - 12 oz</h3>
                    <h5 className={bebasNeue.className + " text-2xl ml-1 mt-4 text-blitzYellow"}>5/5 <a href="#reviews" className="underline decoration-2 text-blitzBlue ml-4">13 Reviews</a></h5>
                </div>
                <div className="container flex flex-row h-screen">
                    <div className="flex flex-col w-1/3 items-center overflow-y-auto">
                        <div className="my-4 mx-auto">
                            <Image src={Zanshin1} alt="Zanshin 1"/>
                        </div>
                        <div className="my-4 mx-auto">
                            <Image src={Zanshin2} alt="Zanshin 2"/>
                        </div>
                        <div className="my-4 mx-auto">
                            <Image src={Zanshin3} alt="Zanshin 3"/>
                        </div>
                        <div className="my-4 mx-auto">
                            <Image src={Zanshin4} alt="Zanshin 4"/>
                        </div>
                        <div className="my-4 mx-auto">
                            <Image src={Zanshin5} alt="Zanshin 5"/>
                        </div>
                        <div className="my-4 mx-auto">
                            <Image src={Zanshin6} alt="Zanshin 6"/>
                        </div>
                        <div className="my-4 mx-auto">
                            <Image src={Zanshin7} alt="Zanshin 7"/>
                        </div>
                        <div id="reviews">
                        <h3 className={bebasNeue.className + " text-blitzYellow self-start"}>5/5</h3>
                        <h3 className={bebasNeue.className + " text-blitzBlue self-start"}>13 Reviews</h3>
                        <Review rating={"3/5"} reviewTitle="By John Clift on 17th December 2019" reviewContent={"I like the gi, nice weight, not to heavy for sparring, but good enough for kata. My only dislike is its a euro cut, it would be nice to have a japanese cut option. For this reason white diamond will still be my first choice."}/>
                        <Review rating={"5/5"} reviewTitle="By Jacob Willetts on 12th July 2019" reviewContent={"Absolutely fantastic Karate Gi. From someone who has done everything from competing to now instructing, this Gi is one of the best i've ever owned. As its a mid weight Gi its got a nice weight to it and quite baggy as well in order to give you much deeper stances without any restrictions. I love the traditional style to this Gi with the high waisted trousers as well as the cotton canvas material which provides a great snap. I am glad however that I ordered one size smaller than what I normally have (Im 6’2” and normally go for a 190cm) as the jacket is quite baggy, maybe a little too baggy for my taste. But overall a really great quality Gi for the price and would not take too much in order to make this Gi competition legal. The bag is a nice touch too."}/>
                        <Review rating={"5/5"} reviewTitle="By Jon Holland on 24th November 2018" reviewContent={"I really like this Gi a lot, I teach Karate and also train still. I own so many Gi's, lightweight Gi's from Blitz and others, and also the White Diamond and the Silver Tournament. and I've often found myself alternating depending upon application, Heavyweight for Kata and lightweight for Kumite, In this Gi I have something that feels good for both, 12oz feels like the right compromise point. The Gi is light and roomy, I find that the jacket is pleasantly roomy for my broader frame, especially around the shoulders and neck, where I have felt somewhat \"strangled\" by heavierweight tighter cut Gi's. I am 5ft 10 and 95kg and the size 5 fits wonderfully, there is plenty of room in the arm and leg for someone a few inches taller. I really like the fact that it is preshrunk, so that I'm not playing guess the shrinkage margin when buying. I wear a 5.5 in the white diamond, and when washed, that Gi is tighter than this in a 5. I would have liked to have seen the same heavier hemming detail in the arm and leg ends that the white diamond has, and an elasticated trouser, but other than that these things would not put me off buying this suit again."}/>
                        </div>
                    </div>
                    <div className="flex flex-col w-2/3 items-start px-2 h-screen">
                        <h5 className={bebasNeue.className + " text-2xl text-blitzRed"}>Traditional design and modern functionality</h5>
                        <p>Available in traditional white and sleek black, this Gi features a European cut, providing full-length sleeves and trouser legs for maximum comfort and unrestricted movement during your Karate routines.</p>
                        <br/>
                        <p>The classic, minimalistic design serves as a versatile canvas for personalization, enabling you to proudly display your unique club logos and associations. A woven Zanshin label subtly embellishes the lapel and the top of the left leg, symbolizing the meticulous quality and craftsmanship of Blitz.</p>
                        <br/>
                        <p>Fabricated from 100% woven cotton canvas, this 12oz middleweight Gi strikes the balance between comfort and durability, ready to accommodate the rigors of your Karate practice. The trousers incorporate a traditional tie waist, ensuring a secure fit and seamless mobility.</p>
                        <br/>
                        <p>Each Zanshin Karate Gi comes complete with a drawstring bag for easy storage and transportation. Please note that the belt is not included, giving you the freedom to choose one that aligns with your rank and style. Choose the Blitz Zanshin Karate Gi for an impeccable fusion of quality, comfort, and classic style in your Karate journey.</p>
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
                            <a href="#" className={dosisSemibold.className + " p-1 px-1 text-white bg-blitzRed baseline self-center text-center align-middle w-9/12 h-14 leading-12"}>£86.99 - Add to Cart</a>
                        </div>
                        <div className="flex flex-row justify-start w-1/2 mt-4">
                        
                        </div>
                    </div>
                    </div>

                </div>
            </div>
    )
}
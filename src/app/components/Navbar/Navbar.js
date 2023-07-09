"use client"

import { bebasNeue } from '../../fonts.js';
import { dosisSemibold } from '../../fonts.js';
import { toggleMartialArts, toggleDepartment, togglePersonalized, toggleWishlist, toggleAccount, toggleCart } from '@/redux/features/nav-slice.js';
import { useDispatch, useSelector } from 'react-redux';
import Image from 'next/image';
import smallGi from './small_gi.png';

function Navbar(){

    const dispatch = useDispatch(); 
    const martialArts = useSelector((state) => state.navReducer.value.martialArts);
    const department = useSelector((state) => state.navReducer.value.department);
    const personalized = useSelector((state) => state.navReducer.value.personalized);
    const wishlist = useSelector((state) => state.navReducer.value.wishlist);
    const cart = useSelector((state) => state.navReducer.value.cart);
    const account = useSelector((state) => state.navReducer.value.account);

    function toggleMaDropdown(){
        dispatch(toggleMartialArts());
    }

    function toggleDepDropdownOpen(){
        dispatch(toggleDepartment());
    }

    function togglePersonalizedDropdownOpen(){
        dispatch(togglePersonalized());
    }

    function toggleWishlistOpen(){
        dispatch(toggleWishlist());
    }

    function toggleAccountOpen(){
        dispatch(toggleAccount());
    }

    function toggleCartOpen(){
        dispatch(toggleCart());
    }

    return(
        <nav className="relative container mx-auto bg-white p-6 border-b-2 blitzBlack">
            <div className="flex items-center justify-between w-full">
                <h1 className={bebasNeue.className + " text-blitzRed hover:text-blitzBlue text-4xl"}><a href="/">BLITZ</a></h1>
                <div className="hidden md:flex space-x-6">
                    <button onMouseEnter={toggleMaDropdown} className={bebasNeue.className + " hover:text-blitzBlue text-xl"}>Martial Arts</button>
                    <div onMouseLeave={toggleMaDropdown} className={!martialArts ? "hidden" : " " + " absolute top-24 p-1 w-56 left-84 bg-white border border-blitzBlack"}>
                        <h3 className="text-blitzRed text-xl">All Martial Arts Departments</h3>
                        <div className="flex flex-col">
                            <a href="#" className="text-xl hover:text-blitzBlue">Aikido</a>
                            <a href="#" className="text-xl hover:text-blitzBlue">Boxing</a>
                            <a href="#" className="text-xl hover:text-blitzBlue">BJJ</a>
                            <a href="#" className="text-xl hover:text-blitzBlue">Judo</a>
                            <a href="#" className="text-xl hover:text-blitzBlue">Karate</a>
                            <a href="#" className="text-xl hover:text-blitzBlue">Kali</a>
                            <a href="#" className="text-xl hover:text-blitzBlue">Jujitsu</a>
                            <a href="#" className="text-xl hover:text-blitzBlue">Kickboxing</a>
                            <a href="#" className="text-xl hover:text-blitzBlue">Krav Maga</a>
                            <a href="#" className="text-xl hover:text-blitzBlue">Kuk Sool Won</a>
                            <a href="#" className="text-xl hover:text-blitzBlue">Kung Fu</a>
                            <a href="#" className="text-xl hover:text-blitzBlue">MMA</a>
                            <a href="#" className="text-xl hover:text-blitzBlue">Muay Thai</a>
                            <a href="#" className="text-xl hover:text-blitzBlue">Ninjutsu</a>
                            <a href="#" className="text-xl hover:text-blitzBlue">Taekwondo</a>
                            <a href="#" className="text-xl hover:text-blitzBlue">Tang Soo Doo</a>
                        </div>
                    </div>
                    <button onMouseEnter={toggleDepDropdownOpen}className={bebasNeue.className + " hover:text-blitzBlue text-xl"} href="#">Departments</button>
                    <div onMouseLeave={toggleDepDropdownOpen} className={!department? "hidden" : " " + "absolute top-24 p-1 w-56 left-84 bg-white border border-blitzBlack"}>
                        <h3 className="text-blitzRed text-xl">General Departments</h3>
                        <div class="flex flex-col">
                            <a href="#" className="text-xl hover:text-blitzBlue">Accessories</a>
                            <a href="#" className="text-xl hover:text-blitzBlue">Clothing</a>
                            <a href="#" className="text-xl hover:text-blitzBlue">Equipment</a>
                            <a href="#" className="text-xl hover:text-blitzBlue">Fitness</a>
                            <a href="#" className="text-xl hover:text-blitzBlue">Kids</a>
                            <a href="#" className="text-xl hover:text-blitzBlue">Protection</a>
                            <a href="#" className="text-xl hover:text-blitzBlue">Training Aids</a>
                        </div>
                    </div>
                    <button onMouseEnter={togglePersonalizedDropdownOpen} className={bebasNeue.className + " hover:text-blitzBlue text-xl"} href="#">Personalized</button>
                    <div onMouseLeave={togglePersonalizedDropdownOpen} className={!personalized ? "hidden" : " " + " absolute top-24 p-1 w-56 left-84 bg-white border border-blitzBlack"}>
                        <h3 className="text-blitzRed text-xl">Personalized</h3>
                        <div className="flex flex-col">
                            <a href="#" className="text-xl hover:text-blitzBlue">Black Belts</a>
                            <a href="#" className="text-xl hover:text-blitzBlue">Student Belts</a>
                            <a href="#" className="text-xl hover:text-blitzBlue">Bags & Other Products</a>
                        </div>
                    </div>
                </div>    
                <div className="hidden md:flex space-x-2">
                    <button onClick={toggleWishlistOpen} className="hidden md:flex p-1 px-2 text-white bg-blitzRed baseline">Wishlist</button>
                    <button onClick={toggleAccountOpen} href="#" className="hidden md:flex p-1 px-2 text-white bg-blitzBlue baseline">Account</button>
                    <button onClick={toggleCartOpen} id="openCart" className="hidden md:flex p-1 px-2 text-white bg-blitzYellow baseline">Cart</button>  
                    <div className={!cart ? "hidden" : " " + " absolute top-24 right-1 p-1 bg-white border border-blitzBlack"}>
                        <h3 className="text-blitzRed text-xl">Your Cart</h3>
                        <div className="flex flex-row justify-start px-4">
                            <div>
                                <Image src={smallGi} al="small gi"></Image>
                            </div>
                            <div className="flex flex-col">
                                <p className="text-blitzRed">White Karate Gi</p>
                                <p className="text-blitzBlack">White - Size 4/170cm</p>
                                <p className="text-blitzBlue">£99.99</p>
                            </div>
                        </div>
                        <div className="flex flex-col w-96 h-60 justify-end">
                            <h3 className={dosisSemibold.className + " text-blitzBlue"}>Total: £99.99 </h3>
                            <button className={dosisSemibold.className + " bg-blitzRed text-white w-full p-4"}><a href="/precheckout">Go to Checkout</a></button>
                        </div>
                    </div>
                    <div className={!account ? "hidden" : " " + " absolute top-24 right-1 p-1 bg-white border border-blitzBlack"}>
                        <h3 className="text-blitzRed text-xl">Your Account</h3>
                        <div className="flex flex-col w-96 justify-start">
                        <a href="#" className="text-xl">Order History</a>
                        <a href="#" className="text-xl">Saved Quotes</a>
                        <a href="#" className="text-xl">Payment Settings</a>
                        <a href="#" className="text-xl">Your Details</a>
                        <a href="/editcommunityprofile" className="text-xl">Edit Your Community Profile</a>
                        <button className={dosisSemibold.className + " bg-blitzRed text-white w-full p-4"}>Login/Sign Up</button>
                        </div>
                    </div>
                    <div className={!wishlist ? "hidden" : " " + " absolute top-24 right-1 p-1 bg-white border border-blitzBlack"}>
                        <h3 className="text-blitzRed text-xl">Your Wishlist</h3>
                        <div className="flex flex-col w-96 h-96 justify-end">
                            <h3 className={dosisSemibold.className + " text-blitzB"}></h3>
                            <button className={dosisSemibold.className + " bg-blitzRed text-white w-full p-4"}>Add All Items to Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </nav>

    )
}


export default Navbar;
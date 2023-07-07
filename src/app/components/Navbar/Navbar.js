import { bebasNeue } from '../../fonts.js';
import { dosisSemibold } from '../../fonts.js';



function Navbar(){
    return(
        <nav className="relative container mx-auto bg-white p-6 border-b-2 blitzBlack">
            <div className="flex items-center justify-between w-full">
                <h1 className={bebasNeue.className + " text-blitzRed hover:text-blitzBlue text-4xl"}>BLITZ</h1>
                <div className="hidden md:flex space-x-6">
                    <button className={bebasNeue.className + " hover:text-blitzBlue text-xl"}>Martial Arts</button>
                    <div className="hidden absolute top-24 p-1 w-56 left-84 bg-white border border-blitzBlack">
                        <h3 className="text-blitzRed text-xl">All Martial Arts Departments</h3>
                        <div class="flex flex-col">
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
                    <button className={bebasNeue.className + " hover:text-blitzBlue text-xl"} href="#">Departments</button>
                    <div className="hidden absolute top-24 p-1 w-56 left-84 bg-white border border-blitzBlack">
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
                    <button className={bebasNeue.className + " hover:text-blitzBlue text-xl"} href="#">Personalized</button>
                    <div className="hidden absolute top-24 p-1 w-56 left-84 bg-white border border-blitzBlack">
                        <h3 className="text-blitzRed text-xl">Personalized</h3>
                        <div class="flex flex-col">
                            <a href="#" className="text-xl hover:text-blitzBlue">Black Belts</a>
                            <a href="#" className="text-xl hover:text-blitzBlue">Student Belts</a>
                            <a href="#" className="text-xl hover:text-blitzBlue">Bags & Other Products</a>
                        </div>
                    </div>
                </div>
               
                <div className="hidden md:flex space-x-2">
                    <a href="#" className={dosisSemibold.className + " hidden md:flex p-1 px-2 text-white bg-blitzRed baseline"}>Wishlist</a>
                    <a href="#" className={dosisSemibold.className + " hidden md:flex p-1 px-2 text-white bg-blitzBlue baseline"}>Account</a>
                    <button className={dosisSemibold.className + " hidden md:flex p-1 px-2 text-white bg-blitzYellow baseline"} id="cart-dropdown" aria-expanded="false" aria-haspopup="true">Cart</button>  
                    <div className="hidden absolute top-24 right-1 p-1 bg-white border border-blitzBlack">
                        <h3 className="text-blitzRed text-xl">Your Cart</h3>
                        <div className="flex flex-col w-96 h-96 justify-end">
                            <h3 className={dosisSemibold.className + " text-blitzB"}>Total: </h3>
                            <button className={dosisSemibold.className + " bg-blitzRed text-white w-full p-4"}>Go to Checkout</button>
                        </div>
                    </div>
                    <div className="hidden absolute top-24 right-1 p-1 bg-white border border-blitzBlack">
                        <h3 className="text-blitzRed text-xl">Your Account</h3>
                        <div className="flex flex-col w-96 justify-start">
                        <a href="#" className="text-xl">Order History</a>
                        <a href="#" className="text-xl">Saved Quotes</a>
                        <a href="#" className="text-xl">Payment Settings</a>
                        <a href="#" className="text-xl">Your Details</a>
                        <a href="#" className="text-xl">Edit Your Community Profile</a>
                        <button className={dosisSemibold.className + " bg-blitzRed text-white w-full p-4"}>Login/Sign Up</button>
                        </div>
                    </div>
                    <div className="hidden absolute top-24 right-1 p-1 bg-white border border-blitzBlack">
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
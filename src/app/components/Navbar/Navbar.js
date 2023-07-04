import { bebasNeue } from '../../fonts.js';
import { dosisSemibold } from '../../fonts.js';



function Navbar(){
    return(
        <nav className="relative container mx-auto bg-white p-6 border-b-2 blitzBlack">
            <div className="flex items-center justify-between">
                <h1 className={bebasNeue.className + " text-blitzRed hover:text-blitzBlue"}>BLITZ</h1>
                <div className="hidden md:flex space-x-6">
                    <a className={bebasNeue.className + " hover:text-blitzBlue"} href="#">Martial Arts</a>
                    <a className={bebasNeue.className + " hover:text-blitzBlue"} href="#">Departments</a>
                    <a className={bebasNeue.className + " hover:text-blitzBlue"} href="#">Personalized</a>
                </div>
                <div className="hidden md:flex space-x-2">
                    <a href="#" className={dosisSemibold.className + " hidden md:flex p-1 px-2 text-white bg-blitzRed baseline"}>Wishlist</a>
                    <a href="#" className={dosisSemibold.className + " hidden md:flex p-1 px-2 text-white bg-blitzBlue baseline"}>Account</a>
                    <a href="#" className={dosisSemibold.className + " hidden md:flex p-1 px-2 text-white bg-blitzYellow baseline"}>Cart</a>
                </div>
            </div>
        </nav>

    )
}

export default Navbar;
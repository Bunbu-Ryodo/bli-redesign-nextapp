import { Bebas_Neue } from 'next/font/google';
import { Dosis } from 'next/font/google';

const bebasNeue = Bebas_Neue({ subsets: ['latin'], weight: ['400'] });
const dosis = Dosis({subsets: ['latin'], weight: ['400'] });
const dosisSemibold = Dosis({subsets: ['latin'], weight: ['600']});



function Navbar(){
    return(
        <nav className="relative container mx-auto bg-white p-6">
            <div className="flex items-center justify-between">
                <h1 className={bebasNeue.className + " text-blitzRed"}>BLITZ</h1>
                <div className="hidden md:flex space-x-6">
                    <a className={bebasNeue.className} href="#">Martial Arts</a>
                    <a className={bebasNeue.className} href="#">Departments</a>
                    <a className={bebasNeue.className} href="#">Personalized</a>
                </div>
            </div>
        </nav>

    )
}

export default Navbar;
import Navbar from '../components/Navbar/Navbar';
import ProductCard from '../components/ProductCard/ProductCard';
import Diamond from './diamond.jpg';
import FilterCheckboxes from '../components/FilterCheckboxes/FilterCheckboxes';
import { bebasNeue } from '../fonts';

export default function KarateUniforms() {
  return (
    <main>
      <div className="container mx-auto">
        <Navbar></Navbar>
        <div class="container flex flex-col">
        <div className="container flex flex-row mx-auto justify-start">
            <a href="/" className={"flex flex-col justify-self-auto px-1 text-blitzBlue hover:text-blitzRed"}>Home /</a>
            <a href="/karatedepartment" className={"flex flex-col justify-self-auto px-1 text-blitzBlue hover:text-blitzRed"}>Karate Department /</a>
            <a href="#" className={"flex flex-col justify-self-auto px-1 text-blitzRed"}>Karate Uniforms</a>
         </div>
         <div class="container flex flex-row mx-auto justify-start">
            <h3 className={bebasNeue.className + " text-2xl text-blitzBlack ml-1 mt-2 mb-2"}>空手着 - <span className="text-blitzRed">Karate gi</span></h3>
         </div>
         </div>
         <div className="flex flex-row justify-end">
            <form action="#">
            <label for="lang" className="mx-2">Sort By</label>
            <select name="karategi-sort" className="focus:outline-none">
              <option value="bestselling">Best Selling</option>
              <option value="price-asc">Price (Low to High)</option>
              <option value="price-desc">Price (High to Low)</option>
              <option value="rating">User Rating</option>
              <option value="newest">Newest</option>
            </select>
            </form>
         </div>
        <div className="flex flex-row max-[970px]:flex-col-reverse max-[970px]:items-center">
          <div className="flex flex-col w-1/4 justify-start mt-4 mb-2 max-[970px]:w-full max-[970px]:items-center">
            <input placeholder="Search All Uniforms" className="flex border border-blitzRed focus:outline-none w-80 h-10 px-2 max-[1440px]:w-9/12"></input>
            <FilterCheckboxes/>
          </div>
          <div className="flex flex-col w-9/12">
          <div className="container flex flex-row mt-2 max-[970px]:flex-col max-[970px]:items-center">
            <ProductCard 
              link="/"
              image={Diamond} 
              alt="Diamond"
              productDescription="Blitz Diamond Kata Karate Gi" 
              price="£95.99-£115.99" 
              rating="5/5" 
              reviews="(75 Reviews)"
            />
            <ProductCard 
              link="/"
              image={Diamond} 
              alt="Diamond"
              productDescription="Blitz Diamond Kata Karate Gi" 
              price="£95.99-£115.99" 
              rating="5/5" 
              reviews="(75 Reviews)"
            />
            <ProductCard 
              link="/"
              image={Diamond} 
              alt="Diamond"
              productDescription="Blitz Diamond Kata Karate Gi" 
              price="£95.99-£115.99" 
              rating="5/5" 
              reviews="(75 Reviews)"
            />
          </div>
          <div className="container flex flex-row max-[970px]:flex-col max-[970px]:items-center">
            <ProductCard 
              link="/"
              image={Diamond} 
              alt="Diamond"
              productDescription="Blitz Diamond Kata Karate Gi" 
              price="£95.99-£115.99" 
              rating="5/5" 
              reviews="(75 Reviews)"
            />
            <ProductCard 
              link="/"
              image={Diamond} 
              alt="Diamond"
              productDescription="Blitz Diamond Kata Karate Gi" 
              price="£95.99-£115.99" 
              rating="5/5" 
              reviews="(75 Reviews)"
          />
            <ProductCard 
              link="/"
              image={Diamond} 
              alt="Diamond"
              productDescription="Blitz Diamond Kata Karate Gi" 
              price="£95.99-£115.99" 
              rating="5/5" 
              reviews="(75 Reviews)"
            />
          </div>
            
          </div>
        </div>
      </div>
    </main>
  )
}
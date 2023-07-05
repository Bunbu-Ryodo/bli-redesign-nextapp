import Navbar from '../components/Navbar/Navbar';
import ProductCard from '../components/ProductCard/ProductCard';
import Diamond from './diamond.jpg';

export default function KarateUniforms() {
  return (
    <main>
      <div className="container mx-auto">
        <Navbar></Navbar>
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
    </main>
  )
}
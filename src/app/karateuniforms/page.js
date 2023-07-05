import Navbar from '../components/Navbar/Navbar';
import ProductCard from '../components/ProductCard/ProductCard';

export default function KarateUniforms() {
  return (
    <main>
      <div className="container mx-auto">
        <Navbar></Navbar>
        <ProductCard/>
      </div>
    </main>
  )
}
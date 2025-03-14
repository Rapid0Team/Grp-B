import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <Navbar />

      <section className="container mx-auto my-12">
        <h2 className="text-5xl font-bold text-center">Bienvenue sur <span className="text-green-600 bio">BioBazar</span> </h2>
        <p className="text-3xl text-center text-gray-600 mt-2">Découvrez nos produits bio et frais</p>
      </section>

      <section className="container mx-auto my-12">
        <h2 className="text-3xl font-bold text-center mb-6">Nos Catégories</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="relative">
            <img src="/photo3.webp" alt="Fruits" className="w-full h-64 object-cover rounded-md" />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-center p-2">
              <Link to="/produits/fruits" className="text-lg font-semibold">Fruits & Légumes</Link>
            </div>
          </div>
          <div className="relative">
            <img src="/photo1.webp" alt="Produits Laitiers" className="w-full h-64 object-cover rounded-md" />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-center p-2">
              <Link to="/produits/laitiers" className="text-lg font-semibold">Produits Laitiers</Link>
            </div>
          </div>
          <div className="relative">
            <img src="/photo2.webp" alt="Poissons" className="w-full h-64 object-cover rounded-md" />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-center p-2">
              <Link to="/produits/poissants" className="text-lg font-semibold">Viandes et Poissons</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto my-12">
        <h2 className="text-3xl font-bold text-center mb-6">Offres Spéciales</h2>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="border p-4 rounded-md shadow-md text-center">
            <img src="/oil.webp" alt="Promo" className="w-full h-48 object-cover rounded-md mb-2" />
            <h3 className="text-xl font-semibold">Huile d'Olive Bio</h3>
            <p className="text-gray-600">100% naturelle, pressée à froid.</p>
            <p className="text-red-500 font-bold text-lg mt-2">-20% de réduction</p>
            <button className="bg-green-600 text-white px-4 py-2 mt-4 rounded-md hover:bg-green-700">
              Acheter Maintenant
            </button>
          </div>
          <div className="border p-4 rounded-md shadow-md text-center">
            <img src="/page2.webp" alt="Promo" className="w-full h-48 object-cover rounded-md mb-2" />
            <h3 className="text-xl font-semibold">Paniers de Fruits Bio</h3>
            <p className="text-gray-600">Frais et de saison.</p>
            <p className="text-red-500 font-bold text-lg mt-2">-15% de réduction</p>
            <button className="bg-green-600 text-white px-4 py-2 mt-4 rounded-md hover:bg-green-700">
              Acheter Maintenant
            </button>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-12">
        <h2 className="text-3xl font-bold text-center mb-6">Ce que disent nos clients</h2>
        <div className="container mx-auto grid sm:grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-4 shadow-md rounded-md">
            <p className="italic">"Les produits sont ultra frais et la livraison est rapide, je recommande à 100% !"</p>
            <p className="font-bold mt-2 text-green-700">- M. Al mansouri</p>
          </div>
          <div className="bg-white p-4 shadow-md rounded-md">
            <p className="italic">"Enfin un site où je peux acheter des produits bio directement auprès des producteurs !"</p>
            <p className="font-bold mt-2 text-green-700">- S. Barada</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

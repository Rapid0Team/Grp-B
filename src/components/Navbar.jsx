import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [search, setSearch] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false); 

  const handleSearch = (event) => {
    setSearch(event.target.value);
    console.log("Recherche :", search);
  };

  
  return (
    <nav className={`bg-green-100 sm:h-auto ${isMenuOpen? 'fixed inset-0 z-50':''}   text-white p-4 shadow-md`}>
      <div className="container relative mx-auto  flex justify-between items-center">
        <Link to="/">
          <img src="/logo1.jpeg" alt="BioBazar" className={`${isMenuOpen ? "hidden" : ""} h-14 w-20 logo `} />
        </Link>

        <div className="relative w-1/3 hidden md:block">
          <input
            type="text"
            value={search}
            onChange={handleSearch}
            placeholder="Rechercher un produit..."
            className="w-full px-4 py-2 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-600">
            🔍
          </button>
        </div>

        <button
          className={` ${isMenuOpen ? "hidden" : ""} md:hidden text-gray-600`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>
        <button
          className={` ${isMenuOpen ? "" : "hidden"} md:hidden top-0 right-0 px-4 absolute text-gray-600`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>

        <ul className={`md:flex flex sm:flex-row flex-col gap-7 sm:w-auto w-full sm:h-auto h-[100vh] justify-center items-center    ${isMenuOpen ? "block" : "hidden"} md:block`}>
          <li>
            <Link to="/" className="text-green-500 w-full text-center flex justify-center  hover:underline">
              Accueil
            </Link>
          </li>
          <li>
            <Link to="/produits" className=" text-green-500 w-full flex justify-center    hover:underline">
              Produits
            </Link>
          </li>
          <li>
            <Link to="/Seconnecter" className="text-green-500  flex justify-center  w-full text-center hover:underline">
              Se connecter
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

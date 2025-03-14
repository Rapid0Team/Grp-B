import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaCcVisa, FaCcPaypal, FaCcMastercard } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 px-7 text-white py-10 mt-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
        
        <div>
          <h2 className="text-xl font-bold mb-4">À propos</h2>
          <p className="text-gray-400 text-sm">
            <span className="text-yellow-500">BioBazar</span> est votre boutique en ligne pour des produits alimentaires biologiques de qualité.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-4">Liens rapides</h2>
          <ul className="text-gray-400 text-sm space-y-2">
            <li><a href="/" className="hover:text-yellow-400">Accueil</a></li>
            <li><a href="/produits" className="hover:text-yellow-400">Produits</a></li>
            <li><a href="/contact" className="hover:text-yellow-400">Contact</a></li>
            <li><a href="/blog" className="hover:text-yellow-400">Blog</a></li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-4">Service client</h2>
          <ul className="text-gray-400 text-sm space-y-2">
            <li><a href="/faq" className="hover:text-yellow-400">FAQ</a></li>
            <li><a href="/livraison" className="hover:text-yellow-400">Livraison</a></li>
            <li><a href="/retours" className="hover:text-yellow-400">Retours</a></li>
            <li><a href="/conditions" className="hover:text-yellow-400">Conditions générales</a></li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-4">Newsletter</h2>
          <input
            type="email"
            placeholder="Votre email..."
            className="w-full p-2 text-gray-900 rounded-md"
          />
          <button className="bg-yellow-500 text-gray-900 px-4 py-2 mt-2 rounded-md w-full hover:bg-yellow-600">
            S'inscrire
          </button>

          <div className="flex justify-center space-x-4 mt-4">
            <a href="https://facebook.com"><FaFacebook size={24} color="#1877F2" /></a>
            <a href="https://instagram.com"><FaInstagram size={24} color="#E4405F" /></a>
            <a href="https://twitter.com"><FaTwitter size={24} color="#1DA1F2" /></a>
            <a href="https://linkedin.com"><FaLinkedin size={24} color="#0077B5" /></a>
          </div>
        </div>
      </div>

      <div className="mt-10 text-center text-gray-500 text-sm border-t border-gray-700 pt-4">
        <p>&copy; 2025 BioBazar - Tous droits réservés.</p>

        <div className="flex justify-center space-x-4 mt-2">
          <FaCcVisa size={32} />
          <FaCcMastercard size={32} />
          <FaCcPaypal size={32} />
        </div>
      </div>
    </footer>
  );
}

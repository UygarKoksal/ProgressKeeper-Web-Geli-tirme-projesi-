import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const location = useLocation();

  return (
    <nav className="bg-gray-800 border-b border-gray-700 mb-8 shadow-md">
      <div className="max-w-3xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-blue-400">Progress Keeper</Link>
        <div className="space-x-6">
          <Link 
            to="/" 
            className={`transition ${location.pathname === '/' ? 'text-white font-bold' : 'text-gray-400 hover:text-white'}`}
          >
            Kayıt Sayfası
          </Link>
          <Link 
            to="/stats" 
            className={`transition ${location.pathname === '/stats' ? 'text-white font-bold' : 'text-gray-400 hover:text-white'}`}
          >
            İstatistikler
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
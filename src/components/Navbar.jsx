

export default function Navbar({ setView, cartCount }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
      <div className="container">
        <a className="navbar-brand" href="#" onClick={() => setView('home')}>Mi Tienda</a>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto">
            <li className="nav-item"><button className="nav-link btn btn-link" onClick={() => setView('home')}>Home</button></li>
            <li className="nav-item"><button className="nav-link btn btn-link" onClick={() => setView('categorias')}>Categorías</button></li>
            <li className="nav-item"><button className="nav-link btn btn-link" onClick={() => setView('ofertas')}>Ofertas</button></li>
            <li className="nav-item"><button className="nav-link btn btn-link" onClick={() => setView('admin')}>Admin</button></li>
          </ul>
          <button className="btn btn-success" onClick={() => setView('carrito')}>
            🛒 Carrito ({cartCount})
          </button>
        </div>
      </div>
    </nav>
  );
}
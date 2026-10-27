import React from 'react';

export default function Navbar({ setView, cartCount }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm py-3 mb-4">
      <div className="container">
        <a className="navbar-brand fw-bold fs-4 text-warning" href="#" onClick={() => setView('home')}>
          🎮 Mi Tienda Pro
        </a>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto ms-4">
            <li className="nav-item"><button className="nav-link btn btn-link text-light" onClick={() => setView('home')}>Home</button></li>
            <li className="nav-item"><button className="nav-link btn btn-link text-light" onClick={() => setView('categorias')}>Categorías</button></li>
            <li className="nav-item"><button className="nav-link btn btn-link text-light" onClick={() => setView('ofertas')}>Ofertas 🔥</button></li>
            <li className="nav-item"><button className="nav-link btn btn-link text-light" onClick={() => setView('admin')}>Admin</button></li>
          </ul>
          <button className="btn btn-warning text-dark fw-bold px-4 rounded-pill shadow-sm" onClick={() => setView('carrito')}>
            🛒 Carrito <span className="badge bg-dark text-warning ms-1">{cartCount}</span>
          </button>
        </div>
      </div>
    </nav>
  );
}
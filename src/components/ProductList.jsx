import React from 'react';

export default function ProductList({ products, addToCart, title }) {
  return (
    <div className="container py-4">
      <h2 className="mb-4 text-dark fw-bold border-bottom pb-2">{title}</h2>
      <div className="row">
        {products.map(product => {
          // Calcula un precio anterior falso que es un 30% más alto para dar la ilusion de que esta en descuento
          const precioOriginal = product.oferta ? Math.round(product.precio * 1.3) : null;

          return (
            <div className="col-md-3 mb-4" key={product.id}>
              <div className="card h-100 shadow-sm border-0 rounded-4 overflow-hidden position-relative transition-card">
                
                {/* Etiqueta flotante para mostrar que esta en oferta */}
                {product.oferta && (
                  <span className="badge bg-danger position-absolute top-0 end-0 m-3 px-3 py-2 rounded-pill shadow-sm">
                    ¡Oferta!
                  </span>
                )}

                <img 
                  src={product.imagen} 
                  className="card-img-top bg-light p-3" 
                  alt={product.nombre} 
                  style={{ height: '180px', objectFit: 'contain' }} 
                />

                <div className="card-body d-flex flex-column bg-white">
                  <span className="text-muted small text-uppercase fw-semibold mb-1">{product.categoria}</span>
                  <h5 className="card-title fw-bold text-dark mb-2">{product.nombre}</h5>
                  
                  <div className="mt-auto">
                    {/* Renderizado condicional del precio */}
                    {product.oferta ? (
                      <div className="mb-3 d-flex align-items-center gap-2">
                        <span className="text-muted text-decoration-line-through fs-6">
                          ${precioOriginal}
                        </span>
                        <span className="text-success fs-5 fw-bold">
                          ${product.precio}
                        </span>
                      </div>
                    ) : (
                      <div className="mb-3">
                        <span className="text-dark fs-5 fw-bold">
                          ${product.precio}
                        </span>
                      </div>
                    )}

                    <button 
                      className="btn btn-dark w-100 rounded-pill fw-semibold shadow-sm" 
                      onClick={() => addToCart(product)}
                    >
                      Añadir al carrito
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
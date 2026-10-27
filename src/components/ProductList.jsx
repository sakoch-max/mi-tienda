

export default function ProductList({ products, addToCart, title }) {
  return (
    <div>
      <h2 className="mb-4">{title}</h2>
      <div className="row">
        {products.map(product => (
          <div className="col-md-3 mb-4" key={product.id}>
            <div className="card h-100">
              <img src={product.imagen} className="card-img-top" alt={product.nombre} />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{product.nombre}</h5>
                <p className="card-text text-muted">{product.categoria}</p>
                <h6 className="card-subtitle mb-2 text-primary">${product.precio}</h6>
                <button className="btn btn-dark mt-auto" onClick={() => addToCart(product)}>Añadir al carrito</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
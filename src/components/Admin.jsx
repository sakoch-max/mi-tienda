import { useState } from 'react';

export default function Admin({ products, setProducts }) {
  const [newProduct, setNewProduct] = useState({ nombre: '', precio: '', categoria: '' });

  const handleAdd = (e) => {
    e.preventDefault();
    setProducts([...products, { ...newProduct, id: Date.now(), oferta: false, imagen: 'https://via.placeholder.com/150' }]);
    setNewProduct({ nombre: '', precio: '', categoria: '' });
  };

  const handleDelete = (id) => {
    setProducts(products.filter(p => p.id !== id));
  };

  return (
    <div>
      <h2>Panel de Administración (CRUD)</h2>
      <form onSubmit={handleAdd} className="mb-4 d-flex gap-2">
        <input className="form-control" placeholder="Nombre" value={newProduct.nombre} onChange={e => setNewProduct({...newProduct, nombre: e.target.value})} required />
        <input className="form-control" type="number" placeholder="Precio" value={newProduct.precio} onChange={e => setNewProduct({...newProduct, precio: e.target.value})} required />
        <input className="form-control" placeholder="Categoría" value={newProduct.categoria} onChange={e => setNewProduct({...newProduct, categoria: e.target.value})} required />
        <button className="btn btn-primary" type="submit">Crear</button>
      </form>

      <table className="table table-bordered">
        <thead>
          <tr><th>ID</th><th>Nombre</th><th>Precio</th><th>Categoría</th><th>Acciones</th></tr>
        </thead>
        <tbody>
          {products.map(p => (
            <tr key={p.id}>
              <td>{p.id}</td><td>{p.nombre}</td><td>${p.precio}</td><td>{p.categoria}</td>
              <td><button className="btn btn-danger btn-sm" onClick={() => handleDelete(p.id)}>Eliminar</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
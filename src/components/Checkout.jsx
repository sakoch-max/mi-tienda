import { useState } from 'react';

export default function Checkout({ cart, total, onPaymentProcess }) {
  const [formData, setFormData] = useState({ nombre: '', apellidos: '', correo: '', calle: '', departamento: '', region: '', comuna: '', indicaciones: '' });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handlePay = (e) => {
    e.preventDefault();
    const isSuccess = Math.random() > 0.3; // 70% exito
    onPaymentProcess(isSuccess, formData);
  };

  return (
    <div className="row">
      <div className="col-md-8">
        <h4>Información del cliente</h4>
        <form onSubmit={handlePay}>
          <div className="row mb-3">
            <div className="col"><input type="text" className="form-control" name="nombre" placeholder="Nombre" onChange={handleChange} required /></div>
            <div className="col"><input type="text" className="form-control" name="apellidos" placeholder="Apellidos" onChange={handleChange} required /></div>
          </div>
          <input type="email" className="form-control mb-3" name="correo" placeholder="Correo" onChange={handleChange} required />
          
          <h4 className="mt-4">Dirección de entrega</h4>
          <div className="row mb-3">
            <div className="col-8"><input type="text" className="form-control" name="calle" placeholder="Calle" onChange={handleChange} required /></div>
            <div className="col-4"><input type="text" className="form-control" name="departamento" placeholder="Depto (opcional)" onChange={handleChange} /></div>
          </div>
          <button type="submit" className="btn btn-success w-100 mt-3">Pagar ahora ${total}</button>
        </form>
      </div>
      <div className="col-md-4">
        <div className="card p-3">
          <h4>Total: ${total}</h4>
          <ul className="list-group mt-3">
            {cart.map((item, i) => (
              <li key={i} className="list-group-item d-flex justify-content-between">
                <span>{item.nombre} x{item.cantidad}</span>
                <span>${item.precio * item.cantidad}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
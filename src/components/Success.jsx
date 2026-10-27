import { useState } from 'react';

export default function Success({ orderData, total }) {
  const [orderNumber] = useState(() => Math.floor(Math.random() * 1000000));

  return (
    <div className="alert alert-success text-center mt-5">
      <h3>✅ Compra exitosa. nro #{orderNumber}</h3>
      <hr />
      <p>Enviado a: {orderData.calle}, {orderData.nombre} {orderData.apellidos}</p>
      <h5>Total pagado: ${total}</h5>
    </div>
  );
}
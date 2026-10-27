export default function Error({ onRetry }) {
  return (
    <div className="alert alert-danger text-center mt-5">
      <h3>❌ No se pudo realizar el pago.</h3>
      <button className="btn btn-danger mt-3" onClick={onRetry}>VOLVER A INTENTAR</button>
    </div>
  );
}
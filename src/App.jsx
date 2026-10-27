import { useState } from 'react';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Checkout from './components/Checkout';
import Success from './components/Success';
import Error from './components/Error';
import Admin from './components/Admin';
import { initialProducts } from './data/mockDatabase';

export default function App() {
  const [products, setProducts] = useState(initialProducts);
  const [cart, setCart] = useState([]);
  const [view, setView] = useState('home');
  const [orderData, setOrderData] = useState(null);

  const addToCart = (product) => {
    const existing = cart.find(item => item.id === product.id);
    if (existing) {
      setCart(cart.map(item => item.id === product.id ? { ...item, cantidad: item.cantidad + 1 } : item));
    } else {
      setCart([...cart, { ...product, cantidad: 1 }]);
    }
  };

  const totalCart = cart.reduce((acc, item) => acc + item.precio * item.cantidad, 0);

  const handlePaymentProcess = (isSuccess, data) => {
    setOrderData(data);
    setView(isSuccess ? 'success' : 'error');
    if (isSuccess) setCart([]); // Limpiar carrito si el pago es exitoso
  };

  const renderView = () => {
    switch (view) {
      case 'home':
        return <ProductList products={products} addToCart={addToCart} title="Todos los Productos" />;
      case 'categorias':
        return <ProductList products={products} addToCart={addToCart} title="Categorías" />;
      case 'ofertas':
        return <ProductList products={products.filter(p => p.oferta)} addToCart={addToCart} title="Ofertas Especiales" />;
      case 'carrito':
        return cart.length > 0 ? (
          <div>
            <h2>Tu Carrito</h2>
            <button className="btn btn-success mb-3" onClick={() => setView('checkout')}>Ir a Pagar (${totalCart})</button>
            <ProductList products={cart} addToCart={addToCart} title="" />
          </div>
        ) : <h4>El carrito está vacío</h4>;
      case 'checkout':
        return <Checkout cart={cart} total={totalCart} onPaymentProcess={handlePaymentProcess} />;
      case 'success':
        return <Success orderData={orderData} total={totalCart} />;
      case 'error':
        return <Error onRetry={() => setView('checkout')} orderData={orderData} />;
      case 'admin':
        return <Admin products={products} setProducts={setProducts} />;
      default:
        return <ProductList products={products} addToCart={addToCart} title="Todos los Productos" />;
    }
  };

  return (
    <div>
      <Navbar setView={setView} cartCount={cart.reduce((acc, item) => acc + item.cantidad, 0)} />
      <div className="container">
        {renderView()}
      </div>
    </div>
  );
}
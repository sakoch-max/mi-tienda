/* global describe, it, expect, jasmine */
import { render, screen, fireEvent } from '@testing-library/react';
import Admin from './Admin';
import Checkout from './Checkout';
import Navbar from './Navbar';
import Success from './Success';
import Error from './Error';

describe('Pruebas adicionales', () => {

  // Pruebas de renderizado y estado en admin
  it('3. Admin: debe renderizar la tabla y el formulario', () => {
    render(<Admin products={[]} setProducts={() => {}} />);
    expect(screen.getByText('Panel de Administración (CRUD)')).toBeTruthy();
    expect(screen.getByPlaceholderText('Nombre')).toBeTruthy();
  });

  it('4. Admin: debe simular cambio de estado al escribir en el formulario', () => {
    render(<Admin products={[]} setProducts={() => {}} />);
    const inputNombre = screen.getByPlaceholderText('Nombre');
    fireEvent.change(inputNombre, { target: { value: 'Nuevo Juego' } });
    expect(inputNombre.value).toBe('Nuevo Juego');
  });

  // Pruebas de Propiedades y Eventos en CHECKOUT
  it('5. Checkout: debe renderizar el total a pagar recibido por props', () => {
    render(<Checkout cart={[]} total={15000} onPaymentProcess={() => {}} />);
    expect(screen.getByText('Total: $15000')).toBeTruthy();
  });

it('6. Checkout: debe simular el evento de pago al enviar el formulario', () => {
    const handlePaymentSpy = jasmine.createSpy('handlePaymentProcess');
    const { container } = render(<Checkout cart={[]} total={1000} onPaymentProcess={handlePaymentSpy} />);
    
    
    const form = container.querySelector('form');
    fireEvent.submit(form);
    
    expect(handlePaymentSpy).toHaveBeenCalled();
  });

  //  Pruebas de Propiedades y Renderizado en la navhbar
  it('7. Navbar: debe mostrar correctamente la cantidad del carrito', () => {
    render(<Navbar setView={() => {}} cartCount={5} />);
    expect(screen.getByText('🛒 Carrito (5)')).toBeTruthy();
  });

  it('8. Navbar: debe ejecutar setView al hacer clic en un enlace', () => {
    const setViewSpy = jasmine.createSpy('setView');
    render(<Navbar setView={setViewSpy} cartCount={0} />);
    fireEvent.click(screen.getByText('Ofertas'));
    expect(setViewSpy).toHaveBeenCalledWith('ofertas');
  });

  // Pruebas de Renderizado Condicional
  it('9. Success: debe mostrar los datos del cliente recibidos en la compra', () => {
    const mockOrder = { calle: 'Avenida Siempre Viva', nombre: 'Homero', apellidos: 'Simpson' };
    render(<Success orderData={mockOrder} total={5000} />);
    expect(screen.getByText(/Homero Simpson/i)).toBeTruthy();
  });

  it('10. Error: debe ejecutar onRetry al presionar volver a intentar', () => {
    const retrySpy = jasmine.createSpy('onRetry');
    render(<Error onRetry={retrySpy} />);
    fireEvent.click(screen.getByText('VOLVER A INTENTAR'));
    expect(retrySpy).toHaveBeenCalled();
  });
});
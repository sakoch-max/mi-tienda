/* global describe, it, expect, jasmine */
import { render, screen, fireEvent } from '@testing-library/react';
import ProductList from './ProductList';


describe('ProductList Component', () => {
  const mockProducts = [
    { id: 1, nombre: 'Juego Test', precio: 1000, categoria: 'Acción', imagen: 'test.jpg' }
  ];

  it('debe renderizar el componente con los datos proporcionados', () => {
    render(<ProductList products={mockProducts} addToCart={() => {}} title="Test Title" />);
    expect(screen.getByText('Test Title')).toBeTruthy();
    expect(screen.getByText('Juego Test')).toBeTruthy();
    expect(screen.getByText('$1000')).toBeTruthy();
  });

  it('debe ejecutar la función addToCart al hacer clic en el botón', () => {
    const addToCartSpy = jasmine.createSpy('addToCartSpy');
    render(<ProductList products={mockProducts} addToCart={addToCartSpy} title="Test" />);

    const button = screen.getByText('Añadir al carrito');
    fireEvent.click(button);

    expect(addToCartSpy).toHaveBeenCalledWith(mockProducts[0]);
  });
});
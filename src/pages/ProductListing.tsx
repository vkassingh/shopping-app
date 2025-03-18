import React from 'react';
import { useProducts } from '../hooks/useProducts';
import { useCart } from '../context/CartContext';
import { CartItem } from '../context/CartContext';

const ProductListing: React.FC = () => {
  const { data: products, isLoading, error } = useProducts();
  const { addToCart } = useCart();

  const handleAddToCart = (product: CartItem) => {
    addToCart(product);
    window.alert(`Added to the cart!`);
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading products</div>;

  return (
    <div className="product-listing">
      <h1>Products</h1>
      <div className="product-grid">
        {products?.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            <p>${product.price}</p>
            <button onClick={() => handleAddToCart({ ...product, quantity: 1 })}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductListing;
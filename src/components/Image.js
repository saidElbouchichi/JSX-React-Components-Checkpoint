import React from 'react';
import product from '../product';

// Affiche l'image du produit
const Image = () => (
  <img className="product-image" src={product.image} alt={product.name} />
);

export default Image;

// Shop.jsx
import React from "react";
import "./Shop.css";

const products = [
  {
    id: 1,
    name: "Silky Durag",
    category: "Durags",
    price: 15,
    image: "https://images.unsplash.com/photo-1600185365081-2995f08b9f03?crop=entropy&cs=tinysrgb&fit=max&w=200&h=200",
  },
  {
    id: 2,
    name: "Cotton Durag",
    category: "Durags",
    price: 12,
    image: "https://images.unsplash.com/photo-1600185365081-2995f08b9f03?crop=entropy&cs=tinysrgb&fit=max&w=200&h=200",
  },
  {
    id: 3,
    name: "Baseball Cap",
    category: "Caps",
    price: 20,
    image: "https://images.unsplash.com/photo-1598300058740-60dcf82f5d38?crop=entropy&cs=tinysrgb&fit=max&w=200&h=200",
  },
  {
    id: 4,
    name: "Snapback Cap",
    category: "Caps",
    price: 25,
    image: "https://images.unsplash.com/photo-1598300058740-60dcf82f5d38?crop=entropy&cs=tinysrgb&fit=max&w=200&h=200",
  },
  {
    id: 5,
    name: "Hair Cream - Smooth",
    category: "Hair Creams",
    price: 18,
    image: "https://images.unsplash.com/photo-1598609399704-2c6aafc0f82a?crop=entropy&cs=tinysrgb&fit=max&w=200&h=200",
  },
  {
    id: 6,
    name: "Hair Cream - Shine",
    category: "Hair Creams",
    price: 22,
    image: "https://images.unsplash.com/photo-1598609399704-2c6aafc0f82a?crop=entropy&cs=tinysrgb&fit=max&w=200&h=200",
  },
];


const Shop = () => {
  return (
    <div className="shop-container">
      <h1>Shop</h1>
      <div className="products-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p className="category">{product.category}</p>
            <p className="price">${product.price}</p>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;

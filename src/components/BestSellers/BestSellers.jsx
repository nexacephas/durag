import { FiShoppingBag } from "react-icons/fi";
import "./BestSellers.css";

const products = [
  {
    id: 1,
    name: "Classic Black Cap",
    price: "₦12,000",
    rating: 4.8,
    tag: "Bestseller",
    image:
      "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=800",
  },
  {
    id: 2,
    name: "Silk Durag",
    price: "₦6,500",
    rating: 4.6,
    tag: "Trusted",
    image:
      "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?q=80&w=800",
  },
  {
    id: 3,
    name: "Premium Hair Cream",
    price: "₦8,000",
    rating: 4.9,
    tag: "Top Rated",
    image:
      "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?q=80&w=800",
  },
  {
    id: 4,
    name: "Minimal Street Cap",
    price: "₦14,000",
    rating: 4.7,
    tag: "Popular",
    image:
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=800",
  },
];

const BestSellers = () => {
  return (
    <section className="best-sellers section">
      <div className="container">
        <div className="best-header">
          <h2>Best Sellers</h2>
          <p>Our most trusted and loved essentials.</p>
        </div>

        <div className="product-grid">
          {products.map((product) => (
            <div className="product-card" key={product.id}>
              <div className="product-image">
                <img src={product.image} alt={product.name} />

                {/* Trust Tag */}
                <span className="product-tag">{product.tag}</span>

                {/* Hover Add to Cart */}
                <button className="add-to-cart">
                  <FiShoppingBag />
                  Add to Cart
                </button>
              </div>

              <div className="product-info">
                <h4>{product.name}</h4>

                {/* Rating */}
                <div className="rating">
                  <span className="dots">
                    ● ● ● ● <span className="muted">●</span>
                  </span>
                  <span className="score">{product.rating}</span>
                </div>

                <span className="price">{product.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestSellers;

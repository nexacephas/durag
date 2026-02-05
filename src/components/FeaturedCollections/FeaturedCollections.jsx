import "./FeaturedCollections.css";
import Cap from "../../assets/A cap  𝐜𝐡𝐨𝐜𝐨𝐥𝐚𝐭𝐞_🤎.jpg";
import Durag from "../../assets/durag.jpg";
import HairCream from "../../assets/Men Deserve - Hair Styling Cream (100g) For Dry & Frizzy Hair.jpg";
const FeaturedCollections = () => {
  return (
    <section className="collections section">
      <div className="container">
        {/* Section Header */}
        <div className="collections-header">
          <h2>Featured Collections</h2>
          <p>Curated essentials designed to elevate your everyday style.</p>
        </div>

        {/* Cards */}
        <div className="collections-grid">
          {/* Cap */}
          <div className="collection-card">
            <img src={Cap} alt="Caps" />
            <div className="collection-overlay">
              <h3>Caps</h3>
              <span>Shop Now</span>
            </div>
          </div>

          {/* Durag */}
          <div className="collection-card">
            <img src={Durag} alt="Durags" />
            <div className="collection-overlay">
              <h3>Durags</h3>
              <span>Shop Now</span>
            </div>
          </div>

          {/* Hair Cream */}
          <div className="collection-card">
            <img src={HairCream} alt="Hair Creams" />
            <div className="collection-overlay">
              <h3>Hair Creams</h3>
              <span>Shop Now</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollections;

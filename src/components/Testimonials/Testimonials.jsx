import { useState } from "react";
import "./Testimonials.css";

const testimonials = [
  {
    id: 1,
    name: "Pape",
    role: "Wave Enthusiast",
    comment:
      "Since I started using Vibez360Waves products, my waves leveled up completely. The discipline and consistency tips changed everything.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 2,
    name: "Jordan Sam",
    role: "Barber",
    comment:
      "The quality speaks for itself. Premium grooming essentials that actually deliver results. My clients notice the difference instantly.",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    id: 3,
    name: "Noel",
    role: "Lifestyle Creator",
    comment:
      "Vibez360Waves isn’t just about waves — it’s about presence. The brand represents discipline and identity.",
    image: "https://randomuser.me/api/portraits/men/55.jpg",
  },
  {
    id: 4,
    name: "Deon",
    role: "Barber",
    comment:
      "These products are a game-changer. Every client that tries them sees visible results fast.",
    image: "https://randomuser.me/api/portraits/men/66.jpg",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleCards = 3;

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev + 1 > testimonials.length - visibleCards ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev - 1 < 0 ? testimonials.length - visibleCards : prev - 1
    );
  };

  return (
    <section className="testimonials section">
      <div className="container">
        <div className="test-header">
          <h2>Voices of the Vibez Movement</h2>
          <p>Real results from those committed to elite waves.</p>
        </div>

        <div className="carousel-wrapper">
          <button className="arrow left" onClick={prevSlide}>
            &#10094;
          </button>

          <div className="carousel">
            <div
              className="carousel-inner"
              style={{
                transform: `translateX(-${currentIndex * (100 / visibleCards)}%)`,
              }}
            >
              {testimonials.map((test) => (
                <div className="test-card" key={test.id}>
                  <div className="test-image">
                    <img src={test.image} alt={test.name} />
                  </div>
                  <div className="test-content">
                    <p>"{test.comment}"</p>
                    <h4>{test.name}</h4>
                    <span>{test.role}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button className="arrow right" onClick={nextSlide}>
            &#10095;
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

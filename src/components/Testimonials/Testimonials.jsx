import "./Testimonials.css";

const testimonials = [
  {
    id: 1,
    name: "Amina S.",
    role: "Fashion Enthusiast",
    comment:
      "The quality and style are unmatched. Every piece feels luxurious and carefully curated.",
    image:
      "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    id: 2,
    name: "David K.",
    role: "Streetwear Blogger",
    comment:
      "OREMU nails the perfect blend of minimal and bold fashion. I get compliments everywhere I go!",
    image:
      "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 3,
    name: "Chinelo O.",
    role: "Lifestyle Influencer",
    comment:
      "Everything I’ve purchased feels premium. The attention to detail is impeccable.",
    image:
      "https://randomuser.me/api/portraits/women/44.jpg",
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials section">
      <div className="container">
        <div className="test-header">
          <h2>What Our Clients Say</h2>
          <p>Authentic reviews from fashion lovers like you.</p>
        </div>

        <div className="test-grid">
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
    </section>
  );
};

export default Testimonials;

import "./TestimonialCard.css";

export default function TestimonialCard({ quote, name, role }) {
  return (
    <div className="testimonial-card">
      <p className="quote">“{quote}”</p>
      <div className="author">
        <strong>{name}</strong>
        <span>{role}</span>
      </div>
    </div>
  );
}

import "./PricingCard.css";

export default function PricingCard({ title, price, description, highlight }) {
  return (
    <div className={`pricing-card ${highlight ? "highlight" : ""}`}>
      <h3>{title}</h3>
      <p className="price">{price}</p>
      <p className="description">{description}</p>
      <button className="pricing-btn">
        {title === "Scale" ? "Contact Sales" : "Get Started"}
      </button>
    </div>
  );
}

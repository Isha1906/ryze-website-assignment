import PricingCard from "./PricingCard";
import "./Pricing.css";

export default function Pricing() {
  const plans = [
    {
      title: "Starter",
      price: "Free",
      description: "Basic analytics and limited AI insights.",
    },
    {
      title: "Growth",
      price: "₹999 / month",
      description: "Advanced insights, alerts, and budget optimization.",
     
    },
    {
      title: "Scale",
      price: "Custom",
      description: "Custom integrations and enterprise-grade support.",
    },
  ];

  return (
    <section className="pricing">
      <div className="container">
        <h2 className="section-title">Simple Pricing</h2>
        <p className="section-subtitle">
          Choose a plan that fits your team’s needs.
        </p>

        <div className="pricing-grid">
          {plans.map((plan, index) => (
            <PricingCard key={index} {...plan} />
          ))}
        </div>
      </div>
    </section>
  );
}

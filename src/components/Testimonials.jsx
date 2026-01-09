import TestimonialCard from "./TestimonialCard";
import "./Testimonials.css";

export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "Ryze AI helped us identify underperforming campaigns within days. The insights were clear and actionable.",
      name: "Asha Sharma",
      role: "Growth Manager, SaaS Startup",
    },
    {
      quote:
        "The dashboard is intuitive and the AI recommendations actually make sense. It saved us hours every week.",
      name: "Daksh Vats",
      role: "Performance Marketer",
    },
    {
      quote:
        "We reduced wasted ad spend by almost 20% after using Ryze AI for just one month.",
      name: "Priya Rajput",
      role: "Founder, D2C Brand",
    },
  ];

  return (
    <section className="testimonials">
      <div className="container">
        <h2 className="section-title">Trusted by Growing Teams</h2>
        <p className="section-subtitle">
          See what marketers and founders say about Ryze AI.
        </p>

        <div className="testimonials-grid">
          {testimonials.map((item, index) => (
            <TestimonialCard
              key={index}
              quote={item.quote}
              name={item.name}
              role={item.role}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

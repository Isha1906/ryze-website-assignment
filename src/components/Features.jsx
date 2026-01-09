import FeatureCard from "./FeatureCard";
import "./Features.css";

export default function Features() {
  const features = [
    {
      title: "Campaign Intelligence",
      description:
        "Analyze campaign performance across platforms in one unified dashboard.",
    },
    {
      title: "Budget Optimization",
      description:
        "Identify wasted spend and reallocate budgets automatically using AI.",
    },
    {
      title: "Audience Insights",
      description:
        "Discover which audience segments convert best and why.",
    },
    {
      title: "Real-Time Alerts",
      description:
        "Get instant notifications when performance drops or spikes.",
    },
  ];

  return (
    <section className="features">
      <div className="container">
        <h2 className="section-title">Powerful Features</h2>
        <p className="section-subtitle">
          Everything you need to make smarter, faster marketing decisions.
        </p>

        <div className="features-grid">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

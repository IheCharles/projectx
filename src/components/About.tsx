interface Feature {
  icon: string;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: "💰",
    title: "Factory-Direct Pricing",
    description:
      "Cut out the middlemen. Source retatrutide straight from our manufacturing partners in China at the best rates available.",
  },
  {
    icon: "🌍",
    title: "Global Shipping",
    description:
      "We ship to destinations worldwide with reliable logistics partners, ensuring safe and timely delivery to your door.",
  },
  {
    icon: "📦",
    title: "Bulk Orders Welcome",
    description:
      "Whether you need grams or kilograms, we accommodate orders of all sizes with flexible MOQ and scaling discounts.",
  },
  {
    icon: "✅",
    title: "Quality Assured",
    description:
      "Every batch undergoes rigorous third-party testing. Certificates of analysis (COA) provided with every order.",
  },
];

function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <h2 className="section-title">Why RetaWholeSale?</h2>
        <p className="section-subtitle">
          We make wholesale procurement simple, transparent, and cost-effective.
        </p>

        <div className="features-grid">
          {features.map((feature) => (
            <div className="feature-card" key={feature.title}>
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;

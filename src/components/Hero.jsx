import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
      <h1>AI that helps your business grow faster</h1>
      <p>
        Ryze empowers teams to automate decisions, gain insights, and scale
        smarter using AI-powered solutions.
      </p>
      </div>
      
      <div className="hero-buttons">
      <form>
        <input id="email" type="email" className="form-control"></input>
      </form>
        <button className="btn btn-outline">Get Started <i className="bi bi-arrow-right-circle"></i></button>
      </div>
    </section>
  );
}

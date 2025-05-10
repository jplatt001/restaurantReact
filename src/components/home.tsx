import "../styles.css";

function Home() {
  return (
    <div className="background">
      <header className="header">
        <nav className="nav">
          <div className="logo">The Burger Den</div>
          <ul className="nav-links">
            <li><a href="/home">Home</a></li>
            <li><a href="/menu">Menu</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main className="home-main">
        <div className="hero-image"></div>
      </main>

      <footer className="footer">
        <p>Follow us on:
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"> Facebook </a> | 
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"> Instagram </a>
        </p>
        <p>Business Hours: 9 AM - 10 PM</p>
      </footer>
    </div>
  );
}

export default Home;

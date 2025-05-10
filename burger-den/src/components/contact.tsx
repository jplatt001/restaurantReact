import "../styles.css";

function Contact() {
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

      <main className="py-16 bg-[#ebccc2] min-h-screen flex flex-col items-center">
        <h2 className="text-5xl font-bold mb-12 text-[#642800]">Contact Us</h2>

        <div className="flex flex-col items-center gap-16 w-full max-w-[600px]">
          <form className="flex flex-col gap-8 w-full">
            <input
              type="text"
              placeholder="Name"
              className="p-5 text-lg border rounded focus:outline-none focus:ring-2 focus:ring-[#a1501a]"
              required
            />
            <input
              type="email"
              placeholder="Email"
              className="p-5 text-lg border rounded focus:outline-none focus:ring-2 focus:ring-[#a1501a]"
              required
            />
            <textarea
              placeholder="Your Message"
              className="p-5 text-lg border rounded focus:outline-none focus:ring-2 focus:ring-[#a1501a]"
              rows={6}
              required
            ></textarea>
            <button
              type="submit"
              className="bg-[#a1501a] text-white px-10 py-4 rounded hover:bg-[#8b3d0c] text-xl font-bold"
            >
              Send Message
            </button>
          </form>

          <div className="w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48389.977531594144!2d-74.08414985136723!3d40.709791499999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25be6cb435b3d%3A0x172a6c3b787b5636!2s7th%20Street%20Burger%20Financial%20District!5e0!3m2!1sen!2sus!4v1741663052529!5m2!1sen!2sus"
              width="100%"
              height="350"
              className="rounded-md shadow-lg"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps"
            ></iframe>
          </div>
        </div>
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

export default Contact;

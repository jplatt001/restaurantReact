import {useState } from 'react';

const Menu = () => {
  const [cart, setCart] = useState<{ name: string, price: number, quantity: number }[]>([]);

  const addToCart = (name: string, price: number) => {
    const existingItem = cart.find(item => item.name === name);
    
    if (existingItem) {
      const updatedCart = cart.map(item => 
        item.name === name 
        ? { ...item, quantity: item.quantity + 1 } 
        : item
      );
      setCart(updatedCart);
    } else {
      setCart([...cart, { name, price, quantity: 1 }]);
    }
  };

  const removeFromCart = (name: string) => {
    const updatedCart = cart.filter(item => item.name !== name);
    setCart(updatedCart);
  };

  return (
    <div>
      {/* Header */}
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

      <h2 className="title">Our Menu</h2>
      
      {/* Menu Items */}
      <section className="menu-items py-12 bg-[#ebccc2]">
        <div className="menu-items">
          {/* Menu Item: Cheese Burger */}
          <div className="item">
            <div className="bg-white rounded-xl overflow-hidden shadow-md">
              <img src="/images/cheeseBurger.jpg" alt="Cheese Burger" className="menu-img"/>
            </div>
            <h3 className="text-2xl font-semibold mb-2 text-[#642800]">Cheese Burger</h3>
            <p className="text-xl font-medium">$10</p>
            <button className="add-to-cart-btn" onClick={() => addToCart("Cheese Burger", 10)}>Add to Cart</button>

          </div>

          {/* Menu Item: Bacon Burger */}
          <div className="item">
            <div className="bg-white rounded-xl overflow-hidden shadow-md">
              <img src="/images/baconBurger.jpg" alt="Bacon Burger" className="menu-img" />
            </div>
            <h3 className="text-2xl font-semibold mb-2 text-[#642800]">Bacon Burger</h3>
            <p className="text-xl font-medium">$12</p>
            <button className="add-to-cart-btn" onClick={() => addToCart("Bacon Burger", 12)}>Add to Cart</button>
          </div>

          {/* Menu Item: Chicken Sandwich */}
          <div className="item">
            <div className="bg-white rounded-xl overflow-hidden shadow-md">
              <img src="/images/chickenSandwich.jpg" alt="Chicken Sandwich" className="menu-img"/>
            </div>
            <h3 className="text-2xl font-semibold mb-2 text-[#642800]">Chicken Sandwich</h3>
            <p className="text-xl font-medium">$9</p>
            <button className="add-to-cart-btn" onClick={() => addToCart("Chicken Sandwich", 9)}>Add to Cart</button>
          </div>
        </div>
      </section>

      {/* Cart Section */}
      <section className="cart py-12 bg-[#ebccc2]">
        <h2 className="text-4xl font-bold text-center mb-10 text-[#642800]">Shopping Cart</h2>
        <ul className="list-none text-center">
          {cart.map((item, index) => (
            <li key={index} className="mb-4 text-lg text-[#642800]">
              {item.name} - ${item.price} x {item.quantity} 
              <button onClick={() => removeFromCart(item.name)} className="ml-4 text-red-600 hover:text-red-800">Remove</button>
            </li>
          ))}
        </ul>
        <p className="text-2xl font-bold">Total: ${cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}</p>
        <button onClick={() => setCart([])} className="bg-[#a1501a] text-white px-6 py-3 rounded mt-4 hover:bg-[#8b3d0c]">Clear Cart</button>
      </section>

      {/* Footer */}
      <footer className="footer py-4 bg-[#642800] text-white text-center">
        <p>Follow us on: 
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"> Facebook </a> | 
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"> Instagram </a>
        </p>
        <p>Business Hours: 9 AM - 10 PM</p>
      </footer>
    </div>
  );
};

export default Menu;

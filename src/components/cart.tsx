import { useEffect, useState } from 'react';

// Cart component to display items in the cart and handle cart actions
const Cart = () => {
  const [cart, setCart] = useState<{ name: string, price: number, quantity: number }[]>([]);

  // Load cart data from localStorage when the component mounts
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(savedCart);
  }, []);

  // Add item to cart
  /*
  const addToCart = (name: string, price: number) => {
    const newCart = [...cart];
    const existingItem = newCart.find(item => item.name === name);

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      newCart.push({ name, price, quantity: 1 });
    }

    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };*/

  // Remove item from cart
  const removeFromCart = (name: string) => {
    const newCart = cart.filter(item => item.name !== name);
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  // Clear the entire cart
  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("cart");
  };

  // Calculate total price
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <section className="cart">
      <h2>Shopping Cart</h2>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>
            {item.name} - ${item.price} x {item.quantity} 
            <button onClick={() => removeFromCart(item.name)}>Remove</button>
          </li>
        ))}
      </ul>
      <p><strong>Total:</strong> ${total.toFixed(2)}</p>
      <button onClick={clearCart}>Clear Cart</button>
    </section>
  );
};

export default Cart;

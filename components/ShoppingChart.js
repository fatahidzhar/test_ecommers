const ShoppingCart = ({ cart, onCheckout }) => {
  return (
    <div
      style={{
        position: "fixed",
        top: "10px",
        right: "10px",
        border: "1px solid #ccc",
        padding: "10px",
      }}>
      <h3>Shopping Cart</h3>
      {cart.map((item, index) => (
        <div key={index}>
          {item.name} - {item.price}
        </div>
      ))}
      <button onClick={onCheckout}>Checkout</button>
    </div>
  );
};

export default ShoppingCart;

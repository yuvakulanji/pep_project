import { useState } from "react";
import "./App.css";

import RoleSelection from "./pages/RoleSelection";
import CustomerDashboard from "./pages/CustomerDashboard";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";

function App() {
  const [selectedRole, setSelectedRole] = useState(null);
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [showCheckout, setShowCheckout] = useState(false);

  const handleRoleSelection = (role) => {
    setSelectedRole(role);
  };

  // =========================================================
  // CHECKOUT PAGE
  // =========================================================

  if (showCheckout) {
    return (
      <CheckoutPage
        cart={cart}
        onBackToCart={() => {
          setShowCheckout(false);
          setShowCart(true);
        }}
        onPlaceOrder={() => {
          alert("Order placed successfully!");
        }}
      />
    );
  }

  // =========================================================
  // CART PAGE
  // =========================================================

  if (showCart) {
    return (
      <CartPage
        cart={cart}
        setCart={setCart}
        onBackToShopping={() => setShowCart(false)}
        onProceedToCheckout={() => {
          setShowCart(false);
          setShowCheckout(true);
        }}
      />
    );
  }

  // =========================================================
  // ROLE SELECTION
  // =========================================================

  if (!selectedRole) {
    return (
      <RoleSelection
        onSelectRole={handleRoleSelection}
      />
    );
  }

  // =========================================================
  // CUSTOMER SIDE
  // =========================================================

  if (selectedRole === "customer") {
    return (
      <CustomerDashboard
        cart={cart}
        setCart={setCart}
        onOpenCart={() => setShowCart(true)}
      />
    );
  }

  // =========================================================
  // SELLER SIDE
  // =========================================================

  return (
    <div>
      <h1>Seller Dashboard</h1>
      <p>Seller side coming next...</p>
    </div>
  );
}

export default App;
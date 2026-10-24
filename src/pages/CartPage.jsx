function CartPage({
  cart,
  setCart,
  onBackToShopping,
  onProceedToCheckout,
}) {
  // Group same products and calculate quantity
  const cartItems = cart.reduce((items, product) => {
    const existingItem = items.find(
      (item) => item.id === product.id
    );

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      items.push({
        ...product,
        quantity: 1,
      });
    }

    return items;
  }, []);

  // Increase quantity
  const increaseQuantity = (productId) => {
    const product = cart.find(
      (item) => item.id === productId
    );

    if (product) {
      setCart((previousCart) => [
        ...previousCart,
        product,
      ]);
    }
  };

  // Decrease quantity
  const decreaseQuantity = (productId) => {
    const index = cart.findIndex(
      (item) => item.id === productId
    );

    if (index !== -1) {
      setCart((previousCart) => {
        const newCart = [...previousCart];

        newCart.splice(index, 1);

        return newCart;
      });
    }
  };

  // Remove completely
  const removeFromCart = (productId) => {
    setCart((previousCart) =>
      previousCart.filter(
        (product) => product.id !== productId
      )
    );
  };

  // Calculate total
  const totalAmount = cartItems.reduce(
    (total, product) =>
      total + product.price * product.quantity,
    0
  );

  return (
    <div className="cart-page">

      {/* Header */}
      <header className="customer-header">

        <div className="brand">

          <div className="brand-logo">
            RG
          </div>

          <div>
            <h2>ReturnGuard</h2>
          </div>

        </div>

        <button
          className="header-button"
          onClick={onBackToShopping}
        >
          ← Continue Shopping
        </button>

      </header>

      {/* Main Content */}
      <main className="cart-content">

        <div className="cart-title">

          <h1>
            Shopping Cart
          </h1>

          <p>
            {cart.length} item
            {cart.length !== 1 ? "s" : ""} in your cart
          </p>

        </div>

        {cart.length === 0 ? (

          /* Empty Cart */
          <div className="empty-cart">

            <div className="empty-cart-icon">
              🛒
            </div>

            <h2>
              Your cart is empty
            </h2>

            <p>
              Add some products to your cart to continue.
            </p>

            <button
              className="continue-shopping-button"
              onClick={onBackToShopping}
            >
              Continue Shopping
            </button>

          </div>

        ) : (

          <div className="cart-layout">

            {/* CART ITEMS */}
            <div className="cart-items">

              {cartItems.map((product) => (

                <div
                  className="cart-item"
                  key={product.id}
                >

                  {/* Product Image */}
                  <div className="cart-item-image">

                    <img
                      src={product.image}
                      alt={product.name}
                    />

                  </div>

                  {/* Product Details */}
                  <div className="cart-item-details">

                    <p className="cart-item-brand">
                      {product.brand}
                    </p>

                    <h3>
                      {product.name}
                    </h3>

                    <p className="cart-item-category">
                      {product.category}
                    </p>

                    <div className="cart-item-price">
                      ₹{product.price.toLocaleString("en-IN")}
                    </div>

                    {/* Quantity + Remove */}
                    <div className="cart-actions">

                      {/* Quantity */}
                      <div className="quantity-control">

                        <button
                          className="quantity-button"
                          onClick={() =>
                            decreaseQuantity(product.id)
                          }
                        >
                          −
                        </button>

                        <span className="quantity-number">
                          {product.quantity}
                        </span>

                        <button
                          className="quantity-button"
                          onClick={() =>
                            increaseQuantity(product.id)
                          }
                        >
                          +
                        </button>

                      </div>

                      {/* Remove */}
                      <button
                        className="remove-button"
                        onClick={() =>
                          removeFromCart(product.id)
                        }
                      >
                        🗑 Remove
                      </button>

                    </div>

                  </div>

                </div>

              ))}

            </div>

            {/* ORDER SUMMARY */}
            <div className="cart-summary">

              <h2>
                Order Summary
              </h2>

              <div className="summary-row">

                <span>
                  Items
                </span>

                <span>
                  {cart.length}
                </span>

              </div>

              <div className="summary-row">

                <span>
                  Subtotal
                </span>

                <span>
                  ₹{totalAmount.toLocaleString("en-IN")}
                </span>

              </div>

              <div className="summary-row">

                <span>
                  Delivery
                </span>

                <span className="free">
                  FREE
                </span>

              </div>

              <div className="summary-divider"></div>

              <div className="summary-total">

                <span>
                  Total
                </span>

                <span>
                  ₹{totalAmount.toLocaleString("en-IN")}
                </span>

              </div>

              {/* Proceed to Checkout */}
              <button
                className="checkout-button"
                onClick={onProceedToCheckout}
              >
                Proceed to Checkout
              </button>

            </div>

          </div>

        )}

      </main>

    </div>
  );
}

export default CartPage;
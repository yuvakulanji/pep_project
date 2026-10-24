import { useState } from "react";

function CheckoutPage({ cart, onBackToCart, onPlaceOrder }) {
  const savedAddress = JSON.parse(
    localStorage.getItem("returnguard_address") || "null"
  );

  const [address, setAddress] = useState(
    savedAddress || {
      fullName: "",
      mobile: "",
      address: "",
      city: "",
      pincode: "",
    }
  );

  const [paymentMethod, setPaymentMethod] = useState("");

  const [editingAddress, setEditingAddress] = useState(false);

  const totalAmount = cart.reduce(
    (total, product) => total + product.price,
    0
  );

  const isFirstPurchase = !savedAddress;

  const handleSaveAddress = () => {
    if (
      !address.fullName ||
      !address.mobile ||
      !address.address ||
      !address.city ||
      !address.pincode
    ) {
      alert("Please enter all delivery details.");
      return;
    }

    localStorage.setItem(
      "returnguard_address",
      JSON.stringify(address)
    );

    setEditingAddress(false);

    alert("Address updated successfully!");
  };

  const handleProceed = () => {
    if (isFirstPurchase || editingAddress) {
      if (
        !address.fullName ||
        !address.mobile ||
        !address.address ||
        !address.city ||
        !address.pincode
      ) {
        alert("Please enter all delivery details.");
        return;
      }

      localStorage.setItem(
        "returnguard_address",
        JSON.stringify(address)
      );
    }

    if (!paymentMethod) {
      alert("Please select a transaction method.");
      return;
    }

    onPlaceOrder();
  };

  return (
    <div className="checkout-page">

      {/* HEADER */}
      <header className="customer-header">
        <div className="brand">
          <div className="brand-logo">RG</div>

          <div>
            <h2>ReturnGuard</h2>
          </div>
        </div>

        <button
          className="header-button"
          onClick={onBackToCart}
        >
          ← Back to Cart
        </button>
      </header>


      {/* CONTENT */}
      <main className="checkout-content">

        <div className="checkout-title">
          <h1>Checkout</h1>

          <p>
            Review your order and complete your purchase.
          </p>
        </div>


        <div className="checkout-layout">

          {/* LEFT SIDE */}
          <div>

            {/* DELIVERY DETAILS */}
            <div className="delivery-card">

              <h2>Delivery Details</h2>

              {isFirstPurchase || editingAddress ? (

                <div className="checkout-form">

                  <div className="form-group">
                    <label>Full Name</label>

                    <input
                      type="text"
                      placeholder="Enter your name"
                      value={address.fullName}
                      onChange={(e) =>
                        setAddress({
                          ...address,
                          fullName: e.target.value,
                        })
                      }
                    />
                  </div>


                  <div className="form-group">
                    <label>Mobile Number</label>

                    <input
                      type="text"
                      placeholder="Enter mobile number"
                      value={address.mobile}
                      onChange={(e) =>
                        setAddress({
                          ...address,
                          mobile: e.target.value,
                        })
                      }
                    />
                  </div>


                  <div className="form-group">
                    <label>Address</label>

                    <textarea
                      placeholder="Enter delivery address"
                      rows="4"
                      value={address.address}
                      onChange={(e) =>
                        setAddress({
                          ...address,
                          address: e.target.value,
                        })
                      }
                    ></textarea>
                  </div>


                  <div className="form-row">

                    <div className="form-group">
                      <label>City</label>

                      <input
                        type="text"
                        placeholder="City"
                        value={address.city}
                        onChange={(e) =>
                          setAddress({
                            ...address,
                            city: e.target.value,
                          })
                        }
                      />
                    </div>


                    <div className="form-group">
                      <label>Pincode</label>

                      <input
                        type="text"
                        placeholder="Pincode"
                        value={address.pincode}
                        onChange={(e) =>
                          setAddress({
                            ...address,
                            pincode: e.target.value,
                          })
                        }
                      />
                    </div>

                  </div>


                  {/* SAVE ADDRESS */}
                  {editingAddress && (
                    <button
                      type="button"
                      className="save-address-button"
                      onClick={handleSaveAddress}
                    >
                      Save Address
                    </button>
                  )}

                </div>

              ) : (

                <div className="saved-address">

                  <div className="saved-address-header">

                    <h3>Saved Delivery Address</h3>

                    <div className="saved-address-actions">

                      <span>✓ Saved</span>

                      <button
                        type="button"
                        className="edit-address-button"
                        onClick={() =>
                          setEditingAddress(true)
                        }
                      >
                        ✎ Edit
                      </button>

                    </div>

                  </div>


                  <p>
                    <strong>{address.fullName}</strong>
                  </p>

                  <p>{address.mobile}</p>

                  <p>{address.address}</p>

                  <p>
                    {address.city} - {address.pincode}
                  </p>

                </div>

              )}

            </div>


            {/* PAYMENT METHOD */}
            <div className="payment-card">

              <h2>Transaction Method</h2>

              <div className="payment-options">

                <button
                  type="button"
                  className={`payment-option ${
                    paymentMethod === "UPI"
                      ? "selected"
                      : ""
                  }`}
                  onClick={() =>
                    setPaymentMethod("UPI")
                  }
                >
                  <span className="payment-icon">
                    📱
                  </span>

                  <span>
                    <strong>UPI</strong>
                    <small>Pay using UPI</small>
                  </span>
                </button>


                <button
                  type="button"
                  className={`payment-option ${
                    paymentMethod === "Card"
                      ? "selected"
                      : ""
                  }`}
                  onClick={() =>
                    setPaymentMethod("Card")
                  }
                >
                  <span className="payment-icon">
                    💳
                  </span>

                  <span>
                    <strong>Credit / Debit Card</strong>
                    <small>
                      Pay securely using card
                    </small>
                  </span>
                </button>


                <button
                  type="button"
                  className={`payment-option ${
                    paymentMethod === "COD"
                      ? "selected"
                      : ""
                  }`}
                  onClick={() =>
                    setPaymentMethod("COD")
                  }
                >
                  <span className="payment-icon">
                    💵
                  </span>

                  <span>
                    <strong>Cash on Delivery</strong>
                    <small>
                      Pay when your order arrives
                    </small>
                  </span>
                </button>

              </div>

            </div>

          </div>


          {/* RIGHT SIDE */}
          <div className="checkout-summary">

            <h2>Order Summary</h2>

            <div className="checkout-products">

              {cart.map((product, index) => (

                <div
                  className="checkout-product"
                  key={`${product.id}-${index}`}
                >

                  <img
                    src={product.image}
                    alt={product.name}
                  />

                  <div>

                    <h3>{product.name}</h3>

                    <p>{product.category}</p>

                    <strong>
                      ₹
                      {product.price.toLocaleString(
                        "en-IN"
                      )}
                    </strong>

                  </div>

                </div>

              ))}

            </div>


            <div className="checkout-divider"></div>


            <div className="checkout-total">

              <span>Total</span>

              <strong>
                ₹
                {totalAmount.toLocaleString("en-IN")}
              </strong>

            </div>


            <button
              className="place-order-button"
              onClick={handleProceed}
            >
              Proceed
            </button>

          </div>

        </div>

      </main>

    </div>
  );
}

export default CheckoutPage;
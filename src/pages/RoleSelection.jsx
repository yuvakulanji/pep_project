function RoleSelection({ onSelectRole }) {
  return (
    <div className="role-page">
      <div className="role-card">
        <h1>Welcome to ReturnGuard</h1>

        <p className="role-subtitle">
          Please select how you want to continue
        </p>

        <div className="role-options">
          <button
            className="role-option customer"
            onClick={() => onSelectRole("customer")}
          >
            <div className="role-icon">👤</div>

            <h2>Customer</h2>

            <p>
              Browse products, place orders and request returns.
            </p>
          </button>

          <button
            className="role-option seller"
            onClick={() => onSelectRole("seller")}
          >
            <div className="role-icon">🏪</div>

            <h2>Seller</h2>

            <p>
              Manage orders and monitor return abuse predictions.
            </p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default RoleSelection;
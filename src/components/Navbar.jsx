import { useSelector } from "react-redux";
import { FaCartShopping } from "react-icons/fa6";

const Navbar = () => {
  const { amount } = useSelector((store) => store.cart);
  return (
    <nav>
      <div className="nav-center">
        <h3>Amazon</h3>
        <div className="nav-container">
          <FaCartShopping />
          <div className="amount-container">
            <p className="total-amount">{amount}</p>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;

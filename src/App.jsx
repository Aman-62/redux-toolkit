import CartSection from "./components/CartSection";
import Navbar from "./components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "./features/users/usersSlice";
import { calcTotals } from "./features/cart/cartSlice";
import { useEffect } from "react";
import Modal from "./components/Modal";

const App = () => {
  const { cartItems } = useSelector((store) => store.cart);
  const { isOpen } = useSelector((store) => store.modal);
  const { userList, isLoading } = useSelector((store) => store.users);

  console.log(userList, isLoading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calcTotals());
  }, [cartItems]);

  useEffect(() => {
    dispatch(getUsers());
  }, []);
  return (
    <>
      {isOpen ? <Modal /> : null}
      <header>
        <Navbar />
      </header>

      <main>
        <CartSection />
      </main>
    </>
  );
};
export default App;

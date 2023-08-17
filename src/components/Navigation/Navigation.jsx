import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { CiShoppingCart } from 'react-icons/ci';
import { CartContext } from '../Context/CartContext';
import ModalPopup from '../NPM Packages/ModalPopup';
import axios from 'axios';

const Navigation = () => {
  const { state, Dispatch } = useContext(CartContext);
  const [openModal, setOpenModal] = useState(false);

  const CartClickHandler = (e) => {
    e.preventDefault();
    Dispatch({ type: 'TOGGLE_CART' });
  };

  
  const logoutHandler = () => {
    localStorage.removeItem('token');
    window.location.href = '/'; // Redirect to the home page after logout
  };
  
  const changePasswordHandler = async () => {
    const newPassword = prompt('Enter your new password:');
    if (newPassword) {
      try {
        const response = await axios.post(
          "https://ecommerce-backend-xe7w.onrender.com/users/change-password",
          {
            //   oldPassword,
            newPassword,
          }
        );

        // Handle response and show success message
        console.log(response.data.msg);
      } catch (error) {
        // Handle error and show error message
        console.error(error);
      }
    }
  };

  return (
    <div className="z-20 bg-black text-white flex py-4 fixed top-0 w-full sm:justify-center">
      <div className="md:px-6 mx-6 md:text-3xl">
        <NavLink to="/ContactUs">CONTACT US</NavLink>
      </div>
      <div className="md:px-6 mx-6 md:text-3xl">
        <NavLink to="/Store">STORE</NavLink>
      </div>
      <div className="md:px-6 mx-6 md:text-3xl">
        <NavLink to="/About">ABOUT</NavLink>
      </div>

      <div className="md:px-6 mx-6 md:text-3xl cursor-pointer" onClick={ changePasswordHandler}>
      <NavLink to="/Store">Change Password</NavLink>
      </div>
      <div className="md:px-6 mx-6 md:text-3xl cursor-pointer" onClick={logoutHandler}>
      <NavLink to="/logout">Logout</NavLink>
      </div>

      <div className="fixed right-4 px-2 top-0">
        <button onClick={CartClickHandler}>
          <CiShoppingCart className="text-6xl" />
        </button>
      </div>
      <div className="fixed right-11 cursor-pointer animate-bounce" onClick={CartClickHandler}>
        <span>{state.TotalCartItems}</span>
      </div>
      {state.isCart && <ModalPopup />}
    </div>
  );
};

export default Navigation;

import React, { useState, useEffect } from "react";
import { Modal } from "@mui/material";
import axios from 'axios';

const Navbar = () => {
  const [openModal, setOpenModal] = useState(false);

  const closeModalHandler = () => {
    setOpenModal(false);
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
    <div className="fixed top-[45%] left-0">
      {/* Modal for Change Password */}
      <Modal open={openModal} onClose={closeModalHandler}>
        {/* Your modal content */}
        <div className="bg-white p-4 rounded-lg">
          <h2 className="text-xl mb-2">Change Password</h2>
          {/* Add your change password form here */}
          {/* You can use form elements like inputs and buttons */}
          <button
            className="bg-yellow-500 rounded-md hover:bg-yellow-600 text-white p-2"
            onClick={changePasswordHandler}
          >
            Change Password
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default Navbar;

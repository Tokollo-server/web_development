<<<<<<< HEAD
=======
<<<<<<< HEAD

=======
>>>>>>> 753d5fb (Initial commit)
>>>>>>> my-latest-work
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import userReducer from "./userSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
<<<<<<< HEAD
=======
<<<<<<< HEAD

 
=======
>>>>>>> 753d5fb (Initial commit)
>>>>>>> my-latest-work
  },
});

export default store;

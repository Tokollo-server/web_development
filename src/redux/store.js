<<<<<<< HEAD

=======
>>>>>>> 753d5fb (Initial commit)
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import userReducer from "./userSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
<<<<<<< HEAD

 
=======
>>>>>>> 753d5fb (Initial commit)
  },
});

export default store;

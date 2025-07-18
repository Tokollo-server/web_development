import { createSlice } from "@reduxjs/toolkit";

// Initial state for the user slice
const initialState = {
  username: "", // Username starts as an empty string
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // Set the username when a user logs in
    setUsername: (state, action) => {
      state.username = action.payload;
    },
    // Clear the username when a user logs out
    logout: (state) => {
      state.username = "";
    },
  },
});

// Export the reducer functions
export const { setUsername, logout } = userSlice.actions;

// Export the reducer to include in the store
export default userSlice.reducer;

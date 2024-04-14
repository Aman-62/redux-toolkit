import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const url = "https://jsonplaceholder.typicode.com/users";

export const getUsers = createAsyncThunk("users/getUsers", () => {
  return fetch(url)
    .then((res) => res.json())
    .catch((err) => console.log(err));
});

const initialState = {
  userList: [],
  isLoading: true,
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUsers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.userList = action.payload;
        state.isLoading = false;
      })
      .addCase(getUsers.rejected, () => {
        console.log("Data not fetched");
      });
  },
});

export default usersSlice.reducer;

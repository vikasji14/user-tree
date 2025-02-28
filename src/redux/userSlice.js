import { createSlice } from "@reduxjs/toolkit";

const initialUsers = [
  { id: 1, name: "Vikas Yadav", email: "vikas@gmail.com", phone: "9876543210", aadhar: "123456789012", parent: null, position: null },
  { id: 2, name: "Raj Verma", email: "raj@gmail.com", phone: "9876543211", aadhar: "123456789013", parent: "1", position: "left" },
  { id: 3, name: "Shyam Kumar", email: "shyam@gmail.com", phone: "9876543212", aadhar: "123456789014", parent: "1", position: "right" },
  { id: 4, name: "Amit Sharma", email: "amit@gmail.com", phone: "9876543213", aadhar: "123456789015", parent: "2", position: "left" },
  { id: 5, name: "Anjali Mishra", email: "anjali@gmail.com", phone: "9876543214", aadhar: "123456789016", parent: "2", position: "right" },
  { id: 6, name: "Ravi Gupta", email: "ravi@gmail.com", phone: "9876543215", aadhar: "123456789017", parent: "3", position: "left" },
  { id: 7, name: "Pooja Singh", email: "pooja@gmail.com", phone: "9876543216", aadhar: "123456789018", parent: "3", position: "right" },
  { id: 8, name: "Sohan Tiwari", email: "sohan@gmail.com", phone: "9876543217", aadhar: "123456789019", parent: "4", position: "left" },
  { id: 9, name: "Meera Devi", email: "meera@gmail.com", phone: "9876543218", aadhar: "123456789020", parent: "4", position: "right" },
  { id: 10, name: "Neha Gupta", email: "neha@gmail.com", phone: "9876543219", aadhar: "123456789021", parent: "5", position: "left" },
  { id: 11, name: "Vikas Yadav", email: "vikas@gmail.com", phone: "9876543210", aadhar: "123456789012", parent: "1", position: "right"  },
  { id: 12, name: "Rajesh Yadav", email: "vikas@gmail.com", phone: "9876543210", aadhar: "123456789012", parent: "1", position: "left"  },
  { id: 13, name: "Anu Yadav", email: "vikas@gmail.com", phone: "9876543210", aadhar: "123456789012", parent: "1", position: "right"  },
  { id: 14, name: "Kriti Yadav", email: "vikas@gmail.com", phone: "9876543210", aadhar: "123456789012", parent: "1", position: "left"  },
  { id: 15, name: "Sonu Yadav", email: "vikas@gmail.com", phone: "9876543210", aadhar: "123456789012", parent: "1", position: "right"  },
];

const userSlice = createSlice({
  name: "users",
  initialState: initialUsers,
  reducers: {
    addUser: (state, action) => {
      state.push(action.payload);
    },
    deleteUser: (state, action) => {
      return state.filter(user => user.id !== action.payload); // ✅ Fix: Use return
    },
    updateUser: (state, action) => {
      const index = state.findIndex(user => user.id === action.payload.id);
      if (index !== -1) {
        state[index] = action.payload;
      }
    },
  },
});

export const { addUser, deleteUser, updateUser } = userSlice.actions;
export default userSlice.reducer;

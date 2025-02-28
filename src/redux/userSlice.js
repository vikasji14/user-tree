import { createSlice } from "@reduxjs/toolkit";

// const initialUsers = [
//   { id: 1, name: "Vikas Yadav", email: "vikas@gmail.com", phone: "9876543210", aadhar: "123456789012", parent: null, position: null },
//   { id: 2, name: "Raj Verma", email: "raj@gmail.com", phone: "9876543211", aadhar: "123456789013", parent: "1", position: "left" },
//   { id: 3, name: "Shyam Kumar", email: "shyam@gmail.com", phone: "9876543212", aadhar: "123456789014", parent: "1", position: "right" },
//   { id: 4, name: "Amit Sharma", email: "amit@gmail.com", phone: "9876543213", aadhar: "123456789015", parent: "2", position: "left" },
//   { id: 5, name: "Anjali Mishra", email: "anjali@gmail.com", phone: "9876543214", aadhar: "123456789016", parent: "2", position: "right" },
//   { id: 6, name: "Ravi Gupta", email: "ravi@gmail.com", phone: "9876543215", aadhar: "123456789017", parent: "3", position: "left" },
//   { id: 7, name: "Pooja Singh", email: "pooja@gmail.com", phone: "9876543216", aadhar: "123456789018", parent: "3", position: "right" },
//   { id: 8, name: "Sohan Tiwari", email: "sohan@gmail.com", phone: "9876543217", aadhar: "123456789019", parent: "4", position: "left" },
//   { id: 9, name: "Meera Devi", email: "meera@gmail.com", phone: "9876543218", aadhar: "123456789020", parent: "4", position: "right" },
//   { id: 10, name: "Neha Gupta", email: "neha@gmail.com", phone: "9876543219", aadhar: "123456789021", parent: "5", position: "left" },
//   { id: 11, name: "Vikas Yadav", email: "vikas@gmail.com", phone: "9876543210", aadhar: "123456789012", parent: "1", position: "right"  },
//   { id: 12, name: "Rajesh Yadav", email: "vikas@gmail.com", phone: "9876543210", aadhar: "123456789012", parent: "1", position: "left"  },
//   { id: 13, name: "Anu Yadav", email: "vikas@gmail.com", phone: "9876543210", aadhar: "123456789012", parent: "1", position: "right"  },
//   { id: 14, name: "Kriti Yadav", email: "vikas@gmail.com", phone: "9876543210", aadhar: "123456789012", parent: "1", position: "left"  },
//   { id: 15, name: "Sonu Yadav", email: "vikas@gmail.com", phone: "9876543210", aadhar: "123456789012", parent: "1", position: "right"  },
// ];

const initialUsers = [
    { id: 1, name: "Vikas Yadav", email: "vikas@gmail.com", phone: "9876543210", aadhar: "123456789012", parent: null, position: null },
  
    // Left children of Vikas Yadav 
    { id: 2, name: "Raj Verma", email: "raj@gmail.com", phone: "9876543211", aadhar: "123456789013", parent: "1", position: "left" },
    { id: 3, name: "Shyam Kumar", email: "shyam@gmail.com", phone: "9876543212", aadhar: "123456789014", parent: "1", position: "left" },
    { id: 4, name: "Amit Sharma", email: "amit@gmail.com", phone: "9876543213", aadhar: "123456789015", parent: "20", position: "left" },
    { id: 5, name: "Anjali Mishra", email: "anjali@gmail.com", phone: "9876543214", aadhar: "123456789016", parent: "1", position: "left" },
    { id: 6, name: "Ravi Gupta", email: "ravi@gmail.com", phone: "9876543215", aadhar: "123456789017", parent: "16", position: "left" },
  
    // Right children of Vikas Yadav
    { id: 7, name: "Pooja Singh", email: "pooja@gmail.com", phone: "9876543216", aadhar: "123456789018", parent: "10", position: "right" },
    { id: 8, name: "Sohan Tiwari", email: "sohan@gmail.com", phone: "9876543217", aadhar: "123456789019", parent: "18", position: "right" },
    { id: 9, name: "Meera Devi", email: "meera@gmail.com", phone: "9876543218", aadhar: "123456789020", parent: "1", position: "right" },
    { id: 10, name: "Neha Gupta", email: "neha@gmail.com", phone: "9876543219", aadhar: "123456789021", parent: "1", position: "right" },
    { id: 11, name: "Aryan Patel", email: "aryan@gmail.com", phone: "9876543220", aadhar: "123456789022", parent: "1", position: "right" },
  
    // Each child now gets five left and five right children
  
    // Children of Raj Verma (Left child of Vikas)
    { id: 12, name: "Alok Mishra", email: "alok@gmail.com", phone: "9876543221", aadhar: "123456789023", parent: "2", position: "left" },
    { id: 13, name: "Nikhil Ranjan", email: "nikhil@gmail.com", phone: "9876543222", aadhar: "123456789024", parent: "2", position: "left" },
    { id: 14, name: "Kritika Sharma", email: "kritika@gmail.com", phone: "9876543223", aadhar: "123456789025", parent: "3", position: "left" },
    { id: 15, name: "Rahul Singh", email: "rahul@gmail.com", phone: "9876543224", aadhar: "123456789026", parent: "3", position: "left" },
    { id: 16, name: "Tanmay Das", email: "tanmay@gmail.com", phone: "9876543225", aadhar: "123456789027", parent: "4", position: "left" },
  
    { id: 17, name: "Anu Yadav", email: "anu@gmail.com", phone: "9876543226", aadhar: "123456789028", parent: "5", position: "right" },
    { id: 18, name: "Mohan Sharma", email: "mohan@gmail.com", phone: "9876543227", aadhar: "123456789029", parent: "4", position: "right" },
    { id: 19, name: "Simran Kaur", email: "simran@gmail.com", phone: "9876543228", aadhar: "123456789030", parent: "2", position: "right" },
    { id: 20, name: "Yash Gupta", email: "yash@gmail.com", phone: "9876543229", aadhar: "123456789031", parent: "4", position: "right" },
    { id: 21, name: "Neeraj Sharma", email: "neeraj@gmail.com", phone: "9876543230", aadhar: "123456789032", parent: "2", position: "right" },
  
    
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

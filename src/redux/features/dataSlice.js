// import {createSlice ,createAsyncThunk} from '@reduxjs/toolkit';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import * as API1 from '../api';
// // import * as API from '../api'


// export const addTab = createAsyncThunk(
//     "personal/createdata",
//     async ({ addCart }, { rejectWithValue }) => {
//       try {
//         const response = await API1.addusercart(addCart);
//         // navigation.navigate("SignInScreen");
//         return response.data;
//       } catch (err) {
//         return rejectWithValue(err.response.data);
//       }
//     }
//   );


//   const dataSlice = createSlice({ 
//     name : "data",
//     initialState : {
//         cart : {} , // single carts
//         cartItems : {},  /// already made using POS
//         userSpecificCart : [], // personal specific cart placed by specific user
//         error : '',
//         loading : false
//     },
    
//     extraReducers : {

//         ///add data
//         [addTab.pending] : (state , action) =>{
//             state.loading = true;
            
//         },
//         [addTab.fulfilled] :  (state , action) =>{
//             state.loading = false;
//             state.userSpecificCart = [action.payload]
//             // AsyncStorage.setItem("@profile" ,JSON.stringify({...action.payload}))
//             // state.user = action.payload
//         },
//         [addTab.rejected] : (state ,action) =>{
//             state.loading = false;
//             state.error = action.payload.message
//         },
        
//     }
    
// });



// export default dataSlice.reducer;
  





// // export const {setData} = dataSlice.actions;
// // export default dataSlice.reducer;
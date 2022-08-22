import {createSlice ,createAsyncThunk} from '@reduxjs/toolkit';
import * as API from '../api'
import AsyncStorage from '@react-native-async-storage/async-storage';
export const login = createAsyncThunk("auth/login" , async({data , navigation} , { rejectWithValue })=>{
    
    try{
        const response = await API.signIn(data);
        // console.log("loggedin successfully");
        navigation.navigate("Home");
        return response.data;

    }catch(err){
        return rejectWithValue(err.response.data);
        console.log(err)
    }
})

export const register = createAsyncThunk(
    "auth/register",
    async ({ data, navigation }, { rejectWithValue }) => {
      try {
        const response = await API.signUp(data);
        navigation.navigate("SignInScreen");
        return response.data;
      } catch (err) {
        return rejectWithValue(err.response.data);
      }
    }
  );


const authSlice = createSlice({
    name : "auth",
    initialState : {
        user : null , 
        error : '',
        loading : false
    },
    reducers : {
        setUser : (state , action) =>{
            state.user = action.payload;
        },
        setLogout: async (state, action) => {
           await AsyncStorage.clear();
            state.user = null;
          },
    },
    extraReducers : {

        ///login
        [login.pending] : (state , action) =>{
            state.loading = true;
            
        },
        [login.fulfilled] :  (state , action) =>{
            state.loading = false;
            AsyncStorage.setItem("@profile" ,JSON.stringify({...action.payload}))
            state.user = action.payload
        },
        [login.rejected] : (state ,action) =>{
            state.loading = false;
            state.error = action.payload.message
        },
        /// register

        [register.pending] : (state , action) =>{
            state.loading = true;
            
        },
        [register.fulfilled] :  (state , action) =>{
            state.loading = false;
            AsyncStorage.setItem("@profile" ,JSON.stringify(...action.payload))
            state.user = action.payload
        },
        [register.rejected] : (state ,action) =>{
            state.loading = false;
            state.error = action.payload.message
        }
    }
    
});

export const {setUser , setLogout} = authSlice.actions;


export default authSlice.reducer;
import axios from 'react-native-axios';

export const API = axios.create({baseURL:"https://paperlessapi5.herokuapp.com"})
// export const API1 = axios.create({baseURL : "http://localhost"})

export const signIn = (formData) => API.post("/users/signin" , formData);
export const signUp = (formData) => API.post("/users/signup", formData);
// export const addusercart = (addCart) => API1.post("/users/addusercart", addCart)
import axios from 'react-native-axios';

export const API = axios.create({baseURL:"https://paperlessapi7.herokuapp.com"})

export const signIn = (formData) => API.post("/users/signin" , formData);
export const signUp = (formData) => API.post("/users/signup", formData);
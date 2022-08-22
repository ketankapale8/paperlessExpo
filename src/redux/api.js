import axios from 'react-native-axios';

const API = axios.create({baseURL:"https://paperlessapi.herokuapp.com"})

export const signIn = (formData) => API.post("/users/signin" , formData);
export const signUp = (formData) => API.post("/users/signup", formData);

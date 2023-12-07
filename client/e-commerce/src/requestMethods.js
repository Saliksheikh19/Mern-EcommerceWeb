import axios from "axios"
const BASE_URL = "https://colorful-teal-sea-lion.cyclic.app/api/"
const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
const currentUser = user && JSON.parse(user).currentUser;
console.log(currentUser)
const TOKEN = currentUser?.accessToken;
console.log(TOKEN)
export const publicRequest = axios.create({
    baseURL: BASE_URL,
})

export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers: { token: `Bearer ${TOKEN}` }
})
import axios from "axios";

const BASE_URL = "http://localhost:5000/api";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyOTc3YWY1NWRlMDhhN2U5NzliYWFhZCIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2ODI0Mzk0OTMsImV4cCI6MTY4MjY5ODY5M30.zCY_WfUlUeZyhECmMjsIe3b_e1RqJRrD55C6SBKzRwo";

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers: {token: `Bearer ${TOKEN}`},
});
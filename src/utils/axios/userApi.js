import axios from "axios";

const LOCAL_URL = "http://localhost:8080/api/user";
const DEPLOY_URL = "https://springboot--backend.herokuapp.com/api/user"
const TEST_URL = "https://jsonplaceholder.typicode.com/users";
const CURRENT_URL = DEPLOY_URL;

export const getUsers = async () => {
    //console.log("userApi/getUsers() 함수 실행");
    try {
        const response = await axios.get(CURRENT_URL + "/users");
        return response.data;
    } catch (error) {
        //console.error(error);
        return null;
    }
}

export const registerUser = async (action) => {
    //console.log("userApi/registerUser() 함수 실행", action);
    try {
        const response = await axios.post(CURRENT_URL + "/register", action);
        return response.data;
    } catch (error) {
        //console.error(error);
        return null;
    }
}

export const findUser = async (action) => {
    //console.log("userApi/findUser() 함수 실행", action);
    try {
        const response = await axios.post(CURRENT_URL + "/finduser", action);
        return response.data;
    } catch (error) {
        //console.error(error);
        return null;
    }
}

export const logInUser = async (action) => {
    //console.log("userApi/logIn() 함수 실행", action);
    try {
        const response = await axios.post(CURRENT_URL + "/login", action);
        return response.data;
    } catch (error) {
        //console.error(error);
        return null;
    }
}
import axios from "axios";

const LOCAL_URL = "http://localhost:8080/api/product";
const DEPLOY_URL = "https://springboot--backend.herokuapp.com/api/product"
const TEST_URL = "https://jsonplaceholder.typicode.com/users";
const CURRENT_URL = LOCAL_URL;

export const getAll = async () =>{
    console.log("productApi/getAll() 함수 실행");
    try {
        const response = await axios.get(CURRENT_URL + "/all");
        return response.data;
    } catch (error) {
        console.error(error);
        return null;
    }
}

export const getOne = async (productId) => {
    console.log("productApi/getOne() 함수 실행");
    try {
        const response = await axios.get(CURRENT_URL + `/${productId}`);
        return response.data;
    } catch (error) {
        console.error(error);
        return null;
    }
}

export const uploadPreview = async (data, config) => {
    console.log("productApi/uploadPreview() 함수 실행");
    try {
        const response = await axios.post(CURRENT_URL + "/upload/preview", data);
        return response.data;
    } catch (error) {
        console.error(error);
        return null;
    }
}

export const uploadAll = async (data, config) => {
    console.log("productApi/uploadAll() 함수 실행");
    try {
        const response = await axios.post(CURRENT_URL + "/upload/product", data);
        return response.data;
    } catch (error) {
        console.error(error);
        return null;
    }
}
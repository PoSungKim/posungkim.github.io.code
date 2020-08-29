import axios from "axios";

const LOCAL_URL = "http://localhost:8080/api/cart";
const DEPLOY_URL = "https://springboot--backend.herokuapp.com/api/cart"
const TEST_URL = "https://jsonplaceholder.typicode.com/users";
const CURRENT_URL = DEPLOY_URL;

export const addCurCart = async (data) => {
    console.log("cartApi/addCurCart() 함수 실행");
    try {
        const response = await axios.post(CURRENT_URL, data);
        return response.data;
    } catch (error) {
        console.error(error);
        return null;
    }
}

export const deleteCurCart = async ({email, product_id}) => {
    console.log("cartApi/addCurCart() 함수 실행");
    try {
        const response = await axios.delete(CURRENT_URL + `/product_id=${product_id}&email=${email}`)
        return response.data;
    } catch (error) {
        console.error(error);
        return null;
    }
}


export const getMyCart = async (data) => {
    console.log("cartApi/getMyCart() 함수 실행");
    try {
        const response = await axios.post(CURRENT_URL + '/all', data);
        return response.data;
    } catch (error) {
        console.error(error);
        return null;
    }
}
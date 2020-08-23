import axios from "axios";

const LOCAL_URL = "http://localhost:8080/";
const DEPLOY_URL = "https://springboot--backend.herokuapp.com/"
const TEST_URL = "https://jsonplaceholder.typicode.com/users";
const CURRENT_URL = LOCAL_URL;

export const uploadImage = async (data, config) => {
    console.log("uploadApi/uploadImage() 함수 실행");
    try {
        //const response = await axios.post(CURRENT_URL + "upload/preview/image", data);
        const response = await axios.post(CURRENT_URL + "upload/preview/image", data);
        return response.data;
    } catch (error) {
        console.error(error);
        return null;
    }
}
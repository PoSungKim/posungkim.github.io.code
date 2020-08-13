import axios from "axios";

const BASE_URL = "http://localhost:8080/users";
const TEST_URL = "https://jsonplaceholder.typicode.com/users";

export const getUsers = async () => {
    console.log("userUtils/getUsers() 함수 실행");
    try {
        const response = await axios.get(BASE_URL);
        return response.data;
    } catch (error) {
        console.error(error);
        return null;
    }
}
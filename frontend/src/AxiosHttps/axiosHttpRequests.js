import axios from "axios";


const fetchData = async (apiUrl) => {
    try {
        const response = await axios.get(`${process.env.REACT_APP_CALLBACK_URL}${apiUrl}`);
        console.log(response.data[2].productId)
        return response.data;
    } catch (error) {
        console.log("API Connection Failed: " + error);
        return null;
    }
};

const callApi = axios.create({
    baseURL: process.env.REACT_APP_CALLBACK_URL,
    headers: {
        "Content-Type": "application/json",
        Accept: 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS'
    },
});


export const sendRegData = (data) => callApi.post('/user/register', data)




export {fetchData}
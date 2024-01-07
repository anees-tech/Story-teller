import axios from "axios";


const fetchData = async (apiUrl) => {
    try {
        const response = await axios.get(`${process.env.REACT_APP_CALLBACK_URL}${apiUrl}`);
        return response.data;
    } catch (error) {
        console.log("API Connection Failed: " + error);
        return null;
    }
};


export {fetchData}
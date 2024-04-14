import axios from 'axios';

const BASE_URL = "";

const options = {
    url: BASE_URL,
    params: {

    },
    headers: {

    }
}

export const fetchFromAPI = async(url)=>{
    const {data} = await axios.get(`${BASE_URL}/${url}`, options)
    return data;
}

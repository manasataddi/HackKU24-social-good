import axios from 'axios';

const BASE_URL = "";

const options = {
    url: BASE_URL,
    params: {

    },
    headers: {

    }
}

export const fetchFromAPI = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options)
    return data;
}

export const getAllFoods = [{
        "foodId": 111,
        "foodName": "Chana Tikka Masala",
        "foodBestBy": "April 17",
        "foodQuantity": 3,
        "foodPostedBy": "walmart",
        "foodLocation": "Kansas",
        "pickUpTime": "11 pm"
    },
    {
        "foodId": 112,
        "foodName": "Chicken Sandwich",
        "foodBestBy": "April 18",
        "foodQuantity": 2,
        "foodPostedBy": "7-11",
        "foodLocation": "Maryville",
        "pickUpTime": "11 pm"
    },
    {
        "foodId": 114,
        "foodName": "Chicken Sandwich",
        "foodBestBy": "April 18",
        "foodQuantity": 2,
        "foodPostedBy": "7-11",
        "foodLocation": "Maryville",
        "pickUpTime": "11 pm"
    },
    {
        "foodId": 114,
        "foodName": "Chicken Sandwich",
        "foodBestBy": "April 18",
        "foodQuantity": 2,
        "foodPostedBy": "7-11",
        "foodLocation": "Maryville",
        "pickUpTime": "11 pm"
    },
    {
        "foodId": 114,
        "foodName": "Chicken Sandwich",
        "foodBestBy": "April 18",
        "foodQuantity": 2,
        "foodPostedBy": "7-11",
        "foodLocation": "Maryville",
        "pickUpTime": "11 pm"
    }
    ];

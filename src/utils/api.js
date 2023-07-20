import axios from "axios";

const BASE_URL = "https://youtube138.p.rapidapi.com";

const options = {
  params: {
    hl: 'en',
    gl: 'US'
  },
  headers: {
    'X-RapidAPI-Key': '0f427b5bf9mshbcebe6729c8a26bp1be808jsna9eea60c5858',
    'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
  }
};


export const fetchDataFromApi = async (url) => {
    const { data } = await axios.request(`${BASE_URL}/${url}`, options);

    return data;
}
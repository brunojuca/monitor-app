import axios from 'axios';

const url = 'http://localhost:3000/api';

export const fetchData = async () => {
    try {
        const { data } = await axios.get(url);
  
        return data;
    } catch (error) {
        console.log(error);
    }
  }
import axios from 'axios';

const url = 'http://localhost:3000/api';

const waitTimeout = (time = 0) => new Promise(resolve => setTimeout(resolve, time))

export const fetchData = async () => {
    try {
        const [{ data }] = await Promise.all([axios.get(url), waitTimeout(1000)]) ;

        return data;
    } catch (error) {
        console.log(error);
    }
  }
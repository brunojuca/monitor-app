import axios from 'axios';

const url = 'http://localhost:3000/api';

//const waitTimeout = (time = 0) => new Promise(resolve => setTimeout(resolve, time))

export const fetchData = async () => {
    try {
        //await waitTimeout(2000);
        const { data } = await axios.get(url);

        return data;
    } catch (error) {
        console.log(error);
    }
  }

export function getData() {
    
}
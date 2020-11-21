import axios from 'axios';

const url = 'http://localhost:3000/api';

const cancelTokenSource = axios.CancelToken.source();


export const fetchData = async () => {
    try {
        const { data } = await axios.get(url, {
            cancelToken: cancelTokenSource.token
        });
  
        return data;
    } catch (error) {
        console.log(error);
    }
  }
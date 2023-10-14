import axios from 'axios';

const BASE_URL = 'https://api.adviceslip.com/advice';

const getAdvice = async () => {
    const response = await axios.get(BASE_URL);
    return response.data;
}

export default getAdvice;
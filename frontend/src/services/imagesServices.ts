import axios from 'axios';

const API_URL = 'http://localhost:3000/api';

interface image {
  label?: string;
  url?: string;
}

const uploadImage = async (imageData: image) => {
  try {
    const result = await axios.post(`${API_URL}`, imageData);
    console.log(result);
    if (result.status === 200) {
      return result;
    }
  } catch (error) {
    console.log(error);
  }
};

export { uploadImage };

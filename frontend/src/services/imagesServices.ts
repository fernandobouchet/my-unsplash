import axios from 'axios';

const API_URL = 'http://localhost:3000/api';

interface image {
  label?: string;
  url?: string;
}

const uploadImage = async (imageData: image) => {
  try {
    const result = await axios.post(`${API_URL}`, imageData);
    if (result.status === 200) {
      return result.data;
    } else {
      console.log('Unknow error');
    }
  } catch (error) {
    console.log(error);
  }
};

const getImages: any = async () => {
  try {
    const result = await axios.get(`${API_URL}`);
    if (result.status === 200) {
      return result.data;
    } else {
      console.log('Unknow error');
    }
  } catch (error) {
    console.log(error);
  }
};

export { uploadImage, getImages };

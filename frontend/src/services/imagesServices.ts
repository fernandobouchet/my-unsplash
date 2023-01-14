import axios from 'axios';

const API_URL = 'http://localhost:3000/api';

interface image {
  label?: string;
  url?: string;
}

interface passwordInterface {
  password?: string;
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

const getImages = async () => {
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

const deleteImage = async (id: string, password: passwordInterface) => {
  try {
    const result = await axios.delete(`${API_URL}/${id}`, {
      data: password,
      headers: { 'Content-Type': 'application/json' },
    });
    if (result.status === 200) {
      return result;
    } else {
      console.log('Unknow error');
    }
  } catch (error) {
    console.log(error);
    return error;
  }
};

export { uploadImage, getImages, deleteImage };

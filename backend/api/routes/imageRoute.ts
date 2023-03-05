import express from 'express';
import {
  getImages,
  postImage,
  deleteImage,
  getImagesByLabel,
} from '../controller/imageController';
const router = express.Router();

router.get('/', getImages);

router.get('/search', getImagesByLabel);

router.post('/', postImage);

router.delete('/:id', deleteImage);

export default router;

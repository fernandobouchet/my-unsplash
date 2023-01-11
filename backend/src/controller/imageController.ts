import { Request, Response } from 'express';
import imageModel from '../models/imageModel';

const getImages = async (req: Request, res: Response) => {
  try {
    const qs = require('qs');
    const skip = parseInt(qs.parse(req.query.skip).skip || 0);
    const limit = parseInt(qs.parse(req.query.limit).limit || 9);

    await imageModel
      .find()
      .skip(skip)
      .limit(limit)
      .sort('-createdAt')
      .then((items) => {
        res.status(200).send(items);
      });
  } catch (error) {
    console.log(error);
    res.status(500).send('Error retrieving images');
  }
};

const getImagesByLabel = async (req: Request, res: Response) => {
  res.send(req.body);
};

const postImage = async (req: Request, res: Response) => {
  try {
    if (req.body) {
      const newImage = new imageModel({
        label: req.body.label,
        url: req.body.url,
      });
      newImage.save((error) => {
        if (error) {
          res.status(400).send(error);
        } else {
          res.status(200).send('Image saved');
        }
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

const deleteImage = async (req: Request, res: Response) => {
  res.send(req.body);
};

export { getImages, postImage, deleteImage, getImagesByLabel };

import { Request, Response } from 'express';
import imageModel from '../models/imageModel';

const getImages = async (req: Request, res: Response) => {
  try {
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 10;

    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    const results = {
      previous: {},
      next: {},
      data: {},
    };

    const images = await imageModel.find({});

    if (startIndex > 0) {
      results.previous = {
        page: page - 1,
        limit: limit,
      };
    }
    if (endIndex < images.length) {
      results.next = {
        page: page + 1,
        limit: limit,
      };
    }

    results.data = images.slice(startIndex, endIndex);

    res.status(200).send(results);
  } catch (error) {
    console.log(error);
    res.status(500).send('Error retrieving images');
  }
};

const getImagesByLabel = async (req: Request, res: Response) => {};

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

const deleteImage = async (req: Request, res: Response) => {};

export { getImages, postImage, deleteImage, getImagesByLabel };

import { getModelForClass, prop } from '@typegoose/typegoose';

class Image {
  @prop()
  label: string;

  @prop()
  url: string;
}

const imageModel = getModelForClass(Image);
export default imageModel;

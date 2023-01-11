import { getModelForClass, prop } from '@typegoose/typegoose';

class Image {
  @prop()
  label: string;

  @prop()
  url: string;

  @prop({ default: Date.now() })
  createdAt: Date;
}

const imageModel = getModelForClass(Image);
export default imageModel;

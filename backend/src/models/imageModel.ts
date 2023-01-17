import { getModelForClass, prop } from '@typegoose/typegoose';

class Image {
  @prop({ type: String, index: { unique: true, background: true } })
  label: String;

  @prop()
  url: String;

  @prop({ default: Date.now() })
  createdAt: Date;
}

const imageModel = getModelForClass(Image);
export default imageModel;

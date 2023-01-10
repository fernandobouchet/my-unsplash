type Props = {
  src: string;
};

const ImageCard: React.FC<Props> = ({ src }) => {
  return (
    <>
      <img src={src} className="rounded-4" />
    </>
  );
};
export default ImageCard;

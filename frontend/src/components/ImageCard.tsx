interface Props {
  image: {
    _id: string;
    label: string;
    url: string;
  };
}

const ImageCard: React.FC<Props> = ({ image }) => {
  return (
    <>
      <img
        src={image.url}
        id={image._id}
        alt={image.label}
        className="rounded-4"
      />
    </>
  );
};
export default ImageCard;

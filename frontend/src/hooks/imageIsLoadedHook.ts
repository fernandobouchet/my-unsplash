import { useEffect, useState } from 'react';

const imageIsLoaded = (src: string) => {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    const image = new Image();
    image.src = src;
    image.onload = () => setIsLoaded(true);
  }, [src]);

  return isLoaded;
};

export default imageIsLoaded;

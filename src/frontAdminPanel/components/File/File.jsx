import React, { useEffect, useRef, useState } from 'react';
import { shape, string } from 'prop-types';
import DocumentIcon from '../../assets/icons/icon_file.svg';

import './file.scss';

export const File = ({ data }) => {
  const [isImage] = useState(data.type.includes('image'));
  const imgRef = useRef();

  const loadImage = () => {
    const reader = new FileReader();
    reader.readAsDataURL(data);
    reader.onloadend = () => {
      const img = document.createElement('img');
      img.src = reader.result;
      imgRef.current.style.backgroundImage = `url(${img.src})`;
    };
  };

  useEffect(() => {
    if (isImage) {
      loadImage();
    }
  }, []);

  const imageView = <div ref={imgRef} className="file-img"></div>;
  const documentView = (
    <div className="file-document">
      <DocumentIcon width="100px" />
    </div>
  );

  return (
    <div className="file">
      {isImage ? imageView : documentView}
      <p className="file-name">{data.name}</p>
    </div>
  );
};

File.propTypes = {
  data: shape({
    name: string.isRequired,
    type: string.isRequired,
  }).isRequired,
};

import React from 'react';

const CustomImage = (props) => {
  const { imgSrc, pt } = props;
  return (
    <div className="custom-image" style={{ paddingTop: pt }}>
      <img src={imgSrc} alt="" />
    </div>
  );
};

export default CustomImage;

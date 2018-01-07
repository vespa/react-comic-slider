import React from "react";
import PropTypes from "prop-types";


const PrintImage = ({imageOn, alt, title}) => {
  return (imageOn === 'none')? 'Loading...' : <img src={imageOn} alt={alt} title={title} />
}

const SlidePicture = ({ currentImage, alt, title}) => (
  <div className="slider__body">
      <div className="slider__picture">
          <PrintImage imageOn={currentImage}  alt={alt} title={title} />
      </div>
  </div>
);

SlidePicture.propTypes = {
    alt: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    currentImage: PropTypes.string.isRequired,
}

export default SlidePicture;
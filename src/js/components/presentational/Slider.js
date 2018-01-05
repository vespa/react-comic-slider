import React from "react";
import PropTypes from "prop-types";


const PrintImage = (props) => {
  return (props.imageOn === 'none')? 'Loading...' : <img src={props.imageOn} alt={props.alt} title={props.title} />
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
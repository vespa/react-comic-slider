import React from "react";9
import PropTypes from "prop-types";


const PrintImage = (props) => {
  const isOn = (props.imageOn === 'none');
  return (isOn)? 'Loading...' : <img src={props.imageOn} alt={props.alt} title={props.title} />
}

const SlidePicture = ({ currentImage, alt="eee", title="title"}) => (
  <div className="slide-picture">
      <PrintImage imageOn={currentImage}  alt={alt} title={title} />
  </div>
);

// Input.propTypes = {
//   label: PropTypes.string.isRequired,
//   text: PropTypes.string.isRequired,
//   type: PropTypes.string.isRequired,
//   id: PropTypes.string.isRequired,
//   value: PropTypes.string.isRequired,
//   handleChange: PropTypes.func.isRequired
// };

export default SlidePicture;
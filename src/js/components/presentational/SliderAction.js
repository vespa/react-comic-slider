import React from "react";
import PropTypes from "prop-types";

const SliderAction = ({text}) => (
  <button className="slider__action">
      {text}
  </button>
);

// SliderActions.propTypes = {
//     alt: PropTypes.string.isRequired,
//     title: PropTypes.string.isRequired,
//     currentImage: PropTypes.string.isRequired,
// }

export default SliderAction;
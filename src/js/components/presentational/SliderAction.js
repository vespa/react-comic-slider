import React from "react";
import PropTypes from "prop-types";

const SliderAction = ({text, action}) => (
  <button className="slider__action" onClick={action}>
      {text}
  </button>
);

SliderAction.propTypes = {
    text: PropTypes.string.isRequired,
    action: PropTypes.func.isRequired,

}

export default SliderAction;
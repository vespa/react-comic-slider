import React from "react";
import PropTypes from "prop-types";


const PrintImage = ({imageOn, alt, title}) => {
  return (imageOn === "")? 'Loading...' : <img src={imageOn} alt={alt} title={title} />
}

let counter = 0;
const SlidePicture = ({ currentImage, alt, title, description, authors}) => (
  <div className="slider__body">
    <h1>{title}</h1>
    <figure className="slider__picture">
        <figcaption>{description}</figcaption>
        <PrintImage imageOn={currentImage}  alt={alt} title={title} title={description}/>
    </figure>
    <ul className="slider_authors">
       {authors.map(({name, description})=>
            <li key={counter++}> {description}:{name}</li>
        )}
    </ul>
  </div>
);

SlidePicture.propTypes = {
    alt: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    currentImage: PropTypes.string.isRequired,
    authors: PropTypes.array.isRequired
}

export default SlidePicture;
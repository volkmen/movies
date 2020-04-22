import React from 'react'
import PropTypes from 'prop-types';

const TMDB_IMAGE_BASE_PATH = 'https://image.tmdb.org/t/p/w500/';

const TMDBImage = ({src, alt, ...restProps}) => (
  <img src={`${TMDB_IMAGE_BASE_PATH}${src}`} {...restProps} alt={alt} />
);

TMDBImage.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
};

TMDBImage.defaultProps = {
    alt: 'image'
};

export default TMDBImage
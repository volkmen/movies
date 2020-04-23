import React from 'react'
import PropTypes from 'prop-types';
import defaultPosterPath from '../../assets/default-poster_path.png';


const TMDB_IMAGE_BASE_PATH = 'https://image.tmdb.org/t/p/w500/';

const TMDBImage = ({src, alt, ...restProps}) => (
  <img src={src ?`${TMDB_IMAGE_BASE_PATH}${src}` : defaultPosterPath} {...restProps} alt={alt} />
);

TMDBImage.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
};

TMDBImage.defaultProps = {
    src: null,
    alt: 'image'
};

export default TMDBImage
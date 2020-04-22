import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ModalComponent from "../ModalComponent/ModalComponent";
import TMDBImage from "../TMDBImage/TMDBImage";
import starSrc from '../../assets/star.png';
import './MovieBoxItem.scss';

const MovieShape = PropTypes.shape({
    posterPath: PropTypes.string.isRequired,
    voteAverage: PropTypes.number.isRequired,
    originalTitle: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
});

export const MovieBoxItem = ({ movie: { posterPath, voteAverage, originalTitle, overview } }) => {
    const [modalIsOpened, setModalIsOpened] = useState(false);

    return (
        <React.Fragment>
            <div className="movie-box-item" onClick={() => setModalIsOpened(!modalIsOpened)}>
                <div className="movie-box-item__thumbnail">
                    <TMDBImage src={posterPath} width="200px" className="poster" />
                </div>
                <div className="movie-box-item__rate">
                    <img className="movie-box-item-rate__icon" src={starSrc} alt="Rate" width="20px"/>
                    <span>{ voteAverage }</span>
                </div>
                <div className="movie-box-item__title">{ originalTitle }</div>
            </div>
            <ModalComponent
                isOpen={modalIsOpened}
                onClose={() => setModalIsOpened(false) }
            >
                <div className="movie-box-item__modal">
                    <div className="movie-box-item-modal__thumbnail">
                        <TMDBImage src={posterPath} width="200px" className="poster" />
                    </div>
                    <div className="movie-box-item-modal__overview">
                        { overview }
                    </div>
                </div>
            </ModalComponent>
        </React.Fragment>
    )
};

MovieBoxItem.propTypes = {
    movie: MovieShape.isRequired
};
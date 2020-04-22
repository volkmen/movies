import React from 'react';
import Modal from "react-modal";
import PropTypes from 'prop-types';
import closeIconSrc from '../../assets/close-2.png';
import './ModalComponent.scss';

const customStyles = {
    content : {
        width: '75%',
        margin: '0 auto',
        animation: 'scaleIn 0.25s',
        background: '#111111',
        opacity: 1,
        border: 'none',
    },
    overlay: {
        // opacity: 0.75
        animation: 'fadeIn 0.25s',
        background: 'transparent'
    }
};

const ModalComponent = ({ isOpen, onClose, children }) => {
    return (
        <Modal isOpen={isOpen}
               style={customStyles}
               onClose={onClose}
               ariaHideApp={false}
               shouldCloseOnOverlayClick
        >
            <img
                src={closeIconSrc}
                alt="close-icon"
                width="20px"
                className="modal__close-icon"
                onClick={onClose}
            />
            {
                React.Children.map(children, child => React.cloneElement(child) )
            }
        </Modal>
    );
};

ModalComponent.propTypes = {
    isOpen: PropTypes.bool,
    onClose: PropTypes.func,
    children: PropTypes.object
};

ModalComponent.defaultProps = {
    isOpen: false,
    onClose: () => {},
    children: null
};

export default ModalComponent;
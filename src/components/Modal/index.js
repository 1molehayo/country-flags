import React from 'react';
import PropTypes from 'prop-types';
import { AnimatePresence, motion } from 'framer-motion';
import { MODAL_SETTINGS } from 'utility/constants';
import Backdrop from './Backdrop';

const Modal = ({ onClose, children, title }) => {
  return (
    <AnimatePresence initial={true} exitBeforeEnter={true}>
      <Backdrop onClick={onClose}>
        <motion.div
          onClick={(e) => e.stopPropagation()}
          className="modal"
          variants={MODAL_SETTINGS}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <div className="modal__header">
            <p className="mb-0">{title}</p>

            <button className="modal__close" onClick={onClose}>
              <span></span>
              <span></span>
            </button>
          </div>

          <div className="modal__body">{children}</div>
        </motion.div>
      </Backdrop>
    </AnimatePresence>
  );
};

Modal.propTypes = {
  children: PropTypes.node,
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  title: PropTypes.string
};

export default Modal;

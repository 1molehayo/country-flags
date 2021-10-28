import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

const Backdrop = ({ children, onClick }) => {
  return (
    <motion.div
      onClick={onClick}
      className="modal-backdrop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  );
};

Backdrop.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func
};

export default Backdrop;

export const PAGE_SIZE = 20;

export const TOGGLE_SETTINGS = {
  initial: {
    y: -30,
    opacity: 0
  },
  animate: {
    y: 0,
    opacity: 1
  },
  exit: {
    y: 30,
    opacity: 0
  },
  transition: {
    duration: 0.2
  }
};

export const MODAL_SETTINGS = {
  hidden: {
    y: '-10vh',
    opacity: 0
  },
  visible: {
    y: '0',
    opacity: 1,
    transition: {
      duration: 0.1,
      type: 'spring',
      damping: 25,
      stiffness: 500
    }
  },
  exit: {
    y: '100vh',
    opacity: 0
  }
};

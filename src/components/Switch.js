import React from 'react';
import classnames from 'classnames';
import { motion } from 'framer-motion';
import { useAppContext } from 'contexts/AppContext';
import { TOGGLE_SETTINGS } from 'utility/constants';

export const Switch = () => {
  const { isDarkMode, toggleDarkMode } = useAppContext();
  const { initial, animate, exit, transition } = TOGGLE_SETTINGS;

  return (
    <button
      className={classnames('switch', {
        'switch--end': isDarkMode,
        'switch--start': !isDarkMode
      })}
      onClick={toggleDarkMode}
    >
      <motion.span layout className="switch__handle">
        <motion.span
          className={classnames('switch__icon', {
            'icon-moon': isDarkMode,
            'icon-sun': !isDarkMode
          })}
          key={isDarkMode ? 'moon' : 'sun'}
          initial={initial}
          animate={animate}
          exit={exit}
          transition={transition}
        />
      </motion.span>
    </button>
  );
};

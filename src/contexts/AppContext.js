import React, { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';
import useBodyClass from 'services/useBodyClass';

const ContextDefaultValues = {
  isDarkMode: false,
  toggleDarkMode: null
};

export const AppContext = createContext(ContextDefaultValues);

export const AppProvider = ({ children }) => {
  const [isDarkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => setDarkMode((prevState) => !prevState);

  useBodyClass(isDarkMode ? 'theme--dark' : 'theme--default');

  return (
    <AppContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </AppContext.Provider>
  );
};

AppProvider.propTypes = {
  children: PropTypes.node
};

export const useAppContext = () => {
  return useContext(AppContext);
};

import React, { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';
import useBodyClass from 'services/useBodyClass';
import { greeting } from 'utility';
import useFetch from 'services/useFetch';

const ContextDefaultValues = {
  isDarkMode: false,
  toggleDarkMode: null,
  countries: [],
  loading: false,
  error: null,
  onRefresh: null
};

export const AppContext = createContext(ContextDefaultValues);

export const AppProvider = ({ children }) => {
  const [isDarkMode, setDarkMode] = useState(greeting().isDark);
  const [refresh, setRefresh] = useState(false);
  const toggleDarkMode = () => setDarkMode((prevState) => !prevState);
  const onRefresh = () => setRefresh(true);

  useBodyClass(isDarkMode ? 'theme--dark' : 'theme--default');

  const {
    data: countries,
    loading,
    error
  } = useFetch('/all', 'countries', refresh, setRefresh);

  return (
    <AppContext.Provider
      value={{
        isDarkMode,
        toggleDarkMode,
        countries,
        loading,
        error,
        onRefresh
      }}
    >
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

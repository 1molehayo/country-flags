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
  onRefresh: null,
  url: '/all',
  onSetUrl: null
};

export const AppContext = createContext(ContextDefaultValues);

export const AppProvider = ({ children }) => {
  const [isDarkMode, setDarkMode] = useState(greeting().isDark);
  const [refresh, setRefresh] = useState(false);
  const [url, setUrl] = useState('/all');

  const toggleDarkMode = () => setDarkMode((prevState) => !prevState);
  const onRefresh = () => setRefresh(true);
  const onSetUrl = (e) => {
    setUrl(e);
    setRefresh(true);
  };

  useBodyClass(isDarkMode ? 'theme--dark' : 'theme--default');

  const {
    data: countries,
    loading,
    error
  } = useFetch(url, 'countries', refresh, setRefresh);

  return (
    <AppContext.Provider
      value={{
        isDarkMode,
        toggleDarkMode,
        countries,
        loading,
        error,
        onRefresh,
        url,
        onSetUrl
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

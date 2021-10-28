// import classnames from 'classnames';
import { useAppContext } from 'contexts/AppContext';
import PropTypes from 'prop-types';
import React, { useRef } from 'react';
import { useHistory } from 'react-router';

export const Searchbar = ({ setSearchValue, searchValue }) => {
  const { onSetUrl } = useAppContext();
  const inputRef = useRef(null);
  const history = useHistory();

  const handleSubmit = () => {
    history.push({
      pathname: '/',
      search: `?name=${searchValue}`
    });

    return onSetUrl(`/name/${searchValue}`);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSubmit();
    }
  };

  return (
    <div className="searchbar">
      <input
        ref={inputRef}
        type="text"
        placeholder="Search by country"
        onChange={(e) => setSearchValue(e.target.value)}
        value={searchValue}
        onKeyDown={handleKeyDown}
      />

      <button onClick={handleSubmit}>
        <span className="icon-search" />
      </button>
    </div>
  );
};

Searchbar.propTypes = {
  searchValue: PropTypes.string,
  setSearchValue: PropTypes.func
};

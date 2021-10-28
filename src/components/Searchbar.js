// import classnames from 'classnames';
import PropTypes from 'prop-types';
import React, { useRef, useState } from 'react';

export const Searchbar = ({ data, updateData }) => {
  const [searchValue, setSearchValue] = useState('');
  const inputRef = useRef(null);

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      const arr = data.filter(
        (item) =>
          item.name.common.includes(searchValue) ||
          item.name.official.includes(searchValue)
      );

      updateData(arr);
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
    </div>
  );
};

Searchbar.propTypes = {
  data: PropTypes.array,
  updateData: PropTypes.func
};

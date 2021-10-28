import React from 'react';
import PropTypes from 'prop-types';

export const CountryCard = ({ item, onClick }) => {
  return (
    <>
      <div role="button" className="country-card" onClick={onClick}>
        <div className="country-card__image">
          <img src={item.flags?.svg} alt={item.name?.common} />
        </div>

        <div className="country-card__content">
          <p>{item.name?.common}</p>
        </div>
      </div>
    </>
  );
};

CountryCard.propTypes = {
  item: PropTypes.object,
  onClick: PropTypes.func
};

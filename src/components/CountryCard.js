import React from 'react';
import PropTypes from 'prop-types';

export const CountryCard = ({ item }) => {
  return (
    <div role="button" className="country-card">
      <div className="country-card__image">
        <img src={item.flags?.svg} alt={item.name?.official} />
      </div>

      <div className="country-card__content">
        <p>{item.name?.official}</p>
      </div>
    </div>
  );
};

CountryCard.propTypes = {
  item: PropTypes.object
};
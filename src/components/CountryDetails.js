import React from 'react';
import PropTypes from 'prop-types';
import {
  convertArrayToString,
  formatNumberWithCommas,
  getLanguagues
} from 'utility';

export const CountryDetails = ({ item }) => {
  return (
    <div className="country-details">
      <div className="country__grid">
        <div className="country__content">
          <div className="mb-5">
            <p className="country__label">Country name</p>
            <p className="country__text">
              {item.name?.official}, <em>also commonly known as</em>{' '}
              {item.name?.common}
            </p>
          </div>

          <div className="mb-5">
            <p className="country__label">Capital city</p>
            <p className="country__text">{item.capital.join(', ')}</p>
          </div>

          <div className="mb-5">
            <p className="country__label">Official currencies</p>
            <p className="country__text">
              {convertArrayToString(item.currencies, 'name')}
            </p>
          </div>

          <div className="mb-5">
            <p className="country__label">Population count</p>
            <p className="country__text">
              {formatNumberWithCommas(item.population)}
            </p>
          </div>

          <div className="mb-5">
            <p className="country__label">ISO code</p>
            <p className="country__text">{item.cca3}</p>
          </div>

          <div className="mb-5">
            <p className="country__label">List of official languages</p>
            <p className="country__text">{getLanguagues(item.languages)}</p>
          </div>
        </div>

        <div className="country__image">
          <img src={item.flags?.svg} alt={item.name?.common} />
        </div>
      </div>
    </div>
  );
};

CountryDetails.propTypes = {
  item: PropTypes.object
};

import moment from 'moment';
import Toastify from 'toastify-js';

export const capitalizeFirstLetter = (str) => {
  if (!str) {
    return '';
  }

  return `${str.substr(0, 1).toUpperCase()}${str.substr(1)}`;
};

export const greeting = () => {
  const hour = moment().hour();

  if (hour > 16) {
    return {
      text: 'Good evening,',
      isDark: true
    };
  }

  if (hour > 11) {
    return {
      text: 'Good afternoon,',
      isDark: false
    };
  }

  return {
    text: 'Good morning,',
    isDark: false
  };
};

export const isArrayEmpty = (arr) => !arr || arr.length === 0;

export const isObjectEmpty = (obj) => {
  if (!obj) {
    return true;
  }

  for (const prop in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, prop)) {
      return false;
    }
  }

  return true;
};

const getToasterStyles = (type) => {
  switch (type) {
    case 'error':
      return 'linear-gradient(to right, rgb(255, 95, 109), rgb(255, 195, 113))';

    case 'warn':
      return 'linear-gradient(to right, rgb(255 244 113), rgb(150, 201, 61))';

    default:
      return 'linear-gradient(to right, rgb(0, 176, 155), rgb(150, 201, 61))';
  }
};

export const notify = ({ type, message }) => {
  return Toastify({
    text: message,
    duration: 3000,
    close: true,
    style: {
      background: getToasterStyles(type),
      color: '#fff',
      'font-size': '16px'
    }
  }).showToast();
};

export const convertArrayToString = (obj, key) => {
  if (isObjectEmpty(obj) || !key) {
    return '';
  }

  return Object.keys(obj)
    .map((objKey) => obj[objKey][key])
    .join(', ');
};

export const formatNumberWithCommas = (x) => {
  if (!x) {
    return 0;
  }

  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

export const getLanguagues = (obj) => {
  if (isObjectEmpty(obj)) {
    return '';
  }

  return Object.values(obj).join(', ');
};

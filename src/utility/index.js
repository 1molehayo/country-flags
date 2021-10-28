import moment from 'moment';

export const greeting = () => {
  const hour = moment().hour();

  if (hour > 16) {
    return 'Good evening';
  }

  if (hour > 11) {
    return 'Good afternoon';
  }

  return 'Good morning';
};

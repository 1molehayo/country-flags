import { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

/**
 * @return {null}
 */
const PageNavigationListener = ({ history }) => {
  useEffect(() => {
    // history.listen() returns a function that can be called used to stop the listener
    const unlisten = history.listen(() => {
      window.scrollTo(0, 0);
    });
    return () => {
      unlisten();
    };
  }, [history]);

  return null;
};

PageNavigationListener.propTypes = {
  history: PropTypes.object
};

export default withRouter(PageNavigationListener);

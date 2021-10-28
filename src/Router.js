import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import PageNavigationListener from 'services/pageNavigationListener';
import { AnimatePresence } from 'framer-motion';

const Home = lazy(() => import('pages/Home'));

const Scroll = (props) => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [props.location]);

  return props.children;
};

Scroll.propTypes = {
  location: PropTypes.object,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};

const RouterComponent = () => (
  <Router>
    <PageNavigationListener />

    <Switch>
      <Route
        exact
        path="/"
        render={(routeProps) => (
          <Suspense fallback={null}>
            <AnimatePresence initial={false} exitBeforeEnter>
              <Home {...routeProps} />
            </AnimatePresence>
          </Suspense>
        )}
      />
    </Switch>
  </Router>
);

export default RouterComponent;

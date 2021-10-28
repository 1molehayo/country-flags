import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Header from './Header';
import Footer from './Footer';

export const PageLayout = (props) => (
  <div className="page">
    <Header />

    <main className={classnames('page-body', props.className)}>
      {props.children}
    </main>

    <Footer />
  </div>
);

PageLayout.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

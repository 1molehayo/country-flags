import React from 'react';

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <p>Footer</p>
      <div className="copyright">
        &copy; Copyright {new Date().getFullYear()}{' '}
        <a className="copyright__link" href="https://olusegunomilabu.com">
          Olusegun Omilabu{' '}
        </a>
        Powered by{' '}
        <a
          className="copyright__link"
          href="https://github.com/1molehayo/react-boilerplate"
        >
          React boilerplate
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;

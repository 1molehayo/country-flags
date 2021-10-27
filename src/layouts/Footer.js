import React from 'react';

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="copyright">
        <span className="footer__text">
          &copy; Copyright {new Date().getFullYear()} Powered by{' '}
        </span>
        <a
          className="footer__text"
          href="https://github.com/1molehayo/react-boilerplate"
        >
          React boilerplate
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;

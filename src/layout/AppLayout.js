import React, { Fragment } from "react";

const AppLayout = ({ children }) => {
  return (
    <Fragment>
      <header className="navbar navbar-light bg-light">
        <div className="navbar-brand">Розклад</div>
      </header>
      <main>{children}</main>
      <footer className="card-footer text-muted">
        <div className="footer-copyright text-center py-3">
          Designed and built with all the love in the world by the
          <a href="http://t.me/fs1923"> Fs1923</a>
        </div>
      </footer>
    </Fragment>
  );
};

export default AppLayout;

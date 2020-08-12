import React from 'react';
import  './default.scss'

const Layout: React.FunctionComponent<{}> = ({ children }) => {
  return <div className="container">
    <div>header</div>
    <div>{children}</div>
  </div>
};
export default Layout
import React from 'react';

import './style.scss';

import logo from './myLogo.png';

const Loader = () => {
  return (
    <div className="loader">
      <div className="loader__center">
        <div className="loader__center_ring">
          <img className="loader__center_img" src={logo} alt="logo" />
        </div>
      </div>
    </div>
  );
};

export default React.memo(Loader);

import React from 'react';
import './arrow.css';

const Arrow = () => {

    return (
      <>
          <div className="arrow-container" onClick={()=>document.documentElement.scrollTop = 0}>
              <i className="fa fa-chevron-up"></i>
          </div>
      </>
    );
}

export default Arrow;

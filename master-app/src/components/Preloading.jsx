import React from 'react'

import './Preloading.css';
import loading from './loader.gif';

export const Preloading = () => {
  return (
    <>
      <div className="loading">
        <img className="loadimg" src={loading} alt="" /> Loading...
      </div>
    </>
  )
}

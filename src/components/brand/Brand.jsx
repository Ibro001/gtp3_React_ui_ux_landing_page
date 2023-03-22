import React from 'react'
import './brand.css';
import {google, slack, atlassian, dropbox, shopify } from './imports';

const Brand = () => {
  return (
    <div className='gpt3__brand section__padding'>
      <div> <img src= {google} alt="google_logo"/> </div>
      <div> <img src= {slack} alt="google_logo"/> </div>
      <div> <img src= {atlassian} alt="google_logo"/> </div>
      <div> <img src= {dropbox} alt="google_logo"/> </div>
      <div> <img src= {shopify} alt="google_logo"/> </div>
    </div>
  )
}

export default Brand
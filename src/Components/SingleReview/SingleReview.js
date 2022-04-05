import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './SingleReview.css'

const SingleReview = (props) => {
    const {name, img, ratings, details} = props.getReviews;
     
  return (
    <div className='review'>
      <img src={img} alt="" />
      <h4>Name:{name}</h4>
      <p><small>{details}</small></p>
      <p><small>Ratings:{ratings} <FontAwesomeIcon  className='fnt-aws' icon="fa-solid fa-star-half-stroke" /></small></p>
    </div>
  );
};

export default SingleReview;
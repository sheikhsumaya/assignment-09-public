import React from 'react';
import './SingleReview.css'

const SingleReview = (props) => {
    const {name, img, ratings} = props.getReviews;
     
  return (
    <div className='review'>
      <img src={img} alt="" />
      <h4>Name:{name}</h4>
      <p><small>Ratings:{ratings}</small></p>
    </div>
  );
};

export default SingleReview;
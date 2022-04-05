import React from 'react';
import useReviews from '../../hooks/useReviews';
import SingleReview from '../SingleReview/SingleReview';
import './Reviews.css'


const Reviews = () => {
  const [getReviews, setReviews] = useReviews();
  return (
    <div className='home-container'>
      <div>
        <h1>Reviews Given by</h1>
       <div className='cart-container'>
       {
          getReviews.map(getReviews => <SingleReview
          key={getReviews.id}
          getReviews={getReviews}
          ></SingleReview>) 
        }  
       </div>
          
      </div>
    </div>
  );
};

export default Reviews;
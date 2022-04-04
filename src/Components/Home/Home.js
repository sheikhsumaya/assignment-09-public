import React from 'react';
import './Home.css'
import useReviews from '../../hooks/useReviews';
import SingleReview from '../SingleReview/SingleReview';


const Home = () => {
  const [getReviews] = useReviews();
  return (
    <div>
      <div className='home'>
        <div className='text'>
        <h1>TVS Wego Scooty <br /> Make Your Life Easy</h1>
        <p>TVS has used the 109.7 cc engine, which is 4-stroke, CVTi, Single Cylinder, Air cooled and OHC. Its maximum power is 8 Bhp @ 7500 rpm and maximum torque 8 Nm @ 5500 rpm. It has been used in automatic gear, which is helpful for beginners. The scooter is able to move at a maximum speed of 85 kilometers per hour, and TVS claims it can cross 50 kilometers per liter of fuel. Its weight is 108 kg. More details about the bike in the following statement.</p>
        <button className='btn'>Live Demo</button>
        </div>
        <img src="https://images.pexels.com/photos/11094871/pexels-photo-11094871.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
      </div>
      <div>
        <h2>Here are some reviews</h2>
       <div className='home-cart'>
       {
          getReviews.slice(0, 3).map(getReviews => <SingleReview
          key={getReviews.id}
          getReviews={getReviews}
          ></SingleReview>) 
        }  
       </div>
        <button className='review-btn' >Show all</button>
      </div>
    </div>
  );
};

export default Home;
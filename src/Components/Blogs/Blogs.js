import React from 'react';
import './Blogs.css'

const Blogs = () => {
  return (
    <div className='blog-container'>
       <div className='blog'>
       <h2>Questions: What is context-api? How It's works?</h2>
      <h5>Answer: The Context API is a React structure that enables you to exchange unique details and assists in solving prop-drilling from all levels of your application. <br /> Context API allows us to pass data through our component trees, giving our components the ability to communicate and share data at different levels. In this tutorial, we'll explore how we can use React Context to avoid prop drilling. First, we'll cover what prop drilling is and why we should avoid it.</h5>
       </div>
      <div className='blog'>
        <h2>
          Questions:What is semantic tag?
        </h2>
        <h5>
        Semantic HTML elements are those that clearly describe their meaning in a human- and machine-readable way.Semantic HTML tags provide information about the contents of those tags that goes beyond just how they look on a page. Text that is enclosed in the tag is immediately recognized by the browser as some type of coding language.
        </h5>
      </div>
    </div>
  );
};

export default Blogs;
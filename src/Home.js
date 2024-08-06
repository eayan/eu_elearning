
import React, { useState } from 'react';
import BlogList from './BlogList';

const Home  = () => {
  const [blogs]=useState([
    {title: 'Welcome to Sample E-Learning Activities Page for EU E-Learning Platform', body: 'This page is only for testing purposes.', author:'E. Ayan', id:1 },
  ]);
    return (
        <div className="home">
          <BlogList blogs={blogs}/>
        </div>
      );
}
export default Home ;
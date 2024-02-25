import React from 'react';
import Author from '../author/Author';

const Home = ({jokes}) => {
  return (
   <Author jokes={jokes} />
  )
}

export default Home;
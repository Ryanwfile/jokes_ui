import React from 'react';
import Author from '../author/Author';
import './Home.css';

const Home = ({jokes}) => {
  return (
    <div className='home-container'>
      <nav>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Jokes</li>
        </ul>
      </nav>
      <div>
        <Author jokes={jokes} />
      </div>
      <div className='footer'><b>Where am I, is this a div or not</b>Empty Space</div>
    </div>
  )
}

export default Home;
import React, { useEffect } from "react";
import './Home.css';

const Home = ({jokesData}) => {
  useEffect(() => {  
  }, [jokesData])
  

  return (
    jokesData && jokesData.length > 0 && jokesData.map((joke) => {
      return (
      <div 
      key={joke.jokeId}>
        Joke id:{joke.jokeId} 
        title: {joke.title} 
        content: <p className="joke-content">{joke.content} </p>
      </div>)
    })
   
   
  )
}

export default Home;
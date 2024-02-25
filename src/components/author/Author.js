import './Author.css';
import React from 'react';
import Carousel from 'react-material-ui-carousel';
import {Paper} from '@mui/material';

const Author = ({jokes}) => {
  if(jokes && jokes.length > 0){
    return (
      <div className='joke-carousel-container'>
        <Carousel>
          { jokes.map((joke) => {            
              return(
                <Paper key={joke.jokeId}>
                  <div className='joke-card-container'>
                    <div className='joke-card' style={{"--img": `url(${joke.backdrops[0]})`}}>
                      <div className='joke-detail'>
                        <div className='joke-poster'>                          
                          <img 
                          src = "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Blue_question_mark_icon.svg/100px-Blue_question_mark_icon.svg.png"
                          alt="Question Mark"
                          ></img>
                        </div>
                        <div className='joke-title'>
                          <h4>{joke.title} by {joke.author}</h4>
                          <p><b>{joke.content}</b></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Paper>
              )
            })
          }
        </Carousel>
      </div>
    )
 
  }   else {
    return <div>No jokes here</div>
  }

}

export default Author;
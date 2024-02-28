import './Author.css';
import React from 'react';
import Carousel from 'react-material-ui-carousel';//can replace this with React Table https://www.material-react-table.com/docs/examples/basic
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
                      <div className='joke-detail'>
                        <div className='joke-poster'>                          
                          <img 
                          src = "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Blue_question_mark_icon.svg/100px-Blue_question_mark_icon.svg.png"
                          alt="Question Mark"
                          ></img>
                        </div>
                        <div className='joke-title'>
                          <h3>Testing Here, this is only a test</h3>
                          <h4>{joke.title} by {joke.author}</h4>
                          <h2>{joke.content}</h2>
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
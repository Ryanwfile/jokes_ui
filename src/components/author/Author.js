import './Author.css';
import {useState, useEffect, React } from 'react';
import Carousel from 'react-material-ui-carousel';//can replace this with React Table https://www.material-react-table.com/docs/examples/basic
import {Paper} from '@mui/material';

const Author = ({jokes}) => {
  const [isDisplayed, setIsDisplayed] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);  
  //maybe each joke should have a pause so that one pause doesn't ruin them all
  const keyDown = (event) => {
      event.preventDefault();
      setShowAnswer(event.keyCode === 32);
  };

  useEffect(() => {
    setInterval(() => {
      setIsDisplayed(true);
    }, 15000);
  }, []);

 function handleShowAnswer(){ 
  console.log('stuff handled');
 }
  
  if(jokes && jokes.length > 0){
    return (
      <div tabIndex="0" className='joke-carousel-container' onKeyDown={keyDown}>
        <Carousel>
          { jokes.map((joke) => { 
            joke.showAnswer = showAnswer;     
            const question = joke.content.substring(10, joke.content.indexOf("?") + 1);
            const answer = joke.content.substring(joke.content.indexOf("Answer:") + 7);         
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
                          <h3>Press Space Bar to show answer before timer (You may have to click near this text first)</h3>
                          <h4>{joke.title} by {joke.author}</h4>
                          {joke.isRhetorical ? 
                          <h2>{joke.content}</h2> : 
                          <h2 onClick={handleShowAnswer}> { question } : {(isDisplayed || showAnswer ) ? answer : "Nothing to Display"}  </h2> }
                          {/* <h2>{joke.content}</h2> */}
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
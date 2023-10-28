import React from "react";
import './Hero.css';
import Carousel from "react-material-ui-carousel";
import { Paper } from "@mui/material";

const Hero = ({jokes}) => {
  return (
    <div className="joke-carousel-container">
      <Carousel>
        {
          jokes.map((joke) => {
            return(
              <Paper div className="joke-card-container">
                <div className="joke-card">
                  <div className="joke-detail">
                    {{joke}}
                  </div>
                </div>
              </Paper>
            ) 
          })
        }
      </Carousel>
    </div>
  )
}
export default Hero;
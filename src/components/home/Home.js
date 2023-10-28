import React, { useEffect } from "react";

const Home = ({jokesData}) => {
  useEffect(() => {
    console.log(`jokesData is ${JSON.stringify(jokesData)}`);
  }, [jokesData])
  
  // console.log(`Inside home jokes is ${jokes}`);
  return (
    <div>
      Welcome here
      {jokesData && jokesData.length > 0 && 
      <div>Hello, we got jokes now, here's one now {jokesData.length}  </div>
      }  
    </div>
  )
}

export default Home;
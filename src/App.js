// import logo from './logo.svg';
import './App.css';
import api from './api/axiosConfig';
import { useState, useEffect } from 'react';
import { Routes, Route} from 'react-router-dom';
import Home from './components/home/Home';
import Layout from './components/Layout';


function App() {
  const [jokes, setJokes] = useState();

  const getJokes = async () => {    
    try{
      const response = await api.get("/jokes");
      // console.log(response.data);
      setJokes(response.data);
    }
    catch(err){
      console.log(err);
    }    
  }

  useEffect(() => {
    getJokes();
  }, [])
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="/" element={<Home jokesData={jokes} />}></Route>        
        </Route>
      </Routes>
    </div>
  );
}

export default App;
//https://www.youtube.com/watch?v=5PdEmeopJVQ&t=5895s

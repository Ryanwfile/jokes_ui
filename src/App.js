// import logo from './logo.svg';
import api from './api/axiosConfig';
import {useState, useEffect} from 'react';
import './App.css';
import Layout from './components/Layout';
import Home from './components/home/Home';
import {Routes, Route} from 'react-router-dom';

function App() {
  const [jokes, setJokes] = useState();

  const getJokes = async () => {
    try {
      const response = await api.get("/api/v1/jokes");
      console.log(response.data);
      setJokes(response.data);

    } catch(err){
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
         <Route path="/" element={<Home jokes={jokes} />}> </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;

import {useEffect, useState} from 'react';
import './App.css';
import axios from 'axios';
import City from './city';

function App() {


  const key = "c7e7feb04354dceb00ff64fd995fa2b9";

  const [search, setSearch] = useState(" ");

  const [city, setCity] = useState();

  useEffect(() => {
    async function getApi() {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${key}&units=metric`
        );
        console.log(response);
        setCity(response.data);
      }
      catch(e){
        console.error(e);
      }
    }
    getApi()
  },[search])

  console.log(search);

  return (
    <div className="App">
      <div>
        <h1>Hava Durumu</h1>
        <input type="text" onChange={(e) => setSearch(e.target.value)} />
        <City city={city}/>
      </div>
    </div>
  );
}

export default App;

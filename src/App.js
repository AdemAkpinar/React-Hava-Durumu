import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import City from "./City";

function App() {
  const key = "038ab037a575c32357b3295b16db693a";
  const [search, setSearch] = useState();
  const [city, setCity] = useState();
  useEffect(() => {
    async function getApi() {
      try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${key}&units=metric`);
        console.log(response);
        setCity(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    getApi();
  }, [search]);
  console.log(search);
  return (

    <div className="App">
      <div className="mb-3 pt-20 ">
        <input
          onChange={(e) => setSearch(e.target.value)}
          type="text" placeholder="Placeholder" className="px-20 py-1 placeholder-slate-300 text-slate-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring" />
        <City city={city} />
      </div>
    </div>
  );
}

export default App;

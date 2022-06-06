import React, { useEffect } from 'react';
import WeatherCard from './WeatherCard';
import "./Style.css";

function Temperature() {

  const [searchValue, setSearchValue]   = React.useState("Kolkata");
  const [tempInfo, setTempInfo] = React.useState({});
//   An async function is a function declared with the async keyword, 
//   and the await keyword is permitted within it. The async and await keywords enable asynchronous, 
//   promise-based behavior to be written in a cleaner style,
//   avoiding the need to explicitly configure promise chains.
  const getWeatherInfo = async () => {
      try{
          let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=7b2088e5ee0d15fb3d3777f302066716`;
          const res = await fetch(url);
          const data = await res.json();
        //   console.log(data);
          const {temp, humidity, pressure} = data.main;
          const {main: weatherMood} = data.weather[0];
          const {name} = data;
          const {speed} = data.wind;
          const {country, sunset} = data.sys;

          const myWeatherInfo = {
              temp,
              humidity,
              pressure,
              weatherMood,
              name,
              speed,
              country,
              sunset
          };
          setTempInfo(myWeatherInfo);
        //   console.log(temp);


      }catch(error){
          console.log(error);
      }

  };

    useEffect(() => {
      getWeatherInfo();
    },[]);
  return (
    <>
    {/* Search button */}
      <div className="wrap">
          <input 
          type="search" 
          placeholder='search' 
          id='search' 
          className='searchTerm' 
          value={searchValue} 
          onChange = {(e) => setSearchValue(e.target.value)}/>
          <button className='searchButton' type='button' onClick={getWeatherInfo}>Search</button>
      </div>

      <WeatherCard tempInfo={tempInfo}/>
      
    </>
  )
}

export default Temperature

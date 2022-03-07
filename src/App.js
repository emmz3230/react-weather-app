import React  from 'react';
import './App.css';
// import React from 'react';

// go openweather to get the apikey 
const api ={
  key : '562054230351bd3897847fcd5e0dc379',
  base: "http://api.openweathermap.org/data/2.5/"
  
} 
function App() {
  const[query, setQuery] = useState("");
  const [weather, setWeather]= useState({});


  const search = evt =>{
    if (evt.key === "enter"){
      fetch(`{Api.base}weather?q=$(query)&units=metric&AppID=${api.key}`)
      .then(res => res.json())
      .then(result =>{ setWeather(result);
      setQuery('');
      });
    }
  }

  const dateBuilder = (d) => {
    let month = ["january","Febuary","March","April","May","June",
    "July", "September", "October", "November", "December"
  ];
  let days = ["Sunday", "Monday", "Tuesday","wednesday", "Thursday", "Friday", "Saturday"];
  
  let day = days[d.getDay()];
  let date = d.getDate();
  let months = months[d.getMonths()];
  let year = d.getFullYear();

  return `${day} ${date} ${month} ${year}`
  }
  return (
    <div className={(typeof weather.main !="undefined" ) ? ((weather.main.temp > 16)
    ?'app warm' : 'app')
  :'app'}>
      <main>
        <div className='search-box'>
          <input
          type= "text"
          className='search-bar'
          placeholder='search...'
          onchange ={e => setQuery(e.target.value)}
          value = {query}
          onKeyPress={search}
          />
        </div>
        {(typeof weather.main != "undefined") ? (
          <div>
          <div className='location-box'>
        <div className='location'>{weather.name},{weather.sys.country}</div>
        <div className='date'>{dateBuilder(new Date())}</div>
        </div>
        <div classname="weather-box">
          <div className='temp'>
            {Math.round(weather.main.temp)}°C
          </div>
          <div className='weather'>{weather.weather[0].main}</div>  
        </div>
        </div>
        ) : ('')}
        </main>
        </div>
  );
}

export default App;

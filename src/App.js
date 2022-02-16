import React  from 'react';
import './App.css';

// go openweather to get the apikey 
const api ={
  key : '562054230351bd3897847fcd5e0dc379',
  base: "http://api.openweathermap.org/data/2.5/"
  
} 
function App() {
  return (
    <div className="app">
        <main>
        <div className='search-box'>
          <input
          type= "text"
          className='search-bar'
          placeholder='search...'
          />
        </div>
        </main>
    </div>
  );
}

export default App;

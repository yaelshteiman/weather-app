import React, {useStatee} from 'react'
import axios from 'axios'

function App() {

  //const url = `https://api.openweathermap.org/data/2.5/weather?q=Haifa&appid=8a6415435c1402ebdaf1274cf9acc406`

  return (
    <div className="app">
        <div className="container">
            <div className="top">
                <div className="location">
                    <p>Haifa</p>
                </div>
                <div className="temp">
                    <h1>24°</h1>
                </div>
                <div className="description">
                    <p>Clouds</p>
                </div>
            </div>
            <div className="bottom">
                <div className="feels">
                    <p>25°</p>
                </div>
                <div className="humidity">
                    <p>20%</p>
                </div>
                <div className="wind">
                    12 MPH
                </div>
            </div>
        </div>
    </div>
  );
}

export default App;

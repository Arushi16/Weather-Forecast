import React, { Component } from 'react';
import {DateFormat} from './DateFormat';
import MainData from './MainData'

class DisplayData extends Component {   

      render() {
            let {city,country,error,mainResult,degree} = this.props
            return ( 
                  <div>
                        <center>
                              <strong> {country ? <span>{city}, {country}</span> : ""}</strong>
                              {error ? <span className="error">{error}</span> : ""}
                        </center>   
                        
                        {
                              mainResult.map((result,i) =>{
                                    return(
                                          <div key={i} className="dataBunch">
                                                <span className="date"><b>Date:</b> {DateFormat(result.dateKey)}</span>
                                                <ul>
                                                      {
                                                            result.weatherArr.slice(0,4)
                                                            .map((weatherItem, i) => 
                                                            <MainData
                                                                  key={i}
                                                                  icon = {weatherItem.weather[0].icon}
                                                                  main = {weatherItem.weather[0].main}
                                                                  description = {weatherItem.weather[0].description}
                                                                  temp = {weatherItem.main.temp}
                                                                  temp_min = {weatherItem.main.temp_min}
                                                                  temp_max = {weatherItem.main.temp_max}
                                                                  humidity = {weatherItem.main.humidity}
                                                                  windSpeed = {weatherItem.wind.speed}
                                                                  time = {weatherItem.dt_txt}
                                                                  degree = {degree}
                                                            />)
                                                      }
                                                </ul>
                                                <ul>
                                                      {
                                                            result.weatherArr.slice(4)
                                                            .map((weatherItem, i) => 
                                                            <MainData
                                                                  key={i}
                                                                  icon = {weatherItem.weather[0].icon}
                                                                  main = {weatherItem.weather[0].main}
                                                                  description = {weatherItem.weather[0].description}
                                                                  temp = {weatherItem.main.temp}
                                                                  temp_min = {weatherItem.main.temp_min}
                                                                  temp_max = {weatherItem.main.temp_max}
                                                                  humidity = {weatherItem.main.humidity}
                                                                  windSpeed = {weatherItem.wind.speed}
                                                                  time = {weatherItem.dt_txt}
                                                            />)
                                                      }
                                                </ul>
                                          </div>

                                    )}
                              )
                        }
                  </div>
             );
      }
}
 
export default DisplayData;
import React from 'react';
import {TimeFormat} from './DateFormat'

const MainData = (props) => {
    const far = Math.round(props.temp)
    const cel = Math.round((far - 32) * 5/9)

    const farMax = Math.round(props.temp_max)
    const celMax = Math.round((farMax - 32) * 5/9)

    const farMin = Math.round(props.temp_min)
    const celMin = Math.round((farMin - 32) * 5/9)
    return(
        <div className="data">
            <center>
                <p>
                <span className="time"><b>{TimeFormat(props.time)}</b></span><br/>
                <img src = {`http://openweathermap.org/img/w/${props.icon}.png`} alt = {props.main}/><br/>
                <span className="description">{props.description}</span><br/>
                
                {
                    props.degree === "C" ? <span className="temp">{cel} &#8451;</span>
                    :
                    <span className="temp">{far} &#8457;</span>
                }
                <br/>
                {
                    props.degree === "C" ? <span className="temp_max">H: {celMax} &#8451;</span>
                    :
                    <span className="temp_max">H: {farMax} &#8457;</span>
                }
                <br/>
                {
                    props.degree === "C" ? <span className="temp_min">L: {celMin} &#8451;</span>
                    :
                    <span className="temp_min">L: {farMin} &#8457;</span>
                }
                <br/>
                Humidity: <span className="humidity">{props.humidity} %</span><br/>
                Wind: <span className="windSpeed">{props.windSpeed} mph</span><br/>
                </p>
            </center>
        </div>
    )
}

export default MainData
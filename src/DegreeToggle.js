import React from 'react';

const DegreeToggle = (props) => {
    return(
        <div className="radioButtons">
            <input 
                type="radio"
                name = "degree"
                id = "F"
                value = "F"
                checked = {props.degree === "F"}
                onChange = {props.updateDegreeToggle}
            />
            <label htmlFor="F">Fahrenheit</label>
            <input
                type="radio"
                name = "degree"
                id = "C"
                value = "C"
                checked = {props.degree === "C"}
                onChange = {props.updateDegreeToggle}
            />
            <label htmlFor = "C">Celsius</label>
        </div>  
    )
}

export default DegreeToggle
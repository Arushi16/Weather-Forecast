import React,{Component} from 'react';
import './App.css';
import DisplayData from './DisplayData'
import DegreeToggle from './DegreeToggle';
require('dotenv').config();

const api = {
  key : process.env.REACT_APP_API_KEY.split(';')[0],
  base: "http://api.openweathermap.org/data/2.5/forecast?q="
}

class App extends Component {
  state = { 
    name: "",
    country: "",
    list: [],
    categorizeList: [],
    error: "",
    // clearFields: "",
    degree: "F"
  }

  getWeather = (e) => {
    e.preventDefault()
    const city = e.target.city.value;
    
    if(city !== ""){
      fetch(`${api.base}${city}&units=imperial&appid=${api.key}`)
      .then(res => res.json())
      .then(res => {
        if(res.cod === "200"){
          this.setState({
            city: res.city.name,
            country: res.city.country,
            list: res.list,
            categorizeList: this.categorizeResults(res.list),
            error: "",
            degree : "F",
            // clearFields: "Yes"
          })
          //console.log("categorizeList",this.state.categorizeList)
        }
        else if(res.cod === "404"){
          this.setState({
            city: "",
            country: "",
            list: [],
            categorizeList: [],
            error: res.message,
            degree : "",
            // clearFields: ""
          })
        }
      //console.log("res",res,"error",this.state.error,"cod",res.cod,"this error",res.message)
      })
    }
    else{
      this.setState({
        city: "",
        country: "",
        list: [],
        categorizeList: [],
        error: "Please enter the city name!",
        degree : "",
        // clearFields: ""
      })
    }

    //console.log("city",city,"this.state.city",this.state.city, "country",this.state.country)
    //console.log("categorizeList",categorizeList)
  }

  categorizeResults = (list) => {
    //get unique 5 day dates
    const dates = list.map(item => item.dt_txt.split(" ")[0]) //get date (index 0)
                  .filter((item,i,currArr) => currArr.indexOf(item) === i) //get unique dates

    console.log(dates)
    
    //creating an object with dates as identifier/key
    let mainResult = [];
    for(let date of dates){
      mainResult.push({
        dateKey: date,
        weatherArr: []
      })
    }

    //get date from res.list and check if date of mainResults and res.list is same, then add the data in weatherArr
    for(let item of list){
      let itemDate = item.dt_txt.split(" ")[0]

      for(let result of mainResult){
        if(result.dateKey === itemDate)
          result.weatherArr.push(item)
      }
    }

    //console.log("Main Result", mainResult)
    return mainResult
  }

  handleSelect = (e) => {
    e.target.select()
  }

  updateDegreeToggle = e => {
    this.setState({
      degree : e.target.value
    })
  }

  render() { 
    return ( 
      <div className="wrapper">
        <div className="container">
          <div className="row">
            
            <div className="col-xl-2 col-lg-2 col-md-2 col-sm-1">
              <span className="weatherFinder">WEATHER FORECAST</span>
            </div>

            <div className="col-xl-8 col-lg-8 col-md-8 col-sm-10 main-container">
              <div className="row">
                <div className="col-xl-2 col-lg-2 col-md-1 col-sm-1"></div>
                
                <div className="col-xl-8 col-lg-8 col-md-10 col-sm-10 form-container">
                  <span className="info">* Please enter only alphabets.</span>
                  <form onSubmit={this.getWeather}>
                    <input 
                      type="text" 
                      placeholder="City.." 
                      name="city" 
                      pattern="[A-Za-z ]+" 
                      id="cityName"
                      onClick = {this.handleSelect}
                    />

                    <button className="btn btn-info getWeather">Get Weather Forecast</button>

                    <DegreeToggle updateDegreeToggle={this.updateDegreeToggle} degree={this.state.degree}/>      
                    {/* {this.state.clearFields ? "" : <button className="btn btn-info getWeather">Get Weather</button>} */}

                    {/* {this.state.clearFields ? 
                      <button className="btn btn-info getAnotherForecast"
                        onClick={() => window.location.reload()}>Get Another Forecast</button> : 
                        <h1>{this.state.clearFields}</h1>
                    } */}
                  </form>
                </div>
               
                <div className="col-xl-2 col-lg-2 col-md-1 col-sm-1"></div>
              </div>

              <div className="row">
                <div className="col-lg-12">
                  <div className="displayData">
                    <DisplayData
                      city = {this.state.city}
                      country = {this.state.country}
                      error = {this.state.error}
                      mainResult = {this.state.categorizeList}
                      degree = {this.state.degree}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-2 col-lg-2 col-md-2 col-sm-1">
              <span className="weatherFinder">WEATHER FORECAST</span>
            </div>
          </div>
        </div>
      </div>
     );
  }
}
 
export default App;
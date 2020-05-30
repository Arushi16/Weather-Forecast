
            <div className="col-xl-2 col-lg-2 col-md-2 col-sm-3">
              {/* <span className="weatherFinder">WEATHER FORECAST</span> */}
              <span className="weatherFinder">W<br/>E<br/>A<br/>T<br/>H<br/>E<br/>R<br/>&#x26C5;<br/>F<br/>O<br/>R<br/>E<br/>C<br/>A<br/>S<br/>T</span>
            </div>

            <div className="col-xl-10 col-lg-10 col-md-10 col-sm-9 main-container">
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
          </div>
        </div>
      </div>
     );
  }
}
 
export default App;

import React from "react";
import './App.css';
import Weather from "./components/weather";

//api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
const API_key = "23722037aaa01481ac18d22d223d2373"

class App extends React.Component {
  constructor(){
    super()
    this.state = {}
  }

  
  render(){
    return(<Weather />);
  }
}

export default App;

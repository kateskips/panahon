import React from "react";
import './App.css';
import Weather from "./components/weather";

//api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
const API_key = "f74159910fbfeca96450bd09405e3b33"

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      city: undefined,
      main: undefined,
      temp: null,
      description: "",
      error: false
    }
    this.getWeather();
  }

  getWeather = async () => {
    const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=seattle&appid=${API_key}`)
    const response = await api_call.json();
    console.log(response)

    this.setState({
      city: response.name,
      temp: response.main.temp

    })
  }
  render(){
    return(<Weather 
      city={this.state.city}
      temp={this.state.temp}
      descroption={this.state.description} />);
  }
}

export default App;

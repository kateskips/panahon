import React, { useState } from 'react';
import "../App.css";

const Form = props => {
    const [city, setCity] = useState('')
    return (
        <div className="nes-field is-inline">
        <label htmlFor="error_field"></label>
        <input type="text" id="name_field" className="nes-btn form-control" placeholder="city name" name="city" autoComplete="off" value={city} onChange={event => setCity(event.target.value)} />
        <button type="submit" className="nes-btn is-warning" onClick={event => props.getWeather(city)}>Get Weather</button>
        </div>
    );
};
   
export default Form;
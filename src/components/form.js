import React from 'react';
import "../App.css";

const Form = props => {
    return (
        <div className="nes-field is-inline">
            <label for="error_field"></label>
            <input type="text" id="name_field" className="nes-btn" placeholder="city name" className="form-control" name="city" autoComplete="off" />
            <a class="nes-btn is-warning" href="#">Get Weather</a>    
    </div>
    );
};
   
export default Form;
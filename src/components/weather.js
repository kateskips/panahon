import React from 'react';
import "../App.css";
import Form from './form';


const Weather = props => {
    return (
        <div className="wrapper">
            <div className="header-title">
                <h1>Panahon</h1>
                <div className="nes-container is-rounded" >
                    <p>8-Bit Weather App</p>
                </div>
                <div className="nes-container is-rounded">
                    <div className="message-list">
                        <div className="message -left">
                            <div className="nes-balloon from-left">
                                <p>Hello, {props.city}'s weather is {props.temp} F</p>
                            </div>
                        </div>
                        <div className="cat-icon">
                        <img src="https://img.icons8.com/material-two-tone/35/000000/pixel-cat.png" alt="cat"/>
                        </div>
                    </div>
                </div>
                <div className="nes-container is-rounded">
                    <p>Main: {props.main}</p>
                    <p>Description: {props.description}</p>
                    <img src ={`http://openweathermap.org/img/w/${props.icon}.png`} alt="" />
                </div>
                <Form {...props} />
            </div>
        </div>
    );
};

export default Weather;
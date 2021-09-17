import React from 'react';
import "../App.css";

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
                                <p>Hello {props.cityname}</p>
                            </div>
                        </div>
                        <div className="cat-icon">
                        <img src="https://img.icons8.com/material-two-tone/35/000000/pixel-cat.png" alt="cat"/>
                        </div>
                    </div>
                </div>
                <div className="nes-container is-rounded">
                    <p>Weather</p>
                </div>
            </div>
        </div>
    );
};

export default Weather;
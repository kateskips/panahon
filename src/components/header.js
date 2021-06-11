import React from 'react';
import "../App.css";

const Header = () => {
    return (
        <div className="wrapper">
            <div className="header-title">
                <h1>Panahon</h1>
                <div className="nes-container is-rounded" >
                    <p>8-Bit Weather App</p>
                </div>
                <div className="main">
                <row class="nes-btn">
                <button type="button" class="nes-btn is-primary">about</button>
                <button type="button" class="nes-btn is-error">contact</button>
                <button type="button" class="nes-btn is-success">source</button>
                </row>
            </div>
            </div>
        </div>
    );
};

export default Header;
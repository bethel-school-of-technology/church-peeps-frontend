import React, { Component } from "react";
import "./App.css";

import ChurchTitle from "./ChurchTitle";



class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Churches</h1>
                </header>

                <ChurchTitle titles={titles} />
            </div>
        );
    }
}

export default App;
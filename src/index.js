import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import store from "./reducers";
import {BrowserRouter as Router} from "react-router-dom";
import {Provider} from "react-redux";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'

ReactDOM.render(
    <Provider store={store}>
        <MuiThemeProvider muiTheme={getMuiTheme()}>
            <Router>
                <App/>
            </Router>
        </MuiThemeProvider>
    </Provider>
    ,
    document.getElementById("root"));

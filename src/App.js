import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link, Route, Switch, withRouter} from 'react-router-dom';

import './App.css';

// Components
import Home from "./components/Home";
import RidePage from "./components/RidePage";
import CreateRide from "./components/CreateRide";
import Register from "./components/Register";
import Login from "./components/Login";
import {getCurrentUser} from "./actions";
import MyProfile from './components/MyProfile';
import About from './components/About';


class NavBar extends Component {
    render() {
        const {history} = this.props;
      return (
        <div>
          <ul>
            <button className="" onClick={() => history.push('/about') }>About</button>
            <button className="" onClick={() => history.push('/user/login') }>Login</button>
            <button className="" onClick={() => history.push('/user/register') }>Register</button>
          </ul>
        </div>
      )
    }
  };

class App extends Component {
    constructor(props) {
        super(props);
        console.log(props);
        // props.dispatch(getCurrentUser());
    }

    render() {
        console.log(this.props);
        const {user} = this.props.state;
        const {pathname} = this.props.history.location;
        if ("hasCompletedRegistration" in user && !user.hasCompletedRegistration && pathname !== "/register") {
            this.props.history.push('/register');
        }
        return (
            <div className='container'>
                <div className='app'>
                    
                    {/* <Switch> */}
                        <NavBar location={this.props.location} history={this.props.history} expanded={this.props.expanded}/>
                        <Route exact path='/' render={() => <Home {...this.props}/>}/>
                        <Route path="/user/register" render={() => <Register {...this.props}/>}/>
                        <Route path="/user/login" render={() => <Login {...this.props}/>}/>
                        <Route path ="/about" render={() => <About {...this.props}/>}/>
                        <Route exact path="/rides/new" render={(props) => <CreateRide {...props} {...this.props}/>}/>
                        <Route path="/rides/:id" render={(props) => <RidePage {...props} {...this.props} _id={props.match.params.id}/>}/>
                        <Route exact path="/myprofile" render={(props) => <MyProfile {...this.props} />}/>
                    {/* </Switch> */}
                </div>
            </div>
        );
    }
}

//Connect state to props
export default withRouter(connect(state => ({state}))(App));

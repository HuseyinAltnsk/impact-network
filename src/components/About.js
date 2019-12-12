import React, {Component} from "react";
import {Link} from "react-router-dom";
import SearchBar from './SearchBar';


class About extends Component{
    render(){
        return (
            <div>
                <header>
                    <h1>About header text here</h1>
                </header>
                <body> 
                    <p>A community for sharing and collaborating.<br />
                    Join Our community of volunteers and social entrepreneurs.</p>

                </body>
            </div>
        )
    


    }
}

export default About;
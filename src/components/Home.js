import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import SearchBar from './SearchBar';
import Menu from '@material-ui/core/Menu';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
/**
 *   The home page to view the user's course list with some simple information
 */
class Home extends Component {
    state = {
        anchorEl: null,
    };
    handleClick = event => {
        this.setState({anchorEl: event.currentTarget});
    };
    handleClose = () => {
        this.setState({anchorEl: null});
    };
    
    render() {
        const {anchorEl} = this.state;
        
        const {user, form} = this.props.state;
        const {firstName, lastName, username} = (user) ? user : {firstName:"", lastName:"", username:""};
        const searchValue = (form.searchBar !== undefined && "values" in form.searchBar) ? form.searchBar.values.search : "";

        let projectToDisplay = <span>No projects to display.</span>;
        let projects = [
            {
                name:"Bone Marrow Donation",
                owner:"Huseyin Altinisik",
                type: "ART"
            },
            {
                name:"Girls In Tech",
                owner:"Altan Tutar",
                type: "ART"
            },
            {
                name:"Charity:Water",
                owner:"Emre Koc",
                type: "HEALTHCARE"
            }
        ];
        if(projects.length > 0){
            const projectsSearched = projects.filter(pr => {
                return pr.name.toLowerCase().includes(searchValue.toLowerCase());
                });
            projectToDisplay = projectsSearched.map(projectItem => {
                switch (projectItem.type) {
                    default:  //case "ART":
                        return (
                            <div>
                                <h4>Project Name: {projectItem.name}</h4>
                                <h5>Project Owner: {projectItem.owner}</h5>
                                <h6>Project Category: {projectItem.type}</h6>
                            </div>
                        );
                    // case OFFERED_RIDE:
                    //     return (
                    //         <OfferedRide key={ride._id} {...ride}/>
                    //     );
                    
                    // default:
                        // return null;
                }
            })
        }
        
        return (
            <div className="">
                <header>WELCOME TO THE HOME PAGE
                <h2 className="">{firstName} {lastName}</h2>
                {!username &&
                <h2>User not found!</h2>}
                <h4 className="header">Username: {username}</h4>
                <Link to="">
                        <button className="">About</button>
                </Link>
                <Link to="">
                        <button className="">Our Project</button>
                </Link>
                <SearchBar onSubmit={() => {}}/>
                <Link to="/user/login">
                        <button className="">LOG IN</button>
                </Link>
                {/* display button only if not logged in. */}
                <Link to="/user/register">
                        <button className="">REGISTER</button>
                </Link>
                </header>
                <body>
                    <div>
                        <p>450 girls in Anatolia learned web dev</p>
                    </div>
                    <div>
                      
                        <Button aria-controls="simple-menu" aria-haspopup="true" onClick={this.handleClick}>
                            Open Menu
                        </Button>
                        <Menu
                            id="header-menu"
                            anchorEl={anchorEl}
                            open={Boolean(anchorEl)}
                            onClose={this.handleClose}
                        >
                            <MenuItem onClick={() => {
                                window.location = ""
                            }}>Projects</MenuItem>
                        </Menu>
                        <Link to="">
                        <button className="">All</button>
                        </Link>
                        <Link to="">
                        <button className="">Education</button>
                        </Link>
                        <Link to="">
                        <button className="">Art</button>
                        </Link>
                        <Link to="">
                        <button className="">Healtcare</button>
                        </Link>
                        <Link to="">
                        <button className="">Environment</button>
                        </Link>
                        <Link to="">
                        <button className="">Accessibility</button>
                        </Link>
                        {/* Filters */}
                    </div>
                    <div>
                        {projectToDisplay}
                    </div>
                </body>
                {/* make the project list scrollable */}
                <footer>

                </footer>
            </div>
        )
    }
}

export default Home;

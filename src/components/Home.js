import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import SearchBar from './SearchBar';
import "./Home.css";
import { withStyles } from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import SendIcon from '@material-ui/icons/Send';

/**
 *   The home page to view the user's course list with some simple information
 */
const StyledMenu = withStyles({
    paper: {
      border: '1px solid #d3d4d5',
    },
  })(props => (
    <Menu
      elevation={0}
      getContentAnchorEl={null}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
      {...props}
    />
  ));
  
  const StyledMenuItem = withStyles(theme => ({
    root: {
      '&:focus': {
        backgroundColor: theme.palette.primary.main,
        '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
          color: theme.palette.common.white,
        },
      },
    },
  }))(MenuItem);


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
                            <div className="projectView">
                                <div className="">
                                <span className="">
                                    <h4>Project Name: {projectItem.name}</h4>
                                </span>
                                <span className="">
                                    <h5>Project Owner: {projectItem.owner}</h5>
                                </span>
                                <h6>Project Category: {projectItem.type}</h6>
                                </div>
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
                <header>WELCOME TO THE HOME PAGE!
                <h2 className="">{firstName} {lastName}</h2>
                {!username &&
                <h2>User not found!</h2>}
                <h4 className="header">Username: {username}</h4>
                {/* <Link to="/about">
                        <button className="">About</button>
                </Link> */}
                <Link to="">
                        <button className="">Our Project</button>
                </Link>
                {/* <SearchBar onSubmit={() => {}}/> */}
                <Button
                    aria-controls="customized-menu"
                    aria-haspopup="true"
                    variant="contained"
                    color="primary"
                    onClick={this.handleClick}
                >Profile ⋁
                </Button>
                {/* THIS IS NOT WORKING, IT RENDERS THE SAME MENU AS "Projects" !!!!!!!  */}
                <StyledMenu
                    id="customized-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={this.handleClose}
                >
                    <StyledMenuItem onClick={()=> window.location = "/something_else"}>
                        <ListItemIcon>
                            <SendIcon fontSize="small"/>
                        </ListItemIcon>
                        <ListItemText primary="Something else" />
                    </StyledMenuItem>
                </StyledMenu>

                {/* <Link to="/user/login">
                        <button className="">LOG IN</button>
                </Link>
                <Link to="/user/register">
                        <button className="">REGISTER</button>
                </Link> */}
                </header>
                <body>
                    <div>
                        <h2>450 girls in Anatolia learned web dev</h2>
                    </div>
                    <div>
                        <Button
                            aria-controls="customized-menu"
                            aria-haspopup="true"
                            variant="contained"
                            color="primary"
                            onClick={this.handleClick}
                        >Projects ⋁
                        </Button>
                        <StyledMenu
                            id="customized-menu"
                            anchorEl={anchorEl}
                            keepMounted
                            open={Boolean(anchorEl)}
                            onClose={this.handleClose}
                        >
                            <StyledMenuItem onClick={()=> window.location = "/community"}>
                                <ListItemIcon>
                                    <SendIcon fontSize="small"/>
                                </ListItemIcon>
                                <ListItemText primary="Community" />
                            </StyledMenuItem>
                            <StyledMenuItem onClick={()=> window.location = "/something_else"}>
                                <ListItemIcon>
                                    <SendIcon fontSize="small"/>
                                </ListItemIcon>
                                <ListItemText primary="Something else" />
                            </StyledMenuItem>
                        </StyledMenu>
  
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

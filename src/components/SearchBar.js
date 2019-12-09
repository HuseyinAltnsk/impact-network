import React from 'react'
import {Field, reduxForm} from 'redux-form'

import './SearchBar.css';

let SearchBar = props => {
    const {handleSubmit} = props;
    return (
        <div className="searchBar">
            <form onSubmit={handleSubmit}>
                <Field className="searchField" name="search" component="input" type="text" placeholder="Filter by project"/>
            </form>
        </div>
    )
};

SearchBar = reduxForm({
    form: 'searchBar'
})(SearchBar);

export default SearchBar;

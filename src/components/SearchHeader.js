import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class SearchHeader extends Component {
    render() {
        return (
            <div className="searchBar">
                <i className="fas fa-search searchBarIcon"></i>
                <input type='text' placeholder='Search' className="searchInput"></input>
                <div className="searchTagsBox">
                    <div className="searchTags">Sport</div>
                    <div className="searchTags">Tv</div>
                    <div className="searchTags">Gaming</div>
                    <div className="searchTags">Ladies</div>
                    <div className="searchTags">Films</div>
                    <div className="searchTags">News</div>
                    <div className="searchTags">Music</div>
                    <div className="searchTags">Football</div>
                </div>
            </div>
        )
    }
}

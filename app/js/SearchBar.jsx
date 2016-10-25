import React from 'react'
import ReactDOM from 'react-dom'

var SearchBar = React.createClass({
    handleSearchTermChange(e) {
        this.props.onSearchInput(e.target.value)
    },
    render: function() {
        return (
            <div className="row">
                <div className="col-lg-4 col-lg-offset-4">
                    <input type="search" onChange={this.handleSearchTermChange}  className="form-control" placeholder="Search for an episode" value={this.props.searchTerm} />
                </div>
            </div>
        )
    }
})

module.exports = SearchBar
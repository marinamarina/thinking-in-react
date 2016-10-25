import React from 'react'
import ReactDOM from 'react-dom'

var SearchBar = React.createClass({
    render: function() {
        return (
            <div className="row">
                <div className="col-lg-4 col-lg-offset-4">
                    <input type="search" className="form-control" placeholder="Search for an episode" />
                </div>
            </div>
        )
    }
})

module.exports = SearchBar
import React from 'react'
import ReactDOM from 'react-dom'

var TableRow = React.createClass({
    render: function() {
        return (
            <tr>
                <td>{this.props.episode.title}</td>
                <td>
                    <a href="#">View</a>
                </td>
            </tr>
        )
    }
})

module.exports = TableRow
import React from 'react'
import ReactDOM from 'react-dom'
import TableRow from './TableRow'

var Table = React.createClass({
    render: function() {
        var rows = this.props.episodes
                    .filter(episode => episode.title.toLowerCase().indexOf(this.props.searchTerm.toLowerCase()) > -1 )
                    .map(episode => <TableRow key={episode.title} episode={episode} />)
        return (
            <div className="row spacer">
            <div className="col-lg-4 col-lg-offset-4">
                <table width="100%">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Link</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows}
                    </tbody>
                </table>
            </div>
        </div>
        )
    }
})

module.exports = Table
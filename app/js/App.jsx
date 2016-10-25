import React from 'react';
import ReactDOM from 'react-dom';
import Title from './Another'

var episodes = [
        {
            title: 'Episode 1',
            link: 'http://tagtree.tv/ecmascript-6-episode-1',
            date: new Date(2014, 3, 6)
        },
        {
            title: 'Episode 2',
            link: 'http://tagtree.tv/ecmascript-6-episode-2',
            date: new Date(2014, 3, 6)
        },
        {
            title: 'Episode 3',
            link: 'http://tagtree.tv/ecmascript-6-episode-3',
            date: new Date(2014, 3, 6)
        }
];

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

var Table = React.createClass({
    /*getInitialState: function() {
        return {
            searchTerm: ''
            }
    },*/
    render: function() {
        var rows = this.props.episodes.map(function(episode) {
            return <TableRow key={episode.title} episode={episode} />
        });
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

var FilterableEpisodeTable = React.createClass({
    render: function() {
        return (
            <div className="spacer">
                <SearchBar />
                <Table episodes={this.props.episodes} />
            </div>
        )
    }
})

ReactDOM.render(
    <FilterableEpisodeTable episodes={episodes} />,
    document.getElementById('container')
)

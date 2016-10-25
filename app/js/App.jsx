import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './SearchBar'
import Table from './Table'

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

var FilterableEpisodeTable = React.createClass({
    getInitialState: function() {
        return {
            searchTerm: ''
        }
    },
    onSearchInput: function(term) {
        this.setState({searchTerm: term})
        console.log(this.state)
    },
    render: function() {
        return (
            <div className="spacer">
                <SearchBar searchTerm={this.state.searchTerm} onSearchInput={this.onSearchInput} />
                <Table searchTerm={this.state.searchTerm} episodes={this.props.episodes} />
            </div>
        )
    }
})

ReactDOM.render(
    <FilterableEpisodeTable episodes={episodes} />,
    document.getElementById('container')
)

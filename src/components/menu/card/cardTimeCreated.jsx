'use strict';

const React = require('react');

class CardTimeCreated extends React.Component {
    render() {
        return (<small className="text-muted">
        {this.props.time} minutes ago</small>);
    }
}

module.exports = CardTimeCreated;

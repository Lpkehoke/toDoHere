'use strict';

const React = require('react');

class CardTitle extends React.Component {
    render() {
        return (<h5>{this.props.title}</h5>);
    }
}

module.exports = CardTitle;

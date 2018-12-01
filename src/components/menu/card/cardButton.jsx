'use strict';

const React = require('react');

class CardButton extends React.Component {
    render() {
        return (
        <button type="button" className="btn btn-primary btn-sm">
          {this.props.name}
        </button>);
    }
}

module.exports = CardButton;

'use strict';

const React = require('react');

class CardActionsGroup extends React.Component {
    render() {
        return (<div className="btn-group">
            <button type="button" className="btn btn-sm btn-outline-secondary">Share</button>
            <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
            <button type="button" className="btn btn-sm btn-outline-secondary btn-danger">Remove</button>
          </div>);
    }
}

module.exports = CardActionsGroup;

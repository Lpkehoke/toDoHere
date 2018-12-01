'use strict';

const React = require('react');

class NewListButton extends React.Component {
    render() {
        return (<div className="row" style={{marginBottom: '1em'}}>
                <div className="col-md-4">
                  <button type="button" className="btn btn-outline-primary btn-lg btn-block">Create new list</button>
                </div>
              </div>);
    }
}

module.exports = NewListButton;

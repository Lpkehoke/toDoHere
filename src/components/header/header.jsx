'use strict';

const React = require('react');
const PropTypes = require('prop-types');

module.exports = class Header extends React.Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-dark bg-dark">
                  <a className="navbar-brand" href="#">
                      <img src="./../img/logo.png" style={{maxHeight: '2em'}} alt="ToDo Here" />
                  </a>
                  <button className="navbar-toggler collapsed" type="button" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                  </button>
                </nav>
            </div>
        );
    }
}

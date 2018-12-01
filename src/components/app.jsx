'use strict';

const React = require('react');
const PropTypes = require('prop-types');

const Header =  require('./header/header.jsx');

const NewListButton = require('./menu/NewListButton.jsx');
const SmallerCard = require('./menu/SmallerCard.jsx');
const LargerCard = require('./menu/LargerCard.jsx');

module.exports = class MapContainer extends React.Component {
    render() {
        return (
            <div style={{
                position: 'absolute',
                width: '100%',
                height: '100%'
            }}>
                <Header />
                <div className="container" style={{marginTop: '1em'}}>
                  <NewListButton />
                  <SmallerCard title="" items="" time="" />
                  <LargerCard title="" items="" time="" />

                </div>
            </div>
        );
    }
}

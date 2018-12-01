'use strict';

const React = require('react');
const PropTypes = require('prop-types');

let platform = new H.service.Platform({
    'app_id': '0zXQr4Txf0nXwkmIG4EO',
    'app_code': '7S0HtftT0orcRx9BAfYPXQ'
});

module.exports = class MapContainer extends React.Component {
    render() {
        // var defaultLayers = platform.createDefaultLayers();
        // var map = new H.Map(
            // document.getElementById('mapContainer'),
            // defaultLayers.normal.map,
        // {
            // zoom: 10,
            // center: { lat: 52.5, lng: 13.4 }
        // });
        return (
            <div>

            </div>
        );
    }

    componentDidMount() {
    }
}

'use strict';

const React = require('react');

class CardExpandedListElement extends React.Component {
    render() {
        return (<a href="#" class="list-group-item list-group-item-action flex-column align-items-start">
          <div class="d-flex w-100 justify-content-between">
            <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          </div>
          <small class="text-muted">{this.props.distance} closest, {this.props.options} options</small>
          <h4><p class="mb-1"><span class="badge badge-primary">{this.props.item}</span></p></h4>
          </a>);
    }
}

module.exports = CardExpandedListElement;

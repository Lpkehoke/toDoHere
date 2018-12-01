'use strict';

const React = require('react');

const CardActionsGroup = require('./card/cardActionsGroup.jsx');
const CardTimeCreated = require('./card/cardTimeCreated.jsx');
const CardTitle = require('./card/cardTitle.jsx');
const CardCollapseButton = require('./card/cardCollapseButton.jsx');

class LargerCard extends React.Component {
    render() {
      let ret = [];
      let active = false;

      for (let key in this.props.items) {
          if (this.props.items[key]) {
              ret.push(
                  <CardExpandedListElement
                      distance={this.props.items[key].distance}
                      options={this.props.items[key].options}
                      item={this.props.items[key].item}
                  />);
          }
      }

      return (
          <div className="row">
              <div className="col-md-4">
                  <div className="card mb-4 shadow-sm">
                      <div className="card-body">
                          <CardTitle title={this.props.title}/>
                          <div className="list-group">
                              {ret}
                          </div>
                          <div className="d-flex justify-content-between align-items-center" style={{marginTop: '1em'}}>
                              <div className="row">
                                  <div className="col">
                                      <CardActionsGroup />
                                  </div>
                              </div>
                              <div className="row">
                                  <div className="col">
                                      <div className="container">
                                          <CardTimeCreated time={this.props.time}/>
                                      </div>
                                  </div>
                                  <div className="col">
                                      <CardCollapseButton />
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
        );
    }
}

module.exports = LargerCard;

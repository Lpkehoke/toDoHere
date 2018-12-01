'use strict';

const React = require('react');
const PropTypes = require('prop-types');

module.exports = class Card extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                  <div className="col-md-4">
                    <div className="card mb-4 shadow-sm"><div className="card-body">
                          <h5 className="card-title">TITLE: Meow</h5>
                          <div className="list-group">
                            <a href="#" className="list-group-item list-group-item-action flex-column align-items-start">
                              <div className="d-flex w-100 justify-content-between">
                                <h5 className="mb-1">#milk, #jello, #chocolate</h5>
                                <small>200 meters closest, 5 options</small>
                              </div>
                              <p className="mb-1">Yesterday my mom told me to buy some <span className="badge badge-primary">milk</span>, <span className="badge badge-primary">jell-o</span>, <span className="badge badge-primary">chocolate</span> and <span className="badge badge-danger">toads</span>.</p>
                            </a>
                            <a href="#" className="list-group-item list-group-item-action flex-column align-items-start">
                              <div className="d-flex w-100 justify-content-between">
                                <h5 className="mb-1">#replace screen, #eyephone</h5>
                                <small className="text-muted">1,1 km closest, 2 options</small>
                              </div>
                              <p className="mb-1">yeah, i think it would be kinda okay to <span className="badge badge-primary">replace screen</span> on my rusty old <span className="badge badge-primary">iphone</span> since i got some money now</p>
                            </a>
                          </div>
                          <div className="d-flex justify-content-between align-items-center" style={{marginTop: 16}}>
                            <div className="btn-group">
                              <button type="button" className="btn btn-sm btn-outline-secondary">Share</button>
                              <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                              <button type="button" className="btn btn-sm btn-outline-secondary btn-danger">Remove</button>
                            </div>
                            <small className="text-muted">13 minutes ago</small>
                          </div>
                        </div>
                      </div>
                  </div>

                  <div className="col-md-4">
                    <div className="card mb-4 shadow-sm"><div className="card-body">
                          <h5 className="card-title">TITLE: Pesetses!!!1</h5>
                          <h5 className="mb-1">#milk, #jello, #chocolate</h5>
                          <small>200 meters closest, 5 options</small>
                          <p className="mb-1">Yesterday my mom told me to buy some <span className="badge badge-primary">milk</span>, <span className="badge badge-primary">jell-o</span>, <span className="badge badge-primary">chocolate</span> and <span className="badge badge-danger">toads</span>.</p>

                          <div className="d-flex justify-content-between align-items-center" style={{marginTop: 16}}>
                            <div className="btn-group">
                              <button type="button" className="btn btn-sm btn-outline-secondary">Share</button>
                              <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                              <button type="button" className="btn btn-sm btn-outline-secondary btn-danger">Remove</button>
                            </div>
                            <small className="text-muted">13 minutes ago</small>
                          </div>
                        </div>
                      </div>
                  </div>
                </div>
            </div>
        );
    }
}

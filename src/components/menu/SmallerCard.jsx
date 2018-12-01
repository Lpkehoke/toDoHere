'use strict';

const React = require('react');

const CardTitle = require('./card/cardTitle.jsx');
const CardTimeCreated = require('./card/cardTimeCreated.jsx');
const CardExpandButton = require('./card/cardExpandButton.jsx');

class SmallerCard extends React.Component {
    render() {
      let ret = [];
      let active = false;

      for (let key in this.props.items) {
          if (this.props.items[key]) {
            ret.push(
                <CardButton name={this.props.items[key]}
            />);
          }
      }

      return (<div className="row">
              <div className="col-md-4">
                <div className="card mb-4 shadow-sm">
                  <div className="card-body">
                    <CardTitle title={this.props.title}/>
                    {ret}
                    <div className="d-flex justify-content-between align-items-center" style={{marginTop: '1em'}}>
                      <CardTimeCreated time={this.props.time}/>
                      <CardExpandButton />
                    </div>
                    </div>
                  </div>
              </div>
            </div>);
    }
}

module.exports = SmallerCard;

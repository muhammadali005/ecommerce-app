import React, { Component } from 'react';

export default class Title extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-10 mx-auto my-2 text-center">
          <h1 className="text-capitalize fw-bold">
            {this.props.name}
            <strong className="text-primary">
              {this.props.title}
            </strong>
          </h1>
        </div>
      </div>
    );
  }
}

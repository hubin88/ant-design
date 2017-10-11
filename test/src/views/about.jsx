import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './about.scss';

export default class About extends Component {
  render() {
    return (
      <div>
        <div styleName="about">Hello from about!</div>
        <Link to="/">back to index</Link>
      </div>
    );
  }
}


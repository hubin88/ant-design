import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'antd';
import './user.scss';

export default class User extends Component {
  render() {
    return (
      <div>
        <div styleName="user">Hello from user!</div>
        <Link to="/">back to index</Link>
        <Button type="primary">Primary</Button>
        <Button>Default</Button>
        <Button type="dashed">Dashed</Button>
        <Button type="danger">Danger</Button>
      </div>
    );
  }
}
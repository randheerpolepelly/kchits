import React from 'react';
import { Link } from 'react-router';
export default class NavigationComponent extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <ul className="breadcrumb">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/aboutUs">About Us</Link></li>
          <li><Link to="/newChit">New Chit</Link></li>
        </ul>
        <div>
            { this.props.children }
        </div>
      </div>
    )
  }
}
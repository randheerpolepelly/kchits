import React from 'react';
import { Link } from 'react-router';
export default class NavigationComponent extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <div className="navbar navbar-default">
          <div className="container-fluid">
           
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span className="sr-only">Koppuravuri Chits</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand" href="#">Koppuravuri Chits</a>
            </div>

           
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/aboutUs">About Us</Link></li>
                <li><Link to="/contactUs">Contact Us</Link></li>
                <li><Link to="/newChit">New Chit</Link></li>
                <li><Link to="/chits">All Chits</Link></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="well col-sm-12">
            { this.props.children }
        </div>
        <hr/>
        <footer>
          <div className="footerLinks">
            <span className="copyrightDiv"> &copy; 2016 Koppuravuri Chits Pvt Ltd </span>
            <span className="footerFb"> <a target="_blank" href="https://www.facebook.com/"><img className="fbImg" src="https://en.facebookbrand.com/wp-content/uploads/2016/05/FB-FindUsOnFacebook-printpackaging-2.png" /></a> </span>
          </div>
        </footer>
      </div>
    )
  }
}
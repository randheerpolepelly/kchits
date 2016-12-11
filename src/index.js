var $ = require("jQuery");
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, hashHistory, IndexRoute } from 'react-router';
import TextBox from "./textboxComponent.js";
import NavigationComponent from "./navigationComponent.js";
require("../css/style.css");

class TitleComp extends React.Component {
	render (){
		return React.createElement('h4', {}, this.props.title);
	}
};

class HomePageComp extends React.Component {
  render() {
    return (
      <div>
        <TitleComp title="Welcome to K Chits" />
      </div>
    );
  }
}

class AboutUsComp extends React.Component {
  render() {
    return (
      <div>
        <TitleComp title="About Us Page" />
        <p> This page is under Contruction </p>
      </div>
    );
  }
}

class NewChitComp extends React.Component {
  constructor() {
    super();
    this.state = {
      chit: {
        "groupName": "All Stars",
        "startDate": "",
        "chitValue": "",
        "term": ""
      }
    }
  }
  handleProjSubmit() {
    console.log("In handleProjSubmit");
  }

  onInputChange() {
    console.log("In onInputChange"); 
  }

  render (){
    return (
        <div className="well">
          <TitleComp title="Add Chit Fund"/>
          <form onSubmit={this.handleProjSubmit}>
            <TextBox value={this.state.chit.groupName} labelName="Group Name" name="groupName" onChange={this.onInputChange}/>
            <TextBox value={this.state.chit.startDate} labelName="Start Date" name="startDate" onChange={this.onInputChange}/>
            <TextBox value={this.state.chit.chitValue} labelName="Chit Value" name="chitValue" onChange={this.onInputChange}/>
            <TextBox value={this.state.chit.term} labelName="Term (In Months)" name="term" onChange={this.onInputChange}/>
            <input type="Submit" value="Submit" className="btn btn-primary"/>
          </form>
        </div>
    );
  }
}


class PageComp extends React.Component {
    render() {
      return (
         <Router history={hashHistory}>
            <Route path="/" component={NavigationComponent} >
              <IndexRoute component={HomePageComp} />
              <Route path="/aboutUs" component={AboutUsComp} />
              <Route path="/newChit" component={NewChitComp} />
            </Route>
          </Router>
      );
    }
}

ReactDOM.render(<PageComp />,document.getElementById("wrapper"));
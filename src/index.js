var $ = require("jQuery");
import React from 'react';
import ReactDOM from 'react-dom';
import TextBox from "./textboxComponent.js";
import TitleComp from "./titleComponent.js";
import NavigationComponent from "./navigationComponent.js";
import HomePageComp from "./homePageComponent.js";
import AboutUsComp from "./aboutUsComponent.js";
import ContactUsComp from "./contactUsComponent.js";
import NewChitComp from "./newChitComponent.js";
import ChitListComp from "./chitListComponent.js";

import { Router, Route, Link, hashHistory, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import chitApp from "./reducers/index.js";

require("../css/style.css");

var intitalData = {
  chits: [
            {
            "groupName": "All Stars",
            "startDate": "01/01/2017",
            "chitValue": "1000000",
            "term": "40"
            }
        ],
  chit: {
            "groupName": "",
            "startDate": "",
            "chitValue": "",
            "term": "40"
          }
};

let store = createStore(chitApp);
console.log(store.getState());
// let chitData = {
//        "groupName": "No Stars",
//         "startDate": "01/01/2018",
//         "chitValue": "2000000",
//         "term": "40"
// }
// store.dispatch({type: "ADD_CHIT", chitData: chitData});
// console.log("After Dispatch");
// console.log(store.getState());

class PageComp extends React.Component {
    render() {
      return (
        <Provider store={store}>
          <Router history={hashHistory}>
            <Route path="/" component={NavigationComponent} >
              <IndexRoute component={HomePageComp} />
              <Route path="/chits" foo="bar" component={ChitListComp} />
              <Route path="/aboutUs" component={AboutUsComp} />
              <Route path="/contactUs" component={ContactUsComp} />
              <Route path="/newChit" component={NewChitComp} />
            </Route>
          </Router>
        </Provider>
      );
    }
}

ReactDOM.render(<PageComp />,document.getElementById("wrapper"));
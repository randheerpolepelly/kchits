var $ = require("jQuery");
import React from 'react';
import TitleComp from "./titleComponent.js";

export default class HomePageComp extends React.Component {
  render() {
    return (
      <div>
        <TitleComp title="Welcome to Koppuravuri Chits" />
      </div>
    );
  }
}
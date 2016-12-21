import React from 'react';
import TitleComp from "./titleComponent.js";
import { connect } from 'react-redux';

class ChitListComp extends React.Component {
  render (){
    console.log("In ChitListComp");
    console.log(this.props.chits);
    return (
        <div>
            <TitleComp title="Chit Groups" />
            {
              this.props.chits.map(function(chit, index) {
                return (
                  <div key={index} className="panel panel-default">
                    <div className="panel-heading">
                      <h3 className="panel-title">Group Name: {chit.groupName} </h3>
                    </div>
                    <div className="panel-body">
                      <p> Start Date: {chit.startDate} </p>
                      <p> Chit Value: {chit.chitValue} </p>
                      <p> Term(In Months): {chit.term} </p>
                    </div>
                  </div>
                 );
              })
            }
        </div>
    );
  }
}

const mapStateToProps = (state) => (
  {
    chits: state.chits
  }
);

const connectedChitListComp = connect(mapStateToProps)(ChitListComp)
export default connectedChitListComp;
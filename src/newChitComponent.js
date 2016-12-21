import React from 'react';
import TextBox from "./textboxComponent.js";
import TitleComp from "./titleComponent.js";

import { addChit, addChitInputChange } from "./actions/index.js";
import { connect } from 'react-redux';

class NewChitComp extends React.Component {
 render (){
  	//console.log("in new chit render");
    // console.log(this.props);
    const formData = this.props.chit;
    return (
        <div>
          <TitleComp title="Add Chit Fund"/>
          <form>
            <TextBox value={this.props.chit.groupName} labelName="Group Name" name="groupName" onChange={this.props.onaddChitInputChange}/>
            <TextBox value={this.props.chit.startDate} labelName="Start Date" name="startDate" onChange={this.props.onaddChitInputChange}/>
            <TextBox value={this.props.chit.chitValue} labelName="Chit Value" name="chitValue" onChange={this.props.onaddChitInputChange}/>
            <TextBox value={this.props.chit.term} labelName="Term (In Months)" name="term" onChange={this.props.onaddChitInputChange}/>
            <input type="button" onClick={(event) => this.props.onChitSubmit(event,formData)} value="Submit" className="btn btn-primary"/>
          </form>
        </div>
    );
  }
}

const mapStateToProps = (state) => (
  {
    chit: state.chit
  }
);

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onaddChitInputChange:  (event) => { dispatch(addChitInputChange(event)) },
    onChitSubmit: (event, formData) => {
      event.preventDefault();
      dispatch(addChit(formData));
      ownProps.router.push("/chits")    }
  }
};

const connectedNewChitComp = connect(mapStateToProps, mapDispatchToProps)(NewChitComp);
export default connectedNewChitComp;
import React from 'react';

export default class TitleComp extends React.Component {
	render (){
		return React.createElement('h3', {}, this.props.title);
	}
};
import React from 'react';
import ReactDOM from 'react-dom';

import LinkedStateMixin from 'react-addons-linked-state-mixin';
import reactMixin from 'react-mixin';


class MyApp extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			message : 'Hello!'
		};
	}

	render() {
		return (
			<div>
				<input valueLink={this.linkState('message')} /><br/>
				<br/>
				<p>{this.state.message}</p>
			</div>
		);
	}
}

reactMixin(MyApp.prototype, LinkedStateMixin);


ReactDOM.render(<MyApp/>, document.getElementById('app'));
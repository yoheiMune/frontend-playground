import React from 'react';
import ReactDOM from 'react-dom';

import LinkedStateMixin from 'react-addons-linked-state-mixin';
import reactMixin from 'react-mixin';


class MyApp extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			text : 'Hello!',
			checkbox : ''
		};
	}

	render() {
		return (
			<div>
				<input type="text" valueLink={this.linkState('text')} /><br/>
				<p>{this.state.text}</p>
				<select type="checkbox" valueLink={this.linkState('checkbox')}>
					<option value="ラーメン">ラーメン</option>
					<option value="テニス">テニス</option>
					<option value="プログラミング">プログラミング</option>
				</select><br/>
				<p>{this.state.checkbox}</p>
			</div>
		);
	}
}

reactMixin(MyApp.prototype, LinkedStateMixin);


ReactDOM.render(<MyApp/>, document.getElementById('app'));
import React from 'react';
import ReactDOM from 'react-dom';

class Counter extends React.Component {

    constructor() {
        super();
        this.state = { count : 0 };
    }

    handleClick() {
        this.setState({
            count : this.state.count + 1
        });
    }

    render() {
        return (
            <div>
                <p>AAAB今の数値：{this.state.count}</p>
                <button type="button" onClick={this.handleClick.bind(this)}>数値を増やす!!！</button>
            </div>
        );
    }
}

window.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(
        <Counter/>,
        document.getElementById('app')
    );
});
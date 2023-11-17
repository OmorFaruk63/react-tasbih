import React, { Component } from "react";
import './index.css';
class Message extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }

    handleincriment = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    handledecriment = () => {
        this.setState({
            count: this.state.count = 0
        })
    }

    render() {
        const { bgcolor, sub } = this.props
        const { count } = this.state
        return (
            <div style={{ backgroundColor: bgcolor, display: 'inline-block', margin: '4px', padding: '8px', borderRadius: '8px' }}> <h1>{sub}: {count}</h1>
                <button style={{ marginRight: '8px' }} onClick={this.handleincriment} onKeyUp={this.handleincriment}>count</button>
                <button onClick={this.handledecriment}>reset</button>
            </div>
        )
    }
}
export default Message;

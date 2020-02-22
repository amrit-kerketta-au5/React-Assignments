import React, { Component } from 'react'

class Input extends Component {
    state={
        inputvalue:''
    }
    render() {
        return (
            <div>
                <h3>Question 3 Input and span</h3>
                <input placeholder="Enter something" onChange={(event)=>this.setState({inputvalue:event.target.value})}></input>
                <br/>
        <span>{this.state.inputvalue}</span>
            </div>
        )
    }
}
export default Input
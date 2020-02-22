import React, { Component } from 'react'


 class Child extends Component {

    sendDataToParent = (event) =>{
        this.props.sendToParent(event.target.value)
    }
    render() {
        return (
            <div>
                <h3>I am child</h3>
               <input type="text" placeholder="Enter Data" onChange={this.sendDataToParent}></input>
            </div>
        )
    }
}
export default Child
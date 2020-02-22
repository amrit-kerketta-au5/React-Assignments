import React, { Component } from 'react'
import Child from './Child'
import ChildFunctional from './ChildFunctional'

class Parent extends Component {
    state={
        inputfromchildclass:"",
        inputfromchildfunctional:""
    }
    handleChangeFromChildClass = (data) =>{
        console.log('Clicked in parent')
        this.setState({inputfromchildclass:data})
    }
    handleChangeFromChildFunctional = (data) =>{
        console.log('Clicked in parent')
        this.setState({inputfromchildfunctional:data})
    }
    render() {
        return (
            <div>
                <h3>I am parent</h3>
                <Child sendToParent={this.handleChangeFromChildClass}/>
                    <span>{this.state.inputfromchildclass}</span>
                <ChildFunctional sendToParent={this.handleChangeFromChildFunctional}/>
                    <span>{this.state.inputfromchildfunctional}</span>
            </div>
        )
    }
}
export default Parent
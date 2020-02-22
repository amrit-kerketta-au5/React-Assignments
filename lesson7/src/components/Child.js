import React, { Component } from 'react'

class Child extends Component {
    state={
        input:"",
        user:""
    }
     data = this.props.data.map((uname,index)=>{
        return(
        <option value={uname} key={index}>{uname}</option>
        )
    })
    handleInput = (event)=>{
        this.setState({input:event.target.value})
    }
    handleSelect = (event)=>{
        this.setState({user:event.target.value})
    }
    handlClick=()=>{
        console.log('clicked')
        let input = this.state.input
        let user = this.state.user
        let data = {input,user}
        this.props.sendData(data)
    }
    render() {
        return (
            <div>
                <input type="text" placeholder="Enter Data" onChange={this.handleInput}></input>
                <select name="uname" id="uname" onClick={this.handleSelect}>
                {this.data}
                </select>
                <input type="submit" onClick={this.handlClick}></input>
                
            </div>
        )
    }
}
export default  Child
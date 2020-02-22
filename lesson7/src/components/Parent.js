import React, { Component } from 'react'
import Child from './Child'

 class Parent extends Component {
    state= {
        usernames:["admin","amrit","akash"],
        todo:[]
    }
    sendToParent =(data) =>{
        console.log(data)
        this.state.todo.push(data)
        this.setState({todo:this.state.todo})
    }
    render() {
        const listToDo = this.state.todo.map((data,index)=>{
            return(
            <li key={index}>Task:>{data.input}---User:>{data.user}</li>
            )
        })
        return (
            <div>
               <Child data={this.state.usernames} sendData={this.sendToParent}/>
               <br/>
               <h3>Task To Do</h3>
               
                {listToDo}
            </div>
        )
    }
}
export default Parent
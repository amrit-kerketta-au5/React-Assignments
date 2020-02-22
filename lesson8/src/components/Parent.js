import React, { Component } from 'react'
import Child from './Child'

 class Parent extends Component {
    state= {
        usernames:["admin","amrit","akash"],
        todo:[],
        filteredData:[]
    }
    sendToParent =(data) =>{
        console.log(data)
        this.state.todo.push(data)
        this.setState({todo:this.state.todo})
    }
    handleUserSelect =(event) => {
        console.log("Event user handle ",event.target.value)
        this.state.filteredData.splice(0,this.state.filteredData.length)
        this.state.todo.forEach((data)=>{
            if(data.user===event.target.value)
            {
                this.state.filteredData.push(data)
            }

        })
        this.setState({filteredData:this.state.filteredData})
        
    }
    render() {
        const listToDo = this.state.todo.map((data,index)=>{
            return(
            <li key={index}>Task:>{data.input}---User:>{data.user}</li>
            )
        })
        const listUsers = this.state.usernames.map((data,index)=>{
            return(
                <option value={data} key={index}>{data}</option>
            )
        })
       const filteredUser = this.state.filteredData.map((data,index)=>{
           return(
               <tr key={index}>
                   <td >{data.input}</td>
                    <td>{data.user}</td>

               </tr>
           )
       })
        return (
            <div>
               <Child data={this.state.usernames} sendData={this.sendToParent}/>
               <br/>
               <h3>Task To Do</h3>               
                {listToDo}
                <h3>Filter Task By user</h3>
                <select name="user" id="user" onChange={this.handleUserSelect}>
                    <option value="select user">Select User</option>
                {listUsers}
                </select>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Tasks</th>  
                            <th>User</th>
                        </tr>
                    </thead>
                    <tbody>
                          {filteredUser}
                    </tbody>
                </table>
            </div>
        )
    }
}
export default Parent
import React, { Component } from 'react'

export default class Input extends Component {
    state={
        task:'',
        date:'',        
        tasks:[],
        filtered:[]
    }
    handleDateInput =(event) =>{
       // console.log("date")
        this.setState({date:event.target.value})
    }
    handleTaskInput=(event)=>{
           // console.log("Task");   
           // console.log(event.target.value)     
            this.setState({task:event.target.value})    
    }
    handleSubmit =(event)=>{
        let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
        event.preventDefault();
        var d = new Date(this.state.date)
        //console.log('hello')
        
        let task = this.state.task
        let date = this.state.date
        let day = d.getDay()
        let dayofweek
        days.forEach((d,index)=>{
            // console.log("days",d)
            // console.log("index:",index)
            // console.log("day",day)
            if(day===index)
            {
                dayofweek=d
            }
        })
        let data = {task,date,dayofweek}
        this.state.tasks.push(data)
        this.setState({tasks:this.state.tasks})
    }
    handleSelect = (event)=>{ 
       //console.log(event.target.value)
        this.state.filtered.splice(0, this.state.filtered.length)
        this.state.tasks.forEach((element)=>{
         //   console.log(element)
            if(element.dayofweek === event.target.value)
            {
                this.state.filtered.push(element)                
            }
            else{
                console.log("No data")
            }
        })
        this.setState({filtered:this.state.filtered})
    }
     

    render() {
       const data =  this.state.tasks.map((day,item)=>{           
            return(   
                             
                <tr key={item}>
                      <td>{day.task}</td>
                      <td>{day.date}</td>
                      <td>{day.dayofweek}</td>
                 </tr>             
                )
        })
        const filteredData = this.state.filtered.map((data,item)=>{     
                  
            return(           
                 
                <tr key={item}>
                      <td>{data.task}</td>
                      <td>{data.date}</td>
                      <td>{data.dayofweek}</td>
                 </tr>             
                )
        })
        return (
           <div>
               <form >
                   <input type="text" onChange={this.handleTaskInput}></input>
                   <input type="date" onChange={this.handleDateInput}></input>
                   <input type="submit" onClick={this.handleSubmit}></input>
               </form>
               
               <table className='table'>
                   <thead>
                       <tr>
                           <th>Task</th>
                           <th>Date</th>
                           <th>Day</th>
                       </tr>
                   </thead>
                   <tbody>
                        {data}                      
                   </tbody>
               </table>
               <div>
                   <h3>Filter your Meeting</h3>
                   <select name="date" id="date" onChange={this.handleSelect}>
                   <option value="">Select A day</option>
                   <option value="Sunday">Sunday</option>
                   <option value="Monday" >Monday</option>
                   <option value="Tuesday">Tuesday</option>
                   <option value="Wednesday">Wednesday</option>
                   <option value="Thursday">Thursday</option>
                   <option value="Friday">Friday</option>
                   <option value="Saturday">Saturday</option>
               </select>
               <table className='table'>
                   <thead>
                       <tr>
                           <th>Task</th>
                           <th>Date</th>
                           <th>Day</th>
                       </tr>
                   </thead>
                   <tbody>
                         {filteredData}                     
                   </tbody>
               </table>
               </div>
           </div>
        )
    }
}
    
import React, { Component } from 'react'
import NameList from './NameList'

 class Input extends Component {
     state={
         name:'',
         inputvalue:[],
         btnstate:'false'
     }
     handleChange=(e)=>{
         
         this.setState({name : e.target.value})
         //change the btn state
         
         this.setState({btnstate:'true'})
     }
     handlesSubmit=()=>{
        
         this.state.inputvalue.push(this.state.name)
         this.setState({inputvalue:this.state.inputvalue})
     }
    render() {
        
        return (
            <div>
                
                <input placeholder="Enter something" id="names" onChange={this.handleChange}></input>
                <button  onClick={this.handlesSubmit}  >Submit</button>
                
                <NameList namelist={this.state.inputvalue}/>
            </div>
        )
    }
}

export default Input
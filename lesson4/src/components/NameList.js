import React, { Component } from 'react'

export default class NameList extends Component {
    state = {
        names:this.props.namelist
    }
    
 
     
    render() {
        
        return (
            <div>
               {this.state.names.map((name)=>{
        return(
        <li key={name}>{name}</li>
        )
    })}
                
            </div>
        )
    }

}
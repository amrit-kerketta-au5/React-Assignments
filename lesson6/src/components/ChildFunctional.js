import React from 'react'
const ChildFunctional =(props)=> {
     const sendDataToParent = (event)=>{
         
        props.sendToParent(event.target.value)
     }
    return (
        <div>
               <h3>I am child functional Component</h3>
               <input type="text" placeholder="Enter Data" onChange={sendDataToParent}></input>
        </div>
    )
}

export default ChildFunctional
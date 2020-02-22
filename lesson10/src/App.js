import React from 'react';
import { connect } from 'react-redux'


class App extends React.Component{
   
  render(){
    return(
      <div>
        <h3>hello</h3>
        <h4>This data is shown from redux store</h4>
        <ul>
        {this.props.data.map((value,index)=>{
          return(
            <li key={index}>{value.name}</li>
          )
        })}
        </ul>
      </div>
    )
  }
}
const mapStateToProps = (state) => ({
  data:state

})



export default connect(mapStateToProps)(App);

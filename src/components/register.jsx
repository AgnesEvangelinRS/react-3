import React, { Component } from 'react';
import './style.css'
class Register extends Component {
    constructor(props)
    {
        super();
        this.state = {
            value :''
        }
  
        
    }
    render() { 
        return (
            <div className ='login'>
          <input type="text" className ='username'  placeholder="Enter Username" name="uname"></input>
            <input type="password" placeholder="Enter Password" name="uname"></input>
            <button className='button' onClick ={this.validate}>Register</button>
            </div>
          );
    }
    validate = (evt) =>{
       this.state ={value: evt.target.value};
  if(this.state.value.length === 0) return alert("hello")
 

    }
}
 
export default Register;
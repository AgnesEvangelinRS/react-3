import React, { Component } from 'react';
import './style.css';
import Login from './login';
import Register from './register';
import ReactDOM from 'react-dom';
class Home extends Component {
    state = {  }
    render() { 
        return ( 
            <div className='login1'>
                <a href ='#' onClick ={this.loginComponent}>Login </a>
                <a href ='#' onClick={this.registerComponet}>   Register </a>

            </div>
         );
    }
    loginComponent = () =>
    {
        ReactDOM.render(<Home/>, document.getElementById('root'));
        ReactDOM.render(<Login/>, document.getElementById('root1'));
    }
    registerComponet = () =>
    {
        ReactDOM.render(<Register/>, document.getElementById('root1'));
    }
}
 
export default Home;
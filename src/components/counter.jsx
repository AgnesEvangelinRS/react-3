import React, { Component } from 'react';
import './style.css'
class Counter extends Component {
    state = { 
        count : this.props.counterObj.value,
        id : 1
     }
    //constructor()
     //{
        // super();
        //this.handleIncrement = this.handleIncrement.bind(this);
       // console.log('Constructor rendered')
    // }
    componentDidUpdate(){
        console.log('component did update')
      }
      componentWillUnmount(){
        console.log('component will unmount')
      }
    render() { 
        console.log('children rendered')
        return ( 
            <div>
                <span>{this.formatCount()}</span>
                <button onClick ={this.handleIncrement}>Increment</button>
                <button onClick ={() =>this.props.onDelete(this.props.counterObj.id)}>Delete</button><br/>
            
            </div>
         );
    }
    formatCount()
    {
        const number = this.state.count;
        return number === 0 ? 'Zero' : number ;
    }
  
      //  this.setState({count: this.state.count + 1});
handleIncrement=() =>
{
    this.setState({count: this.state.count + 1});
}
}
 
export default Counter ;
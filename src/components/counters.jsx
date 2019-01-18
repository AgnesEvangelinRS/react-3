import React, { Component } from 'react';
import Counter from './counter'
class Counters extends Component {
    state = {
        counters :[
            {id: 1, value :0},
            {id: 2, value :0},
            {id: 3, value :0},
            {id: 4, value :0}
        ]
      }
      constructor (){
          super();
          console.log('constructor rendered')
      }
      componentWillMount(){
          console.log('component will mount')
      }
      componentDidMount(){
        console.log('component did mount')
      }
     
    render() { 
        console.log('component rendered');
     return ( 
        <div>
           {this.state.counters.map(child => 
           <Counter key ={child.id} counterObj ={child}  onDelete ={this.handleDelete}
           />)}

        </div> 
         );
    }
    handleDelete= counterID =>{
        const counterNew = this.state.counters.filter(array => array.id !==counterID);
        this.setState ({counters:counterNew});

    }
}
 
export default Counters;
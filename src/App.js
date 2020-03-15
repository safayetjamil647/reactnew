import React, { Component } from 'react';
import First from './First';
// import Sec from './Sec'
// import Counter from './Counter'
import './App.css';

class App extends Component{


  state={
    persons:[
      {name:'hm',email:'em', address:'sw'},
      {name:'am',email:'dm', address:'pw'},
      {name:'lm',email:'xm', address:'we'},
    ]
  }
  
    render (){
    
      
      return(
      <div className="App">
       
      {this.state.persons.map(person=><First name={person.name}
      email={person.email} address={person.address}/>)}
      </div>
      );
    }
    }


export default App;

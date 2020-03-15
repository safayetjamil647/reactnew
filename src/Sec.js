import React, {Component }from 'react';

class Sec extends Component{
    state ={
        persons:[
          { name:"ami",email:"tumi",address:"ei"},
          { name:"ami",email:"tumi",address:"ei"},
          
        ]
      }
           render(){
           return (
            <Sec name={this.state.persons[0].name} email={this.state.persons[0].email} address={this.state.persons[0].address}/>
            )
           }
}

export default Sec
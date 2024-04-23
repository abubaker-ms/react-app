import React from "react";
class User2 extends React.Component{
    constructor(){
        super()
        this.state={
            user:[]
        }
        console.log("Child 2 constructor")
    }

     componentDidMount(){
    
        console.log("Child 2 componentDidMount")  
      }

      componentDidUpdate(){
        console.log("Child 2 compoentDidUpdate")  
      }

    render(){

        return(
            <div className="user">
            <h1>User2</h1>

            { console.log("Child 2 render")  }
        </div>
        )    
    }
}

export default User2
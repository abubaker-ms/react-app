import React from "react";
class User extends React.Component{
    constructor(){
        super()

        this.state={
            user:[]
        }
        console.log("Child 1 constructor")  

    }

    async componentDidMount(){
        let data =await fetch('https://api.github.com/users/abubaker-ms')
        let json=await data.json()
        // console.log(json)
        this.setState(()=>{
            return {user:json}
        })
        console.log("Child 1 componentDidMount")  
      }

    //    componentDidMount(){
    
    //     console.log("Child 1 componentDidMount without async")  
    //   }

      componentDidUpdate(){
        console.log("Child 1 compoentDidUpdate")  
      }

    render(){
        const {login}=this.state.user

        return(
            <div className="user">
            <h1>User</h1>
            {/* {console.log(this.state.user,"user")} */}
            <img scr={this.state.user.avatar_url}/>
            <h1>{login}</h1>
            { console.log("Child 1 render")  }
        </div>
        )
     
    }
}

export default User
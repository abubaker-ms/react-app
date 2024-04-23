import React from 'react'
import User from './User'
import User2 from './User2'
class AboutUs extends React.Component{

  constructor(){
    super()
    console.log("Parent constructor")  

  }

   componentDidMount(){
    console.log("Parent componentDidMount")  
  }

  componentDidUpdate(){
    console.log("Parent componentDidUpdate")  

  }

  render(){
    return (
      <div>
          <h1>AboutUs</h1>
          <User />
          <User2 />
          {    console.log("Parent render")  
}
      </div>
    
    )
  }
}

export default AboutUs
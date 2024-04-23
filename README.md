# parcel 
- Dev Build 
- local server 
- HMR -Hot Module Replacement(save and change file no need to refresh )
- File watching alogirtm (written in c++)
- caching - faster builds - in parcel-cache
- Image optimization
- Minification 
- Bundle
- compress files
- Consistent hashing 
- Code splitting 
- Differential bundling - to support older browers
- Error handeling 
- can host in https as well
- Tree shaking - remove unused code
- Differnt Dev and prod builds

/* Project Structure
* Header
*  -Logo
*  -Nav items
* Body
*  -Search
*  -RestarutentContainer
*   -ResturantCard
*       -img
*       -Name of res , Rating , cusines , delivery time
*       -
* Footer
*  -copyrights
*  -links
*  -Address
*  -Contact
*/

<!-- Self notes -->

// React element is an object 
// const react="In react";
// const heading=React.createElement("h1",{id:"heading"},"Welcome back!!");

// JSX (Transpiled before it reaches the JS Engine by parcel -babel)
// const jsxheading=<h1>JSX Heading</h1>

// React functional component
// const FunctionalComponent=()=>(
//         <div id="container">
//         <h1>Functional component -{react}</h1>
//     </div>
    
// )

// SAME AS

// This is called as component composition
// const FunctionalComponent2=()=>{
//     return(
//         <div id="container2">
//             {FunctionalComponent()} - calling funcctional compnent method -1
//             <FunctionalComponent></FunctionalComponent> - - calling funcctional compnent method -2
//         <FunctionalComponent /> - calling funcctional compnent method -3
//         <h1>Functional component2</h1>
//     </div>
//     )
// }

# Redux toolkit
   -  Install @reduxjs/toolkit and react-redux
   -  Build our store
   -  connect our store to app
   -  create slice
   -  dispatch action
   -  selector
<!-- self note ends -->
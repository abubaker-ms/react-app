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

# Types of testing (developer)

   - Unit Testing
   - Integration Testing
   -  End to End testing

# React Testing library

   - Uses Jest library
   - Jest uses Babel
   - Install React testing library,Jest and babel
   - create babel config file -babel.config.js in root folder - info present in babel site
   - parcel also uses babel configuration , so this babel config file which we created will conflict with parcel own babel
     so to avoid this , we need to write some logic for parcel so that it uses this newly created babel config
     create ".parcelrc" file and copy paste some code  - Info in parcel site
   - Jest configuration - npx jest --init
   - we will be using jsdom (select this during installation)
   - To run test case : npm run test
   - Install JDOM library (If jest version is >28 then this needs to be installed seprately) - npm install --save-dev jest-environment-jsdom
   - when we run test for react it throws an error that jsx is not suported , so need to add jsx  -npm i -d babel/preset-react
     Include babel preset in babel config
   - It fails once again - gets error toBeInTheDocument is not defined
     Install library- npm install @testing-library/jest-dom

   - To run test automaticaalyadd this in scripts-pck.jsonfile - npm run watch-list -run once
   - when the compnent has fecth inside it , use mockdata in test file and write dummy fetch fn
   - and for fetch to work component should be rendered inside act fn 

<!-- self note ends -->


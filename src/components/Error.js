import { useRouteError } from "react-router-dom"
const Error=()=>(
        <div>
            {console.log(useRouteError())}
            <h1>{useRouteError().data}</h1>
        </div> 
)
export default Error
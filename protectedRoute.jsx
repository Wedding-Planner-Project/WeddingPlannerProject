import Login from './Login';
import { Route } from "react-router-dom";

function ProtectedRoute(props){
    
    const isLoggedIn = false;

    if(isLoggedIn) //check for sessionStorage values
    {
        return <Route  path={props.path} element={props.component} />;
    }
    else
    {
       return <Login></Login>
    }
}

export default ProtectedRoute;
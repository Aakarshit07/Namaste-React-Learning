import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
    // Heres what useRouteError hook does. 
    // It given the the error with more details that has occured in the route path. 
    const err = useRouteError();
    console.log(err);
    return (   
        <div>
            <h1>Ooops! {err.status} {err.statusText}</h1>
            <h1>{err.error.message}</h1>
        </div>
    )
}

export default ErrorPage;
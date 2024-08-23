import { useRouteError } from "react-router-dom";

const Error = ()=>{
    const error = useRouteError();
    console.log(error);
    return (
        <>
            <h1>Error Page</h1>
            <p>Error Status - {error.statusText}</p>
            <p>Error code - {error.status}</p>
        </>
    )
}

export default Error;
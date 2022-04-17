import { Navigate } from "react-router-dom"
import { IRouteProps } from "./AppRoute"

export const PrivateRoute = (props: IRouteProps) => {
    return <>{props.isAuthorized ? props.children : <Navigate to="/publicTest" />}</>;
}
import { Navigate } from "react-router"
import { IRouteProps } from "./AppRoute"

export const PublicRoute = (props: IRouteProps) => {
    return <>props.isAuthorized ? <Navigate to="/privateTest1" /> : props.children</>;
}
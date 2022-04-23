import { withAuthenticationRequired } from "@auth0/auth0-react"
import { ComponentType } from "react";

export interface IPrivateRouteProps {
    component: ComponentType;
}

export const PrivateRoute = (props: IPrivateRouteProps) => {
    const Component = withAuthenticationRequired(props.component, { onRedirecting: () => <div>Loading</div> })
    return <Component />
}
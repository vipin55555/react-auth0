import { useAuth0 } from "@auth0/auth0-react";

const PublicTest = () => {
    const { loginWithRedirect } = useAuth0();
    return (<div>
        <h1>Welcome to Auth0</h1>
        <br />
        <h3>Click below to login</h3>
        <button onClick={() => loginWithRedirect()}  >
            Log In
        </button>
        <h3>Click below to sign up</h3>
        <button onClick={() => loginWithRedirect({ screen_hint: 'signup' })}  >
            Sign up
        </button>
    </div>)
}

export { PublicTest };
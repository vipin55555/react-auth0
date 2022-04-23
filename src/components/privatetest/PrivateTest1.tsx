import { useAuth0 } from "@auth0/auth0-react";
import { Outlet, useLocation } from "react-router";
import { useNavigate } from "react-router";

const PrivateTest1 = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const {user} = useAuth0();

    console.log('PrivateTest1 location', JSON.stringify(location.state)); // Some additional passed in state during navigation from prev component

    return (<div>
        <h1>This is private Test 1 component</h1>
        <img src={user?.picture|| ''} alt="User profile pic"/>
        <br />
        <p>User name is {user?.name}</p>
        <p>User email is {user?.email}</p>
        <br />
        <div>
            {JSON.stringify(user,null,2)}
        </div>
        <br />
        <div><button onClick={() => navigate('/privateTest2', {replace:true})}> Go to private Test 2 component</button></div>
        <br />
        <button onClick={() => navigate('/privateTest1/nestedTest1')}> Go to private Nested Test 1 component</button>
        <button onClick={() => navigate('/privateTest1/nestedTest2')}> Go to private Nested Test 2 component</button>
        <br />
        <h3>Below is the nested routing</h3>
        <Outlet/>
    </div>)
}

export { PrivateTest1 };
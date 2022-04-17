import { useNavigate } from "react-router";

const PrivateTest2 = () => {
    const navigate = useNavigate();

    return (<div>
        <h1>This is private Test 2 component</h1>
        <button onClick={() => navigate('/privateTest1', {replace:true})}> Go to private Test 1 component</button>
    </div>)
}

export default PrivateTest2;
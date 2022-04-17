import { Header } from "./Header";
import { Sidebar } from "./Sidebar";

export interface IAppFrameProps {
    children: React.ReactNode;
}
const AppFrame = (props: IAppFrameProps) => {
    return (
        <div>
            <Header/>
            <br/>
            <Sidebar/>
            <br/>
            {props.children}
        </div>
    )
}

export { AppFrame }
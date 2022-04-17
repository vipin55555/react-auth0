import { lazy, Suspense } from "react";
import { BrowserRouter, Route, RouteProps, Routes } from "react-router-dom";
import { PrivateTest1, PublicTest, PrivateNestedTest1, PrivateNestedTest2 } from "../components";
import { PrivateRoute } from "./PrivateRoute"
import { PublicRoute } from "./PublicRoute";

const LazyPrivateTest2 = lazy(()=> import('../components/privatetest/PrivateTest2'));
export interface IRouteProps extends RouteProps {
    isAuthorized?: boolean
}

export const AppRoute = () => {
    const isAuthorized: boolean = true;
    return (<BrowserRouter>
        <Routes>
            <Route path="/privateTest1" element={<PrivateRoute isAuthorized={isAuthorized}><PrivateTest1 /></PrivateRoute>}>
                <Route path="nestedTest1" element={<PrivateNestedTest1 />} />
                <Route path="nestedTest2" element={<PrivateNestedTest2 />} />
            </Route>
            <Route path="/privateTest2" element={<PrivateRoute isAuthorized={isAuthorized}><Suspense fallback='Loading...'><LazyPrivateTest2/></Suspense></PrivateRoute>}>
            </Route>
            <Route path="/publicTest" element={<PublicRoute isAuthorized={isAuthorized}><PublicTest /></PublicRoute>}>
            </Route>
            <Route path="*"element={<PublicRoute isAuthorized={isAuthorized} />} /> 
        </Routes>
    </BrowserRouter>)
}
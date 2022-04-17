import { ReflectiveInjector } from "injection-js";
import { createContext } from "react";

const ServiceContext = createContext<ReflectiveInjector>({} as any);

export { ServiceContext };
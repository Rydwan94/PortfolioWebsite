import { createContext, useRef } from "react";

export const Context = createContext()


const RefProvider = ({children}) => {

    const Refs = {
        myProjectsRef: useRef(),
        footerRef: useRef()
    }
    
    return ( 
        <Context.Provider value={Refs}>
            {children}
        </Context.Provider>
     );
}
 
export default RefProvider;
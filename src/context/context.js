import { createContext, useRef } from "react";

export const Context = createContext()


const RefProvider = ({children}) => {

    const Refs = {
        techStackRef: useRef(),
        progressBarRef: useRef(),
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
import React,{useEffect,useState} from "react";

import AppContext from "./AppContext";

function AppRoot(props){


    const [debug,setDebug]= useState(true);
    const [appLoaded,setAppLoaded]= useState(false);

    return(
        <AppContext.Provider value={{
            getDebug : ()=> {return debug},
            setDebug: setDebug,
            appLoaded: () => {return appLoaded},
            setAppLoaded: mod => {setAppLoaded(mod)}
        }}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppRoot;
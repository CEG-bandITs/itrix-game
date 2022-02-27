import React, { useState,useEffect } from 'react'
import Routing from './routing/Routing';
import {VerifyLogin} from "./api_calls/Auth";

export const Wrapper = React.createContext();

export default function RootPage(){

    //intial states
    const [isLoading,handleIsLoading] =useState(true);
    const [isLogin,handleIsLogin] =useState(false);
    
    //value to context for using in all childer component without passing as props
    const value ={
    'isLogin':isLogin ,
    'handleIsLogin':handleIsLogin,
    'isloading':isLoading,
    'handleIsLoading':handleIsLoading 
    };

    //this effect will happen whenever you refresh the page

    useEffect(()=>{
        if(isLoading===true){
            VerifyLogin().then(r=>{
                handleIsLogin(r);
                handleIsLoading(false);
            })
        }
    },[isLoading]);


    return (
        <React.Fragment>
            <Wrapper.Provider value={value}>
                {/* page loader has to placed instead of 'loading..' */}
                
                {
                    isLoading ? "loading..." : <Routing/>
                }

            </Wrapper.Provider>
        </React.Fragment>
    )
}
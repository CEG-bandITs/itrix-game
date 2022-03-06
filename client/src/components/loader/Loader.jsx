import React from "react";
import {RotatingSquare,Oval} from "react-loader-spinner";

export  function HomePageLoader()
{
    return(
        <div
        style={{
            width:"100vw",
            height:"100vh",
            display:"flex",
            alignItems:"center",
            justifyContent:"center"
        }}
        >
            <RotatingSquare ariaLabel="rotating-square" visible={true} color="grey" />
        </div>
    )
}

export function FetchLoader()
{
    return(
        <Oval
        ariaLabel="loading-indicator"
        height={100}
        width={100}
        strokeWidth={5}
        strokeWidthSecondary={1}
        color="blue"
        secondaryColor="white"
        />
    )
}
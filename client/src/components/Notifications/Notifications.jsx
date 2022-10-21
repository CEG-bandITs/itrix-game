/* eslint-disable no-undef */
/* eslint-disable react/display-name */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable camelcase */
/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
import Styles from "./Notifications.module.css"

export const NotifyError =(message)=>{
    return(
        toast.error(message, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme:"colored"
        })
    )
}


export const NotifySuccess =(message)=>{
    return(
        toast.success(message, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme:"colored"
            })
    )
}

export const NotifierContainer = ()=>{
    return(
        <>
        <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
       />   
      </>
    )
}


// eslint-disable-next-line react/prop-types
export const  Modal =({handler})=>{
    return(
        <div className={Styles.Modal}>
            <div className={Styles.wrapper}> 
              <svg className={Styles.checkmark} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
                     <circle className={Styles.checkmark__circle} cx="26" cy="26" r="25" fill="none" />
                     <path className={Styles.checkmark__check} fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
              </svg>
            </div>
              <p className={Styles.message}>Yaay! You got it right </p>
              <button className={Styles.btngrad} onClick={()=>{handler(false)}}>continue</button>

         </div>
    )
}
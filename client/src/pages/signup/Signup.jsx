import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SignupStyle from "./Signup.module.css";
import {Register__} from "../../api_calls/Auth"
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import {Wrapper} from "../../RootPage";

function Signup() {
  const value = React.useContext(Wrapper);
  const navigate= useNavigate();
  const[disableButton,handleDisableButton] =useState(false);
  const [data,handleData] =useState(
    {
      'fname':{
        'value':'',
        'error':'initial'
      },
      'lname':{
        'value':'',
        'error':'initial'
      },
      'email':{
        'value':'',
        'error':'initial'
      },
      'clg':{
        'value':'',
        'error':'initial'
      },
      'passwd':{
        'value':'',
        'error':'initial'
      },
      'cpasswd':{
        'value':'',
        'error':'initial'
     }

    }
  )
  
  const ChangeValue=(e)=>{
    var name = e.target.name;
    var value =e.target.value ;
    var error ='';
  if(value.length===0)
  {
    error='empty field';
  }
  if(name==='email')
  {
    if((!value.endsWith("@gmail.com"))&&(value.length<13))
    {
      error ="invalid email"
    }
  }
  else if(name==='passwd')
  {
    if(value.length<8)
    {
      error="password should be of length minimum 8"
    }
  }
  else if(name==="cpasswd")
  {
    if(data['passwd']['value']!==value)
    error ="password mismatch";
  }
    handleData(prev=>{
      const new_data = {...prev};
      new_data[name]={'error':error,'value':value};
      if(error!=="")
      {
        document.getElementsByName(name)[0].style.border="1px solid red";

      }
      else document.getElementsByName(name)[0].style.border="1px solid green";
      return new_data;
    })
  }

  const submitData =()=>{
    const new_data ={...data};
    var count =0;
    for(var k of Object.keys(data))
    {
      
      if((data[k]['error']==='initial'))
      {
        document.getElementsByName(k)[0].style.border="1px solid red";
        new_data[k]['error'] = 'required*';
      }
      else if (data[k]['error']==="")
      count++ ;
    }
    handleData(new_data);
    if(count===6)
    {
      //console.log("all datas are validated");

      let new_data ={...data};

      for(var k of Object.keys(data)) new_data[k]=data[k]['value'];

      handleDisableButton(true);

      //sending data to server via api_calls 
      Register__(data).then(response=>
      {
        if(response[0]===true) 
        {
         NotificationManager.success('Account created successfully,wait for few sec');
         setTimeout(()=>{
           value.handleIsLogin(true);
         },4000)
        }
        else 
        {
          NotificationManager.error(response[1]);
          handleDisableButton(false);
        }
        handleDisableButton(false);
      } 
      )

  }
  }
  

  return (
    <div className={SignupStyle.base}>
      <div className={SignupStyle.container}>
        <h1>Signup</h1>

        <form action="">

          <input 
          type="text" 
          name="fname" 
          id="fname" 
          placeholder="First Name" 
          value={data['fname']['value']}
          onChange={ChangeValue}
          />
          <span className={SignupStyle.Error}>{data['fname']['error']!=='initial'&&(data['fname']['error'])}</span>
  
          <input 
          type="text" 
          name="lname" 
          id="lname" 
          placeholder="Last Name" 
          value={data['lname']['value']}
          onChange={ChangeValue}
          />
           <span className={SignupStyle.Error}>{data['lname']['error']!=='initial'&&(data['lname']['error'])}</span>

          <input 
          type="email" 
          name="email" 
          id="email"
          placeholder="Email"
          value={data['email']['value']}
          onChange={ChangeValue}
          />
           <span className={SignupStyle.Error}>{data['email']['error']!=='initial'&&(data['email']['error'])}</span>
          
          <input
          type="text"
          name="clg"
          id="clg"
          placeholder="College (If you're student)"
          value={data['clg']['value']}
          onChange={ChangeValue}
          />
           <span className={SignupStyle.Error}>{data['clg']['error']!=='initial'&&(data['clg']['error'])}</span>

          <input
            type="password"
            name="passwd"
            id="passwd"
            placeholder="Password"
            value={data['passwd']['value']}
            onChange={ChangeValue}
          />
           <span className={SignupStyle.Error}>{data['passwd']['error']!=='initial'&&(data['passwd']['error'])}</span>

          <input
            type="password"
            name="cpasswd"
            id="cpasswd"
            placeholder="Confirm Password"
            value={data['cpasswd']['value']}
            onChange={ChangeValue}
          />
           <span className={SignupStyle.Error}>{data['cpasswd']['error']!=='initial'&&(data['cpasswd']['error'])}</span>
          
          <input 
          type="button" 
          value={disableButton?"Please wait..":"Sign Up"}
          onClick={submitData}
          disabled={disableButton}
          style={{opacity:disableButton&&".8"}}
          />


          <div className={SignupStyle.aldreadyHavingAccount}>
            <p>Already have an account?</p>
            <input 
            type="button" 
            value="SignIn" 
            onClick={()=>navigate("/login")}
            />
          </div>

        </form>
      </div>
      <NotificationContainer/>
    </div>
  );
}

export default Signup;

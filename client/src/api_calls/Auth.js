import axios from "axios";

const API_URL = "http://localhost:3001/api/users"


export const VerifyLogin = async () => {
    await axios.get(`${API_URL}/details`).then(response=>console.log(response));
    
    return false ;

};

export const Logout = (handler) => {
  //delete cookie
  handler(false);
};


//logining user 
export const Login__ = async (data) => {
  
  let status= false ,message = "";

  await axios.post(`${API_URL}/auth/`,data).then(resp=>{
    const data= resp.data ;
  
    const serverMessage = data.message ;
    if(serverMessage==="success") 
    {status=true ;
      
    }
    else message=serverMessage;
  }).catch(err=>{
    message = "Internet connection Problem"
  })

   return [status,message]
};



//creating new account 
export const Register__ = async (data) => {

  let status= false ,message = "";
  await axios.post(`${API_URL}/new/`,data).then(resp=>{
    const data = resp.data ;
    const serverMessage = data['message'] ;

    if(serverMessage==="success") status=true;
    else message = serverMessage ;

  }
  ).
  catch(err=>{
    status = false ;
    message ="Internet connection Problem"
  }
  );
  
  return [status,message];
};

















function asyncSleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

function syncSleep(ms) {
  var start = new Date().getTime(),
    expire = start + ms;
  while (new Date().getTime() < expire) {}
  return;
}

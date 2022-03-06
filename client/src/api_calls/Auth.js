
export const VerifyLogin =async()=>{
    console.log("hi!!")
    var c =document.cookie ;
      /*

      1) get cookie , if cookie is not avaiable return false 
      2) if cookie available ,then post to  axios.post("/api/users/verify")
      3) if response is {'msg':'success'} return true
      4) if response is {'msg': some___error} return false
      */

      //as of now assume user to be logined !!

    return false;
}

export const Logout =(handler)=>{
  //delete cookie 
  handler(false);
}

export const Login__ =async (data)=>{
  //sending request with data 
  return [true,""] ;
  //await sleep(4000);
 // return [false ,"invalid credentials"];
}

export const Register__ =async (data)=>{
  //sending request with data 
  console.log(data);
  await sleep(4000);
  //return [false,'user already exists'];
return [true,'']
}

function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}
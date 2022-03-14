export const VerifyLogin = async () => {
  console.log("hi!!");
  var c = document.cookie;
  /*

      1) get cookie , if cookie is not avaiable return false 
      2) if cookie available ,then post to  axios.post("/api/users/verify")
      3) if response is {'msg':'success'} return true
      4) if response is {'msg': some___error} return false
      */

  //as of now assume user to be logined !!

  console.log("waiting");
  await syncSleep(10000);
  let validated = true;
  console.log("waited");

  return new Promise((resolve, reject) => {
    if (validated) {
      resolve("activated");
    } else {
      reject("rejected");
    }
  });
};

export const Logout = (handler) => {
  //delete cookie
  handler(false);
};

export const Login__ = async (data) => {
  //sending request with data
  return [true, ""];
  //await sleep(4000);
  // return [false ,"invalid credentials"];
};

export const Register__ = async (data) => {
  //sending request with data
  console.log(data);
  // await sleep(4000);
  //return [false,'user already exists'];
  return [true, ""];
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

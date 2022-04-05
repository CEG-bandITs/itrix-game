import axios from "axios";

const API_URL = "http://localhost:3001/api/users";

function getCookie(cName) {
  const name = cName + "=";
  const cDecoded = decodeURIComponent(document.cookie); //to be careful
  const cArr = cDecoded.split("; ");
  let res;
  cArr.forEach((val) => {
    if (val.indexOf(name) === 0) res = val.substring(name.length);
  });
  return res;
}

export const VerifyLogin = async () => {
  let response = false,
    data = {};
  const token = getCookie("jwt");
  await axios.post(`${API_URL}/details/`, { JWT: token }).then((res) => {
    if (res.data.message === "success") {
      response = true;
      data = res.data.data;
    }
  });

  return [response, data];

  return true;
};

export const Logout = (handler) => {
  //delete cookie
  document.cookie = "jwt=";

  handler(false);
};

//logining user
export const Login__ = async (data, handleUserData) => {
  let status = false,
    message = "";

  await axios
    .post(`${API_URL}/auth/`, data)
    .then((resp) => {
      const data = resp.data;

      const serverMessage = data.message;
      if (serverMessage === "success") {
        document.cookie = "jwt=" + data["token"];
        status = true;
        handleUserData(data.data);
      } else message = serverMessage;
    })
    .catch((err) => {
      message = "Internet connection Problem";
    });

  return [status, message];
};

//creating new account
export const Register__ = async (data) => {
  let status = false,
    message = "";
  await axios
    .post(`${API_URL}/new/`, data)
    .then((resp) => {
      const data = resp.data;
      const serverMessage = data["message"];

      if (serverMessage === "success") status = true;
      else message = serverMessage;
    })
    .catch((err) => {
      status = false;
      message = "Internet connection Problem";
    });

  return [status, message];
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

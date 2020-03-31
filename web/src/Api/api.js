import http from "../http/http";

let getCodeSrc = async () => {
  return await http.get("/svgCaptcha");
};

let userLogin = async parmas => {
  return await http.post("/user/login", parmas);
};

export { getCodeSrc, userLogin };

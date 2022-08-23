import requests from "./request";

export const login = (params) =>
  requests({
    url: "/login",
    method: "POST",
    data: params,
  });

export const reqRegister = (params) =>
  requests({ url: "/register", data: params, method: "POST" });
export const reqCode = (email) =>
  requests({
    url: "/users/register/code",
    params: { email: email },
    method: "GET",
  });

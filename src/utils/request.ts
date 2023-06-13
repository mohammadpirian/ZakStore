import axios from "axios";
import Cookies from "universal-cookie";

export const request = axios.create({ baseURL: "http://localhost:8000/api" });

const cookie = new Cookies();

request.interceptors.request.use((config) => {
  if (config.url !== "/auth/token") {
    const accessToken = cookie.get("adminToken");
    config.headers.Authorization = "Bearer " + accessToken;
  }
  return config;
});

request.interceptors.response.use(
  (response) => {
    return response;
  },

  // 401

  (error) => {
    const config = error.config;
    // console.log("config", config);
    if (error.response.status === 401 && !config.sent) {
      config.sent = true;
      if (config.url !== "/auth/token" && config.url !== "/auth/login") {
        const refreshToken = cookie.get("refreshToken");
        request.post("/auth/token", { refreshToken }).then((res) => {
          const accessToken = res?.data.token.accessToken;
          // add this 1 line================-------------==================
          cookie.remove("adminToken");
          // ================-------------==================
          cookie.set("adminToken", accessToken);
          // cookie.set("refreshToken", res.data.refreshToken);
          config.headers.Authorization = "Bearer " + accessToken;
          return request(config);
        });
      } else if (config.url === "/auth/token") {
        cookie.remove("adminToken");
        cookie.remove("refreshToken");
        location.href = "/loginAdmin";
      }
    }
  }
);
// import axios from "axios";
// import Cookies from "universal-cookie";

// export const request = axios.create({ baseURL: "http://localhost:8000/api" });

// const cookie = new Cookies();

// axios.interceptors.request.use((config) => {
//   if (config.url !== "/auth/token") {
//     const accessToken = cookie.get("adminToken");
//     config.headers.Authorization = "Bearer " + accessToken;
//   }
//   return config;
// });

// axios.interceptors.response.use(
//   (response) => {
//     return response;
//   },

//   (error) => {
//     const config = error.config;
//     if (error.response.status === 401 && !config.sent) {
//       config.sent = true;
//       if (config.url !== "/auth/token" && config.url !== "/auth/login") {
//         const refreshToken = cookie.get("refreshToken");
//         return axios.post("/auth/token", { refreshToken }).then((res) => {
//           const accessToken = res?.data.token.accessToken;
//           cookie.set("adminToken", accessToken);
//           config.headers.Authorization = "Bearer " + accessToken;
//           return axios(config); // انجام درخواست دوم و برگشت نتیجه
//         });
//       } else if (config.url === "/auth/token") {
//         cookie.remove("adminToken");
//         cookie.remove("refreshToken");
//         location.href = "/loginAdmin";
//       }
//     }
//     return Promise.reject(error);
//   }
// );

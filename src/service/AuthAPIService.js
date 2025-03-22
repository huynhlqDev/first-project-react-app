import { API_URL } from "../util/environment";

// Example API response:
// 1. OK
  // {
  //   "code": "0000",
  //   "result": {
  //       "token": "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJiZWVfcmVnaXMxIiwiaWF0IjoxNzQyNDA0Mjc1LCJleHAiOjE3NDI0MDUxNzV9.W5iDWdqoiDi1S0qL1a-C_JwMopjsfNvZtNSmXWoYQxg",
  //       "user": {
  //           "username": "bee_regis1",
  //           "fullName": null,
  //           "createAt": "2025-03-16 00:25:47.426",
  //           "updateAt": ""
  //       }
  //   }
  // }
// 2. NG
  // {
  //   "code": "400",
  //   "error": "invalid username or password"
  // }
export const loginApi = async (username, password) => {
  try {
    var body = JSON.stringify({ username, password });
    var url = `${API_URL}/auth/login`;
    console.log(`[REQUEST] ${url}, [BODY]: `, body);

    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: body,
    });

    const data = await response.json();// Get response data
    console.log(`[RESPONSE] ${url}, [DATA]: `, data);

    if (!response.ok) { //success in the range 200-299
      throw new Error(data.error || "Login failed");
    }
    return data;

  } catch (error) {
    console.log("error", error.message)
    throw new Error(error.message);
  }
};

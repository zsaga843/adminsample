import { authHeader } from "../_helpers";

export const userService = {
  login,
  logout
};

function login(username, password) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password })
  };

  let user = {
    first_name:'user1',
    last_name:'user1',
    id:1
  }

  localStorage.setItem("user", JSON.stringify(user));
  return user;

}

function logout() {
  // remove user from local storage to log user out
  localStorage.removeItem("user");
}



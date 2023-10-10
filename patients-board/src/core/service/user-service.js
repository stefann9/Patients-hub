import { httpClient } from "../http/client.js";

class UserServiceClass {
  #isUserLoggedIn = window.localStorage.getItem("isUserLoggedIn") === "true";

  isUserLoggedIn() {
    return this.#isUserLoggedIn;
  }

  setIsUserLoggedIn(isUserLoggedIn) {
    this.#isUserLoggedIn = isUserLoggedIn;
    window.localStorage.setItem("isUserLoggedIn", this.#isUserLoggedIn);
  }

  async getUser() {
    try {
      const user = await httpClient.get("/user");
      if (user) return user;
    } catch (e) {
      console.error(e);
    }
  }

  async login(userData) {
    // set cookie
    try {
      const response = await httpClient.post("/public/auth/login", userData);
      return response;
    } catch (e) {
      console.error(e);
    }
  }

  async logout(userData) {
    // delete cookie
    try {
      const response = await httpClient.post("/logout", userData);
      return response;
    } catch (e) {
      console.error(e);
    }
  }

  async signup(userData) {
    try {
      const response = await httpClient.post("/public/auth/register", userData);
      return response;
    } catch (e) {
      console.error(e);
    }
  }

  async resetPassword(userData) {
    try {
      const response = await httpClient.post("/public/auth/reset", userData);
      return response;
    } catch (e) {
      console.error(e);
    }
  }

  // async addPacient(pacientData){
  //   try {
  //     const response = await httpClient.post("/patient", pacientData);
  //     return response;
  //   } catch (e) {
  //     console.error(e);
  //   }
  // }
}

export const UserService = new UserServiceClass();

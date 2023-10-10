import { httpClient } from "../http/client.js";

class SignUpServiceClass {
    async getFunctions(){
        try {
            const functions = await httpClient.get("/public/function");
            if (functions) return functions;
          } catch (e) {
            console.error(e);
          }
    }
    async getSpecialities(){
        try {
            const department = await httpClient.get("/public/department");
            if (department) return department;
          } catch (e) {
            console.error(e);
          }
    }
  
}

export const SignUpService = new SignUpServiceClass();

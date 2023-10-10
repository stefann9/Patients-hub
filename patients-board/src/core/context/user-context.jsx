import { createContext, useState, useEffect } from "react";
import { UserService } from "../service/user-service";
export const initialUserValue = null;

export const UserContext = createContext([initialUserValue]);

export function UserContextProvider({ children }) {
  const [user, setUser] = useState(initialUserValue);

  useEffect(() => {
    const getUser = async () => {
      if (UserService.isUserLoggedIn()) {
        const user = await UserService.getUser();
        setUser(user);
      }
    };
    getUser();
  }, []);

  return (
    <UserContext.Provider value={[user, setUser]}>
      {children}
    </UserContext.Provider>
  );
}

"use client"

import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  useEffect(() => {
   
    const cookies = document.cookie.split(";").reduce((acc, cookie) => {
      const [name, value] = cookie.trim().split("=");
      acc[name] = value;
      return acc;
    }, {});
    
    const tokenFromCookie = cookies["token"];

    if (tokenFromCookie) {
      setToken(tokenFromCookie);

      try {
        const base64Payload = tokenFromCookie.split(".")[1];
        const payload = JSON.parse(atob(base64Payload));
        setUser({ email: payload.email }); // You can add more fields
      } catch (err) {
        console.error("Invalid token:", err);
      }
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, token, setUser, setToken }}>
      {children}
    </AuthContext.Provider>
  );
};

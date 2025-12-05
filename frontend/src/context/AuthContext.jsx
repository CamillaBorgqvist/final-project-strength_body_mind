import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext ();

export const AuthProvider = ({ children }) => {

  const initialToken = localStorage.getItem("accessToken")

  const [token, setToken] = useState(initialToken)
  const [isLoggedIn, setIsLoggedIn] = useState(!!initialToken)
  const [user, setUser] = useState (null)


  // LOGIN-funktion
  const login = async (email, password) => {
    try {
      const response = await fetch("https://strength-body-mind.onrender.com/sessions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
      })
      const data = await response.json()

      if (data.success) {
        localStorage.setItem("accessToken", data.accessToken);

        setToken(data.accessToken);
        setIsLoggedIn(true);
        setUser(data.user);

        return { success: true };
      } else {
        return { success: false, message: "Fel e-post eller lösenord" }
      }
    } catch (error) {
      return { success: false, message: "Serverfel: " + error.message }
    }
  };

  // LOGOUT
  const logout = () => {
    localStorage.removeItem("accessToken");

    setToken(null);
    setIsLoggedIn(false);
    setUser(null);
  };

  return (
     <AuthContext.Provider value={{ token, isLoggedIn, user, login, logout}}>
            {children}
        </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
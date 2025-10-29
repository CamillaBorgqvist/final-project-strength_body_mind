import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext ();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [user, setUser] = useState (null)

  useEffect(() => {
    const token = localStorage.getItem("accessToken")
    if (token) setIsLoggedIn (true)
  }, [])

  // LOGIN-funktion
  const login = async (email, password) => {
    try {
      const response = await fetch("http://localhost:8080/sessions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
      })
      const data = await response.json()

      if (data.success) {
        localStorage.setItem("accessToken", data.accessToken)
        setIsLoggedIn(true)
        setUser(data.user)
        return { success: true }
      } else {
        return { success: false, message: "Fel e-post eller lösenord" }
      }
    } catch (error) {
      return { success: false, message: "Serverfel: " + error.message }
    }
  }

  // LOGOUT
  const logout = () => {
    localStorage.removeItem("accessToken")
    setIsLoggedIn(false)
    setUser(null)
  }

  return (
     <AuthContext.Provider value={{ isLoggedIn, user, login, logout}}>
            {children}
        </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
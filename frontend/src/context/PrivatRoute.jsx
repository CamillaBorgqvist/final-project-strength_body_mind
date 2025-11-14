import { Navigate, useLocation } from "react-router-dom"
import { useAuth } from "./AuthContext"

export const PrivateRoute = ({ children }) => {
  const { isLoggedIn } = useAuth()
  const token = localStorage.getItem("accessToken")
  const location = useLocation()

  if (!isLoggedIn || !token) {
    //redirect user to Sign in with message if trying to reach site with login demand
    return ( <Navigate to="/Signin" replace state={{from:location.pathname, message: "Du måste vara inloggad för att se den här sidan"}} />
  )
}

  return children
}
import { useState } from "react"
import { useNavigate, useLocation } from "react-router-dom"
import { useAuth } from "../context/AuthContext"

export const SignIn = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [message, setMessage] = useState("")
  const { login } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()

  const redirectMessage = location.state?.message
  const redirectFrom = location.state?.from || "/Welcomesignedin"

  const handleLogin = async (event) => {
    event.preventDefault()
    const result = await login(email, password)

    if (result.success) {
      navigate("/Welcomesignedin")
    } else {
      setMessage(result.message)
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <h2>Logga in</h2>

      {/*message if user i redirected to Signin*/}
      {redirectMessage && <p style={{ color: "orange" }}>{redirectMessage}</p>} 
      
      <input
        type="email"
        placeholder="E-post"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Lösenord"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit">Logga in</button>
      <p>{message}</p>
    </form>
  )
};

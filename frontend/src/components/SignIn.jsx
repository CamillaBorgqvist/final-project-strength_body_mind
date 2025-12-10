import { useState } from "react"
import { Link } from "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom"
import { useAuth } from "../context/AuthContext"
import "../css/form.css"

export const SignIn = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)
  const { login } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()

  const redirectMessage = location.state?.message
  const redirectFrom = location.state?.from || "/Welcomesignedin"

  const handleLogin = async (event) => {
    event.preventDefault()
    setLoading(true)
    const result = await login(email, password)

    if (result.success) {
      navigate("/Welcomesignedin")
    } else {
      setMessage(result.message)
    }
  };

  return (
    <section className="login-section">
      <form onSubmit={handleLogin} className="login-form">
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
        <button type="submit" disabled={loading}> 
          {loading ? "Loggar in..." : "Logga in"}
        </button>
        <p>{message}</p>
        <p>Har du inte ett konto hoss oss än? Skapa ett här.</p>
        <Link to="/Signup"> <button> Skapa Konto </button> </Link>
      </form>
    </section>  
  )
};

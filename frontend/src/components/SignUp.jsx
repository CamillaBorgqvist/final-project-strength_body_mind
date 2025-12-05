import { useState } from "react"

export const SignUp = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [message, setMessage] = useState("")

  const handleSignup = async (event) => {
    event.preventDefault()
    try {
      const response = await fetch("https://strength-body-mind.onrender.com/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password })
      })
      
      const data = await response.json()
      if (data.success) {
        setMessage("Konto skapat! 🎉")
        localStorage.setItem("accessToken", data.accessToken)
      } else {
        setMessage("Något gick fel: " + data.message)
      }
    } catch (error) {
      setMessage("Serverfel: " + error.message)
    }
  }

  return (
    <form onSubmit={handleSignup} className="login-form">
      <h2>Skapa konto</h2>
      <input
        type="text"
        placeholder="Namn"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
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
      <button type="submit">Registrera</button>
      <p>{message}</p>
    </form>
  )
};

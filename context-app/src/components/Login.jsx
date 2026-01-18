import React from 'react'
import UserContext, { useUser } from '../context/UserContext'

function Login() {

  const [username, setUsername] = React.useState('')
  const [password, setPassword] = React.useState('')

  // const { setUser } = useUser();

  const handleSubmit = (e) => {
    e.preventDefault()
    if(!username || !password) {
      alert('Please enter both username and password')
      return
    }
    // setUser({ username, password })
  }

  return (
    <>
    <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div style={{display: 'flex', justifyContent: 'space-around', marginBottom: '10px'}}>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div style={{display: 'flex', justifyContent: 'space-around', marginBottom: '10px'}}>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div style={{display: 'flex', justifyContent: 'space-around', marginBottom: '10px'}}>
          <label />
          <button type="submit">Login</button>
        </div>
      </form>
    </>
  )
}

export default Login
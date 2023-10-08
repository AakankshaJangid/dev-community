// pages/login.js

import { useState } from 'react'
import { signIn } from 'next-auth/react'

export default function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = async (e) => {
    e.preventDefault()
    const result = await signIn('credentials', {
      username,
      password,
      redirect: false, // Set to true to enable automatic redirect
    })

    if (result.error) {
      // Handle login error
      console.error('Login error:', result.error)
    } else {
      // Successful login
      // Redirect or perform any other actions
    }
  }

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleLogin} className='text-red-500'>
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  )
}

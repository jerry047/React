import React from 'react'
import './App.css'
import UserContext from './context/UserContext'
import UserContextProvider from './context/UserContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {
  const sid = {
    username: 'siddhi',
    password: '1234'
  }
  return (
      <UserContextProvider value={sid} className="style1">
        <h1>Testing context API</h1>
        <Login />
        <Profile />
      </UserContextProvider>
  )
}

export default App

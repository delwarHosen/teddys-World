// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { Button } from 'keep-react'
import './App.css'

function App() {

  return (
    <>
     <h2>This is app</h2>
     <Button.Group>
        <Button position="start">Profile</Button>
        <Button position="center">Settings</Button>
        <Button position="end">Messages</Button>
    </Button.Group>
    </>
  )
}

export default App

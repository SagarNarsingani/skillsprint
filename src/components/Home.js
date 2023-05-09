import { useAuth } from '@clerk/clerk-react';
import React from 'react'

export const Home = () => {
  const { isLoaded, userId, sessionId, getToken } = useAuth();
  return (
    <div style={{marginLeft: '23%', paddingTop: "1em"}}>
        <h2>Home</h2>
        <p> Hello <b>{userId}</b>, </p>
        <p> your current active session is <b>{sessionId}</b></p>

        
    </div>
  )
}

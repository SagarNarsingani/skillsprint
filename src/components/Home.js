import { useAuth0 } from "@auth0/auth0-react";
import React from 'react'
import LogoutButton from './Logout'

export const Home = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  console.log(user);
  return (
    <div style={{marginLeft: '23%', paddingTop: "1em"}}>
        <h2>Home</h2>
        <LogoutButton/>
    </div>
  )
}

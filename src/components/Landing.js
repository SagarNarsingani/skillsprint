import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { Sidebar } from './Sidebar'
import { Home } from './Home'

export const Landing = () => {
  const { pathname } = useLocation();
  return (
    <>
        <Sidebar />
        <div id='detail'>
            <Outlet/>
        </div>

        {pathname==='/' ? <Home/> : null}
    </>
  )
}

import React from 'react'
import styled from 'styled-components'

import { Nav } from './Service/Nav'
import { Outlet, useLocation } from 'react-router-dom'
import { Video } from './Service/Video'

export const Service = () => {

  const { pathname } = useLocation();
  const path = pathname.toLowerCase() === '/dashboard/services';

  return (
    <Container>
        <h2>Services</h2>
        <Nav/>
        <hr/>

        <Outlet/>

        {path ? <Video/> : null}
    </Container>
  )
}

const Container = styled.div`
  margin-left: 25%;
  padding-top: 1em;
  
  hr{
    opacity: 0.3;
    width: 90%;
  }
`

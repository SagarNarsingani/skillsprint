import { Link, Outlet, useLocation } from "react-router-dom"
import styled from "styled-components"
import { Basic } from "./Edit/Basic";

export const Edit = () => {
  
  const { pathname } = useLocation(); 
  console.log(pathname);

  const page = pathname.split('/')[4];
  console.log(page);
  const path = page===undefined ? '/' : page;

  const serviceId = pathname.split('/')[5]
  return (
    <Container>
        <h2> Edit Service </h2>

        <div className="edit-nav">
            <Link to={'basic/'+serviceId} style={{textDecoration: 'inherit', color: 'inherit'}}>
                <div className={"edit-nav-opt" + (path==='basic' ? ' active' : '')}> Basic Details </div>
            </Link>

            <Link to={'advanced/'+serviceId} style={{textDecoration: 'inherit', color: 'inherit'}}>
                <div className={"edit-nav-opt" + (path==='advanced' ? ' active' : '')}> Advanced </div>
            </Link>

            <Link to={'share/' + serviceId} style={{textDecoration: 'inherit', color: 'inherit'}}>
                <div className={"edit-nav-opt" + (path==='share' ? ' active' : '')}> Share </div>
            </Link>

            <div className="edit-nav-opt save-opt"> Save Changes </div>
        </div>
        <hr/>
        <Outlet/>

        {path==='/' ? <Basic/> : null}
    </Container>
  )
}

const Container = styled.div`
    margin-left: 25%;
    padding-top: 1em;

    .edit-nav{
        margin-block: 1em;
        width: 90%;
    }
    .edit-nav-opt{
        font-size: .8em;
        font-weight: 400;
        border: 1px solid rgba(0, 0, 0, .2);
        display: inline-block;
        margin-right: 1em;
        border-radius: 10px;
        padding: .25em .75em;
        cursor: pointer;
        transition: background-color 0.5s;

        &:hover{
            background-color: rgb(251, 249, 249);
        }
    }
    .save-opt{
        float: right;
        margin-right: 2em;
        background-color: black;
        color: white;
        transition: all 0.5s;

        &:hover{
            background-color: white;
            color: black;
        }
    }

    hr{
        width: 90%;
        opacity: 0.3;
    }

    .active{
        border: 2px solid black;
        font-weight: 600;
    }
`

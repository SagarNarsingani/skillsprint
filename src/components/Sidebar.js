import styled from "styled-components"
import { useLocation } from "react-router-dom"
import { Link } from "react-router-dom"

import { FiCopy, FiEdit } from 'react-icons/fi'
import { HiOutlineHome } from 'react-icons/hi'
import { IoIosWallet } from 'react-icons/io'
import { AiOutlineMessage } from 'react-icons/ai'
import { BiPhoneCall, BiFoodMenu } from 'react-icons/bi'
import { BsCalendar3 } from 'react-icons/bs'
import { ToastContainer, toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import { UserButton } from "@clerk/clerk-react"


export const Sidebar = () => {
  const username = "shaun"
  const { pathname } = useLocation();
  let page = pathname.split('/')[2];
  page = page===undefined ? '/' : page.toLowerCase();

  const Menu = [
    {
      title: 'Home',
      icon: <HiOutlineHome/>,
      path: 'home'
    },

    {
      title: 'Finance',
      icon: <IoIosWallet/>,
      path: 'finance'
    },
    
    {
      title: 'Queries',
      icon: <AiOutlineMessage/>,
      path: 'queries'
    },

    {
      title: 'Upcoming Bookings',
      icon: <BiPhoneCall/>,
      path: 'upcoming%20bookings'
    },
    
    {
      title: 'Schedule',
      icon: <BsCalendar3/>,
      path: 'schedule'
    },
    
    {
      title: 'Services',
      icon: <BiFoodMenu/>,
      path: 'services'
    }
  ];


  const copyURL = () => {
    navigator.clipboard.writeText('Sahun The Sheep');
    toast.success('Coppied Successfully', {
      position: "top-center",
      className: 'toast-box',
      bodyClassName: 'toast-box-body',
      autoClose: 500,
      hideProgressBar: true,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
      theme: "light",
    });
  }

  return (
    <SideBar>
        <ToastContainer
          position="top-center"
          autoClose={750}
          className={'toast-container'}
          closeButton={false}
          limit={1}
          hideProgressBar
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss={false}
          draggable={false}
          pauseOnHover={false}
          theme="light"
        />
        <Heading>
          <img src="/logo.jpg" alt="logo"></img>
          <h3>SkillSprint</h3>
        </Heading>

        <Profile>
          <div className="link">
            {/* <img src="/profile.jpg" alt="profile"/> */}
            <UserButton/>
            <Link to={'/' + username} style={{textDecoration: 'inherit', color: 'inherit'}}>
              <span className="profile-link">skillsprint.io/shaun</span>
            </Link>
            <span className="copy-icon" onClick={_ => copyURL()}><FiCopy/></span>
          </div>
          <hr/>
          <div className="profile">
            <Link to={'/' + username} style={{textDecoration: 'inherit', color: 'inherit'}}>
              <span className="profile-button">View Profile</span>
            </Link>
            <span className="edit-icon-span"><FiEdit className="edit-icon"/></span>
          </div>
        </Profile>

        <NavMenu>
          {
            Menu.map((item, idx) => {
              return (
                <Link to={`dashboard/${item.title}`} key={idx} style={{textDecoration: 'inherit', color: 'inherit'}}>
                  <MenuItem active={page===item.path}>
                    <span className="menu-item-icon">{item.icon}</span>
                      <span className="menu-item-title">{item.title}</span>
                  </MenuItem>
                </Link>
              );
            })
          }
        </NavMenu>


    </SideBar>
  );
}

const SideBar = styled.div`
  position: fixed;
  width: 22%;
  height: 100vh;
  background-color: rgb(251,249,249);
  
  .toast-box-body{
    margin-block: 0;
    height: fit-content;
    font-size: .95em;
    border-radius: 25px;
    background-color: rgb(251,249,249);
    padding: .5em .7em;
    box-shadow: 2px 2px 7px rgba(0, 0, 0, .4);
  }
 
  .toast-box{
    background-color: white;
    border: none;
    background-color: white;
    box-shadow: none;
    margin-inline: auto;
    width: fit-content;
  }
`;

const Heading = styled.div`
  display: flex;
  align-content: center;
  padding: .5em 1em;

  img{ 
    width: 15%; 
    border-radius: 50%;
  }

  h3{
    display: inline;
    margin-block: auto;
    margin-left: .75em;
  }
`;

const Profile = styled.div`
    margin: 1em;
    background-color: white;
    border-radius: 5px;

    .link, .profile{
      display: flex;
      align-items: center;
      padding: .75em;
      font-size: small;
      font-weight: 700;
    }
    .link img{
      width: 40px;
      height: 40px;
      border-radius: 50%;
      overflow: hidden;
    }
    .profile-link{
      display: inline;
      margin-left: 1em;
      vertical-align: bottom;
    }
    .copy-icon{
      font-size: medium;
      margin-top: .4em;
      margin-left: .5em;
      cursor: pointer;

      &:hover{
        color: blue;
      }
    }
    hr{ opacity: 0.4; }


    .profile{
      justify-content: space-around;
    }
    .profile-button{
      background-color: #e7e7e3;
      padding: .25em 1.25em;
      border-radius: 25px;
      font-weight: bold;
      cursor: pointer;
    }
    .edit-icon-span{
      background-color: #e7e7e3;
      padding: .30em .50em;
      border-radius: 50%;
      cursor: pointer;
    }
    .edit-icon{
      vertical-align: -7%;
    }
`;

const NavMenu = styled.div`
  padding: .5em 1em;
  margin: 1em 1em;
`;

const MenuItem = styled.div`
  display: flex;
  font-size: 1em;
  align-items: center;
  transition: all 250ms;
  padding-block: .5em;
  padding-left: 1em;
  border-radius: 10px;
  background-color: ${prop => prop.active ? '#e7e7e3' : 'rgb(251, 249, 249)'};
  
  &:hover{
    opacity: .5;
  }

  .menu-item-title{
    margin-left: 1em;
    cursor: pointer;
  }

  .menu-item-icon{
    font-size: 1.1em;
    margin-top: .15em;
  }
`;
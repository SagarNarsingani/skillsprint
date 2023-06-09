// import { useLoaderData } from 'react-router-dom';
import styled from 'styled-components';

import  { AiOutlineInstagram, AiOutlineTwitter, AiOutlineLinkedin, AiOutlineGithub } from 'react-icons/ai'

import services from '../services.json'
import { ProfileCard } from './ProfileCard';

import {BsFillArrowRightCircleFill} from 'react-icons/bs'

export async function loader({params}){
    // load the data using params.username
    console.log(params.username);
    return null;
}

export const Profile = () => {
  const userData = {
    username: 'Shaun The Sheep',
    coverImage: '/cover.jpg',
    profileImage: '/profile.jpg',
    about: 'I’m a sheep who loves to break the rules (but don’t tell the farmer!)',
    description: 'I’m Shaun the Sheep! I’m a curious and mischievous sheep who loves to explore and have fun with my flock at Mossy Bottom Farm. I’m always up for an adventure and love to try new things. I’m also very loyal to my friends and will do anything to help them out. I’m known for my unique style and love to express myself through fashion. I’m always looking for new ways to make people smile and brighten up their day. So come join me on my adventures and let’s have some fun together! 🐑',
    bgcolor: '#23272e',
    data: []
  };

  // once we have an API
  // const userData = useLoaderData();

  return (
    <Container>
        <div className='profile'>
            <div className='head'>
                <Heading>
                  <img src="/logo.jpg" alt="logo"></img>
                  <h3>SkillSprint</h3>
                </Heading>
                <Input>
                    <span>start your own page!</span>
                    <input type='text' placeholder='skillsprint/'/>
                    <BsFillArrowRightCircleFill className='icon'/>
                </Input>
            </div>
            <div className='images'>
                <img className='cover' src={userData.coverImage} alt={userData.username}/>
                <img className='profile-img' src={userData.profileImage} alt={userData.username}/>
            </div>
            
            <div className='details'>
                <div className='intro'>
                    <h2>{userData.username}</h2>
                    <p className='about-me'>{userData.about}</p>
                    <p className='description'>{userData.description}</p>
                </div>
                <div className='social'>
                    <AiOutlineInstagram className='social-icon'/>
                    <AiOutlineTwitter className='social-icon'/>
                    <AiOutlineLinkedin className='social-icon'/>
                    <AiOutlineGithub className='social-icon'/>
                </div>
            </div>
        </div>
        <div className='service'> 
            {services.map(service => <ProfileCard service={service}/>)}
        </div>
    </Container>
  )
}

const Container = styled.div`
    background-color: rgb(251, 249, 249);

    .head{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1em;
        padding-block: 0;
    }
    .service{
        background-color: #e1e1e1;
        justify-items: center;
        border-radius: 25px;
        margin-top: 2em;
        display: grid;
        grid-template-columns: 1fr 1fr;
        margin-bottom: 2em;
    }

    .profile, .service{
        width: 90%;
        padding: 1em;
        margin-inline: auto;
    }
    .cover{
        border-radius: 10px;
        width: 100%;
        height: 300px;
        opacity: 0.8;
        margin-top: 1em;
    }
    
    .images{
        position: relative;
    }
    .profile-img{
        border-radius: 50%;
        width: 175px;
        position: absolute;
        bottom: -10%;
        left: 5em;
        z-index: 1;
    }

    .details{
        display: flex;
        margin-top: 3em;
        margin-inline: 5em;
        justify-content: space-between;
    }

    .intro{
        width: 80%;
        h2{
            margin-bottom: .5em;
        }
    }
    .about-me{
        opacity: .5;
    }
    .description{
        opacity: .7;
    }

    .social-icon{
        font-size: 1.5em;
        margin-inline: .3em;
        cursor: pointer;

        &:hover{
            opacity: .4;
        }
    }

    .service{
        width: 75%;
    }
`;

const Heading = styled.div`
  display: flex;
  align-content: center;
  /* padding: .5em 1em; */

  img{ 
    width: 10%; 
    border-radius: 50%;
  }

  h3{
    display: inline;
    margin-block: auto;
    margin-left: .75em;
    font-size: 1em;
  }
`;

const Input = styled.div`
    input{
        outline: none;
        border: 1px solid black;
        border-radius: 25px;
        padding: .25em .75em;
        margin-left: .5em;
    }
    span{
        /* display: block; */
        text-align: center;
        font-weight: 500;
        font-size: small;
        margin-right: .5em;
    }
    .icon{
        /* border: 1px solid red; */
        vertical-align: middle;
        font-size: 1.5em;
        margin-left: .5em;
    }
`;
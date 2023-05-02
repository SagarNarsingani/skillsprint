import React from 'react'
import styled from 'styled-components'

import { FaHandshake } from 'react-icons/fa'
import { HiVideoCamera } from 'react-icons/hi'
import { BsFillChatSquareDotsFill } from 'react-icons/bs'

const Card = ({service}) => {
    const icons = {
        "video": <FaHandshake className='meet-icon' />,
        "text": <BsFillChatSquareDotsFill className='meet-icon' />,
        "webinar": <HiVideoCamera className='meet-icon' />
    }

    return (
        <ServiceCard>
            <div className='title'>
                {icons[service.type]}
                <h4>{service.title}</h4>
                <span className='duration'>  {service.type==='text' ? '' : ('| ' + service.duration)}</span>
            </div>
            <p>{service.description}</p>
            <div className='price-div'>
                <hr/>
                <span className='price'>{service.isFree ? 'Free' : (service.price + ' ₹')}</span>
            </div>
        </ServiceCard>
    );
}
export const ProfileCard = ({service}) => {
     return service.isPublished ? <Card service={service}/> : null;
}

const ServiceCard = styled.div`
    width: 80%;
    height: fit-content;
    padding: 1em;
    padding-bottom: .5em;
    cursor: pointer;
    display: inline-block;
    border-radius: 10px;
    background-color: white;
    margin-block: 1em;

    .meet-icon{
        font-size: 1em;
        display: inline-block;
        vertical-align: middle;
        margin-right: .5em;
    }
    
    h4{
        display: inline-block;
    }

    p{
        font-size: small;
        margin-top: .25em;
        opacity: .7;
    }

    .duration{
        font-size: 0.95;
        margin-left: .25em;
        font-weight: 400;
    }

    hr{
        opacity: .5;
        margin-top: 3em;
        margin-bottom: .5em;
    }

    .price-div{
        text-align: right;
        display: block;
        margin-bottom: 10px;
    }

    .price{
        background-color: #e1e1e1;
        display: inline-block;
        border-radius: 25px;
        font-size:  .9em;
        font-weight: 500;
        padding: .25em .6em;
    }
`;
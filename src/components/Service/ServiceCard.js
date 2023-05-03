import styled from "styled-components"

import { FiShare, FiCopy, FiEdit } from 'react-icons/fi';
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai'
import { Link } from "react-router-dom";

export const ServiceCard = ({service}) => {
  return (
    <Card>
        <p className="title"> {service.title} </p>
        <p className="details">{service.duration} | {service.isFree ? 'Free' : '₹ ' + service.price}</p>
        <div className="opts">
            <FiShare className="serve-icon"/>
            <FiCopy className="serve-icon"/>
            <Link to={`/dashboard/Services/edit/basic/${service.id}`} style={{textDecoration: 'inherit', color: 'inherit'}}>
                <FiEdit className="serve-icon"/>
            </Link>
        </div>
        <div className="publish">
            {service.isPublished ? <AiOutlineEye className="publish-icon"/> : <AiOutlineEyeInvisible className="publish-icon"/>}
            <span className="publish-status">{service.isPublished ? 'Public' : 'Hidden'}</span>
        </div>
    </Card>
  )
}


const Card = styled.div`
    border: 1px solid black;
    border-radius: 25px;
    width: 40%;
    margin-top: 1em;
    padding: 1em;
    position: relative;

    .title{
        font-size: .95em;
        font-weight: 500;
        width: 70%;
    }
    .details{
        font-size: small;
        margin-top: .25em;
    }
    .opts{
        margin-top: 2.5em;
    }
    .serve-icon{
        margin-right: 1em;
        font-size: 1.1em;
        vertical-align: middle;
        cursor: pointer;
    }
    
    .publish{
        position: absolute;
        right: 2em;
        top: 1em;
        cursor: pointer;
    }
    .publish-icon{
        vertical-align: middle;
        margin-right: .25em;
        font-size: 1em;
    }
    .publish-status{
        font-size: small;
    }

    
`;
import styled from "styled-components"
import { FiShare } from "react-icons/fi";

export const Share = () => {
  return (
    <Container>
        <div className="service-share-img">
            image here
        </div>
        <div className="share-options">
            <span className="share-opt">Copy Link Service</span>
            <span className="share-icon-opt"> <FiShare className="share--icon"/> </span>
            <span className="share-opt opt-right">Share on LinkedIn</span>
        </div>
    </Container>
  )
}


const Container = styled.div`
    margin-block: 1em;
    width: 40%;
    .service-share-img{
        border: 1.5px solid black;
        border-radius: 5px;
        text-align: center;
        line-height: 200px;
        opacity: .3;
        height: 200px;
        margin-block: 1em;
    }

    .share-opt{
        font-size: small;
        margin-right: 1em;
        background-color: #e1e1e1;
        padding: 0.25em .5em;
        border-radius: 5px;
        position: relative;
        cursor: pointer;
    }
    .share--icon{
        border-radius: 5px;
        cursor: pointer;
        background-color: #e1e1e1;
        font-size: 1.5em;
        
        padding: 0.2rem;
        position: absolute;
        
        vertical-align: middle;
        
    }
    .opt-right{
        float: right;
        margin-right: 0em;
        background-color: #2d63bc;
        color: white;
        font-weight: 900;
    }
`;
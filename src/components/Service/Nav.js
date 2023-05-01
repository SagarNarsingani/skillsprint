import styled from 'styled-components'

import { FaHandshake } from 'react-icons/fa'
import { BsFillChatSquareDotsFill, BsCameraVideoFill } from 'react-icons/bs'
import { Link, useLocation } from 'react-router-dom'

export const Nav = () => {
  
  const { pathname } = useLocation();
  let path = pathname.split('/')[3];

  path = path===undefined ? '/' : path.toLowerCase();
  
  console.log(path);
  const Menu = [
    {
      title: 'One to One meet',
      icon: <FaHandshake className='opt-icon'/>,
      path: 'video'
    },
    {
      title: 'Text Query',
      icon: <BsFillChatSquareDotsFill className='opt-icon chat'/>,
      path: 'text'
    },
    {
      title: 'Webinar',
      icon: <BsCameraVideoFill className='opt-icon'/>,
      path: 'webinar'
    }
  ];

  return (
    <Options>
        { 
            Menu.map((item, idx) => 
                <Option key={idx} active={path===item.path}>
                    <Link to={item.path} style={{textDecoration: 'inherit', color: 'inherit'}}>{item.icon}</Link>
                </Option>
            ) 
        }
    </Options>
  )
}

const Options = styled.div`
  margin-block: 1em;
  
  `;

const Option = styled.span`
    .opt-icon{
      font-size: 1.25em;
      vertical-align: middle;
      margin-right: 2.5em;
      opacity: ${prop => prop.active ? 1 : 0.4};
      cursor: pointer;
    }
    .chat{
      font-size: 1.1em;
    }
`;
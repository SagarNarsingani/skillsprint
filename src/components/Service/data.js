import { FaHandshake } from 'react-icons/fa'
import { BsFillChatSquareDotsFill, BsCameraVideoFill } from 'react-icons/bs'

export const types = [
    {
        type: 'video',
        title: '1:1 Call',
        description: 'Share your time over a meet',
        icon: <FaHandshake className="service-type-icon"/>
    }, 
    {
        type: 'text',
        title: 'Text Query',
        description: 'Answer a Question',
        icon: <BsFillChatSquareDotsFill className="service-type-icon"/>
    }, 
    {
        type: 'webinar',
        title: 'Webinar',
        description: 'Host a session for masses',
        icon: <BsCameraVideoFill className="service-type-icon"/>
    }
]

export const prices = [
    {
        id: 1,
        val: '200',
        unit: '₹'
    },
    {
        id: 2,
        val: '500',
        unit: '₹'
    },
    {
        id: 3,
        val: '1000',
        unit: '₹'
    },
    {
        id: 4,
        val: 'Custom',
        unit: '₹'
    }
];

export const durations = [
    {
        id: 1,
        val: '15',
        unit: 'min'
    },
    {
        id: 2,
        val: '30',
        unit: 'min'
    },
    {
        id: 3,
        val: '45',
        unit: 'min'
    },
    {
        id: 4,
        val: '60',
        unit: 'min'
    },
    {
        id: 5,
        val: 'Custom',
        unit: 'min'
    }
];
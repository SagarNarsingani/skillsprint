import { useLocation } from 'react-router-dom';
import styled from 'styled-components'
import { useState } from 'react';
import Switch from 'react-switch'

import { prices, durations } from '../data';
import services from '../../../services.json'
import { Options } from '../Options';

export const Basic = () => {
  
  const {pathname} = useLocation();
  const serviceId = pathname.split('/')[5].toLowerCase();
  
  const service = services.filter(service => service.id===serviceId)[0];

  if(!prices.some(price => (price.val + ' ' + price.unit)=== service.price))
    prices.push({id: prices.length+1, val: service.price.split(' ')[0], unit: '₹'})

  const [serviceData, setServiceData] = useState(service);

  const [showCustomPrice, setshowCustomPrice] = useState(false);
  const [showCustomDuration, setshowCustomDuration] = useState(false);
  const [takeTips, setTakeTips] = useState(false);
  const [limit, setLimit] = useState(false);

  const handleCustomChange = (key, val) => {
    setServiceData(pre => ({
        ...pre,
        [key]: val
    }));
  }

  const handleChange = (key, val) => {
    console.log(key, val);
    if(val==='Custom ₹'){
        setshowCustomPrice(true);
        val='';
    } else if(key==='price'){
        setshowCustomPrice(false);
    }

    if(val==='Custom min'){
        setshowCustomDuration(true);
        val='';
    } else if(key==='duration'){
        setshowCustomDuration(false);
    }
    
    setServiceData(pre => ({
        ...pre,
        [key]: val
    }));
  }

  const handleTips = (checked) => {
    setTakeTips(checked);
  }
  return (
    <Container>
        <div className="form-section">
            <h4 className="form-section-title">Title</h4>
            <input 
                className="form-input-box" 
                value={serviceData.title} 
                onChange={e => handleChange('title', e.target.value)} 
                type="text"
            />
        </div>

        <div className="form-section">
            <h4 className="form-section-title">Description</h4>
            <textarea 
                rows={7}
                cols={50}
                className="form-textarea-box" 
                value={serviceData.description} 
                onChange={e => handleChange('description', e.target.value)} 
                type="text"
            />
        </div>

        {
            serviceData.type!=='text' &&
            <Options 
                handleChange={handleChange} 
                handleCustomChange={handleCustomChange}
                showCustom={showCustomDuration}
                service={serviceData}
                section={{
                    key: 'duration',
                    title:'Call Duration',
                    data: durations
                }}
            />
        }

        <Options 
            handleChange={handleChange} 
            handleCustomChange={handleCustomChange}
            showCustom={showCustomPrice}
            service={serviceData}
            section={{
                key: 'price',
                title:'Price (₹)',
                data: prices
            }}
        />
        <label className='switch-label'>
            <Switch 
                onChange={handleTips}
                checked={takeTips} 
                uncheckedIcon={false} 
                checkedIcon={false}
                onColor='#000'
                height={24}
            />
            <span className='switch-span'>Allow customers to pay what they want</span>
        </label>

        <div className='form-section'>
            <h4 className='form-section-title'> Configuration </h4>
            <label className='switch-label'>
                <Switch 
                    onChange={checked => setServiceData(pre => ({...pre, isPublished: checked}))}
                    checked={serviceData.isPublished} 
                    uncheckedIcon={false} 
                    checkedIcon={false}
                    onColor='#000'
                    height={24}
                />
                <span className='switch-span'>Hide this service on your profile</span>
            </label>

            <label className='switch-label'>
                <Switch 
                    onChange={checked => setLimit(checked)}
                    checked={limit} 
                    uncheckedIcon={false} 
                    checkedIcon={false}
                    onColor='#000'
                    height={24}
                />
                <span className='switch-span'>Hide this service on your profile</span>
            </label>
        </div>
    </Container>
  )
}


const Container = styled.div`
    .form-textarea-box{
        resize: none;
        padding: 1em .75em;
    }
`;
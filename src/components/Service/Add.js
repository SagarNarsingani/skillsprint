import { useState } from "react"
import styled from "styled-components"
import DatePicker from "react-datepicker";
import TimePicker from 'react-time-picker';

import "react-datepicker/dist/react-datepicker.css";
import 'react-time-picker/dist/TimePicker.css';
import 'react-clock/dist/Clock.css';

import './style.css'

import { Options } from "./Options"
import { durations, prices, types } from "./data"


export const Add = () => {
  const [service, setService] = useState({
    type: '',
    title: '',
    duration: '',
    price: '',
    date: new Date(),
    time: '00:00'
  });

  const [showCustomPrice, setshowCustomPrice] = useState(false);
  const [showCustomDuration, setshowCustomDuration] = useState(false);

  const handleCustomChange = (key, val) => {
    setService(pre => ({
        ...pre,
        [key]: val
    }));
  }
  const handleChange = (key, val) => {
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
    
    setService(pre => ({
        ...pre,
        [key]: val
    }));
  }

   // when API comes...
  const handleSubmit = () => {
    console.log(service);
  }
  return (
    <Container>
        <h2> Add New Service </h2>
        <hr/>

        {/* ---------------------- Type of Service as Input --------------------- */}
        <div className="form-section">
            <h4 className="form-section-title">Select Type</h4>
            {
                types.map((type, idx) => {
                    return (
                        <div 
                            key={idx} 
                            onClick={_ => handleChange('type', type.type)} 
                            className={"service-type-box" + (type.type===service.type ? ' option-active' : '')}
                        >
                            
                            {type.icon}
                            
                            <h5 className="service-type-title">
                                {type.title}
                            </h5>

                            <p className="service-type-desc">
                                {type.description}
                            </p>

                        </div>
                    )
                })
            }
        </div>
        
        {/* --------------------------- Title as Input -------------------------- */}
        <div className="form-section">
            <h4 className="form-section-title">Title</h4>
            <input 
                className="form-input-box" 
                value={service.title} 
                onChange={e => handleChange('title', e.target.value)} 
                type="text"
            />
        </div>
        
        {/* ------------------------ Price of Service as Input ----------------------- */}
        <Options 
            handleChange={handleChange} 
            handleCustomChange={handleCustomChange}
            showCustom={showCustomPrice}
            service={service}
            section={{
                key: 'price',
                title:'Price (₹)',
                data: prices
            }}
        />

        {/* ------------------------ Duration of Service as Input ----------------------- */}
        {
            service.type!=='text' &&
            <Options 
                handleChange={handleChange} 
                handleCustomChange={handleCustomChange}
                showCustom={showCustomDuration}
                service={service}
                section={{
                    key: 'duration',
                    title:'Call Duration',
                    data: durations
                }}
            />
        }
    
        {
            service.type==='webinar' &&
            <div className="form-section">
                <div className="picker-section">
                    <p className="small-title">Date</p>
                    <DatePicker className="date-picker" selected={service.date} onChange={date => handleChange('date', date)}/>
                </div>
                <div className="picker-section">
                    <p className="small-title">Time</p>
                    <TimePicker className="time-picker" value={service.time} onChange={time => handleChange('time', time)}/>
                </div>
            </div>
        }
        
        <div className="save-service" onClick={handleSubmit}> Save Changes </div>

    </Container>
  )
}

const Container = styled.div`
    margin-left: 25%;
    padding-top: 1em;

    h2{
        padding-bottom: .5em;
    }
    hr{
        width: 90%;
        opacity: 0.3;
    }

    .save-service{
        border: 1px solid black;
        border-radius: 10px;
        cursor: pointer;
        display: inline-block;
        font-size: .95em;
        padding: .5em .75em;
        margin-block: .75em;
        transition: all .25s;
        color: white;
        background-color: black;

        &:hover{
            color: black;
            background-color: white;
        }
    }

    .date-picker{
        padding: .6em .5em;
        outline: none;
        border: 1px solid black;
        border-radius: 5px;
        width: 70%;
    }
    .react-time-picker__wrapper{
        padding: .25em .5em;
        outline: none;
        border-radius: 5px;
    }
    .small-title{
        font-size: .75em;
        margin-bottom: .25em;
    }
    .picker-section{
        display: inline-block;
    }
`

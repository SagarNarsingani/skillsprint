import { useState } from "react";
import styled from "styled-components"
import Switch from "react-switch";
import { Select } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";


import { Discount } from "./Discount";
// import DropdownInput from "react-dropdown-input";

export const Advanced = () => {
  
  const [formData, setFormData] = useState({
    showDiscountForm: false, 
    addDiscount: false,
    ppp: false,
    communication: false,
    schedule: 'default',
    buffer: '0'
  });

  const [showDiscount, setShowDiscount] = useState(false);
  return (
    <Container>
        <div className="form-section">
            <h4 className="form-section-title">Discount Codes</h4>
            <Discount show={formData.showDiscountForm}/>
            <div 
                className="btn" 
                onClick={_ => setFormData(pre => ({...pre, showDiscountForm: !pre.showDiscountForm}))}
            > 
                    {formData.showDiscountForm ? 'Cancel' :'% Add a discount code'} 
            </div>
        </div>

        <label className='switch-label'>
            <Switch 
                onChange={checked => setFormData(pre => ({...pre, addDiscount: checked}))}
                checked={formData.addDiscount} 
                uncheckedIcon={false} 
                checkedIcon={false}
                onColor='#000'
                height={24}
            />
            <span className='switch-span'>Add discount code field to booking</span>
        </label>

        <div className="form-section">
            <h4 className="form-section-title">Scheduling</h4>
            <div className="list">
                <div className="list-opt">
                    <div className="list-opt-section">
                        <h5>Schedule for this service</h5>
                        <p>You can have different schedules for different services</p>
                    </div>
                    <div className="list-opt-section">
                    <Select 
                        className="form-input-box" 
                        style={{width: '150px'}}
                        value={formData.schedule}
                        onChange={e => setFormData(pre => ({...pre, schedule: e.target.value}))}
                    >
                        <MenuItem value={'default'}>Default</MenuItem>
                    </Select>
                    </div>
                </div>
            </div>


            <div className="list">
                <div className="list-opt">
                    <div className="list-opt-section">
                        <h5>Buffer time between calls</h5>
                        <p>Add time between your events to stay zen</p>
                    </div>
                    <div className="list-opt-section">
                    <Select 
                        className="form-input-box" 
                        style={{width: '150px'}}
                        value={formData.buffer}
                        onChange={e => setFormData(pre => ({...pre, buffer: e.target.value}))}
                    >
                        <MenuItem value={'0'}>0 min</MenuItem>
                        <MenuItem value={'5'}>5 min</MenuItem>
                        <MenuItem value={'10'}>10 min</MenuItem>
                        <MenuItem value={'15'}>15 min</MenuItem>
                        <MenuItem value={'30'}>30 min</MenuItem>
                        
                    </Select>
                    </div>
                </div>
            </div>
        </div>

        <div className="form-section">
            <h4 className="form-section-title">Purchase Power Parity</h4>
            <p className="form-section-text">Charge customers different amounts depending on the cost of living in their country. </p>
            <label className='switch-label'>
                <Switch 
                    onChange={checked => setFormData(pre => ({...pre, ppp: checked}))}
                    checked={formData.ppp} 
                    uncheckedIcon={false} 
                    checkedIcon={false}
                    onColor='#000'
                    height={24}
                />
                <span className='switch-span'>Enable location wise dynamic pricing</span>
            </label>
        </div>

        <div className="form-section">
            <h4 className="form-section-title">Communication</h4>
            <label className='switch-label'>
                <Switch 
                    onChange={checked => setFormData(pre => ({...pre, communication: checked}))}
                    checked={formData.communication} 
                    uncheckedIcon={false} 
                    checkedIcon={false}
                    onColor='#000'
                    height={24}
                />
                <span className='switch-span'>Include a custom booking confirmation message</span>
            </label>
        </div>
    </Container>
  )
}

const Container = styled.div`
    .list{
        margin-block: 1em;
    }
    .list-opt{
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 60%;
    }

    .list-opt p{
        font-size: small;
        opacity: .6;
    }
`;
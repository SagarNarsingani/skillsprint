import { Select } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";

export const Discount = ({show}) => {
  return (
    show &&
    <div className="discount-form">
        <p className="discount-form-title">Name</p>
        <input type="text" className="discount-input form-input-box"></input>
        
        <br/>
        <div className="discount-form-section">
            <p className="discount-form-title">Percentage off</p>
            <input type="number" max={100} min={0} className="discount-input discount-percentage form-input-box"></input>
        </div>

        <div className="discount-form-section">
            <p className="discount-form-title">Quantity</p>
            <Select 
                className="form-input-box" 
                style={{width: '150px'}}
                value={'unlimited'}
            >
                <MenuItem value={'1'}>1 time </MenuItem>
                <MenuItem value={'5'}> 5 times </MenuItem>
                <MenuItem value={'10'}>10 times</MenuItem>
                <MenuItem value={'unlimited'}>Unlimited</MenuItem>
            </Select>
            {/* <input type="text" className="discount-input discount-quantity form-input-box"></input> */}
        </div>

        <div className="btn discount-btn">
            Save
        </div>
    </div>
  )
}

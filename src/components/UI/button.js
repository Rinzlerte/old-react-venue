import React from 'react';
import TicketIcon from '../../assets/img/icons/ticket.png';


const Purchasebutton = (props) => {
    return(
        <a href = {props.link} className='purchase-link'>
            <img 
                src={TicketIcon}
                className="iconImage"
                alt="icon_button"
            />
            {props.text}
        </a>
    );
};

export default Purchasebutton;
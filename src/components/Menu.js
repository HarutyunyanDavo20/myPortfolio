import React from 'react';
import './Menu.scss'

const Menu = ({title, onClick, }) => {
    return (
        <div className='link-Menu' onClick={() => onClick(title)}>
            <span>{title}</span>
        </div>
    );
}

export default Menu;

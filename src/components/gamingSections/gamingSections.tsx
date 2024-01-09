import React from 'react';
import {PropsSections} from '../../types';
import './gamingSections.css';

const Cell: React.FC<PropsSections> = ({hasItem, clicked, onClick}) => {
    let contents = '';
    if (clicked) {
        contents = hasItem ? 'Good' : '';
    }

    return (
        <div className={`cell ${clicked && 'clicked'}`} onClick={onClick}>
            {contents}
        </div>
    );
};

export default Cell;

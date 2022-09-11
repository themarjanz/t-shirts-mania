import React from 'react';
import Special from '../Special/Special'

const MySelf = ({ house, oranament }) => {
    return (
        <div>
            <h5>Myself</h5>
            <p><small>house: {house}</small></p>
            <Special oranament={oranament}></Special>
        </div>
    );
};

export default MySelf;
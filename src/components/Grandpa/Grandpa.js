import React, { useState } from 'react';
import Aunty from '../Aunty/Aunty';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import './Grandpa.css'



const Grandpa = () => {
    const [house, setHouse] = useState(1);
    const oranament = 'Diamond Ring';


    const handleBuyHouse = () => {
        const newHouseCount = house + 1;
        setHouse(newHouseCount);
    }
    return (
        <div>
            <h4>Grandpa</h4>
            <button onClick={handleBuyHouse}>Buy A House</button>
            <p>House: {house}</p>

            <section className='grandpa' style={{ display: 'flex' }}>

                <Father house={house} oranament={oranament}></Father>
                <Uncle house={house}></Uncle>
                <Aunty house={house}></Aunty>
            </section>
        </div>
    );
};

export default Grandpa;
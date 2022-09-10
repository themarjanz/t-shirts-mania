import React from 'react';

import './Cart.css';

const Cart = ({ cart, handleRemoveFromCart }) => {
    // Conditional rendering options
    // 1. Element variable
    let command;
    if (cart.length === 0) {
        command = <p>Please Add at least one item!!!</p>
    }
    else if (cart.length === 1) {
        command = <p>Please add more</p>
    } else {
        command = <p><small>Thanks for adding item...</small></p>
    }
    return (
        <div>
            <h2>Item selected: {cart.length}</h2>
            {
                // cart.map(tShirt => <p>{tShirt.name}</p>)
                cart.map(tShirt => <p>
                    {tShirt.name}
                    <button onClick={() => handleRemoveFromCart(tShirt)}>X</button>
                </p>)
            }
        </div>
    );
};

export default Cart;
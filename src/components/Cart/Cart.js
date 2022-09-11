import React from 'react';

import './Cart.css';

const Cart = ({ cart, handleRemoveFromCart }) => {
    // Conditional rendering options
    // 1. Element variable
    // 2. Ternary operator condition ? true : false
    // 3. && operator (shorthand)
    // 4 || operator 

    let command;
    if (cart.length === 0) {
        command = <div>
            <h5>Please Add at least one item!!!</h5>
        </div>
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
            {cart.length === 0 || <p className='orange'>YAY! You are buying</p>}
            {cart.length === 3 && <div className='orange'>
                <h3>Trigonal</h3>
                <p>Tin jomn ka ki gift deba</p>
            </div>

            }
            {command}
            {cart.length !== 4 ? <p>Keep adding</p> : <button>Remove ALL</button>}
            {cart.length === 4 && <button className='orange'>Review Order</button>}
        </div>
    );
};

export default Cart;
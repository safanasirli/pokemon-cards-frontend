import React from 'react';
import './Cart.css';

function Cart() {
  return (
    <div className='cart'>
        <h4>Cart</h4>
        <div className='checkout-items'>
            <div className='item'>
                <p>Pokemon</p>
                <img src={'https://mlpnk72yciwc.i.optimole.com/cqhiHLc.WqA8~2eefa/w:auto/h:auto/q:75/https://bleedingcool.com/wp-content/uploads/2021/06/Pikachu-color-model-publicity-cel.jpg'} />
                <div className='$999'>$15</div>
            </div>
            <div className='item'>
                <p>Pokemon</p>
                <img src={'https://mlpnk72yciwc.i.optimole.com/cqhiHLc.WqA8~2eefa/w:auto/h:auto/q:75/https://bleedingcool.com/wp-content/uploads/2021/06/Pikachu-color-model-publicity-cel.jpg'} />
                <div className='$999'>$15</div>
            </div>
            <div className='item'>
                <p>Pokemon</p>
                <img src={'https://mlpnk72yciwc.i.optimole.com/cqhiHLc.WqA8~2eefa/w:auto/h:auto/q:75/https://bleedingcool.com/wp-content/uploads/2021/06/Pikachu-color-model-publicity-cel.jpg'} />
                <div className='$999'>$15</div>
            </div> 
        </div>
        <div className='total'>Total: $100</div>
    </div>
  );
}

export default Cart;


                
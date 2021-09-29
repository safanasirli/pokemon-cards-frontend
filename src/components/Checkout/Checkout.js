import React from 'react';
import './Checkout.css';
import Paypal from './Paypal';

function Checkout() {
    return (
        <form>
                `<div className='checkout-container'> 
                {/* Billing Address */}
                <div className='col'>
                    <h3>Billing Address</h3>
                    <div className='row-1'>
                        <label htmlFor="name">Full Name</label>
                        <input type="text" id="name" name="name" placeholder="Philip Winchester" />
                        <label htmlFor="email">Email</label>
                        <input type="text" id="email" name="email" placeholder="phil@example.com" />
                        <label htmlFor="address">Address</label>
                        <input type="text" id="address" name="address" placeholder="542 W. 15th Street" />
                        <label htmlFor="city">City</label>
                        <input type="text" id="city" name="city" placeholder="New York" />
                    </div>
                    <div class="row-2">
                        <div class="col-2">
                            <label htmlFor="state">State</label>
                            <input type="text" id="state" name="state" placeholder="NY" />
                        </div>
                        <div class="col-2">
                            <label htmlFor="zip">Zip</label>
                            <input type="text" id="zip" name="zip" placeholder="10001" />
                        </div>
                    </div>
                </div>

                {/* Payment */}
                <div className='col'>
                    <h3>Payment</h3>
                    <div className='row-1'>
                        <label htmlFor="card-name">Name on Card</label>
                        <input type="text" id="card-name" name="cardname" placeholder="Philip Winchester" />
                        <label htmlFor="card-number">Credit card number</label>
                        <input type="text" id="card-number" name="cardnumber" placeholder="1111-2222-3333-4444" />
                        <label htmlFor="exp-month">Exp Month</label>
                        <input type="text" id="exp-month" name="expmonth" placeholder="September" />        
                    </div>
                    <div className='row-2'>
                        <div class="col-2">
                            <label htmlFor="exp-year">Exp Year</label>
                            <input type="text" id="exp-year" name="expyear" placeholder="2021" />
                        </div>
                        <div class="col-2">
                            <label htmlFor="cvv">CVV</label>
                            <input type="text" id="cvv" name="cvv" placeholder="352" />
                        </div>    
                    </div>
                    <div className='checkoutBtn'>
                        <input type="submit" value="Continue to checkout" class="btn" />
                    </div>
                    <p>OR</p>
                    <div className='paypalBtn'>
                        <Paypal />
                    </div>
                </div>

            </div>
        </form>
    );
}

export default Checkout;
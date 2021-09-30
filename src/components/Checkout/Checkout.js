import React from 'react';
import './Checkout.css';
import Cart from './Cart';

class Checkout extends React.Component {
// add error handling functions and show success message after checkout
// grab dada from user reserved pokemon
// show total amount from add on price
// after user click on checkout button 
//    pokemon amounts -1 in database
//    clear checkout items

    constructor(props) {
        super(props)
        this.state = this.initialState()
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    initialState() {
        return {
            // Billing Address
            username: '',
            email: '',
            address: '',
            city: '',
            state: '',
            zip: '',
            // Payment
            cardName: '',
            cardNumber: '',
            expmonth: '',
            expyear: '',
            cvv: ''
        }
    }
    // reference: https://www.tracylum.com/blog/2017-05-20-autocomplete-an-address-with-a-react-form/

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value})
    }

    handleSubmit(event) {
        alert('submitted');
        event.preventDefault()
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <Cart />
                <div className='checkout-container'> 
                    {/* Billing Address */}
                    <div className='col'>
                        <h3>Billing Address</h3>
                        <div className='row-1'>
                            <label htmlFor='username'>Full Name</label>
                            <input 
                                type='text'
                                name='username' 
                                value={this.state.username}
                                placeholder='Enter your full name'
                                onChange={this.handleChange}
                            />
                            <label htmlFor='email'>Email</label>
                            <input 
                                type='email' 
                                name='email' 
                                value={this.state.email}
                                placeholder='Enter your email' 
                                onChange={this.handleChange}
                            />
                            <label htmlFor='address'>Address</label>
                            <input 
                                type='street-address' 
                                name='address' 
                                value={this.state.address}
                                placeholder='Enter your street address'
                                onChange={this.handleChange}
                            />
                            <label htmlFor='city'>City</label>
                            <input 
                                type='text' 
                                name='city' 
                                value={this.state.city}
                                placeholder='Enter your city'
                                onChange={this.handleChange}
                            />
                        </div>
                        <div className='row-2'>
                            <div className='col-2'>
                                <label htmlFor='state'>State</label>
                                <input 
                                    type='text' 
                                    name='state' 
                                    value={this.state.state}
                                    placeholder='Ex: MA'
                                    onChange={this.handleChange}
                                />
                            </div>
                            <div className='col-2'>
                                <label htmlFor='zip'>Zip Code</label>
                                <input 
                                    inputMode='numeric'
                                    type='postal-code'
                                    name='zip' 
                                    pattern='[0-9]*'
                                    value={this.state.zip}
                                    placeholder='Ex: 02114'
                                    onChange={this.handleChange}
                                />
                            </div>
                        </div>
                    </div>
    
                    {/* Payment */}
                    <div className='col'>
                        <h3>Payment</h3>
                        <div className='row-1'>
                            <label htmlFor='cardName'>Name on Card</label>
                            <input 
                                type='text' 
                                autoComplete='cc-name'
                                name='cardName' 
                                value={this.state.cardName}
                                placeholder="Enter card holder's name"
                                onChange={this.handleChange}
                            />
                            <label htmlFor="cardNumber">Credit card number</label>
                   
                            <input 
                                type='text'
                                inputMode='numeric'
                                autoComplete='cc-number'
                                name='cardNumber'
                                value={this.state.cardNumber}
                                placeholder='xxxx xxxx xxxx xxxx'
                                onChange={this.handleChange}
                            />
                            <label htmlFor='expmonth'>Exp Month</label>
                            <input 
                                type='text'
                                autoComplete='cc-exp-month'
                                name='expmonth'
                                value={this.state.expmonth}
                                placeholder='Month'
                                onChange={this.handleChange}
                            />        
                        </div>
                        <div className='row-2'>
                            <div className='col-2'>
                                <label htmlFor='expyear'>Exp Year</label>
                                <input 
                                    type='text'
                                    autoComplete='cc-exp-year'
                                    name='expyear'
                                    value={this.state.expyear}
                                    placeholder='20XX'
                                    onChange={this.handleChange}
                                />  
                            </div>
                            <div className='col-2'>
                                <label htmlFor='cvv'>CVV</label>
                                <input 
                                    type='text'
                                    autoComplete='cc-csc'
                                    name='cvv'
                                    value={this.state.cvv}
                                    placeholder='xxx'
                                    onChange={this.handleChange}
                                />  
                            </div>    
                        </div>
                        <div className='checkoutBtn'>
                            <button onSubmit={this.handleSubmit}>Continue to checkout</button>
                        </div>
                    </div>
    
                </div>
            </form>
        );
    }
}

export default Checkout;
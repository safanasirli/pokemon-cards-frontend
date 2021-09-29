import React from 'react';
import PaypalExpressBtn from 'react-paypal-express-checkout';
// reference: https://www.npmjs.com/package/react-paypal-express-checkout
 
export default class Paypal extends React.Component {
    render() {
        const onSuccess = (payment) => {
            console.log("The payment was succeeded!", payment);
        }
 
        const onCancel = (data) => {
            // User pressed "cancel" or close Paypal's popup!
            console.log('The payment was cancelled!', data);
        }
 
        const onError = (err) => {
            console.log("Error!", err);
        }
 
        let env = 'sandbox'; 
        let currency = 'USD'; 
        let total = 1; 
 
        const client = {
            sandbox:    'ASxdZkFHuqVO4FqHwvG5e73vtiknZaSWxMlSoH-1slxUCFpRHALCsb9G98qFlq7T-hMYtjIiS-GHPcxb',
            production: 'YOUR-PRODUCTION-APP-ID',
        }
        
        return (
            <PaypalExpressBtn 
              env={env} 
              client={client} 
              currency={currency} 
              total={total} 
              onError={onError} 
              onSuccess={onSuccess} 
              onCancel={onCancel} 
              // button styling
              style={{
                size: 'large',
                color: 'blue',
                shape: 'rect',
                label: 'checkout'
              }}
            />
        );
    }
}
import React from 'react';
import PaypalExpressBtn from 'react-paypal-express-checkout';

export default class PayPal extends React.Component {
    render() {
        const onSuccess = (payment) => {
            console.log("The payment was succeeded!", payment);
            this.props.onSuccessTradeHandler();
        }

        const onCancel = (data) => {
            console.log('The payment was cancelled!', data);
        }

        const onError = (err) => {
            console.log("Error!", err);
        }

        let env = 'sandbox';
        let currency = 'USD';
        let total = this.props.totalPayment;

        const client = {
            sandbox:    'AVspbHWdZ-jwgfnu8nlLgHlpRVcyzrZ-fzTndEkBefQcjWLIyPDtPBggp8n2pIAcWtqQ_ufjNyFhugRD',
            production: 'YOUR-PRODUCTION-APP-ID',
        }

        return (
            <PaypalExpressBtn
                env={env} client={client} currency={currency} total={total}
                onError={onError} onSuccess={onSuccess} onCancel={onCancel}
                style={{size: 'responsive', color: 'gold', shape: 'rect', label: 'checkout' }}
            />
        );
    }
}
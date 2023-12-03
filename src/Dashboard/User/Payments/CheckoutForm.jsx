import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";
import ReactiveButton from "reactive-button";
import useAxiosSecure from "../../../Pages/hooks/useAxiosSecure";
import { useEffect } from "react";
import { useContext } from "react";
import { AuthContext } from "../../../Pages/Login/Providers/Authprovider";


const CheckoutForm = () => {
    const [transactionId, setTransactionId] = useState('');
    const { price, user } = useContext(AuthContext);
    const [error, setError] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const stripe = useStripe();
    const elements = useElements();
    const axiosSecure = useAxiosSecure();
    console.log(price);

    useEffect(() => {
        axiosSecure.post('/create-payment-intent', { price: price })
            .then(res => {
                console.log(res);
                // if(res.data.clientSecret){

                // }
                console.log(res.data.clientSecret);
                setClientSecret(res.data.clientSecret);
            })
    }, [axiosSecure, price])


    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement);
        if (card === null) {
            return;
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })
        if (error) {
            console.log('payment error', error);
            setError(error.message);
        }
        else {
            console.log("payment method", paymentMethod);
            setError('');
        }
        // consfirm payment
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    name: user.displayName || 'Anonymous',
                    email: user.email || 'Anonymous'
                }
            }
        })
        if (confirmError) {
            console.log(confirmError);
        }
        else {
            console.log('payment intent', paymentIntent);
            if (paymentIntent.status === 'succeeded') {
                console.log('transaction-id', paymentIntent.id);
                setTransactionId(paymentIntent.id);
                // save payment in the database
                const payment = {
                  email: user?.email,
                  transactionId: paymentIntent.id,
                  price: price,
                  date: new Date(),
                  status: paymentIntent.status
                }
                const res =await axiosSecure.post('/payment', payment);
                console.log('payment saved', res);

            }
        }
    }
    return (
        <>
            <form className="p-[50px]" onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                padding: '50px',
                                fontSize: '16px',
                                color: 'blue',
                                '::placeholder': {
                                    color: '#aab7c4'
                                },
                            },
                            invalid: {
                                color: '#9e2146'
                            }
                        }
                    }}
                ></CardElement>

                <ReactiveButton className="my-4" type='submit'
                    disabled={!stripe || !clientSecret}
                    href="#" color="red" rounded shadow size="large" idleText="PAY "></ReactiveButton>
            </form>
            <p className="text-red-600 text-[20px] font-serif px-[30px]">{error} </p>
            {transactionId && <p className="text-green-500 font-inter px-[30px]">Your transaction id :{transactionId} </p>}
        </>
    );
};

export default CheckoutForm;
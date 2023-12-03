import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";

// todo: add Publishable key
const stripePromise = loadStripe('pk_test_51OIDRJBSRfjhH6rfBj9Sji5bNvcC77ggM0adf4od0b2U7hQCbWjKOfeodwcBiO3T6vGQTBG0bIcy253kwVg0OcYB00Xw1nDVKV');
const Payment = () => {
    return (
        <div>
            <h1 className="text-[40px] font-[700] text-indigo-600 font-cinzel text-center my-[100px]">Payment Section</h1>
            <Elements stripe={stripePromise}>
               <CheckoutForm></CheckoutForm>
            </Elements>
        </div>
    );
};

export default Payment;
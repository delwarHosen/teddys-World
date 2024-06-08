import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';
const PaymentCart = () => {
    const stripePromise = loadStripe(import.meta.env.VITE_stripe_Api_Key)
    return (
        <div className="m-10">
            <h3 className="text-3xl font-medium text-center"> Payment cart</h3>
            <Elements stripe={stripePromise}>
                <CheckoutForm></CheckoutForm>
            </Elements>
        </div>
    );
};

export default PaymentCart;
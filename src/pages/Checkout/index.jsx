import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from '../../components/Checkout';

const CheckoutPage = () => {
  const stripePromise = loadStripe('pk_test_51MroAjJ2umTNCE84JwLgl7DkOCW6zRksmXCgib60owrWpBGFumLfBz2Nh1IuIEL6yFRUSOko0V1xNVSUFbSBgp2o00cnIDO550');

  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm />
    </Elements>
  );
};

export default CheckoutPage;
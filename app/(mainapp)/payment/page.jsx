'use client';
import { usePaystackPayment } from 'react-paystack';

// Creating user template
const createUser = async () => {
  const res = await fetch('https://api.paystack.co/customer', {
    method: 'POST',
    headers: {
      // Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
      Authorization: `Bearer sk_test_ffd7c72590f9c622a8a7d89e906237ac05352729`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: 'test127@test.com',
      name: 'Naka',
      first_name: 'Maximus',
      last_name: 'The Great',
      phone: '+2348164918641',
    }),
  });
  console.log('it ran');
  console.log(res);
};

const config = {
  reference: new Date().getTime().toString(),
  email: 'onyedibesixtuna@gmail.com',
  amount: 20000, //Amount is in the country's lowest currency. E.g Kobo, so 20000 kobo = N200
  publicKey: 'pk_test_00ed8ad1396b8a64ab71a59a7c7c0c64d294f87e',
};

// you can call this function anything
const onSuccess = (reference) => {
  // Implementation for whatever you want to do with reference and after success call.
  console.log(reference);
};

// you can call this function anything
const onClose = () => {
  // implementation for  whatever you want to do when the Paystack dialog closed.
  console.log('closed');
};

const PaystackHookExample = () => {
  const initializePayment = usePaystackPayment(config);
  return (
    <div>
      <button
        onClick={() => {
          initializePayment(onSuccess, onClose);
        }}
      >
        Paystack Hooks Implementation
      </button>
    </div>
  );
};

export default function App() {
  return (
    <div className=' mt-[20vh]'>
      <PaystackHookExample />
    </div>
  );
}

'use client';
import Link from 'next/link';
import { usePaystackPayment } from 'react-paystack';

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

const PaystackHook = () => {
  const initializePayment = usePaystackPayment(config);
  return (
    <div>
      <Link
        href='https://forms.gle/8Y59AMFZgQA2qLuU9
'
      >
        <button className='bg-secondary text-white w-[100px] h-[50px] rounded-md'>
          Buy
        </button>
      </Link>
      {/* <button
        onClick={() => {
          initializePayment(onSuccess, onClose);
        }}
        className='bg-secondary text-white w-[100px] h-[50px] rounded-md'
      >
        Buy
      </button> */}
    </div>
  );
};

export default function Payment() {
  return <PaystackHook />;
}

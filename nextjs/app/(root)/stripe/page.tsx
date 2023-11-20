'use client';
import axios from 'axios';

const CheckoutPage = () => {
  const checkout = async () => {
    const res = await axios.post('/api/checkout', {
      data: '',
    });
    window.location = res.data.url;
  };
  return (
    <div className="w-screen h-screen ">
      <div className="w-full h-full p-10 flex items-center justify-center my-auto">
        <button
          className="px-3 py-2"
          onClick={checkout}
        >
          Checkout
        </button>
      </div>
    </div>
  );
};
export default CheckoutPage;

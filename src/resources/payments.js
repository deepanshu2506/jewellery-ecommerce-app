import { verifyPaymentsUrl } from "./endpoints";
import { post } from "./Requests";

export const verifyPayments = (creds) => {
  const body = {
    razorpay_order_id: creds.razorpay_order_id,
    razorpay_payment_id: creds.razorpay_payment_id,
    razorpay_signature: creds.razorpay_signature,
  };

  return new Promise(async (resolve, reject) => {
    try {
      const res = await post(verifyPaymentsUrl, body);
      if (res) {
        resolve(res);
      }
    } catch (err) {
      resolve({ successful: false });
    }
  });
};

export const getOrderId = {};

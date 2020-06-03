import { verifyPaymentsUrl } from "./endpoints";

export const verifyPayments = (creds) => {
  const body = {
    razorpay_order_id: creds.razorpay_order_id,
    razorpay_payment_id: creds.razorpay_payment_id,
    razorpay_signature: creds.razorpay_signature,
  };
  const options = {
    method: "POST",
    headers: { Authorization: creds.token, "Content-Type": "application/json" },
    body: JSON.stringify(body),
  };
  return new Promise((resolve, reject) => {
    fetch(verifyPaymentsUrl, options)
      .then((res) => res.json())
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        resolve({ successful: false });
      });
  });
};

export const getOrderId = {};

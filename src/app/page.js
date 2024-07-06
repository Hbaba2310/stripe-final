"use client";

import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import "./globals.css";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

export default function PreviewPage() {
  React.useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    if (query.get("success")) {
      console.log("Order placed! You will receive an email confirmation.");
    }

    if (query.get("canceled")) {
      console.log(
        "Order canceled -- continue to shop around and checkout when you’re ready."
      );
    }
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Redirect to the Stripe checkout link directly
    window.location.href = "https://buy.stripe.com/test_14k5mQ3JV9kb7PG144";
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm">
        <h2 className="text-xl font-bold mb-4">Product</h2>
        <p className="text-gray-700 mb-4">
          Your best Next.js method to include stripe payments on your app.
          Easier than ever! Buy now & own the code forever.
        </p>
        <form onSubmit={handleSubmit}>
          <button
            type="submit"
            role="link"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-200"
          >
            Buy Now!
          </button>
        </form>
      </div>
    </div>
  );
}

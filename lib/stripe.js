import Stripe from "stripe";

// Server-only. Never import this file from a "use client" component —
// STRIPE_SECRET_KEY must never reach the browser.
export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2024-06-20",
});

// Flat price for any generated RAMS document, in pence.
// The price is decided here, server-side, and is never accepted from the client —
// that's what makes the checkout route safe from a tampered request.
export const RAMS_PRICE_GBP_PENCE = 1500; // £15.00

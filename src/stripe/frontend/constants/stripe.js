const STRIPE_PUBLISHABLE =
  process.env.NODE_ENV === 'production'
    ? 'pk_live_MY_PUBLISHABLE_KEY'
    : 'pk_test_RJDn6DFDq8mrwbcu9OQMasui';

export default STRIPE_PUBLISHABLE;

const stripe = require('stripe')('sk_test_KJRnAEY2ZLWMQelm6WBADR7400DVgw3kNS
')

stripe.charges.create({
  amount: 100,
  currency: 'usd',
  description: '',
  source: token
}).then(data => {})

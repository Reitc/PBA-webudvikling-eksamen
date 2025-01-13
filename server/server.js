// Set Up the Backend with Express (Node.js Server) to manage Stripe payment
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const Stripe = require('stripe');

const stripe = new Stripe('sk_test_51QafV7Ruib7MNBzAQGfSTHi1ctevCztjnpTucNHx2jNV2K9xsEkLu16WD2J3kQkAizVtcGCjk53cIQ2pXh5ij0B300J0V8UpwZ');
const app = express();

app.use(cors());
app.use(bodyParser.json());

app.post('/create-payment-intent', async (req, res) => {
    try {
      const { amount } = req.body;
      console.log(`Creating payment intent for amount: ${amount} DKK`);
      const paymentIntent = await stripe.paymentIntents.create({
        amount,
        currency: 'dkk',
      });
      res.send({
        clientSecret: paymentIntent.client_secret,
      });
    } catch (err) {
      console.error('Error creating payment intent:', err.message);
      res.status(500).send({ error: err.message });
    }
  });
  

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

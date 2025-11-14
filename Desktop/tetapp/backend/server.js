/**
 * Simple Express server for Razorpay integration
 * Deploy this to Vercel, Railway, or Render
 */

// Load environment variables
require('dotenv').config();

const express = require('express');
const cors = require('cors');
const Razorpay = require('razorpay');
const crypto = require('crypto');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Initialize Razorpay
const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

// Health check
app.get('/', (req, res) => {
  res.json({ status: 'ok', message: 'Razorpay payment server is running' });
});

// Create Razorpay order
app.post('/create-order', async (req, res) => {
  try {
    const { tier, package: packageType, userId } = req.body;

    // Pricing map (same as pricing-config.ts)
    const PRICING = {
      'paper1_3_months': 49900,
      'paper1_1_year': 79900,
      'paper2_3_months': 69900,
      'paper2_1_year': 99900,
      'both_3_months': 99900,
      'both_1_year': 149900,
    };

    const key = `${tier}_${packageType}`;
    const amount = PRICING[key];

    if (!amount) {
      return res.status(400).json({
        success: false,
        error: `Invalid tier or package: ${tier}, ${packageType}`,
      });
    }

    // Create order
    const options = {
      amount: amount, // amount in paisa
      currency: 'INR',
      receipt: `receipt_${Date.now()}`,
      notes: {
        tier,
        package: packageType,
        user_id: userId,
        app: 'TET Pro',
      },
    };

    const order = await razorpay.orders.create(options);

    console.log('✅ Order created:', order.id);

    res.json({
      success: true,
      order: {
        id: order.id,
        amount: order.amount,
        currency: order.currency,
        receipt: order.receipt,
      },
    });
  } catch (error) {
    console.error('❌ Error creating order:', error);
    res.status(500).json({
      success: false,
      error: error.message || 'Failed to create order',
    });
  }
});

// Verify payment
app.post('/verify-payment', async (req, res) => {
  try {
    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
      userId,
    } = req.body;

    // Verify signature
    const sign = razorpay_order_id + '|' + razorpay_payment_id;
    const expectedSign = crypto
      .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET)
      .update(sign.toString())
      .digest('hex');

    if (razorpay_signature === expectedSign) {
      console.log('✅ Payment verified:', razorpay_payment_id);

      // TODO: Update user's pro status in your database here
      // For now, just return success

      res.json({
        success: true,
        message: 'Payment verified successfully',
        payment_id: razorpay_payment_id,
      });
    } else {
      console.error('❌ Invalid signature');
      res.status(400).json({
        success: false,
        message: 'Invalid payment signature',
      });
    }
  } catch (error) {
    console.error('❌ Error verifying payment:', error);
    res.status(500).json({
      success: false,
      message: error.message || 'Failed to verify payment',
    });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});

module.exports = app; // For Vercel

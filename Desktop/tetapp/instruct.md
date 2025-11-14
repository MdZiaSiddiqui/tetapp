1.1 Install Razorpay React Native SDK
Install the SDK using the following npm command in the Terminal window. If you are using Windows, please use Git Bash instead of the Command Prompt window. Ensure that you run this code within your React Native project folder in the Terminal window.

Code

copy

//using npm
$ npm install react-native-razorpay --save


1.2 Run React Native App
Run the React Native app.

Run

copy

npx react-native run-android
This links the SDK with your React Native project.

Expo Application
After adding the react-native-razorpay package, use the option to prebuild the app. This generates the android platform folders in the project to use native-modules.

Run

copy

npx expo prebuild
The application is installed on the device/emulator.

javascript

copy

npx expo run:[android] --device


1.3 Create an Order in Server
Order is an important step in the payment process.

An order should be created for every payment.
You can create an order using the Orders API. It is a server-side API call. Know how to authenticate Orders API.
The order_id received in the response should be passed to the checkout. This ties the order with the payment and secures the request from being tampered.


You can create an order using:


API Sample Code


Razorpay Postman Public Workspace

Use this endpoint to create an order using the Orders API.

POST
/orders
Curl
Java
Python
Go
PHP
Ruby
Node.js
.NET

copy

curl -X POST https://api.razorpay.com/v1/orders 
-U [YOUR_KEY_ID]:[YOUR_KEY_SECRET]
-H 'content-type:application/json'
-d '{
    "amount": 50000,
    "currency": "INR",
    "receipt": "qwsaq1",
    "partial_payment": true,
    "first_payment_min_amount": 230
}'
Success Response
Failure Response

copy

{
    "id": "order_IluGWxBm9U8zJ8",
    "entity": "order",
    "amount": 50000,
    "amount_paid": 0,
    "amount_due": 50000,
    "currency": "INR",
    "receipt": "rcptid_11",
    "offer_id": null,
    "status": "created",
    "attempts": 0,
    "notes": [],
    "created_at": 1642662092
}


1.4 Add Razorpay Checkout Options to .js File
To integrate the Razorpay Checkout with your React Native app, you must add the Checkout Display Options in the .js file.

Open the .js file in your project folder and perform the following:

Import the RazorpayCheckout module to your component.

Import Razorpay Checkout Module

copy

import RazorpayCheckout from 'react-native-razorpay';
Call the RazorpayCheckout.open method with the payment options. The method returns a JS Promise where the then part corresponds to a successful payment and the catch part corresponds to payment failure.

Checkout Options

copy

<TouchableHighlight onPress={() => {
    var options = {
    description: 'Credits towards consultation',
    image: 'https://i.imgur.com/3g7nmJC.jpg',
    currency: 'INR',
    key: '<YOUR_KEY_ID>',
    amount: '5000',
    name: 'Acme Corp',
    order_id: 'order_DslnoIgkIDL8Zt',//Replace this with an order_id created using Orders API.
    prefill: {
      email: 'gaurav.kumar@example.com',
      contact: '+919876543210',
      name: 'Gaurav Kumar'
    },
    theme: {color: '#53a20e'}
  }
  RazorpayCheckout.open(options).then((data) => {
    // handle success
    alert(`Success: ${data.razorpay_payment_id}`);
  }).catch((error) => {
    // handle failure
    alert(`Error: ${error.code} | ${error.description}`);
  });
}}>


This is a mandatory step to confirm the authenticity of the details returned to the Checkout form for successful payments.

To verify the razorpay_signature returned to you by the Checkout form:
Create a signature in your server using the following attributes:

order_id: Retrieve the order_id from your server. Do not use the razorpay_order_id returned by Checkout.
razorpay_payment_id: Returned by Checkout.
key_secret: Available in your server. The key_secret that was generated from the Dashboard.
Use the SHA256 algorithm, the razorpay_payment_id and the order_id to construct a HMAC hex digest as shown below:

HMAC Hex Digest

copy

generated_signature = hmac_sha256(order_id + "|" + razorpay_payment_id, secret);

  if (generated_signature == razorpay_signature) {
    payment is successful
  }
If the signature you generate on your server matches the razorpay_signature returned to you by the Checkout form, the payment received is from an authentic source.


podfile

copy

installer.pods_project.build_configurations.each do |config|
  config.build_settings["EXCLUDED_ARCHS[sdk=iphonesimulator*]"] = "arm64"
end
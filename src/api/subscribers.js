// import fetch from "node-fetch";
// import MailerLite from '@mailerlite/mailerlite-nodejs';

// const mailerlite = new MailerLite({
//   api_key: process.env.MAILER_LITE_API_KEY
// });

export default async function handler(req, res) {
  res.status(200).json({result: 'OK'});
}

// const params = {
//   email: "dummy@example.com",
//   fields: {
//     name: "Dummy",
//     last_name: "Testerson",
//     company: "MailerLite",
//     country: "Best country",
//     city: "Best city",
//     phone: "37060677606",
//     state: "Best state",
//     z_i_p: "99999"
//   },
//   groups: ["4243829086487936"],
//   status: "active", // possible statuses: active, unsubscribed, unconfirmed, bounced or junk.
//   subscribed_at: "2021-08-31 14:22:08",
//   ip_address: null,
//   opted_in_at: null, // yyyy-MM-dd HH:mm:ss
//   optin_ip: null,
//   unsubscribed_at: null // yyyy-MM-dd HH:mm:ss
// };

// mailerlite.subscribers.createOrUpdate(params)
//   .then(response => {
//     console.log(response.data);
//   })
//   .catch(error => {
//     if (error.response) console.log(error.response.data);
//   });
import MailerLite from '@mailerlite/mailerlite-nodejs';
import { groups } from './constants'

const mailerlite = new MailerLite({
  api_key: process.env.MAILER_LITE_API_KEY
});

export default async function handler(req, res) {
  const { email, name } = req.body;
  const params = {
    email,
    fields: { name },
    groups: [groups.HUNGARIAN],
  }
  mailerlite.subscribers.createOrUpdate(params).then(response => {
    if(response.status === 200) {
      res.status(200).json({ message: 'Subscriber already exists.' });
    } else if (response.status === 201) {
      res.status(201).json(response.data);
    }
  }).catch(error => {
    console.error(error);
    res.status(400).json(error.response.data);
  })
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
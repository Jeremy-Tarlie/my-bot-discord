// api/send.js

import { Resend } from 'resend';

const resend = new Resend("re_cqe7HrdN_69m9n6rX2LBDpyb4cv5yV7X9");

(async function () {
  const { data, error } = await resend.emails.send({
    from: 'contact@tarlie.fr',
    to: ['discord@tarlie.fr'],
    subject: 'Hello World',
    html: '<strong>It works!</strong>',
  });

  if (error) {
    return console.error({ error });
  }

  console.log({ data });
})();

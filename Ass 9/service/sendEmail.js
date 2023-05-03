import nodeoutlook from 'nodejs-nodemailer-outlook'

export function sendToEmail(dest,message){
  
nodeoutlook.sendEmail({
  auth: {
    user:process.env.sender_Email,
    pass:process.env.sender_Password
  },
  from:process.env.sender_Email,
  to: dest,
  subject: 'Hey you, awesome!',
  html: message,

  onError: (e) => console.log(e),
  onSuccess: (i) => console.log(i)
});
}
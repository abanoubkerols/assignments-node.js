import nodeoutlook from 'nodejs-nodemailer-outlook'

export function sendToEmail(dest,message){
  
nodeoutlook.sendEmail({
  auth: {
    user: "abanoubkerols@outlook.com",
    pass: "abanoub91"
  },
  from: 'abanoubkerols@outlook.com',
  to: dest,
  subject: 'Hey you, awesome!',
  html: message,

  onError: (e) => console.log(e),
  onSuccess: (i) => console.log(i)
});
}
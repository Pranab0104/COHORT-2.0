const users = [
  "sonu@gmail.com",
  "bheem@gmail.com",
  "kalia@gmail.com",
  "karn@gmail.com",
];

function sendEmail(email) {
  return new Promise((resolve, reject) => {
    let time = Math.floor(Math.random() * 6 + 1);

    setTimeout(() => {
      let probability = Math.floor(Math.random() * 10);
      if (probability <= 5) resolve("Email has been sent sucessfully");
      else reject("Email not sent...");
    }, time * 1000);
  });
}

sendEmail("pranav@gmail.com")
.then((mess)=>{
    console.log(mess);
})
.catch((err)=>{
    console.log(err);
});
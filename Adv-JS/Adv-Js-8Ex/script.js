function gitPeJao(username, cb) {
  setTimeout(function () {
    cb({ id: 1, username: "Pranav", age: 21 });
  }, 3000);
}

gitPeJao("Pranav", function (data) {
  console.log(data);
});

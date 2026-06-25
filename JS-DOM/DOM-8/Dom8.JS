let box = document.querySelector("#box");
let img = document.querySelector("#box img");
let h2 = document.querySelector("#box h2 span");
let body = document.body;

img.addEventListener("mouseenter", function () {
  h2.innerHTML =
    "उद्यमेन हि सिध्यन्ति कार्याणि न मनोरथैः| न हि सुप्तस्य सिंहस्य प्रविशन्ति मुखे मृगाः||";
  h2.style.color = "white";
  body.style.backgroundColor = "white";
  h2.style.textDecoration = "underline";
  // console.log('hello');
});

img.addEventListener("mouseleave", function () {
  h2.innerHTML =
    "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन| मा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि||";
  h2.style.color = "crimson";
  body.style.backgroundColor = "black";
  h2.style.textDecoration = "underline";
  // console.log('hello');
});

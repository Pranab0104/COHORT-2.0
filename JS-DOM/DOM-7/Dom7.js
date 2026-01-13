// let arr = [
//   {
//     user: "Pranav",
//     age: 21,
//     city: "Chandrapur",
//   },
//   {
//     user: "Harsh",
//     age: 32,
//     city: "Bhopal",
//   },
//   {
//     user: "Sarthak",
//     age: 28,
//     city: "Dewas",
//   },
//   {
//     user: "Ankur",
//     age: 30,
//     city: "Ujjain",
//   },
//   {
//     user: "Satwik",
//     age: 28,
//     city: "Itarsi",
//   },
// ];

// // console.log(arr[2].user);
// // let arr = [10,20,30,40,50,60,70,80,90,100]

// let sum = 0;

// arr.forEach(function (elem) {
//   sum = sum + elem.age;
// });
// console.log(Math.fl(sum/arr.length));



const people = [
  {
    fullName: "Pranab Mandal",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
    profession: "Web Developer",
    tags: ["JavaScript", "Frontend", "React"],
    description:
      "A passionate web developer who loves building modern, responsive UI and smooth user experiences."
  },
  {
    fullName: "Harsh Sharma",
    image: "https://images.unsplash.com/photo-1524502397800-2eeaad7c3fe5",
    profession: "Graphic Designer",
    tags: ["Photoshop", "Branding", "Illustration"],
    description:
      "Creative designer skilled in turning ideas into stunning visuals and strong brand identities."
  },
  {
    fullName: "Sarthak Sharma",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df",
    profession: "Content Writer",
    tags: ["Writing", "SEO", "Storytelling"],
    description:
      "A storyteller who crafts engaging, meaningful content that connects with readers and ranks well."
  },
  {
    fullName: "Ankur Prajapati",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c",
    profession: "Photographer",
    tags: ["Portrait", "Camera", "Editing"],
    description:
      "A professional photographer with a deep love for capturing real moments and natural light."
  },
  {
    fullName: "Satwik Raj",
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
    profession: "UI/UX Designer",
    tags: ["Figma", "Wireframing", "User Research"],
    description:
      "Focused on building user-friendly interfaces with clean design and meaningful interactions."
  }
];


// console.log(people.profession);

let sum = ''

people.forEach(function(elem){
  sum = sum + `<div class="card">
        <img
          src="${elem.image}"
          alt=""
        />
        <h3>${elem.fullName}</h3>
        <h4>${elem.profession}</h4>
        <p>${elem.description}</p>
      </div>`
})

console.log(sum);


let main = document.querySelector('main')
main.innerHTML = sum
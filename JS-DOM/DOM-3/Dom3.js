let arr = [
  {
    team: "CSK",
    primary: "Yellow",
    secondary: "Blue",
    Trophy: 5,
    Fullname: "Chennai Super Kings",
    Owner: "N.Srinivasan",
    Image:
      "https://i.pinimg.com/1200x/aa/70/3c/aa703c367bb628bf2fdc3c4720082c8b.jpg",
  },

  {
    team: "MI",
    primary: "Blue",
    secondary: "Gold",
    Trophy: 5,
    Fullname: "Mumbai Indians",
    Owner: "M. Ambani",
    Image:
      "https://i.pinimg.com/1200x/02/c1/f0/02c1f0e8db71fb5d3e38357dcb1c608c.jpg",
  },

  {
    team: "RCB",
    primary: "Red",
    secondary: "black",
    Trophy: 1,
    Fullname: "royal Challengers Bangalore",
    Owner: "United Spirits Limited (USL)",
    Image:
      "https://i.pinimg.com/736x/30/1a/f2/301af2f3542de9c0740b637c992f1e6d.jpg",
  },

  {
    team: "KKR",
    primary: "Purple",
    secondary: "Gold",
    Trophy: 3,
    Fullname: "Kolkata Knight Riders",
    Owner: "Shah Rukh Khan, Juhi Chawla, Jay Mehta",
    Image:
      "https://i.pinimg.com/736x/8c/b6/24/8cb6248235daaf03f585e0b80e1c9257.jpg",
  },

  {
    team: "SRH",
    primary: "Orange",
    secondary: "Black",
    Trophy: 1,
    Fullname: "Sunrisers Hyderabad ",
    Owner: "Kaviya Maran",
    Image:
      "https://i.pinimg.com/736x/49/b4/7d/49b47d1025ed334d4f433df48d716fab.jpg",
  },

  {
    team: "DC",
    primary: "Darkblue",
    secondary: "red",
    Trophy: 0,
    Fullname: "Delhi Capitals",
    Owner: "GMGR Groups",
    Image: "https://imgs.search.brave.com/UyxurseImjkfmTRQYN2Sbcot6iTLbQTCS9TgsIxBuyM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/ZGVsaGljYXBpdGFs/cy5pbi9zdGF0aWMt/YXNzZXRzL3dhZi1p/bWFnZXMvNDAvNGMv/ZmEvNC0zLzl2ODBY/eGs2VnEuanBnP3Y9/MS4xMSZ3PTYwMA",
  },

  {
    team: "RR",
    primary: "pink",
    secondary: "Royalblue",
    Trophy: 1,
    Fullname: "Rajasthan Royals",
    Owner: "Manoj Badale",
    Image:
      "https://imgs.search.brave.com/8zy9h4wztCtL0Nz_3F1MZJzJuBY0nL7_Z9wcvGe3714/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuZGVjY2FuaGVy/YWxkLmNvbS9kZWNj/YW5oZXJhbGQvaW1w/b3J0L3NpdGVzL2Ro/L2ZpbGVzL2dhbGxl/cnlfaW1hZ2VzLzIw/MjMvMDUvMzAvSVBM/JTIwV2lubmVycyUy/MCgzKS5qcGc_dz0x/MjAw",
  },

  {
    team: "LSG",
    primary: "Darkblue",
    secondary: "orange",
    Trophy: 0,
    Fullname: "Lucknow Super Giants",
    Owner: "Sanjiv Goenka",
    Image: "https://i.pinimg.com/1200x/e3/74/fd/e374fd5844b041401f7a3246c76698d2.jpg",
  },

  {
    team: "DEC",
    primary: "darkblue",
    secondary: "white",
    Trophy: 1,
    Fullname: "Deccan Chargers",
    Owner: "Gayatri Reddy",
    Image:"https://imgs.search.brave.com/Iy22VOo02GB3_EseI8PV6utgCs-WsYB2AcXs9Wf1hFc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcx/LmhzY2ljZG4uY29t/L2ltYWdlL3VwbG9h/ZC9mX2F1dG8sdF9k/c193aWRlX3dfMTI4/MCxxXzcwL2xzY2kv/ZGIvUElDVFVSRVMv/Q01TLzMyMzMwMC8z/MjMzMzkuNi5qcGc"
  },

  {
    team: "GT",
    primary: "lightblue",
    secondary: "darkyellow",
    Trophy: 1,
    Fullname: "Gujarat Titans",
    Owner: "Torrent Group",
    Image: "https://imgs.search.brave.com/elkW8vvFyvUI8fVik1-i6rpDU-ahAJscJAu68x0P6Gw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2I4L2Yx/LzcxL2I4ZjE3MTRk/ZjJkMzZkYTI4OTFi/YWE5NWJlYTRlM2Iz/LmpwZw"
  },

  {
    team: "KXIPB",
    primary: "red",
    secondary: "white",
    Trophy: 0,
    Fullname: "Kings XI Punjab",
    Owner: "Preity Zinta, Karan Paul",
    Image:"https://i.pinimg.com/1200x/4b/eb/17/4beb1785f05f5fc430ff1b37a0420898.jpg"
  },
];

let btn = document.querySelector("button");
let h = document.querySelector("h2");
let main = document.querySelector("main");

btn.addEventListener("click", function () {
  // console.log('clicked')
  let a = Math.floor(Math.random() * arr.length);
  h.innerHTML = "";
  h.innerHTML += "Team: " + arr[a].team + "<br>";
  h.innerHTML += "Trophy: " + arr[a].Trophy + "<br>";
  h.innerHTML += "Fullname: " + arr[a].Fullname + "<br>";
  h.innerHTML += "Owner: " + arr[a].Owner + "<br>";
  h.style.backgroundColor = arr[a].secondary;
  main.style.backgroundColor = arr[a].primary;

  if (arr[a].Image) {
    h.style.backgroundImage = `url(${arr[a].Image})`;
    h.style.backgroundSize = "cover";
    h.style.backgroundPosition = "center";
    h.style.backgroundRepeat = "no-repeat";
  }
});
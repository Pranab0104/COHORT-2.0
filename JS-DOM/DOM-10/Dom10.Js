const reelsData = [
  {
    ismuted: true,
    username: "travel.mood",
    likecount: 3421,
    isliked: true,
    commentcount: 210,
    caption: "Chasing sunsets, not deadlines 🌅✈️",
    sharecount: 180,
    video: "./assets/1.mp4",
    userprofile: "https://randomuser.me/api/portraits/women/12.jpg",
    isFollowed: true,
  },
  {
    ismuted: true,
    username: "foodie.diaries",
    likecount: 2890,
    isliked: false,
    commentcount: 176,
    caption: "Good food = good mood 🍕❤️",
    sharecount: 132,
    video: "./assets/2.mp4",
    userprofile: "https://randomuser.me/api/portraits/men/22.jpg",
    isFollowed: false,
  },
  {
    ismuted: true,
    username: "fitness.flow",
    likecount: 4125,
    isliked: true,
    commentcount: 298,
    caption: "No excuses, just results 💪🔥",
    sharecount: 245,
    video: "./assets/3.mp4",
    userprofile: "https://randomuser.me/api/portraits/women/33.jpg",
    isFollowed: true,
  },
  {
    ismuted: true,
    username: "street.vibes",
    likecount: 1987,
    isliked: false,
    commentcount: 143,
    caption: "Street lights & late night walks 🌃✨",
    sharecount: 90,
    video: "./assets/4.mp4",
    userprofile: "https://randomuser.me/api/portraits/men/41.jpg",
    isFollowed: false,
  },
  {
    ismuted: true,
    username: "nature.lovers",
    likecount: 3650,
    isliked: true,
    commentcount: 254,
    caption: "Peace feels like this 🌿🍃",
    sharecount: 201,
    video: "./assets/5.mp4",
    userprofile: "https://randomuser.me/api/portraits/women/55.jpg",
    isFollowed: true,
  },
  {
    ismuted: true,
    username: "pet.stories",
    likecount: 5278,
    isliked: true,
    commentcount: 389,
    caption: "He didn’t choose me, I chose him 🐶❤️",
    sharecount: 330,
    video: "./assets/6.mp4",
    userprofile: "https://randomuser.me/api/portraits/men/63.jpg",
    isFollowed: true,
  },
  {
    ismuted: true,
    username: "city.life",
    likecount: 1789,
    isliked: false,
    commentcount: 122,
    caption: "Lost in the city, found myself 🏙️💭",
    sharecount: 76,
    video: "./assets/7.mp4",
    userprofile: "https://randomuser.me/api/portraits/men/84.jpg",
    isFollowed: true,
  },
  {
    ismuted: true,
    username: "fashion.daily",
    likecount: 2460,
    isliked: false,
    commentcount: 165,
    caption: "Wear confidence like an outfit 👗✨",
    sharecount: 118,
    video: "./assets/8.mp4",
    userprofile: "https://randomuser.me/api/portraits/women/71.jpg",
    isFollowed: false,
  },
  {
    ismuted: true,
    username: "music.feels",
    likecount: 3942,
    isliked: true,
    commentcount: 301,
    caption: "One song can change everything 🎶💫",
    sharecount: 220,
    video: "./assets/9.mp4",
    userprofile: "https://randomuser.me/api/portraits/women/92.jpg",
    isFollowed: true,
  },
  {
    ismuted: true,
    username: "positive.vibes",
    likecount: 4600,
    isliked: true,
    commentcount: 355,
    caption: "Slow down, breathe, trust life 🌈✨",
    sharecount: 290,
    video: "./assets/10.mp4",
    userprofile: "https://randomuser.me/api/portraits/men/99.jpg",
    isFollowed: false,
  },
];

let allReels = document.querySelector(".all-reels");
let dil = document.querySelector(".Dil");

function addData() {
  let sum = "";
  reelsData.forEach(function (elem, idx) {
    sum =
      sum +
      `<div class="reel">
        
            <video autoplay loop ${elem.ismuted ? "muted" : ""} src="${
        elem.video
      }">
      
      </video>

      <i class="ri-heart-3-fill Dil"></i>

            <div class="mut" id=${idx}>
            
        ${
          elem.ismuted
            ? '<i class="ri-volume-mute-line"></i>'
            : '<i class="ri-volume-up-line"></i>'
        }
      </div>

            <div class="bottom">
              <div class="user">
                <img
                  src="${elem.userprofile}"
                  alt=""
                />
                <h4>${elem.username}</h4>
                <button id=${idx} class='follow'>${
        elem.isFollowed ? "Following" : "Follow"
      }</button>
              </div>
              <h3>${elem.caption}</h3>
            </div>

            <div class="right">
              <div id=${idx} class="like">
                <h4 class="like-ic icon">${
                  elem.isliked
                    ? '<i class="love ri-heart-fill"></i>'
                    : '<i class=" ri-heart-line"></i>'
                }</h4>
                <h6>${elem.likecount}</h6>
              </div>

              <div class="comm">
                <h4 class="comm-ic icon"><i class="ri-chat-3-line"></i></h4>
                <h6>${elem.commentcount}</h6>
              </div>

              <div class="shr">
                <h4 class="shr-ic icon"><i class="ri-telegram-2-line"></i></h4>
                <h6>${elem.sharecount}</h6>
              </div>

              <div class="sav">
                <h4 class="sav-ic icon"><i class="ri-bookmark-line"></i></h4>
              </div>

              <div class="rep">
                <h4 class="rep-ic icon"><i class="ri-refresh-line"></i></h4>
                <h6>200</h6>
              </div>

              <div class="dot">
                <h4 class="dot-ic icon"><i class="ri-more-2-fill"></i></h4>
                <!-- <h6>200</h6> -->
              </div>
            </div>
          </div>`;
  });

  allReels.innerHTML = sum;
}

addData();

allReels.addEventListener("click", function (dets) {
  //  if(!reelsData[dets.target.id].isliked){
  //    reelsData[dets.target.id].likecount++;
  //   reelsData[dets.target.id].isliked = true;
  //  }
  //  else{
  //   reelsData[dets.target.id].likecount--;
  //   reelsData[dets.target.id].isliked = false;
  //  }

  // addData();

  //for like
  if (dets.target.className == "like") {
    if (!reelsData[dets.target.id].isliked) {
      reelsData[dets.target.id].likecount++;
      reelsData[dets.target.id].isliked = true;
    } else {
      reelsData[dets.target.id].likecount--;
      reelsData[dets.target.id].isliked = false;
    }
    addData();
  }

  //for follow
  if (dets.target.className == "follow") {
    if (!reelsData[dets.target.id].isFollowed) {
      reelsData[dets.target.id].isFollowed = true;
    } else {
      reelsData[dets.target.id].isFollowed = false;
    }
    addData();
  }

  //for mute
  if (dets.target.closest(".mut")) {
    const mutDiv = dets.target.closest(".mut");
    const id = mutDiv.id;

    reelsData[id].ismuted = !reelsData[id].ismuted;
    addData();
  }
});

allReels.addEventListener("dblclick", function (dets) {
  const reel = dets.target.closest(".reel");
  if (!reel) return;

  const dil = reel.querySelector(".Dil");
  const like = reel.querySelector(".like");
  const id = like.id;

  dil.style.opacity = 1;
  dil.style.transform = "translate(-50%, -50%) scale(1.5) rotate(0deg)";

  setTimeout(() => {
    dil.style.transform = "translate(-50%, -350%) scale(1.5) rotate(-50deg)";
  }, 800);

  setTimeout(() => {
    dil.style.transform = "translate(-50%, -450%) scale(1.5) rotate(80deg)";
  }, 1000);

  setTimeout(() => {
    dil.style.opacity = 0;
  }, 1200);

  setTimeout(() => {
    dil.style.transform = "translate(-50%, -50%) scale(0) rotate(-50deg)";
  }, 1400);

  if (!reelsData[id].isliked) {
    reelsData[id].isliked = true;
    reelsData[id].likecount++;
    addData();
  }
});

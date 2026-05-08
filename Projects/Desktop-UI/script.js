function updateClock() {
  const now = new Date();

  const time = now.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });

  const date = now.toLocaleDateString();

  document.getElementById("time").textContent = time;
  document.getElementById("date").textContent = date;
}

setInterval(updateClock, 1000);

function desktoprefresh() {
  const desktopArea = document.getElementById("desktop-area");
  const contextMenu = document.getElementById("contextMenu");

  // RIGHT CLICK
  desktopArea.addEventListener("contextmenu", function (e) {
    e.preventDefault();

    // Pehle show karo taaki width mil sake
    contextMenu.style.display = "block";

    const menuWidth = contextMenu.offsetWidth;
    const menuHeight = contextMenu.offsetHeight;

    let posX = e.pageX;
    let posY = e.pageY;

    // Boundary checks
    if (posX + menuWidth > window.innerWidth) {
      posX = window.innerWidth - menuWidth;
    }

    if (posY + menuHeight > window.innerHeight) {
      posY = window.innerHeight - menuHeight;
    }

    contextMenu.style.left = posX + "px";
    contextMenu.style.top = posY + "px";
  });

  // Hide when clicking the outside anywhere
  document.addEventListener("click", function (e) {
    if (!contextMenu.contains(e.target)) {
      contextMenu.style.display = "none";
    }
  });

  // Menu click to perform actions
  contextMenu.addEventListener("click", function (e) {
    const action = e.target.getAttribute("data-action");

    if (!action) return;

    switch (action) {
      case "refresh":
        location.reload();
        break;

      case "newFolder":
        alert("New Folder Created");
        break;

      case "personalize":
        alert("Open personalization settings");
        break;
    }

    contextMenu.style.display = "none";
  });
}

function doubleClick() {
  const icons = document.querySelectorAll(".icon");

  icons.forEach((icon) => {
    icon.addEventListener("dblclick", function () {
      const url = this.getAttribute("data-url");

      if (url) {
        window.open(url, "_blank");
      }
    });
  });
}

function doubleClick() {
  const icons = document.querySelectorAll(".task-icon");

  icons.forEach((icon) => {
    icon.addEventListener("dblclick", function () {
      const url = this.getAttribute("data-url");

      if (url) {
        window.open(url, "_blank");
      }
    });
  });
}

updateClock();
desktoprefresh();
doubleClick();

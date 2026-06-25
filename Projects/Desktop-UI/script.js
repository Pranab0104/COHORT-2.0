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
    const action = e.target.dataset.action;

    if (!action) return;

    switch (action) {
      case "view":
        alert("View the system");
        break;

      case "sortBy":
        alert("Sort the apps as per choice");
        break;

      case "refresh":
        location.reload();
        break;

      case "undoDelete":
        alert("Undo delete action");
        break;

      case "displaySettings":
        alert("Set display appearance");
        break;

      case "openTerminal":
        alert("Open the Terminal");
        break;

      case "personalize":
        alert("Open personalization settings");
        break;

      case "showMore":
        alert("Showing more options");
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

function click() {
  const icons = document.querySelectorAll(".task-icon");

  icons.forEach((icon) => {
    icon.addEventListener("click", function () {
      const url = this.getAttribute("data-url");

      if (url) {
        window.open(url, "_blank");
      }
    });
  });
}

function someApp() {
  const icons = document.querySelectorAll(".icon");

  icons.forEach((icon) => {
    icon.addEventListener("dblclick", () => {
      const windowId = icon.getAttribute("data-window");
      const windowElement = document.getElementById(windowId);

      if (windowElement) {
        windowElement.style.display = "block";
      }
    });
  });

  const closeBtn = document.querySelector(".close-btn");

  closeBtn.addEventListener("click", () => {
    document.getElementById("thisPCWindow").style.display = "none";
  });
}

updateClock();
desktoprefresh();
doubleClick();
click();
someApp();

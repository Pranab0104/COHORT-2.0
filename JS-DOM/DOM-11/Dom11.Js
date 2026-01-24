addEventListener("mousemove", (e) => {
  //   console.log(e.clientX, e.clientY);

  document.body.style.setProperty("--x", e.clientX + "px");
  document.body.style.setProperty("--y", e.clientY + "px");
});


//matrix effect for next page.
const para = document.querySelector("p")
const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
const text = para.innerText

let itertion = 0;

para.addEventListener("mouseenter", () => {


    setInterval(() => {

        const str = text.split('').map((char, index) => {
            if(index<itertion){
                return char
            }

            return characters.split("")[ Math.floor(Math.random() * 52) ]
        }).join("")

        para.innerText = str

        itertion += 0.2

        // console.log(itertion);
        

    }, 30)


})

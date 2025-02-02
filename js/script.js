// ------------------ navbar start ------------------
let nav = document.getElementById("navbar");
let flag = 0;

function blurnavbar() {

   if (pageYOffset < 100) {
      nav.style.backgroundColor = "rgba(230, 230, 230, 0.102)";
      nav.style.transition = "all .5s 0s linear";
      top.style.display = "none";
   } else {
      nav.style.backgroundColor = "rgba(230, 230, 230, 0.97)";
      nav.style.transition = "all .5s 0s linear";
      top.style.display = "block";
   }
}
nav.addEventListener("click", () => {
   if (flag == 0) {
      nav.style.backgroundColor = "rgba(230, 230, 230, 0.97)";
      nav.style.transition = "all .5s 0s linear";
      flag = 1;
   } else {
      nav.style.backgroundColor = "rgba(230, 230, 230, 0.102)";
      nav.style.transition = "all .5s 0s linear";
      flag = 0;
   }
});
// ------------------ navbar end ------------------



// ------------------ typewriter start ------------------
let name = document.getElementById("typedtext");
let text = "I am Java Fullstack Developer";
// console.log(typeof text);
// let len = text.length;
// console.log(len);

let i = 0;

setInterval(typeHere, 250);

function typeHere() {
   if (i == text.length) {
      name.innerHTML = "";
      i = 0;
   }
   name.innerHTML += `${text[i]}`;
   // console.log(i);
   i++;

}
// ------------------ typewriter end ------------------



// ------------------ navs-tabs start for timeline ------------------
let tab1 = document.getElementById("v-pills-env-tab");
let tab2 = document.getElementById("v-pills-degree-tab");
let tab3 = document.getElementById("v-pills-diploma-tab");
let tab4 = document.getElementById("v-pills-ssc-tab");

tab1.style.animation = "changeLinear 5s linear 0s infinite alternate";
tab1.style.border = "none";
tab1.addEventListener("click", function () {
   tab1.style.animation = "changeLinear 2.5s linear 0s infinite alternate";
   tab1.style.border = "none";
   tab2.style.animation = "";
   tab3.style.animation = "";
   tab2.style.border = "1.3px solid black";
   tab3.style.border = "1.3px solid black";
   tab4.style.border = "";
   tab4.style.animation = "";
});


tab2.addEventListener("click", function () {
   tab1.style.animation = "";
   tab1.style.border = "1.3px solid black";
   tab3.style.border = "1.3px solid black";
   tab2.style.border = "none";
   tab2.style.animation = "changeLinear 2.5s linear 0s infinite alternate";
   tab3.style.animation = "";
   tab4.style.border = "";
   tab4.style.animation = "";
});


tab3.addEventListener("click", function () {
   tab1.style.animation = "";
   tab3.style.border = "none";
   tab1.style.border = "1.3px solid black";
   tab2.style.border = "1.3px solid black";
   tab2.style.animation = "";
   tab3.style.animation = "changeLinear 2.5s linear 0s infinite alternate";

   tab4.style.border = "";
   tab4.style.animation = "";
});

tab4.addEventListener("click", function () {
   tab1.style.animation = "";
   tab2.style.animation = "";
   tab3.style.animation = "";

   tab1.style.border = "1.3px solid black";
   tab2.style.border = "1.3px solid black";
   tab3.style.border = "1.3px solid black";

   tab4.style.border = "none";
   tab4.style.animation = "changeLinear 2.5s linear 0s infinite alternate";
});
// ------------------ navs-tabs end for timeline ------------------



// ##################################### change theme start #####################################

let modeFlag = 0;

const changeTheme = () => {


   let mode = document.getElementById("mode1");
   document.body.classList.toggle("dark-theme");
   document.body.style.transition = "all .4s 0s linear";

   if (modeFlag === 0) {
      mode.innerHTML = `<i class="fa-regular fa-sun"></i>`;
      modeFlag = 1;
      mode.style.textShadow = "0px 0px 3px #FF8C00";

      document.querySelector("#navLogo h2 span").style.color = "#FF8C00";
      document.querySelector("#navLogo h2").style.setProperty("--textshad", "#FF8C00")
      // document.querySelector("#navLogo h2").style.textShadow = "2px 2px 4px #FF8C00";


      document.querySelector("#backImage").style.background = "linear-gradient(120deg, #FF8C00, #FF8C00)";


      // ------------------ skills start ------------------
      for (let i = 0; i < document.getElementsByClassName("skillCard").length; i++) {
         document.getElementsByClassName("skillCard")[i].addEventListener("mouseover", () => {
            document.getElementsByClassName("skillCard")[i].style.border = "none";
            document.getElementsByClassName("skillCard")[i].style.boxShadow = "0px 0px 20px #FF8C00";
            document.getElementsByClassName("skillCard")[i].style.transition = "all .5s 0s linear";
         });
         document.getElementsByClassName("skillCard")[i].addEventListener("mouseout", () => {
            document.getElementsByClassName("skillCard")[i].style.border = "1.24px solid #FF8C00";
            document.getElementsByClassName("skillCard")[i].style.boxShadow = "none";
            document.getElementsByClassName("skillCard")[i].style.transition = "all .5s 0s linear";
         });
         document.getElementsByClassName("skillCard")[i].style.border = "1.24px solid #FF8C00";
      }
      // ------------------ skills end ------------------



      // ------------------ top start ------------------
      document.querySelector("#top a").style.border = "2px solid #FF8C00";
      document.querySelector("#top a").style.color = "#FF8C00";

      document.querySelector("#top a").addEventListener("mouseover", () => {
         document.querySelector("#top a").style.backgroundColor = "#FF8C00";
         document.querySelector("#top a").style.color = "#fff";
      });
      document.querySelector("#top a").addEventListener("mouseout", () => {
         document.querySelector("#top a").style.border = "2px solid #FF8C00";
         document.querySelector("#top a").style.color = "#FF8C00";
         document.querySelector("#top a").style.backgroundColor = "";
      });
      // ------------------ top end ------------------



      // ------------------ social-links start ------------------
      for (let i = 0; i < document.querySelectorAll(".social-links a").length; i++) {
         document.querySelectorAll(".social-links a")[i].style.border = "2px solid #FF8C00";
         document.querySelectorAll(".social-links a")[i].style.color = "#FF8C00";
      }

      for (let i = 0; i < document.querySelectorAll(".social-links a").length; i++) {
         document.querySelectorAll(".social-links a")[i].addEventListener("mouseover", () => {
            document.querySelectorAll(".social-links a")[i].style.backgroundColor = "#FF8C00";
            document.querySelectorAll(".social-links a")[i].style.color = "#fff";
         });
         document.querySelectorAll(".social-links a")[i].addEventListener("mouseout", () => {
            document.querySelectorAll(".social-links a")[i].style.border = "2px solid #FF8C00";
            document.querySelectorAll(".social-links a")[i].style.color = "#FF8C00";
            document.querySelectorAll(".social-links a")[i].style.backgroundColor = "";
         });
      }
      // ------------------ social-links end ------------------



      // ------------------ nav-link start ------------------
      let underlineForMenu = document.querySelectorAll(".nav-item .nav-link");
      let underline = document.getElementsByClassName("underline");
      for (let i = 0; i < underlineForMenu.length; i++) {
         underline[i].style.setProperty("--underlineColor", "#FF8C00");
         underlineForMenu[i].addEventListener("mouseover", () => {
            underlineForMenu[i].style.color = "#FF8C00";
            // after_css = window.getComputedStyle(underline[i], "::after");
         });
         underlineForMenu[i].addEventListener("mouseout", () => {
            underlineForMenu[i].style.color = "black";
         });
      }
      // ------------------ nav-link end ------------------



      // footer start 
      document.querySelector("#footer a").style.color = "#FF8C00";

      document.querySelector("#footer a").addEventListener("mouseover", () => {
         document.querySelector("#footer a").style.textShadow = "0px 0px 5px #FF8C00";
      });
      document.querySelector("#footer a").addEventListener("mouseout", () => {
         document.querySelector("#footer a").style.textShadow = "";
      });

      // footer end

   }

   // ------------------------------------------------------
   else {

      mode.innerHTML = `<i class="fa-regular fa-moon"></i>`;
      modeFlag = 0;
      mode.style.textShadow = "0px 0px 3px black";

      document.querySelector("#navLogo h2 span").style.color = "#0563BB";
      // document.querySelector("#navLogo h2").style.textShadow = "";
      document.querySelector("#navLogo h2").style.setProperty("--textshad", "#0563bb99")

      document.querySelector("#backImage").style.background = "linear-gradient(330deg, #6464ff74 40%, #0563bb99 70%)";

      // ------------------ skills end ------------------
      for (let i = 0; i < document.getElementsByClassName("skillCard").length; i++) {

         document.getElementsByClassName("skillCard")[i].addEventListener("mouseover", () => {
            document.getElementsByClassName("skillCard")[i].style.border = "none";
            document.getElementsByClassName("skillCard")[i].style.boxShadow = "inset 0px 0px 20px rgba(0, 0, 0, 0.83)";
            document.getElementsByClassName("skillCard")[i].style.transition = "all .5s 0s linear";
         });
         document.getElementsByClassName("skillCard")[i].addEventListener("mouseout", () => {
            document.getElementsByClassName("skillCard")[i].style.border = "1.24px solid black";
            document.getElementsByClassName("skillCard")[i].style.boxShadow = "none";
            document.getElementsByClassName("skillCard")[i].style.transition = "all .5s 0s linear";
         });
         document.getElementsByClassName("skillCard")[i].style.border = "1.24px solid black";
      }
      // ------------------ skills start ------------------



      // ------------------ top start ------------------
      document.querySelector("#top a").style.border = "2px solid #0563BB";
      document.querySelector("#top a").style.color = "#0563BB";

      document.querySelector("#top a").addEventListener("mouseover", () => {
         document.querySelector("#top a").style.backgroundColor = "#0563BB";
         document.querySelector("#top a").style.color = "#fff";
      });
      document.querySelector("#top a").addEventListener("mouseout", () => {
         document.querySelector("#top a").style.border = "2px solid #0563BB";
         document.querySelector("#top a").style.color = "#0563BB";
         document.querySelector("#top a").style.backgroundColor = "";
      });
      // ------------------ top end ------------------



      // ------------------ social-links start ------------------
      for (let i = 0; i < document.querySelectorAll(".social-links a").length; i++) {
         document.querySelectorAll(".social-links a")[i].style.border = "2px solid #0563bbd2";
         document.querySelectorAll(".social-links a")[i].style.color = "#0563bbd2";
      }

      for (let i = 0; i < document.querySelectorAll(".social-links a").length; i++) {
         document.querySelectorAll(".social-links a")[i].addEventListener("mouseover", () => {
            document.querySelectorAll(".social-links a")[i].style.backgroundColor = "#0563bbd2";
            document.querySelectorAll(".social-links a")[i].style.color = "#fff";
         });
         document.querySelectorAll(".social-links a")[i].addEventListener("mouseout", () => {
            document.querySelectorAll(".social-links a")[i].style.border = "2px solid #0563bbd2";
            document.querySelectorAll(".social-links a")[i].style.color = "#0563bbd2";
            document.querySelectorAll(".social-links a")[i].style.backgroundColor = "";
         });
      }
      // ------------------ social-links end ------------------



      // ------------------ nav-link start ------------------

      let underlineForMenu = document.querySelectorAll(".nav-item .nav-link");
      let underline = document.getElementsByClassName("underline");
      for (let i = 0; i < underlineForMenu.length; i++) {
         underline[i].style.setProperty("--underlineColor", "#0563BB");
         underlineForMenu[i].addEventListener("mouseover", () => {
            underlineForMenu[i].style.color = "#0563BB";
         });
         underlineForMenu[i].addEventListener("mouseout", () => {
            underlineForMenu[i].style.color = "black";
         });
      }
      // ------------------ nav-link end ------------------



      // footer start 
      document.querySelector("#footer a").style.color = "#0563bbd2";
      document.querySelector("#footer a").addEventListener("mouseover", () => {
         document.querySelector("#footer a").style.textShadow = "0px 0px 5px #3c41db";
      });
      document.querySelector("#footer a").addEventListener("mouseout", () => {
         document.querySelector("#footer a").style.textShadow = "";
      });
      // footer end

   }

}

// ##################################### change theme start #####################################

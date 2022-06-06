const leilarossard = document.querySelector("#leilarossard");
const canape = document.querySelectorAll(".canapediv");
const table = document.querySelector("#table");
const coussins = document.querySelector("#coussins");
const salon1 = document.querySelector("#salon1");

window.onload = function() {
  var element = document.querySelectorAll("img");
Intense( element );
}

gsap.registerPlugin(ScrollTrigger);


gsap.from(".container1", {
  duration: 0.5,
  opacity: 0,
  scrollTrigger: ".container1",
});

gsap.from(".container1bis", {
  duration: 0.5,
  opacity: 0,
  scrollTrigger: ".container1bis",
});

gsap.from(".neutraltitle", {
  duration: 0.5,
  delay: 0.5,
  opacity: 0,
  scrollTrigger: ".neutraltitle",
});

gsap.from(".colorstitle", {
  duration: 0.5,
  delay: 0.5,
  opacity: 0,
  scrollTrigger: ".colorstitle",
});

gsap.from("#photodesign", {
  duration: 0.5,
  opacity: 0,
  scrollTrigger: "#photodesign",
});

gsap.from(".containerdesignword", {
  duration: 0.5,
  opacity: 0,
  scrollTrigger: ".containerdesignword",
});

gsap.from("#A1", {
  duration: 0.5,
  y: +50,
  opacity: 0,
  scrollTrigger: "#A1"
});
gsap.from("#A2", {
  duration: 0.5,
  y: +50,
  opacity: 0,
  scrollTrigger: "#A2"
});
gsap.from("#A3", {
  duration: 0.5,
  y: +50,
  opacity: 0,
  scrollTrigger: "#A3"
});
gsap.from("#A4", {
  duration: 0.5,
  y: +50,
  opacity: 0,
  scrollTrigger: "#A4"
});
gsap.from("#A5", {
  duration: 0.5,
  y: +50,
  opacity: 0,
  scrollTrigger: "#A5"
});
gsap.from("#A6", {
  duration: 0.5,
  y: +50,
  opacity: 0,
  scrollTrigger: "#A6"
});
gsap.from("#A7", {
  duration: 0.5,
  y: +50,
  opacity: 0,
  scrollTrigger: "#A7"
});
gsap.from("#A8", {
  duration: 0.5,
  y: +50,
  opacity: 0,
  scrollTrigger: "#A8"
});
gsap.from("#A9", {
  duration: 0.5,
  y: +50,
  opacity: 0,
  scrollTrigger: "#A9"
});

gsap.from("#insta1", {
  duration: 0.5,
  opacity: 0,
  scrollTrigger: "#insta1",
});
gsap.from("#insta2", {
  duration: 0.5,
  opacity: 0,
  scrollTrigger: "#insta2",
});
gsap.from("#insta3", {
  duration: 0.5,
  opacity: 0,
  scrollTrigger: "#insta3",
});
gsap.from("#insta4", {
  duration: 0.5,
  opacity: 0,
  scrollTrigger: "#insta4",
});
gsap.from("#insta5", {
  duration: 0.5,
  opacity: 0,
  scrollTrigger: "#insta5",
});
gsap.from("#insta6", {
  duration: 0.5,
  opacity: 0,
  scrollTrigger: "#insta6",
});

gsap.from("#lineprojets2", {
  duration: 1,
  width: 0,
  scrollTrigger: "#lineprojets2",
});

gsap.from("#lineprojets", {
  duration: 1,
  width: 0,
  scrollTrigger: "#lineprojets2",
});

gsap.from("#lineabout", {
  duration: 1,
  width: 0,
});

var paths = document.querySelectorAll("svg line"),
  i = 0;

paths.forEach(function (item, index) {
  i++;

  var pathLength = item.getTotalLength();
  speed = 2058;

  item.setAttribute("stroke-dasharray", pathLength);
  item.setAttribute("stroke-dashoffset", pathLength);

  if (index == 0) {
    item.innerHTML =
      "<animate id='a" +
      i +
      "' attributeName='stroke-dashoffset' begin='0s' dur='" +
      pathLength / speed +
      "'s to='0' fill='freeze' />";
  } else {
    item.innerHTML =
      "<animate id='a" +
      i +
      "' attributeName='stroke-dashoffset' begin='a" +
      (i - 1) +
      ".end' dur='" +
      pathLength / speed +
      "'s to='0' fill='freeze' />";
  }
});

const body = document.body;
const scrollUp = "scroll-up";
const scrollDown = "scroll-down";
let lastScroll = 0;

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;
  if (currentScroll <= 0) {
    body.classList.remove(scrollUp);
    return;
  }

  if (currentScroll > lastScroll && !body.classList.contains(scrollDown)) {
    body.classList.remove(scrollUp);
    body.classList.add(scrollDown);
  } else if (
    currentScroll < lastScroll &&
    body.classList.contains(scrollDown)
  ) {
    body.classList.remove(scrollDown);
    body.classList.add(scrollUp);
  }
  lastScroll = currentScroll;
});

function artyswitch() {
  document.querySelector(".textileword").style.opacity = "0";
  document.getElementById("photo11").style.opacity = "0";
  document.getElementById("photo12").style.opacity = "0";
  document.getElementById("rightarrow").style.opacity = "0";
  document.querySelector(".textphototextile").style.opacity = "0";

  document.querySelector(".containerarty").style.opacity = "1";
  document.querySelector(".containerarty").style.zIndex = "1";
}

function slowswitch() {
  document.querySelector(".containerarty").style.opacity = "0";
  document.querySelector(".containerarty").style.zIndex = "-1";

  document.querySelector(".containerslow").style.opacity = "1";
  document.querySelector(".containerslow").style.zIndex = "1";
}

function textileswitch() {
  document.querySelector(".containerslow").style.opacity = "0";
  document.querySelector(".containerslow").style.zIndex = "-1";

  document.querySelector(".textileword").style.opacity = "1";
  document.getElementById("photo11").style.opacity = "1";
  document.getElementById("photo12").style.opacity = "1";
  document.querySelector(".textphototextile").style.opacity = "1";
  document.getElementById("rightarrow").style.opacity = "1";
}

document.getElementById("rightarrowcolors1").onclick =
  function textileswitch2() {
    document.querySelector(".blockphotodesign").style.opacity = "0";

    document.querySelector(".containerdesignword").style.opacity = "0";
    document.getElementById("rightarrowcolors1").style.display = "none";

    document.querySelector(".containerslow2").style.opacity = "1";
    document.querySelector(".containerslow2").style.zIndex = "1";

    document.getElementById("rightarrowcolors3").style.display = "block";
  };

function artyswitch2() {
  document.querySelector(".containerarty2").style.opacity = "1";
  document.querySelector(".containerarty2").style.zIndex = "1";
  
  document.getElementById("rightarrowcolors3").style.display = "none";

  document.querySelector(".containerslow2").style.opacity = "0";
  document.querySelector(".containerslow2").style.zIndex = "-1";

  document.getElementById("rightarrowcolors2").style.display = "block";
}

function minimalswitch2() {
  document.querySelector(".containerminimal").style.opacity = "1";
  document.querySelector(".containerminimal").style.zIndex = "1";

  document.querySelector(".containerarty2").style.zIndex = "-1";

  document.getElementById("rightarrowcolors4").style.display = "block";

  document.querySelector(".containerarty2").style.opacity = "0";

  document.getElementById("rightarrowcolors2").style.display = "none";
}

function designswitch2() {
  document.querySelector(".containerminimal").style.opacity = "0";

  document.querySelector(".containerminimal").style.zIndex = "-1";

  document.getElementById("rightarrowcolors4").style.display = "none";

  document.querySelector(".blockphotodesign").style.opacity = "1";
  document.querySelector(".containerdesignword").style.opacity = "1";
  document.getElementById("rightarrowcolors1").style.display = "block";
}


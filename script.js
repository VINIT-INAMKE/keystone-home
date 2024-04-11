var blur = document.querySelector("#cursor-blur");

document.addEventListener("mousemove", function (dets) {
  blur.style.left = dets.x - 250 + "px";
  blur.style.top = dets.y - 250 + "px";
});

gsap.to("#nav", {
  backgroundColor: "#FFFFF0",
  duration: 0.5,
  height: "100px",
  scrollTrigger: {
    trigger: "#nav",
    scroller: "body",
    // markers:true,
    start: "top -25%",
    end: "top -70%",
    scrub: 1,
  },
});
gsap.to("#main", {
  backgroundColor: "#FFFFF0",
  scrollTrigger: {
    trigger: "#main",
    scroller: "body",
    // markers: true,
    start: "top -25%",
    end: "top -70%",
    scrub: 2,
  },
});
gsap.to(".navA", {
  color: "black",
  duration: 0.5,
  scrollTrigger: {
    trigger: ".navA",
    scroller: "body",
    // markers:true,
    start: "top -25%",
    end: "top -70%",
    scrub: 1,
  },
});

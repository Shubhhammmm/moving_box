let rect = document.getElementById("rect");

rect.addEventListener("mousemove", (details) => {
  // console.log(details.clientX);

  let xval = gsap.utils.mapRange(
    0,
    window.innerWidth,
    100 + rect.getBoundingClientRect().width / 2,
    window.innerWidth - (100 + rect.getBoundingClientRect().width / 2),
    details.clientX
  );

  gsap.to("#rect", {
    left: xval + "px",
    ease: Power3,
  });
});

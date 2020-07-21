var CloudElement = document.getElementById("#cloud");

var animatedElem = CloudElement.animate(
  [{ transform: "translate(0,0)" }, { transform: "translate(550px,0)" }],
  {
    duration: 3000,
    iterations: Infinity,
    playbackRate: -2,
  }
);

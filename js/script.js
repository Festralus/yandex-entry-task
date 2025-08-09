// Support anchor
document
  .getElementById("scroll-to-support")
  .addEventListener("click", function () {
    document
      .getElementById("support-block")
      .scrollIntoView({ behavior: "smooth" });
  });

// Info anchor
document
  .getElementById("scroll-to-info")
  .addEventListener("click", function () {
    document
      .getElementById("info-block")
      .scrollIntoView({ behavior: "smooth" });
  });

// Marquee and screen-reader support
const scrollers = document.querySelectorAll(".marquee");

if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  addAnimation();
}

function addAnimation() {
  scrollers.forEach((scroller) => {
    scroller.setAttribute("data-animated", true);

    const marqueeTrack = document.querySelector(".marquee__track");
    const marqueeContent = Array.from(marqueeTrack.children);

    marqueeContent.forEach((el) => {
      const duplicatedElement = el.cloneNode(true);
      duplicatedElement.setAttribute("aria-hidden", true);
      marqueeTrack.appendChild(duplicatedElement);
    });
  });
}

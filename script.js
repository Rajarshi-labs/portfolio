gsap.registerPlugin(ScrollTrigger);

// Smooth scroll
function scrollToSection() {
  window.scrollTo({
    top: window.innerHeight,
    behavior: "smooth"
  });
}

// Hero animation
gsap.from(".title", {
  y: -100,
  opacity: 0,
  duration: 1
});

gsap.from(".subtitle", {
  y: 50,
  opacity: 0,
  duration: 1,
  delay: 0.5
});

// Scroll animations
gsap.utils.toArray(".section").forEach(section => {
  gsap.from(section, {
    scrollTrigger: section,
    y: 100,
    opacity: 0,
    duration: 1
  });
});

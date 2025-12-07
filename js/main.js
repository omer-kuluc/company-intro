gsap.to(".intro-text", { text: "SKY&SEA STUDIO", ease: "power2.inOut", opacity: 1, duration: 3, ease: "power3.inOut" });


gsap.set(".effect", { autoAlpha: 1 })
let tl = gsap.timeline()
  .from("h1", { scale: 0.01, duration: 3.5, ease: "power4.inOut" }, "+=2.5")
  .to(".blendImage, .bg", { scale: 1, duration: 2 }, "-=1")
  .to(".dark", { opacity: 0, duration: 2 }, ">-=100%")
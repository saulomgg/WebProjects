document.addEventListener("DOMContentLoaded", () => {

    const container = document.querySelector(".particles");

    const particleCount = 50;

    for (let i = 0; i < particleCount; i++) {
        const p = document.createElement("div");
        p.className = "particle";
        container.appendChild(p);

        gsap.to(p, {
            x: () => Math.random() * window.innerWidth,
            y: () => Math.random() * window.innerHeight,
            duration: Math.random() * 10 + 5,
            repeat: -1,
            ease: "none",
            opacity: Math.random()
        });
    }

    gsap.to(".glow", {
        scale: 1.2,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut"
    });

    gsap.to(".grid-lines", {
        backgroundPosition: "+=100 +=100",
        duration: 20,
        repeat: -1,
        ease: "none"
    });

});
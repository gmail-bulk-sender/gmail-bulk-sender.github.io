// GLOBAL BUBBLE SPAWNER – runs on every page automatically
document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("bubble-container");
    if (!container) return;

    const bubbleCount = 14;

    for (let i = 0; i < bubbleCount; i++) {
        const b = document.createElement("div");
        b.className = "bubble";

        const size = 80 + Math.random() * 180;
        const left = Math.random() * 100;
        const delay = Math.random() * 12;
        const duration = 16 + Math.random() * 12;
        const hue = 170 + Math.random() * 40;

        b.style.width = size + "px";
        b.style.height = size + "px";
        b.style.left = left + "vw";
        b.style.bottom = "-260px";
        b.style.background =
            `radial-gradient(circle at 30% 25%, rgba(255,255,255,0.35), hsla(${hue}, 80%, 30%, 0.12))`;
        b.style.animationDuration = duration + "s";
        b.style.animationDelay = delay + "s";

        container.appendChild(b);
    }
});

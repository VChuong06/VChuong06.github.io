window.addEventListener("DOMContentLoaded", () => {

  const bg = document.querySelector(".background");

  if (!bg) {
    console.log("Không tìm thấy background!");
    return;
  }

  document.addEventListener("mousemove", (e) => {
    const x = e.clientX;
    const y = e.clientY;

    bg.style.background = `
      radial-gradient(circle at ${x}px ${y}px,
      rgba(0,255,255,0.25), transparent 25%),
      radial-gradient(circle at 20% 30%, rgba(0,150,255,0.25), transparent 40%),
      radial-gradient(circle at 80% 70%, rgba(255,0,180,0.2), transparent 40%)
    `;
  });

});
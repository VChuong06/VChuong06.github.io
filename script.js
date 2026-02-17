function changeProjects(mode){

  // thoát khỏi home mode nếu đang ở đó
  document.body.classList.remove("home-mode");

  const right = document.getElementById("rightColumn");

  // animation OUT
  right.style.transform = "translateX(120px)";
  right.style.opacity = "0";

  setTimeout(() => {

    let content = "";

    switch(mode){

      case 1:
        content = `
          <div class="box">Robot Car</div>
          <div class="box">ESP32 Matrix</div>
          <div class="box">Drone Project</div>
        `;
        break;

      case 2:
        content = `
          <div class="box">ESP32 Development</div>
          <div class="box">Embedded Linux</div>
          <div class="box">Python & AI</div>
        `;
        break;

      case 3:
        content = `
          <div class="box">Email: phamnguyenvanchuong@gmail.com</div>
          <div class="box">GitHub: VChuong06</div>
          <div class="box">Portfolio Website</div>
        `;
        break;

      case 4:
        content = `
          <div class="box">AI Drone</div>
          <div class="box">Smart Robot</div>
          <div class="box">Vision System</div>
        `;
        break;
    }

    right.innerHTML = content;

    // animation IN
    right.style.transform = "translateX(0)";
    right.style.opacity = "1";

  },300);
}

/* ===== HOME MODE ===== */
function goHome(){

  document.body.classList.add("home-mode");

  const right = document.getElementById("rightColumn");

  right.style.opacity = "0";
}
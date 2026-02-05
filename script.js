const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");

let yesScale = 1;
let noScale = 1;

function moveNoButton() {
  const maxX = window.innerWidth - noBtn.offsetWidth;
  const maxY = window.innerHeight - noBtn.offsetHeight;

  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  noBtn.style.position = "fixed";
  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;

  // YES grows
  yesScale += 0.15;
  yesBtn.style.transform = `scale(${yesScale})`;

  // NO shrinks
  noScale -= 0.15;
  if (noScale < 0.25) noScale = 0.25;
  noBtn.style.transform = `scale(${noScale})`;
}

noBtn.addEventListener("mouseenter", moveNoButton);
noBtn.addEventListener("touchstart", moveNoButton);

yesBtn.addEventListener("click", () => {
  document.body.innerHTML = `
    <div style="
      height:100vh;
      display:flex;
      align-items:center;
      justify-content:center;
      flex-direction:column;
      background:linear-gradient(135deg,#ff9a9e,#fad0c4);
      font-family:Comic Sans MS;
      text-align:center;
    ">
      <h1 style="font-size:3rem;">You said YES 😭💖</h1>
      <p style="font-size:1.5rem;">Good girl.</p>
    </div>
  `;
});

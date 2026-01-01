function updateDotCounter(current, total) {
    document.getElementById("dotCounter").innerText =
      `${current} / ${total}`;
  }
  
  function showWinMessage() {
    const msg = document.createElement("div");
    msg.innerText = "🎉 YOU WON!";
    msg.style.color = "lime";
    msg.style.fontSize = "24px";
    msg.style.textAlign = "center";
  
    document.body.appendChild(msg);
  }
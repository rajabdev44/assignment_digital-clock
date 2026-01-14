function updateClock() {
  const now = new Date();

  let h = now.getHours();
  let m = now.getMinutes();

  const ampm = h >= 12 ? "P.M." : "A.M.";

  h = h % 12 || 12;
  m = m < 10 ? "0" + m : m;

  document.getElementById("time").textContent = `${h}:${m}`;
  document.getElementById("ampm").textContent = ampm;
}

setInterval(updateClock, 1000);
updateClock();

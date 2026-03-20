const emojis = ["🧪", "👾", "🏸", "🐈", "🏋️‍♀️", "😴", "🌊", "💻", "👁️", "🎧", "🍻", "🌻"];

const title = document.getElementById("site-title-link");
const emojiSpan = document.getElementById("emoji");

title.addEventListener("click", () => {
  const emoji = emojis[Math.floor(Math.random() * emojis.length)];
  sessionStorage.setItem("tempEmoji", emoji);
});

const emoji = sessionStorage.getItem("tempEmoji");

if (emojiSpan && emoji) {
  emojiSpan.textContent = " " + emoji;

  setTimeout(() => {
    emojiSpan.textContent = "";
  }, 1000);

  sessionStorage.removeItem("tempEmoji");
}

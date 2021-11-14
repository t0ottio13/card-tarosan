
const toggle = document.getElementById('toggle');
const abebox = document.getElementById('abebox');
abebox.addEventListener('click', () => {
  toggle.innerHTML = "ありがとうございました！！";
  abebox.style.backgroundImage = "none";
});
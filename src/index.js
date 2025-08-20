const text = `Hi, I'm Ludwig — a Frontend Developer 🚀 focused on turning ideas into simple, reliable interfaces. 
I enjoy performance, accessibility and thoughtful design.`;
  let i = 0;

  function typeWriter() {
    if (i < text.length) {
      document.getElementById("typing").innerHTML += text.charAt(i);
      i++;
      setTimeout(typeWriter, 35); // this sets the typing speed
    }
  }
  typeWriter();

const body = document.body;
const btn = document.getElementById('modeToggle');
const YEAR = document.getElementById('year');

YEAR.textContent = new Date().getFullYear();

// Restore last view
const savedView = localStorage.getItem('portfolio:view');
if (savedView) body.setAttribute('data-view', savedView);

function updateButtonLabel(){
  const hm = body.getAttribute('data-view') === 'hm';
  btn.textContent = hm ? 'Human Mode' : 'Hiring Manager Mode';
}
updateButtonLabel();

btn.addEventListener('click', () => {
  const current = body.getAttribute('data-view');
  const next = current === 'hm' ? 'human' : 'hm';
  body.setAttribute('data-view', next);
  localStorage.setItem('portfolio:view', next);
  updateButtonLabel();
});

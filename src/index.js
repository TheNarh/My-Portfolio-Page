const texts = [
    "Hi, I'm Ludwig 👋",
    "Web Developer 💻",
    "Problem Solver 🧩",
    "Mentor & Learner 🚀"
  ];

  let textIndex = 0;
  let charIndex = 0;

  function typeWriter() {
    const typingEl = document.getElementById("typing");

    if (charIndex < texts[textIndex].length) {
      // Create or update the current line
      if (!document.getElementById("line-" + textIndex)) {
        const newLine = document.createElement("div");
        newLine.id = "line-" + textIndex;
        newLine.className = "line";
        typingEl.appendChild(newLine);
      }
      const currentLine = document.getElementById("line-" + textIndex);
      currentLine.textContent = texts[textIndex].substring(0, charIndex + 1);

      charIndex++;
      setTimeout(typeWriter, 100); // typing speed
    } else {
      // Finish this line, remove cursor, add fade effect
      const finishedLine = document.getElementById("line-" + textIndex);
      finishedLine.classList.remove("line");
      finishedLine.classList.add("fade-in");

      // Move to next text
      textIndex++;
      charIndex = 0;

      if (textIndex < texts.length) {
        setTimeout(typeWriter, 600); // pause before new line
      }
    }
  }

  window.onload = typeWriter;

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

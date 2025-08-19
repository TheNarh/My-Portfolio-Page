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

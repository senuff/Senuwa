function demoDownload(event, name){
  event.preventDefault();
  alert(name + " button is ready. Open index.html and replace its href=\"#\" with your real download link.");
}

// SENUWA custom cursor
function initSenuwaCursor(){
  if(window.matchMedia('(max-width: 750px)').matches) return;
  if(document.querySelector('.custom-cursor')) return;

  const cursor = document.createElement('div');
  cursor.className = 'custom-cursor';
  const dot = document.createElement('div');
  dot.className = 'cursor-dot';
  document.body.append(cursor, dot);

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let cursorX = mouseX;
  let cursorY = mouseY;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    dot.style.left = mouseX + 'px';
    dot.style.top = mouseY + 'px';
  }, {passive:true});

  function animateCursor(){
    cursorX += (mouseX - cursorX) * 0.18;
    cursorY += (mouseY - cursorY) * 0.18;
    cursor.style.left = cursorX + 'px';
    cursor.style.top = cursorY + 'px';
    requestAnimationFrame(animateCursor);
  }
  animateCursor();

  document.addEventListener('mouseover', (e) => {
    if(e.target.closest('a,button,.card,.download,.hero-card')){
      document.body.classList.add('cursor-hover');
    }
  });

  document.addEventListener('mouseout', (e) => {
    if(e.target.closest('a,button,.card,.download,.hero-card')){
      document.body.classList.remove('cursor-hover');
    }
  });

  document.addEventListener('mousedown', () => document.body.classList.add('cursor-click'));
  document.addEventListener('mouseup', () => document.body.classList.remove('cursor-click'));
}

document.readyState === 'loading'
  ? document.addEventListener('DOMContentLoaded', initSenuwaCursor)
  : initSenuwaCursor();

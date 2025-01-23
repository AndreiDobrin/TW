document.addEventListener('DOMContentLoaded', shuffleGallery);
document.addEventListener('DOMContentLoaded', createButton);
function shuffleGallery() {
    const gallery = document.getElementById('imageGallery');
    const containers = Array.from(gallery.children);
    
    // Fisher-Yates shuffle algorithm
    for (let i = containers.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      gallery.appendChild(containers[j]);
    }
  }

function createButton(){
    const butonshuffle = document.createElement('button');
    butonshuffle.textContent = 'Shuffle';
    butonshuffle.className = 'buttons';
    butonshuffle.style.background = 'blue'
    butonshuffle.style.marginLeft = '20px';

    const referinta = document.getElementById('dropdown');
  
    referinta.insertAdjacentElement('afterend', butonshuffle);

    butonshuffle.addEventListener('click', shuffleGallery);
}
window.onload = function(){
  
      const viewarray = ['1', '2', '3', '4', '5']

      viewarray.forEach((buton) => {
        document.getElementById(`view${buton}`).addEventListener('click', () => window.location.href = `view${buton}.html`)
      });
}
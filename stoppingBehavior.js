// Do not change
document.getElementById('cat').addEventListener('click', () => {
  alert('meow!');
});

// When clicked, "More info" link should alert "Here's some info"
// instead of going to a new webpage

const infoBtn = document.querySelector('#more-info')
infoBtn.addEventListener('click', (e) => {
  e.preventDefault();
  alert(`Here's some more info`)
})

// When the bark button is clicked, should alert "Bow wow!"
// Should *not* alert "meow"
const barkBtn = document.querySelector('#dog')
barkBtn.addEventListener('click', (e) => {
  alert('Bow wow!');
  e.stopPropagation();
})

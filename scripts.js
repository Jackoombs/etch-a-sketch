function createGrid(size) {
  for (i = 0; i < size*size; i ++) {
    let square = document.createElement('div')
    square.classList.add('square')
    grid.appendChild(square)
    let gridGap = 20 / Math.sqrt(size)
    square.style.cssText = `height: ${(800-((size-1)*gridGap))/size}px; 
                            width: ${(800-((size-1)*gridGap))/size}px`
    grid.style.cssText = `grid-template-columns: repeat(${size}, 1fr); 
                                grid-template-rows: repeat(${size}, 1fr);
                                grid-gap: ${gridGap}px`
  square.setAttribute('data-shade', 0)
  }
}

function initEtch() {
  const squares = document.querySelectorAll('.square')
  squares.forEach(square => square.addEventListener('mouseover', () =>{
    square.dataset.shade = +square.dataset.shade + 20;
    console.log(typeof +square.dataset.shade)
    square.setAttribute('style', `background-color: hsl(0, 0%, ${square.dataset.shade}%);`)
  }));
}

function reset() {
  const squares = document.querySelectorAll('.square')
  squares.forEach (square => {
    square.style.cssText = 'background-color: blue;'
  })
  grid.innerHTML = '';
  let userSize = 101
  while (userSize > 100) {
    userSize = prompt('What size grid would you like?')
    console.log(userSize)
  }
  createGrid(userSize)
  initEtch()
}

const grid = document.querySelector('.grid')
const body = document.querySelector('body')

createGrid(16)
initEtch()

const button = document.createElement('button')
button.textContent = 'RESET'
body.appendChild(button)
button.addEventListener('click', reset)




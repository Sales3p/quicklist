const footer = document.getElementById("footer");
const closeBtn = document.getElementById("delete-item-btn");

function addItem() {
  let inputInner = document.getElementById('new-item-box').value

  // Verifica se há algo no campo de input
  if (inputInner.trim() === '') return;

  // Cria um novo item na lista
  let li = document.createElement('li')
  li.innerHTML = inputInner + '<input type="radio" id="delete" onClick="delet(this)">'  

  document.querySelector('ul').appendChild(li)
  
  // Limpa o campo de input
  document.getElementById('new-item-box').value = ''
}

function delet(radioBtn) {
  // Remove o item da lista
  radioBtn.parentElement.remove()

  // Mostra o footer
  footer.classList.remove('none');
  footer.classList.add('show');
}

closeBtn.addEventListener('click', () => {
  // Oculta o footer ao clicar no X
  footer.classList.remove("show");
  footer.classList.add("none");
})

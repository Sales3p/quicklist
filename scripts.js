// new-item-box = produto

let buyList = document.querySelector("ul")
let newItemBox = document.querySelector("#new-item-box")
let btn = document.querySelector("#btn")
let del = document.querySelector("#delete")

btn.addEventListener("click", function(event) {
  event.preventDefault()
  let item = '<li class="list-inner"><input type="checkbox" name="mark" id="mark"><p>' + newItemBox.value + '</p><input type="button" id="delete"></li>'
  buyList.innerHTML += item
  newItemBox.value = ''
  newItemBox.focus()
})

del.addEventListener('click', function(esc){
  esc.preventDefault()
  removeEventListener(item)
})
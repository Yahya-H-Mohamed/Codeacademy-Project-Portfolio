const highlightText = document.getElementsByClassName("hover")

function unhide(event){
  event.target.style.opacity = "1"
}

highlightText.addEventListener("click", unhide)
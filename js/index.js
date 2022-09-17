
function divland() {
    let div_count = parseInt(document.getElementById("div_count").value);
    let person = ['raihen','luikang']
    for (x = 1; x <= div_count; x++) {
      var boardik = document.createElement("div");
      boardik.innerHTML = x;
      boardik.className = "blah";
      boardik.classList.add("a"+x)
      boardik.setAttribute("onclick", "none(this)");
      document.getElementById("board").appendChild(boardik);
    }
  }

function none(e){
    e.style.background = "purple"
    e.classList.add("div_border")
}




